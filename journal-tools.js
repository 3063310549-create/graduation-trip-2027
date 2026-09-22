(function () {
  "use strict";

  const data = window.TravelData;
  const root = document.querySelector("[data-trip-id]");
  if (!data || !root) return;

  const tripId = root.dataset.tripId;
  const record = data.trips.find((item) => item.trip.id === tripId);
  if (!record) {
    root.innerHTML = '<p class="empty-state">这段行程的数据暂时无法读取。</p>';
    return;
  }

  const html = String.raw;
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const show = (value, fallback = "待确认") => value === null || value === undefined || value === "" ? fallback : escapeHtml(value);
  const storageKey = (kind) => `graduation-trip-2027:${tripId}:${kind}`;
  const readState = (kind) => {
    try { return JSON.parse(localStorage.getItem(storageKey(kind)) || "{}"); }
    catch (_) { return {}; }
  };
  const saveState = (kind, state) => {
    try { localStorage.setItem(storageKey(kind), JSON.stringify(state)); }
    catch (_) { /* The page still works when storage is unavailable. */ }
  };

  const bookingGroups = [
    ["flights", "✈️", "机票"], ["trains", "🚄", "火车"], ["hotels", "🏨", "酒店"],
    ["cars", "🚗", "租车"], ["tickets", "🎫", "景点门票"], ["activities", "🧗", "活动 / 项目"]
  ];
  const statusMap = {
    planned: ["计划中", "planned"], ticketed: ["已出票", "confirmed"], confirmed: ["已确认", "confirmed"],
    booked: ["已预订", "confirmed"], pending: ["待确认", "pending"], cancelled: ["已取消", "cancelled"]
  };

  const allBookings = Object.values(record.bookings).flat();
  const bookingsById = Object.fromEntries(allBookings.map((item) => [item.id, item]));
  const dateParts = (iso) => {
    if (!iso) return { short: "日期待确认", weekday: "" };
    const [year, month, day] = iso.split("-").map(Number);
    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return { short: `${month}月${day}日`, weekday: weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()] };
  };
  const nightsBetween = (start, end) => {
    if (!start || !end) return null;
    return Math.max(0, Math.round((new Date(end) - new Date(start)) / 86400000));
  };
  const statusBadge = (status) => {
    const [label, className] = statusMap[status] || ["待确认", "pending"];
    return `<span class="status-badge status-${className}">${label}</span>`;
  };
  const fact = (label, value, fallback = "待确认") => html`<div class="info-pair"><dt>${escapeHtml(label)}</dt><dd>${show(value, fallback)}</dd></div>`;
  const compactFacts = (items) => `<dl class="info-grid">${items.join("")}</dl>`;

  function resolveTimelineItem(item) {
    if (!item.bookingId) return item;
    const booking = bookingsById[item.bookingId] || {};
    const endpoint = booking[item.endpoint] || {};
    return {
      place: endpoint.place,
      time: endpoint.time,
      detail: item.detail || booking.number || booking.airline,
      leg: item.leg || (item.showDuration ? booking.duration : "")
    };
  }

  function routeStops() {
    if (record.trip.overviewRefs?.length) {
      return record.trip.overviewRefs.map(([dayNumber, stopIndex]) => {
        const day = record.itinerary.find((item) => item.day === dayNumber);
        const stop = day?.timeline?.[stopIndex];
        return stop ? resolveTimelineItem(stop).place : null;
      }).filter(Boolean);
    }
    return record.itinerary.flatMap((day) => day.timeline || []).map(resolveTimelineItem).map((item) => item.place).filter(Boolean)
      .filter((place, index, list) => index === 0 || place !== list[index - 1]);
  }

  function renderOverview() {
    const stops = routeStops();
    const plannedCount = allBookings.filter((item) => item.status === "planned" || item.status === "pending").length;
    return html`
      <section class="tab-panel is-active" data-panel="overview" aria-labelledby="tab-overview">
        <div class="section-heading"><p class="eyebrow">行程总览</p><h2>${escapeHtml(record.trip.title)}</h2></div>
        <article class="paper-card route-card">
          <h3>路线</h3>
          ${stops.length ? `<ol class="route-chain">${stops.map((stop) => `<li>${escapeHtml(stop)}</li>`).join("")}</ol>` : `<p class="empty-copy">路线和停靠点待确认。</p>`}
        </article>
        <div class="summary-grid">
          <article class="mini-card"><span>行程</span><strong>${record.itinerary.length ? `${record.itinerary.length} 天` : "待确认"}</strong></article>
          <article class="mini-card"><span>预订计划</span><strong>${plannedCount} 项</strong></article>
          <article class="mini-card"><span>待办</span><strong>${record.todos.length} 项</strong></article>
        </div>
        <article class="paper-card overview-note">
          <h3>当前计划</h3>
          <p>${escapeHtml(record.trip.description)}</p>
          ${record.trip.note ? `<p>${escapeHtml(record.trip.note)}</p>` : ""}
          ${record.trip.connectionNote ? `<p class="soft-note">${escapeHtml(record.trip.connectionNote)}</p>` : ""}
        </article>
      </section>`;
  }

  function bookingCard(type, item) {
    if (type === "flights") {
      return html`<article class="booking-card">
        <header><div><span class="booking-code">${show(item.number)}</span><p>${show(item.airline, "航空公司待确认")} · ${dateParts(item.date).short}</p></div>${statusBadge(item.status)}</header>
        <div class="booking-route"><div><strong>${show(item.departure?.time, "时间待确认")}</strong><span>${show(item.departure?.place)}</span></div><div class="route-duration"><span>✈</span><small>${show(item.duration, "时长待确认")}</small></div><div class="align-right"><strong>${show(item.arrival?.time, "时间待确认")}</strong><span>${show(item.arrival?.place)}</span></div></div>
        ${compactFacts([fact("出发航站楼", item.departure?.terminal), fact("到达航站楼", item.arrival?.terminal), fact("托运行李", item.baggage), fact("值机提醒", item.checkInReminder)])}
        ${item.notes ? `<p class="card-note">${escapeHtml(item.notes)}</p>` : ""}
      </article>`;
    }
    if (type === "trains") {
      return html`<article class="booking-card"><header><div><span class="booking-code">${show(item.number, "车次待确认")}</span><p>${dateParts(item.date).short}</p></div>${statusBadge(item.status)}</header>
        <div class="booking-route"><div><strong>${show(item.departure?.time, "时间待确认")}</strong><span>${show(item.departure?.place)}</span></div><div class="route-duration"><span>🚄</span><small>${show(item.duration, "时长待确认")}</small></div><div class="align-right"><strong>${show(item.arrival?.time, "时间待确认")}</strong><span>${show(item.arrival?.place)}</span></div></div>
        ${compactFacts([fact("座席", item.seat), fact("票价", item.price)])}${item.notes ? `<p class="card-note">${escapeHtml(item.notes)}</p>` : ""}</article>`;
    }
    if (type === "hotels") {
      const nights = nightsBetween(item.checkInDate, item.checkOutDate);
      return html`<article class="booking-card"><header><div><span class="booking-code">${show(item.name, item.city || "酒店待确认")}</span><p>${show(item.city, "城市待确认")}</p></div>${statusBadge(item.status)}</header>
        ${compactFacts([fact("入住", dateParts(item.checkInDate).short), fact("退房", dateParts(item.checkOutDate).short), fact("晚数", nights === null ? null : `${nights}晚`), fact("地址", item.address), fact("入住时间", item.checkInTime), fact("退房时间", item.checkOutTime), fact("价格", item.price)])}
        ${item.notes ? `<p class="card-note">${escapeHtml(item.notes)}</p>` : ""}</article>`;
    }
    if (type === "cars") {
      return html`<article class="booking-card"><header><div><span class="booking-code">${show(item.model, "普通 SUV，车型待定")}</span><p>${dateParts(item.pickupDate).short}—${dateParts(item.returnDate).short}</p></div>${statusBadge(item.status)}</header>
        ${compactFacts([fact("取车地点", item.pickupLocation), fact("还车地点", item.returnLocation), fact("取车时间", item.pickupTime), fact("还车时间", item.returnTime), fact("租期", item.duration), fact("价格", item.price)])}
        ${item.notes ? `<p class="card-note">${escapeHtml(item.notes)}</p>` : ""}</article>`;
    }
    const name = item.name || item.title || item.place;
    return html`<article class="booking-card"><header><div><span class="booking-code">${show(name)}</span><p>${dateParts(item.date).short}</p></div>${statusBadge(item.status)}</header>
      ${compactFacts([fact("人数", item.people), fact("票价", item.price), fact("预约时间", item.reservationTime), fact("使用规则", item.rules)])}
      ${item.notes ? `<p class="card-note">${escapeHtml(item.notes)}</p>` : ""}</article>`;
  }

  function renderBookings() {
    const sections = bookingGroups.map(([key, icon, label]) => {
      const items = record.bookings[key] || [];
      return html`<section class="booking-group"><div class="group-title"><span>${icon}</span><h3>${label}</h3><small>${items.length} 项</small></div>
        ${items.length ? `<div class="booking-list">${items.map((item) => bookingCard(key, item)).join("")}</div>` : `<div class="inline-empty">暂无${label}信息</div>`}</section>`;
    }).join("");
    return html`<section class="tab-panel" data-panel="bookings" aria-labelledby="tab-bookings"><div class="section-heading"><p class="eyebrow">预订</p><h2>已确认与计划中的预订</h2><p>“计划中”表示尚未出票或预订。</p></div>${sections}</section>`;
  }

  function detailsList(title, values) {
    if (!values?.length) return "";
    return `<div class="detail-block"><h4>${escapeHtml(title)}</h4><ul>${values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul></div>`;
  }

  function renderTimeline(day) {
    if (!day.timeline?.length) return `<p class="empty-copy">当天时间轴待补充。</p>`;
    return `<ol class="day-timeline">${day.timeline.map((raw) => {
      const item = resolveTimelineItem(raw);
      return html`<li><span class="timeline-time">${show(item.time, "时间待定")}</span><div><strong>${show(item.place, "地点待定")}</strong>${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}${item.leg ? `<small>${escapeHtml(item.leg)}</small>` : ""}</div></li>`;
    }).join("")}</ol>`;
  }

  function renderItinerary() {
    const cards = record.itinerary.map((day, index) => {
      const date = dateParts(day.date);
      return html`<article class="day-accordion ${index === 0 ? "is-open" : ""}">
        <button class="day-toggle" type="button" aria-expanded="${index === 0}" aria-controls="day-detail-${tripId}-${day.day}">
          <span class="day-pill">D${day.day}</span><span class="day-summary"><small>${date.short} ${date.weekday} · 住 ${show(day.accommodation?.area)}</small><strong>${escapeHtml(day.title)}</strong><span>${show(day.transport, "交通待确认")}${day.duration ? ` · ${escapeHtml(day.duration)}` : ""}${day.distance ? ` · ${escapeHtml(day.distance)}` : ""}</span></span><span class="chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="day-detail" id="day-detail-${tripId}-${day.day}" ${index === 0 ? "" : "hidden"}>
          ${renderTimeline(day)}
          ${day.description ? `<p class="day-description">${escapeHtml(day.description)}</p>` : ""}
          <div class="day-meta">${compactFacts([fact("住宿", day.accommodation?.area), fact("交通", day.transport), fact("预计里程", day.distance), fact("预计用时", day.duration)])}</div>
          <div class="detail-grid">${detailsList("景点", day.sights)}${detailsList("餐饮建议", day.food)}${detailsList("预约事项", day.reservations)}${detailsList("注意事项", day.notes)}${detailsList("天气 / 穿衣", day.weatherClothing)}</div>
        </div>
      </article>`;
    }).join("");
    return html`<section class="tab-panel" data-panel="daily" aria-labelledby="tab-daily"><div class="section-heading"><p class="eyebrow">逐日</p><h2>逐日行程</h2><p>点开任意一天查看时间轴、住宿与交通。</p></div>${cards ? `<div class="daily-list">${cards}</div>` : `<div class="paper-card empty-state"><strong>逐日计划待补充</strong><p>日期、路线和住宿确认后，可直接加入统一数据文件。</p></div>`}</section>`;
  }

  function renderTodos() {
    const state = readState("todos");
    const items = record.todos.map((todo) => {
      const checked = state[todo.id] ?? todo.completed;
      return html`<label class="check-row ${checked ? "is-checked" : ""}"><input type="checkbox" data-state-kind="todos" data-state-id="${escapeHtml(todo.id)}" ${checked ? "checked" : ""}><span class="custom-check" aria-hidden="true"></span><span class="check-copy"><strong>${escapeHtml(todo.title)}</strong>${todo.description ? `<p>${escapeHtml(todo.description)}</p>` : ""}<small>${show(todo.deadlineLabel || todo.deadline, "截止时间待确认")} · ${todo.priority === "high" ? "优先" : todo.priority === "low" ? "可稍后" : "普通"}</small></span></label>`;
    }).join("");
    return html`<section class="tab-panel" data-panel="todos" aria-labelledby="tab-todos"><div class="section-heading count-heading"><div><p class="eyebrow">出发前</p><h2>待办</h2></div><strong data-count="todos">已完成 0 / ${record.todos.length}</strong></div><div class="paper-card checklist">${items || `<p class="empty-copy">暂无待办。</p>`}</div></section>`;
  }

  function renderPacking() {
    const state = readState("packing");
    const groups = record.packingList.map((group) => {
      const items = group.items.map((item) => {
        const id = `${group.id}:${item.id}`;
        const checked = state[id] ?? item.packed;
        return html`<label class="packing-row ${checked ? "is-checked" : ""}"><input type="checkbox" data-state-kind="packing" data-state-id="${escapeHtml(id)}" ${checked ? "checked" : ""}><span class="custom-check" aria-hidden="true"></span><span><strong>${escapeHtml(item.name)}</strong>${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}</span><em>×${escapeHtml(item.quantity)}</em></label>`;
      }).join("");
      return html`<section class="packing-group"><div class="group-title"><span>${escapeHtml(group.icon)}</span><h3>${escapeHtml(group.title)}</h3><small data-category-count="${escapeHtml(group.id)}">0 / ${group.items.length}</small></div><div class="packing-items">${items}</div></section>`;
    }).join("");
    const total = record.packingList.reduce((sum, group) => sum + group.items.length, 0);
    return html`<section class="tab-panel" data-panel="packing" aria-labelledby="tab-packing"><div class="section-heading count-heading"><div><p class="eyebrow">行李</p><h2>行李清单</h2></div><strong data-count="packing">已收 0 / ${total} 件</strong></div>${groups}</section>`;
  }

  function renderTips() {
    const cards = record.tips.map((tip) => html`<article class="tip-card"><span aria-hidden="true">${escapeHtml(tip.icon)}</span><div><h3>${escapeHtml(tip.title)}</h3><p>${escapeHtml(tip.content)}</p></div></article>`).join("");
    return html`<section class="tab-panel" data-panel="tips" aria-labelledby="tab-tips"><div class="section-heading"><p class="eyebrow">随时查</p><h2>实用贴士</h2></div><div class="tips-grid">${cards || `<p class="empty-copy">贴士待补充。</p>`}</div></section>`;
  }

  root.innerHTML = renderOverview() + renderBookings() + renderItinerary() + renderTodos() + renderPacking() + renderTips();
  root.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.id = `panel-${panel.dataset.panel}`;
  });

  const tabs = [...document.querySelectorAll("[data-tab]")];
  const panels = [...root.querySelectorAll("[data-panel]")];
  function activateTab(id, updateHash = true) {
    const selected = tabs.some((tab) => tab.dataset.tab === id) ? id : "overview";
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === selected;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.panel === selected;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
    if (updateHash) history.replaceState(null, "", `#${selected}`);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
    tab.addEventListener("keydown", (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : index + (event.key === 'ArrowRight' ? 1 : -1);
      next = (next + tabs.length) % tabs.length;
      tabs[next].focus(); tabs[next].click();
    });
  });

  root.addEventListener("click", (event) => {
    const toggle = event.target.closest(".day-toggle");
    if (!toggle) return;
    const card = toggle.closest(".day-accordion");
    const detail = card.querySelector(".day-detail");
    const opening = !card.classList.contains("is-open");
    card.classList.toggle("is-open", opening);
    toggle.setAttribute("aria-expanded", String(opening));
    detail.hidden = !opening;
  });

  function updateCounts() {
    const todoInputs = [...root.querySelectorAll('input[data-state-kind="todos"]')];
    const packingInputs = [...root.querySelectorAll('input[data-state-kind="packing"]')];
    const todoCount = root.querySelector('[data-count="todos"]');
    const packingCount = root.querySelector('[data-count="packing"]');
    if (todoCount) todoCount.textContent = `已完成 ${todoInputs.filter((input) => input.checked).length} / ${todoInputs.length}`;
    if (packingCount) packingCount.textContent = `已收 ${packingInputs.filter((input) => input.checked).length} / ${packingInputs.length} 件`;
    record.packingList.forEach((group) => {
      const groupInputs = packingInputs.filter((input) => input.dataset.stateId.startsWith(`${group.id}:`));
      const output = root.querySelector(`[data-category-count="${CSS.escape(group.id)}"]`);
      if (output) output.textContent = `${groupInputs.filter((input) => input.checked).length} / ${groupInputs.length}`;
    });
  }
  root.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-state-kind]");
    if (!input) return;
    const state = readState(input.dataset.stateKind);
    state[input.dataset.stateId] = input.checked;
    saveState(input.dataset.stateKind, state);
    input.closest("label")?.classList.toggle("is-checked", input.checked);
    updateCounts();
  });

  updateCounts();
  activateTab(location.hash.slice(1), false);
})();

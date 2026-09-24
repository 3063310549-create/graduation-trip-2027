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
    const overviewRoute = record.trip.overviewRoute;
    const routeMarkup = overviewRoute?.main?.length ? html`
      <p class="route-caption">跨城转场与留宿地点；札幌出发的当天往返安排列在下方。</p>
      <ol class="route-mainline">${overviewRoute.main.map((stop) => html`
        <li><span class="route-day">${escapeHtml(stop.days)}</span><div class="route-place"><strong>${escapeHtml(stop.place)}</strong><small>${escapeHtml(stop.detail)}</small></div></li>
      `).join("")}</ol>
      ${overviewRoute.excursions?.length ? `<div class="route-aside"><h4>札幌出发 · 当天往返</h4><div class="route-aside-grid">${overviewRoute.excursions.map((item) => html`<div class="route-aside-item"><span>${escapeHtml(item.days)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>`).join("")}</div></div>` : ""}
      ${overviewRoute.options?.length ? `<div class="route-aside route-options"><h4>看条件再决定</h4><div class="route-aside-grid">${overviewRoute.options.map((item) => html`<div class="route-aside-item"><span>${escapeHtml(item.days)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>`).join("")}</div></div>` : ""}
    ` : (stops.length ? `<ol class="route-chain">${stops.map((stop) => `<li>${escapeHtml(stop)}</li>`).join("")}</ol>` : `<p class="empty-copy">路线和停靠点待确认。</p>`);
    const plannedCount = allBookings.filter((item) => item.status === "planned" || item.status === "pending").length;
    return html`
      <section class="tab-panel is-active" data-panel="overview" aria-labelledby="tab-overview">
        <div class="section-heading"><p class="eyebrow">行程总览</p><h2>${escapeHtml(record.trip.title)}</h2></div>
        <article class="paper-card route-card">
          <h3>${overviewRoute ? "住宿主线" : "路线"}</h3>
          ${routeMarkup}
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
      const nights = item.nights ?? nightsBetween(item.checkInDate, item.checkOutDate);
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

  // Map locations live with their timeline stop, so the map and written route share one order.
  function mapPointsForDay(day) {
    return (day.timeline || []).flatMap((stop) => stop.mapPoints || []).filter((point) =>
      point && point.name && Number.isFinite(point.lat) && Number.isFinite(point.lng) &&
      Math.abs(point.lat) <= 90 && Math.abs(point.lng) <= 180
    );
  }

  const dayMapPoints = new Map(record.itinerary.map((day) => [String(day.day), mapPointsForDay(day)]));

  function renderDayMap(day) {
    const points = dayMapPoints.get(String(day.day));
    if (!points?.length) return "";
    return html`<section class="day-map-panel" data-map-day="${escapeHtml(day.day)}" aria-label="D${escapeHtml(day.day)} 地点地图">
      <div class="day-map-heading"><div><span class="eyebrow">地点地图</span><h3>当天途经地点</h3></div><small>点按标记查看地点</small></div>
      <div class="day-map-canvas" data-day-map role="region" aria-label="当天途经地点示意地图，地点顺序见下方列表"></div>
      <p class="day-map-status" data-map-status aria-live="polite">展开后加载地图。</p>
      <ol class="day-map-points">${points.map((point, index) => html`<li class="${point.optional ? "is-optional" : ""}"><span>${index + 1}</span>${escapeHtml(point.name)}${point.optional ? " <small>可选</small>" : ""}</li>`).join("")}</ol>
      <p class="day-map-note">游览顺序示意，直线非导航路线；实际交通以当天导航为准。${points.some((point) => point.optional) ? "空心标记为可选地点，不参与连线。" : ""}<span data-overlap-note hidden>相近标记会稍作错位，细线指向实际位置。</span></p>
    </section>`;
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
          ${renderDayMap(day)}
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
  const mapInstances = new WeakMap();
  let leafletAssetsPromise;

  function loadLeafletAssets() {
    if (!leafletAssetsPromise) {
      const stylesheet = new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./vendor/leaflet/leaflet.css";
        link.onload = resolve;
        link.onerror = () => reject(new Error("Leaflet stylesheet failed to load"));
        document.head.appendChild(link);
      });
      const script = new Promise((resolve, reject) => {
        const element = document.createElement("script");
        element.src = "./vendor/leaflet/leaflet.js";
        element.onload = resolve;
        element.onerror = () => reject(new Error("Leaflet script failed to load"));
        document.head.appendChild(element);
      });
      leafletAssetsPromise = Promise.all([stylesheet, script]).then(() => {
        if (!window.L?.map) throw new Error("Leaflet is unavailable");
        return window.L;
      });
    }
    return leafletAssetsPromise;
  }

  async function initDayMap(panel) {
    const canvas = panel.querySelector("[data-day-map]");
    if (!canvas || canvas.dataset.mapLoading === "true") return;
    const existing = mapInstances.get(canvas);
    if (existing) {
      requestAnimationFrame(() => existing.invalidateSize());
      return;
    }
    canvas.dataset.mapLoading = "true";
    const status = panel.querySelector("[data-map-status]");
    status.textContent = "地图加载中…";
    let map;
    try {
      const L = await loadLeafletAssets();
      // A user may have closed the card or switched tabs while the assets loaded.
      if (!canvas.isConnected || canvas.closest(".day-detail")?.hidden || canvas.closest(".tab-panel")?.hidden) return;
      const points = dayMapPoints.get(panel.dataset.mapDay);
      if (!points?.length) return;
      const isTouch = matchMedia("(pointer: coarse)").matches;
      map = L.map(canvas, {
        scrollWheelZoom: false,
        dragging: !isTouch,
        touchZoom: !isTouch,
        doubleClickZoom: !isTouch,
        boxZoom: !isTouch,
        keyboard: true
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
      }).addTo(map);
      const positions = points.map((point) => [point.lat, point.lng]);
      const mainPositions = points.filter((point) => !point.optional).map((point) => [point.lat, point.lng]);
      if (mainPositions.length > 1) L.polyline(mainPositions, { color: "#7a1f34", weight: 3, opacity: .8, dashArray: "6 7" }).addTo(map);
      const markers = points.map((point, index) => {
        const icon = L.divIcon({
          className: "day-map-pin-shell",
          html: `<span class="day-map-pin ${point.optional ? "is-optional" : ""}">${index + 1}</span>`,
          iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -18]
        });
        return L.marker([point.lat, point.lng], { icon, title: point.name })
          .bindPopup(`<strong>${escapeHtml(point.name)}</strong>${point.optional ? "<small>可选地点</small>" : ""}`, { maxWidth: 200 })
          .addTo(map);
      });
      if (positions.length === 1) map.setView(positions[0], 14);
      else map.fitBounds(L.latLngBounds(positions), { padding: [34, 34], maxZoom: 14 });
      const overlapGuides = L.layerGroup().addTo(map);
      const overlapNote = panel.querySelector("[data-overlap-note]");
      function separateNearbyPins() {
        overlapGuides.clearLayers();
        const pixels = positions.map((position) => map.latLngToContainerPoint(position));
        const shifts = positions.map(() => null);
        // Keep the coordinates exact; only the clickable badges move when two are too close on screen.
        for (let first = 0; first < pixels.length; first++) {
          if (shifts[first]) continue;
          for (let second = first + 1; second < pixels.length; second++) {
            if (shifts[second]) continue;
            const dx = pixels[second].x - pixels[first].x;
            const dy = pixels[second].y - pixels[first].y;
            const distance = Math.hypot(dx, dy);
            if (distance >= 40) continue;
            const sidewaysX = distance ? -dy / distance : 1;
            const sidewaysY = distance ? dx / distance : 0;
            shifts[first] = L.point(-22 * sidewaysX, -22 * sidewaysY);
            shifts[second] = L.point(22 * sidewaysX, 22 * sidewaysY);
            break;
          }
        }
        shifts.forEach((shift, index) => {
          if (!shift) {
            markers[index].setLatLng(positions[index]);
            return;
          }
          const displayPosition = map.containerPointToLatLng(pixels[index].add(shift));
          markers[index].setLatLng(displayPosition);
          L.polyline([positions[index], displayPosition], { color: "#7a1f34", weight: 1.5, opacity: .75, interactive: false }).addTo(overlapGuides);
          L.circleMarker(positions[index], { radius: 3, color: "#7a1f34", fillColor: "#7a1f34", fillOpacity: 1, weight: 1, interactive: false }).addTo(overlapGuides);
        });
        overlapNote.hidden = !shifts.some(Boolean);
      }
      map.on("zoomend moveend resize", separateNearbyPins);
      mapInstances.set(canvas, map);
      status.hidden = true;
      requestAnimationFrame(() => { map.invalidateSize(); separateNearbyPins(); });
    } catch (_) {
      if (map) map.remove();
      status.textContent = "地图暂时无法加载，下方仍可查看地点顺序。";
    } finally {
      delete canvas.dataset.mapLoading;
    }
  }

  function refreshVisibleMaps() {
    if (root.querySelector('[data-panel="daily"]')?.hidden) return;
    root.querySelectorAll(".day-accordion.is-open .day-map-panel").forEach(initDayMap);
  }

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
    if (selected === "daily") requestAnimationFrame(refreshVisibleMaps);
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
    if (opening) {
      const mapPanel = detail.querySelector(".day-map-panel");
      if (mapPanel) requestAnimationFrame(() => initDayMap(mapPanel));
    }
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

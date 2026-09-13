const cards=document.querySelectorAll('.trip-card');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');observer.unobserve(entry.target)}}),{threshold:.12});
  cards.forEach(card=>observer.observe(card));
}else{cards.forEach(card=>card.classList.add('seen'))}

const dialog=document.querySelector('#detailDialog');
const dialogTitle=document.querySelector('#dialogTitle');
const dialogDate=document.querySelector('#dialogDate');
document.querySelectorAll('.detail-btn').forEach(button=>{
  button.addEventListener('click',()=>{
    dialogTitle.textContent=button.dataset.title;
    dialogDate.textContent=button.dataset.date;
    const plan = januaryPlans[button.dataset.plan];
    const tableArea = document.querySelector('#dailyPlan');
    document.querySelector('.detail-grid').hidden = !!plan;
    document.querySelector('.coming-soon').hidden = !!plan;
    dialog.classList.toggle('has-plan', !!plan);
    tableArea.replaceChildren();
    tableArea.hidden = !plan;
    if (plan) {
      const hint=document.createElement('p');
      hint.className='plan-hint';
      hint.textContent='空白项尚未确定。手机可左右滑动表格查看全部栏目。';
      const wrap=document.createElement('div');
      wrap.className='plan-wrap'; wrap.tabIndex=0; wrap.setAttribute('role','region'); wrap.setAttribute('aria-label',plan.title+'每日行程表');
      const table=document.createElement('table'); table.className='plan-table';
      const caption=table.createCaption(); caption.textContent=plan.dates;
      const head=table.createTHead().insertRow();
      ['日期','每日行程','景色','住宿','出行','吃什么'].forEach(label=>{const th=document.createElement('th');th.scope='col';th.textContent=label;head.append(th)});
      const body=table.createTBody();
      plan.rows.forEach((row,index)=>{const tr=body.insertRow();row.forEach((value,col)=>{const cell=document.createElement(col===0?'th':'td');if(col===0)cell.scope='row';cell.textContent=col===0?'D'+(index+1)+' · '+value:value;tr.append(cell)})});
      wrap.append(table);
      const note=document.createElement('p');note.className='plan-note';note.textContent=plan.note;
      tableArea.append(note,hint,wrap);
      const extras=document.createElement('div'); extras.className='plan-extras';
      (plan.sections || []).forEach(section=>{
        const box=document.createElement('section');
        const heading=document.createElement('h3'); heading.textContent=section.title;
        const list=document.createElement('ul');
        section.items.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.append(li)});
        box.append(heading,list);extras.append(box);
      });
      const sources=document.createElement('details'); sources.className='plan-sources';
      const summary=document.createElement('summary'); summary.textContent='官方资料与出发前复核入口';
      const sourceList=document.createElement('ul');
      (plan.sources || []).forEach(([label,url,description])=>{
        const li=document.createElement('li');const link=document.createElement('a');
        link.href=url;link.textContent=label;link.target='_blank';link.rel='noopener noreferrer';
        li.append(link,document.createTextNode(' — '+description));sourceList.append(li);
      });
      sources.append(summary,sourceList);extras.append(sources);tableArea.append(extras);
    }
    dialog.showModal();
    dialog.scrollTop=0;
  });
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
  const box=dialog.getBoundingClientRect();
  const outside=event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom;
  if(outside)dialog.close();
});

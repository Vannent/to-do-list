(()=>{"use strict";const e=()=>{document.querySelector("#content").appendChild((()=>{const e=document.createElement("div");e.className="sidebar";const t=document.createElement("button");t.className="sidebar-buttons",t.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg> Home';const n=document.createElement("button");n.className="sidebar-buttons",n.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z" /></svg> Tasks';const a=document.createElement("button");a.className="sidebar-buttons",a.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z" /></svg> Projects';const c=document.createElement("button");c.className="sidebar-buttons",c.id="sidebar-space",c.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg> Settings';const d=document.createElement("button");return d.className="sidebar-buttons",d.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" /></svg> Log Out',d.addEventListener("click",(e=>{})),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(c),e.appendChild(d),e})())};let t=!0;const n=()=>{const n=document.querySelector(".main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.className="greet";const a=document.createElement("div");a.className="greeting",a.innerHTML="Welcome <b>"+localStorage.getItem("username")+"</b>.";const c=document.createElement("button");return c.className="greeting-button",c.textContent="Proceed",c.addEventListener("click",(n=>{(()=>{const n=document.querySelector(".main");n.textContent="",n.appendChild((()=>{const n=document.createElement("header"),a=document.createElement("div");a.className="leftside-header";const c=document.createElement("button");c.className="sidebar-buttons",c.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>\n        ',c.addEventListener("click",(n=>{if(1==t){let e=document.querySelector("#content");e.removeChild(e.lastChild),t=!1}else{if(0!=t)return;e(),t=!0}}));const d=document.createElement("p");d.innerHTML="Hi, <b>"+localStorage.getItem("username")+"</b>.";const s=document.createElement("div");s.className="rightside-header";const o=document.createElement("button");return c.className="sidebar-buttons",o.innerHTML='\n        <svg style="width:24px;height:24px" viewBox="0 0 24 24">\n        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>\n        ',n.appendChild(a),n.appendChild(s),a.appendChild(c),a.appendChild(d),s.appendChild(o),n})())})(),e(),document.querySelector(".main").appendChild((()=>{const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=new Date,n=t.getDay(),a=t.getDate(),c=new Date(t.getFullYear(),t.getMonth()+1,0).getDate()+1,d=document.createElement("div");d.className="calendar";const s=document.createElement("div");s.id="day-one",s.className="days";const o=document.createElement("div");o.className="day-names",o.textContent=e[n];const l=document.createElement("div");l.className="day-dates",l.textContent=c;const m=document.createElement("div");m.className="days";const r=document.createElement("div");r.className="day-names",r.textContent=e[n+1];const i=document.createElement("div");i.className="day-dates",i.textContent=a+1==c?1:a+1>c?Number(l.textContent)+1:a+1;const u=document.createElement("div");u.className="days";const p=document.createElement("div");p.className="day-names",p.textContent=e[n+2];const C=document.createElement("div");C.className="day-dates",C.textContent=a+2==c?1:a+2>c?Number(i.textContent)+2:a+2;const h=document.createElement("div");h.className="days";const v=document.createElement("div");v.className="day-names",v.textContent=e[n+3];const L=document.createElement("div");L.className="day-dates",L.textContent=a+3==c?1:a+3>c?Number(C.textContent)+1:a+3;const E=document.createElement("div");E.className="days";const x=document.createElement("div");x.className="day-names",x.textContent=e[n+4];const H=document.createElement("div");H.className="day-dates",H.textContent=a+4==c?1:a+4>c?Number(L.textContent)+1:a+4;const N=document.createElement("div");N.className="days";const g=document.createElement("div");g.className="day-names",g.textContent=e[n+5];const y=document.createElement("div");y.className="day-dates",y.textContent=a+5==c?1:a+5>c?Number(H.textContent)+1:a+5;const b=document.createElement("div");b.className="days";const V=document.createElement("div");V.className="day-names",V.textContent=e[n+6];const M=document.createElement("div");return M.className="day-dates",M.textContent=a+6==c?1:a+6>c?Number(y.textContent)+1:a+6,d.append(s,m,u,u,h,E,N,b),s.append(o,l),m.append(r,i),u.append(p,C),h.append(v,L),E.append(x,H),N.append(g,y),b.append(V,M),d})())})),n.appendChild(a),n.appendChild(c),n}())};!function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="container",e.appendChild(t),t.appendChild((()=>{const e=document.createElement("header");return e.className="header",e})()),t.appendChild((()=>{const e=document.createElement("main");return e.className="main",e})()),t.appendChild((()=>{const e=document.createElement("footer");return e.textContent="Copyright ~ Vannent",e})()),null===localStorage.getItem("username")?(()=>{const e=document.querySelector(".main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.className="getusername";const t=document.createElement("h1");t.className="getusername-title",t.textContent="What is your name?";const a=document.createElement("input");a.type="text",a.id="name",a.required=!0,a.placeholder="Chris",a.addEventListener("click",(e=>{a.placeholder=""}));const c=document.createElement("button");return c.className="username-submit",c.textContent="Submit",c.value="submit",c.addEventListener("click",(e=>{if(""==a.value)return;let t=a.value;localStorage.setItem("username",t),n()})),e.appendChild(t),e.appendChild(a),e.appendChild(c),e})())})():n()}()})();
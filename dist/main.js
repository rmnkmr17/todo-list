(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&family=Quicksand&display=swap);"]),d.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Quicksand", sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: 70px auto;\n  height: 100vh;\n}\n\nheader {\n  grid-column: 1 / 3;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  background-color: #026aea;\n  padding: 20px 40px 20px 40px;\n  color: #d1fae5;\n  -webkit-box-shadow: 0px 15px 15px 6px rgba(0, 162, 255, 0.38);\n  box-shadow: 0px 15px 15px 6px rgba(0, 0, 0, 0.38);\n}\n\n#heading {\n  color: #a9f3cd;\n  user-select: none;\n  font-size: 42px;\n}\n\n#subtitle {\n  margin-left: 20px;\n  color: #e7e5e4;\n  font-size: 22px;\n  text-decoration: underline;\n  user-select: none;\n}\n\n.sidebar {\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 15px;\n  background-color: #e2e8f0c9;\n  font-size: 22px;\n  font-family: "Quicksand", sans-serif;\n  color: rgb(51, 51, 51);\n  height: 100%;\n}\n\n.tasks {\n  background-color: #d0d6dcc9;\n  padding: 40px;\n}\n\n#projects-title {\n  font-family: "Nunito Sans";\n  font-weight: 900;\n  font-size: 28px;\n  color: rgb(190, 0, 0);\n  user-select: none;\n  margin-top: 40px;\n  padding-left: 40px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 4px;\n  margin-bottom: 30px;\n}\n\n#add-task {\n  user-select: none;\n  font-size: 63px;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: black;\n  color: white;\n  width: 50px;\n  height: 50px;\n  transition: transform 0.5s;\n  font-family: arial;\n  line-height: 50px;\n  background-color: #687190;\n  -webkit-box-shadow: 5px 5px 21px 2px rgba(0, 0, 0, 0.21);\n  box-shadow: 5px 5px 21px 2px rgba(0, 0, 0, 0.087);\n}\n\n#add-task:hover {\n  transform: rotate(180deg);\n  cursor: pointer;\n  background-color: #706966;\n}\n\n#add-task::before {\n  content: "";\n}\n\n#add-project {\n  justify-self: flex-end;\n  font-size: 22px;\n  padding: 10px 10px 10px 10px;\n  border: none;\n  background-color: #c6d3e4;\n  color: #282828;\n  cursor: pointer;\n}\n\n#add-project:hover {\n  background-color: #a5c1e3;\n  color: #282828;\n  cursor: pointer;\n}\n\n#project {\n  border-radius: 2px;\n  padding: 5px 0 5px 40px;\n}\n\n.active-project {\n  background-color: lightgreen;\n}\n\n#project:hover {\n  cursor: pointer;\n}\n\n.modal,\n.project-modal,\n.edit-modal {\n  border-radius: 10px;\n  border: none;\n}\n\ndialog {\n  margin: auto;\n  background-color: #e7e5e4;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  height: 50vh;\n  width: 40vw;\n  padding: 40px;\n}\n\n#project-form {\n  height: 25vh;\n}\n\n#close-modal,\n#close-project-modal,\n#close-edit-modal {\n  user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  height: 30px;\n  width: 30px;\n  align-self: flex-end;\n  background-color: #a1a1aa;\n  color: white;\n}\n\n#close-modal:hover,\n#close-project-modal:hover,\n#close-edit-modal:hover {\n  background-color: #666670;\n}\n\n.modal::backdrop {\n  background-color: #6b7280;\n  opacity: 0.3;\n}\n\ninput {\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n}\n\ntextarea {\n  resize: none;\n  width: 50%;\n  height: 70px;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n}\n\nselect {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n#title,\n#title-project,\n#edit-title {\n  height: 30px;\n  width: 50%;\n}\n\n.formcontainer {\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  gap: 20px;\n}\n\n#submit,\n#submit-project,\n#edit-submit {\n  cursor: pointer;\n  background-color: #a1a1aa;\n  font-size: 22px;\n  color: white;\n}\n\n#submit:hover,\n#submit-project:hover,\n#edit-submit:hover {\n  background-color: #666670;\n}\n\n.task-line {\n  margin-top: 20px;\n  padding: 20px 40px;\n  background-color: rgb(177, 233, 177);\n  width: fit-content;\n  display: flex;\n  justify-content: flex-end;\n  gap: 30px;\n}\n\n.my-todo {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(5, 1fr);\n  border-radius: 3px;\n  align-items: center;\n  margin-top: 22px;\n  background-color: lightblue;\n  -webkit-box-shadow: 5px 5px 21px 2px rgba(0, 0, 0, 0.11);\n  box-shadow: 5px 5px 21px 2px rgba(0, 0, 0, 0.11);\n}\n\n.buttons-container {\n  display: flex;\n  gap: 5px;\n  justify-self: flex-end;\n}\n\n#delete-btn {\n  font-style: 22px;\n  width: 30px;\n  background-color: rgb(234, 101, 101);\n  color: white;\n  border: none;\n  height: 30px;\n  border-radius: 2px;\n  cursor: pointer;\n}\n#delete-btn:hover {\n  background-color: rgb(231, 44, 44);\n}\n\n#edit-btn {\n  font-style: 32px;\n  cursor: pointer;\n  width: 30px;\n  background-color: rgb(167, 153, 222);\n  color: white;\n  border: none;\n  height: 30px;\n  border-radius: 2px;\n}\n\n#edit-btn:hover {\n  background-color: rgb(123, 101, 212);\n}\n\n#done-btn {\n  accent-color: rgb(144, 183, 238);\n  display: block;\n  width: 30px;\n  height: 30px;\n}\n\n.todo-list {\n  margin-top: 30px;\n}\n',""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(d[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],c=0;c<e.length;c++){var s=e[c],a=o.base?s[0]+o.base:s[0],l=i[a]||0,p="".concat(a," ").concat(l);i[a]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var s=o(e,r),a=0;a<i.length;a++){var l=n(i[a]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};(()=>{n.d(o,{aS:()=>L,gc:()=>I,KH:()=>q});var e=n(379),t=n.n(e),r=n(795),i=n.n(r),d=n(569),c=n.n(d),s=n(565),a=n.n(s),l=n(216),p=n.n(l),u=n(589),m=n.n(u),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=a(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=document.querySelector(".modal"),x=document.querySelector("#add-task"),f=document.querySelector("#close-modal"),v=document.querySelector(".project-modal"),y=document.querySelector("#add-project"),j=document.querySelector("#close-project-modal");class C{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.completed=!1}getTitle(){return this.title}getDescription(){return this.description}getDueDate(){return this.dueDate}getPriority(){return this.priority}getCompletion(){return this.completed}setTitle(e){this.title=e}setDescription(e){this.description=e}setDueDate(e){this.dueDate=e}setPriority(e){this.priority=e}setCompleted(e){this.completed=e}delete(){const e=this.project.todos.indexOf(this);-1!==e&&this.project.todos.splice(e,1)}}class k{constructor(e){this.name=e,this.todos=[]}addTodo(e,t,n,o){const r=new C(e,t,n,o,this);return this.todos.push(r),r}removeTodo(e){const t=this.todos.indexOf(e);-1!==t&&this.todos.splice(t,1)}getTodos(){return this.todos}}let E=new class{constructor(){this.projects=[]}createProject(e){const t=new k(e);return this.projects.push(t),t}deleteProject(e){const t=this.projects.indexOf(e);-1!==t&&this.projects.splice(t,1)}getSelectedProject(){return this.selectedProject}getAllProjects(e){this.projects=e}getProjects(){return this.selectedProject?[this.selectedProject]:this.projects}selectProject(e){this.selectedProject=e}};const w=E.createProject("Default"),A=e=>{const t=document.querySelector(".projects-list");t.innerHTML="";for(let n of E.projects){const o=T(n.name);o.textContent=n.name,n===e&&o.classList.add("active-project"),t.append(o)}S()},S=()=>{const e=document.querySelectorAll("#project");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active-project"))),t.classList.add("active-project");for(let e of E.projects)t.textContent===e.name&&(E.selectProject(e),P(e))}))}))};function T(e){const t=document.createElement("h4");return t.textContent=e,t.setAttribute("id","project"),t}const P=e=>{E.selectProject(e);const t=e.todos,n=document.querySelector(".todo-list");n.innerHTML="";for(let e of t){const o=document.createElement("p");o.classList.add("my-todo"),o.style.backgroundColor=!0===e.getCompletion()?"#d0d6dcc9":"rgb(228 235 242 / 79%)",o.innerHTML=`\n    <input data-index="${t.indexOf(e)}" id="done-btn" type="checkbox" ${!1===e.getCompletion()?"":"checked"}/>\n    <div style="${!1===e.getCompletion()?"text-decoration:dashed":"text-decoration:line-through"}" id="todo-title">${e.title}</div>\n    <div style="${!1===e.getCompletion()?"text-decoration:dashed":"text-decoration:line-through"}" >${e.dueDate}</div>\n    <div style="${!1===e.getCompletion()?"text-decoration:dashed":"text-decoration:line-through"}">${e.priority}</div>\n    <div class="buttons-container"> \n    <button data-index="${t.indexOf(e)}" id="edit-btn">🔍</button>\n    <button data-index="${t.indexOf(e)}" id="delete-btn">🗑️</button>\n    </div>\n    `,n.append(o),D(o)}},D=e=>{e.querySelector("#delete-btn").addEventListener("click",(e=>{L(e)})),e.querySelector("#done-btn").addEventListener("click",(e=>{I(e)})),e.querySelector("#edit-btn").addEventListener("click",(e=>{q(e)}))};function L(e){const t=E.getSelectedProject();!function(e,t){const n=e.getTodos();if(t>=0&&t<n.length){const o=n[t];e.removeTodo(o),console.log(`Todo '${o.title}' has been deleted from project '${e.name}'`)}else console.log(`Invalid index: ${t}`)}(t,e.target.getAttribute("data-index")),P(t)}const q=e=>{const t=E.getSelectedProject(),n=e.target.getAttribute("data-index"),o=t.getTodos()[n],r=document.querySelector(".edit-modal");r.innerHTML="";const i=document.createElement("form");i.setAttribute("id","edit-form"),document.body.appendChild(i),r.appendChild(i);const d=document.createElement("div");d.setAttribute("class","title formcontainer"),i.appendChild(d);const c=document.createElement("h2");c.textContent="EDIT TASK",d.appendChild(c);const s=document.createElement("div");s.setAttribute("id","close-edit-modal"),s.textContent="X",d.appendChild(s);const a=document.createElement("div");a.setAttribute("class","task formcontainer"),i.appendChild(a);const l=document.createElement("label");l.setAttribute("for","edit-title"),l.textContent="title:",a.appendChild(l);const p=document.createElement("input");p.setAttribute("required",""),p.setAttribute("type","text"),p.setAttribute("id","edit-title"),p.setAttribute("value",o.getTitle()),a.appendChild(p);const u=document.createElement("div");u.setAttribute("class","notes formcontainer"),i.appendChild(u);const m=document.createElement("label");m.setAttribute("for","edit-description"),m.textContent="description:",u.appendChild(m);const h=document.createElement("textarea");h.setAttribute("name","description"),h.setAttribute("id","edit-description"),h.textContent=o.getDescription(),u.appendChild(h);const g=document.createElement("div");g.setAttribute("class","date formcontainer"),i.appendChild(g);const b=document.createElement("label");b.setAttribute("for","edit-date"),b.textContent="date:",g.appendChild(b);const x=document.createElement("input");x.setAttribute("required",""),x.setAttribute("type","date"),x.setAttribute("id","edit-date"),x.setAttribute("value",o.getDueDate()),g.appendChild(x);const f=document.createElement("div");f.setAttribute("class","urgent formcontainer"),i.appendChild(f);const v=document.createElement("label");v.setAttribute("for","edit-priority"),v.textContent="priority:",f.appendChild(v);const y=document.createElement("select");y.setAttribute("id","edit-priority"),y.setAttribute("name","priority"),y.setAttribute("value",o.getPriority()),f.appendChild(y);const j=document.createElement("option");j.setAttribute("value","low"),j.textContent="low",y.appendChild(j);const C=document.createElement("option");C.setAttribute("value","medium"),C.textContent="medium",y.appendChild(C);const k=document.createElement("option");k.setAttribute("value","high"),k.textContent="high",y.appendChild(k);const w=document.createElement("input");w.setAttribute("type","submit"),w.setAttribute("id","edit-submit"),w.setAttribute("value","SAVE"),i.appendChild(w),r.showModal(),s.addEventListener("click",(()=>{r.close()})),i.addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("edit-title").value,d=document.getElementById("edit-description").value,c=document.getElementById("edit-date").value,s=document.getElementById("edit-priority").value;o.setTitle(n),o.setDescription(d),o.setDueDate(c),o.setPriority(s),P(t),i.reset(),r.close()}))},I=e=>{const t=e.target.getAttribute("data-index"),n=E.getSelectedProject(),o=n.getTodos()[t],r=e.target;!0===r.checked&&o.setCompleted(!0),!1===r.checked&&o.setCompleted(!1),P(n)};x.addEventListener("click",(()=>{b.showModal()}),!1),f.addEventListener("click",(()=>{b.close()})),y.addEventListener("click",(()=>{v.showModal()})),j.addEventListener("click",(()=>{v.close()})),(()=>{const e=document.querySelector("#form");e.addEventListener("submit",(t=>{t.preventDefault();let n=E.getSelectedProject();if(n){const e=document.getElementById("title").value,t=document.getElementById("description").value,o=document.getElementById("date").value,r=document.getElementById("priority").value,i=n.addTodo(e);i.setTitle(e),i.setDescription(t),i.setDueDate(o),i.setPriority(r),i.setCompleted(!1),n.getTodos(),P(n),b.close()}else console.log("No project selected.");e.reset()}))})(),(()=>{const e=document.querySelector("#project-form");e.addEventListener("submit",(t=>{t.preventDefault();const n=document.querySelector("#title-project").value,o=E.createProject(n);E.selectProject(o);const r=E.getSelectedProject();A(r),P(r),e.reset(),v.close()}))})(),A(w),P(w)})()})();
import{$ as C,A as l,B as x,G as b,H as g,I as w,J as y,N as n,O as i,P as _,Q as k,R as s,S,U as M,V as a,X as D,_ as v,ea as O,ka as P,la as U,ma as E,oa as F,r as f,v as m,w as u,z as h}from"./chunk-NNCFBQDV.js";function A(o,z){if(o&1&&(n(0,"div",10)(1,"p"),a(2),i()()),o&2){let e=S();l(2),D("Archivo seleccionado: ",e.fileName,"")}}var V=(()=>{class o{dragging=!1;fileName=null;fileUploaded=new h;closed=new h;onDragOver(e){e.preventDefault(),this.dragging=!0}onDragLeave(e){this.dragging=!1}onDrop(e){e.preventDefault(),this.dragging=!1;let t=e.dataTransfer?.files;t&&t.length>0&&this.handleFile(t[0])}onFileSelected(e){let t=e.target;t.files&&t.files.length>0&&this.handleFile(t.files[0])}handleFile(e){e.type==="text/csv"?(this.fileName=e.name,this.fileUploaded.emit(e)):alert("Por favor, sube un archivo CSV v\xE1lido.")}closeDragDrop(){this.closed.emit()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=f({type:o,selectors:[["app-dragdrop"]],outputs:{fileUploaded:"fileUploaded",closed:"closed"},standalone:!0,features:[v],decls:14,vars:3,consts:[["fileInput",""],[1,"mcontainer"],[1,"content"],[1,"content-body"],[1,"bt-position"],[1,"btn","btn-mdg",3,"click"],[1,"drag-drop-content",3,"dragover","dragleave","drop"],[1,"drag-drop-text"],["type","file","accept",".csv","hidden","",3,"change"],[1,"btn","btn-primary","btn-select-file",3,"click"],[1,"file-info"]],template:function(t,r){if(t&1){let d=k();n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"button",5),s("click",function(){return m(d),u(r.closeDragDrop())}),a(5,"X"),i()(),n(6,"div",6),s("dragover",function(c){return m(d),u(r.onDragOver(c))})("dragleave",function(c){return m(d),u(r.onDragLeave(c))})("drop",function(c){return m(d),u(r.onDrop(c))}),n(7,"p",7),a(8,"Arrastra y suelta tu archivo CSV aqu\xED, o haz clic para seleccionarlo"),i(),n(9,"input",8,0),s("change",function(c){return m(d),u(r.onFileSelected(c))}),i(),n(11,"button",9),s("click",function(){m(d);let c=M(10);return u(c.click())}),a(12,"Seleccionar archivo"),i(),b(13,A,3,1,"div",10),i()()()()}t&2&&(l(6),w("dragging",r.dragging),l(7),y(r.fileName?13:-1))},styles:[".mcontainer[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;min-height:100vh;justify-content:center;align-content:center;background-color:#00000065}.content[_ngcontent-%COMP%]{display:flex;border-radius:10px;justify-content:center;align-content:center}.content-body[_ngcontent-%COMP%]{margin:auto;width:700px;padding:20px 20px 50px;display:flex;flex-direction:column;justify-content:center;background-color:#fafff4;border-radius:20px}.bt-position[_ngcontent-%COMP%]{display:flex;justify-content:end}.drag-drop-content[_ngcontent-%COMP%]{width:100%;background-color:#fafff4;max-width:500px;margin:0 auto;padding:60px 20px;border:2px dashed #161256;border-radius:10px;text-align:center;transition:.3s;cursor:pointer}.drag-drop-content[_ngcontent-%COMP%]:hover, .dragging[_ngcontent-%COMP%]{background-color:#fff;border:2px dashed #007bff;transition:.3s}.file-info[_ngcontent-%COMP%]{margin-top:15px}"]})}return o})();var T=()=>["/home"],I=()=>["/usuario/horario"],R=()=>["/usuario/usuarios"],j=(()=>{class o{services;constructor(e){this.services=e}showCsvUpload=!1;toggleCsvUpload(){this.showCsvUpload=!this.showCsvUpload}onLogout(){this.services.Logout()}onFileUploaded(e){console.log("Archivo subido:",e),this.showCsvUpload=!1}closeCsvUpload(){this.showCsvUpload=!1}static \u0275fac=function(t){return new(t||o)(x(F))};static \u0275cmp=f({type:o,selectors:[["app-user-side"]],standalone:!0,features:[v],decls:24,vars:9,consts:[[1,"mcontent","align-items-start"],[1,"content-body","menu-side","d-flex"],[1,"d-flex","align-items-center","justify-content-center"],[1,"fi","fi-sr-arrow-left","clickCl",3,"routerLink"],[1,"content","d-flex","flex-column"],[1,"d-flex","w-100","justify-content-center","mt-3"],[1,"fi","fi-sr-user"],[1,"menu"],[3,"routerLink"],[3,"click"],[1,"btn","btn-mdg","w-100",3,"click"],[3,"fileUploaded","closed","hidden"]],template:function(t,r){t&1&&(n(0,"main",0)(1,"div",1)(2,"div",2),_(3,"i",3),i(),n(4,"div",4)(5,"div",5),_(6,"i",6),i(),n(7,"nav",7)(8,"ul")(9,"li")(10,"a",8),a(11,"Inicio"),i()(),n(12,"li")(13,"a",8),a(14,"Horarios"),i()(),n(15,"li")(16,"a",8),a(17,"Usuarios"),i()(),n(18,"li")(19,"a",9),s("click",function(){return r.toggleCsvUpload()}),a(20,"Carga CVS"),i()()()(),n(21,"button",10),s("click",function(){return r.onLogout()}),a(22,"Log out"),i()()()(),n(23,"app-dragdrop",11),s("fileUploaded",function(p){return r.onFileUploaded(p)})("closed",function(){return r.closeCsvUpload()}),i()),t&2&&(l(3),g("routerLink",C(5,T)),l(7),g("routerLink",C(6,T)),l(3),g("routerLink",C(7,I)),l(3),g("routerLink",C(8,R)),l(7),g("hidden",!r.showCsvUpload))},dependencies:[E,V],styles:[".mcontent[_ngcontent-%COMP%]{width:100%;height:100%;padding-bottom:25px;margin-bottom:25px}.content-body[_ngcontent-%COMP%]{width:100%;height:100%;padding:20px 30px;flex-direction:column;border-radius:15px;background-color:#fefff6ad;border:2px solid rgba(0,0,0,.12)}.menu-side[_ngcontent-%COMP%]{-webkit-box-shadow:-10px 10px 8px 0px rgba(176,176,176,1);-moz-box-shadow:-10px 10px 8px 0px rgba(176,176,176,1);box-shadow:-10px 10px 8px #b0b0b0}.content[_ngcontent-%COMP%]{width:100%;height:100%;justify-content:space-between}.menu[_ngcontent-%COMP%]{width:100%;margin-bottom:150px}.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;list-style-type:none;display:flex;flex-direction:column;align-items:center}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;padding:10px;border-radius:5px;transition:background-color .3s}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#b7db68}.fi-sr-user[_ngcontent-%COMP%]{font-size:120px;font-family:uicons-bold-rounded}.btn[_ngcontent-%COMP%]{font-size:20px}.fi-sr-arrow-left[_ngcontent-%COMP%]{font-family:uicons-bold-rounded;font-size:2.5em}"]})}return o})();var ne=(()=>{class o{router;constructor(e){this.router=e}static \u0275fac=function(t){return new(t||o)(x(U))};static \u0275cmp=f({type:o,selectors:[["app-content"]],standalone:!0,features:[v],decls:5,vars:0,consts:[[1,"mcontainer"],[1,"w-15","ms-4","me-2"],[1,"w-100","me-4"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"div",1),_(2,"app-user-side"),i(),n(3,"div",2),_(4,"router-outlet"),i()())},dependencies:[P,O,j],styles:[".mcontainer[_ngcontent-%COMP%]{width:100%;min-height:83.7vh;display:flex;flex-direction:row;padding-top:20px;justify-content:space-between;background-color:#f4f4f9;background:radial-gradient(circle,#90bc313a 45%,transparent 25%) 0 0 / 7px 7px}"]})}return o})();export{ne as ContentComponent};

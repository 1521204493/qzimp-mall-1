import{_ as z,r as u,c as U,a as C,b as l,w as q,d as n,F,E as K,e as L,o as p,g as D,i as v,j as M,k as O,l as R}from"./index-abac234f.js";import{a as m,E as G,b as x,c as o,d as H,e as J,f as Q,g as W}from"./index-5d52cb72.js";let k;const h=()=>{k=G.service({lock:!0,text:"加载中...",spinner:"wave"})},g=()=>{k&&k.close()},X=async t=>{h();try{return await m.request({url:"/mall/cms-subject-product-relation/one/"+t,method:"get"})}catch(e){throw e}finally{g()}},Y=async t=>{h();try{return await m.request({url:"/mall/cms-subject-product-relation/del/"+t,method:"get"})}catch(e){throw e}finally{g()}},Z=async t=>{h();try{return await m.request({url:"/mall/cms-subject-product-relation/edit",method:"post",data:t})}catch(e){throw e}finally{g()}},$=async t=>{h();try{return await m.request({url:"/mall/cms-subject-product-relation/add",method:"post",data:t})}catch(e){throw e}finally{g()}},ee=async t=>{h();try{return await m.request({url:"/mall/cms-subject-product-relation/page",method:"post",data:t})}catch(e){throw e}finally{g()}},y={One:X,Del:Y,Edit:Z,Add:$,Page:ee};const te={data(){return{nameOptions:[],json:{current:1,size:999},ping:!1,searchText:"",currentPage:1,pageSize:6,total:0,tableData:[],editDialogVisible:!1,editItem:{},selectedRow:null}},computed:{paginatedData(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.filteredtableData.slice(t,e)},filteredtableData(){return this.searchText?this.tableData.filter(t=>String(t.name).includes(String(this.searchText))):this.tableData}},methods:{openEditDialog(t){this.editItem={...t},this.editDialogVisible=!0},handlePageChange(t){this.currentPage=t},saveEdit(){console.log(this.editItem),x.confirm("确定修改吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const t=this.tableData.findIndex(e=>e.id===this.editItem.id);t!==-1?this.tableData.splice(t,1,this.editItem):this.tableData.push(this.editItem),this.editDialogVisible=!1,o.success("修改成功！"),this.editItem={}}).catch(()=>{o.info("修改取消！")})},fetchData(){y.Page(this.json).then(t=>{this.tableData=t.data.data.page.records||t.data.records,console.log(t),o.success("刷新成功！"),this.tableData}).catch(t=>{o.error("刷新失败，请检查网络！"),console.error("Error fetching data:",t)})},Insert(t){y.Add(t).then(e=>{delete t.isNew,o.success("插入数据成功！")}).catch(e=>{o.error("插入数据失败！"),console.error("保存修改失败:",e)})},Alter(t){y.Edit(t).then(e=>{console.log("修改保存成功:",e.data),o.success("修改数据成功！")}).catch(e=>{o.error("修改数据失败！"),console.error("保存修改失败:",e)})},Del(t){x.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{y.Del(t.id).then(e=>{const d=this.tableData.findIndex(V=>V.id===t.id);d!==-1&&this.tableData.splice(d,1),console.log("删除成功:",e.data),o.success("删除成功！")}).catch(e=>{o.error(response.msg),console.error("删除失败:",e)})}).catch(()=>{})},delND(t){x.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const e=this.tableData.findIndex(d=>d.id===t.id);e!==-1&&this.tableData.splice(e,1),o.success("删除成功！")}).catch(()=>{o.error("删除失败！"),console.log("取消删除 API",t)})},addAPI(){o.success("添加数据ing");const t={id:0,productId:0,subjectId:0,isNew:!0};this.tableData.push(t);const e=Math.ceil(this.tableData.length/this.pageSize);this.handlePageChange(e)},SortUp(){this.tableData=this.tableData.sort((t,e)=>t.sort===null?1:e.sort===null?-1:t.sort-e.sort)},SortDown(){this.tableData=this.tableData.sort((t,e)=>t.sort===null?1:e.sort===null?-1:e.sort-t.sort)},Sort(){this.ping=!this.ping,this.ping?(this.SortUp(),o.success("顺序排序")):(this.SortDown(),o.success("逆序排序"))}},created(){this.fetchData()}},le={slot:"footer"},ne={class:"button"};function ae(t,e,d,V,s,r){const f=K,_=W,E=u("Position"),c=M,i=L,w=u("EditPen"),P=u("Delete"),S=H,j=J,I=O,T=R,B=Q,A=u("DocumentAdd"),N=u("Sort");return p(),U(F,null,[C("div",null,[l(f,{modelValue:s.searchText,"onUpdate:modelValue":e[0]||(e[0]=a=>s.searchText=a),placeholder:"请输入搜索关键字",clearable:"",onClear:t.clearSearch,onKeyup:q(t.performSearch,["enter"]),style:{"margin-bottom":"20px"}},null,8,["modelValue","onClear","onKeyup"]),l(S,{data:r.paginatedData,"header-cell-style":{background:"#eef1f6",color:"#606266"},borde:""},{default:n(()=>[l(_,{prop:"id",label:"id"}),l(_,{prop:"productId",label:"产品id"}),l(_,{prop:"subjectId",label:"主题id"}),l(_,{label:"操作"},{default:n(({row:a})=>[a.isNew?(p(),D(i,{key:0,class:"custom-button",type:"success",circle:"",onClick:b=>r.Insert(a)},{default:n(()=>[l(c,null,{default:n(()=>[l(E)]),_:1})]),_:2},1032,["onClick"])):(p(),D(i,{key:1,class:"custom-button",type:"warning",circle:"",onClick:b=>r.Alter(a)},{default:n(()=>[l(c,null,{default:n(()=>[l(E)]),_:1})]),_:2},1032,["onClick"])),l(i,{type:"primary",circle:"",onClick:b=>r.openEditDialog(a)},{default:n(()=>[l(c,null,{default:n(()=>[l(w)]),_:1})]),_:2},1032,["onClick"]),a.isNew?(p(),D(i,{key:2,type:"danger",circle:"",onClick:b=>r.delND(a)},{default:n(()=>[l(c,null,{default:n(()=>[l(P)]),_:1})]),_:2},1032,["onClick"])):(p(),D(i,{key:3,type:"danger",circle:"",onClick:b=>r.Del(a)},{default:n(()=>[l(c,null,{default:n(()=>[l(P)]),_:1})]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"]),l(j,{"current-page":s.currentPage,"page-size":s.pageSize,total:r.filteredtableData.length,onCurrentChange:r.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"]),l(B,{class:"form",modelValue:s.editDialogVisible,"onUpdate:modelValue":e[5]||(e[5]=a=>s.editDialogVisible=a),onClose:e[6]||(e[6]=a=>s.editDialogVisible=!1)},{default:n(()=>[l(T,null,{default:n(()=>[l(I,{label:"id"},{default:n(()=>[l(f,{modelValue:s.editItem.id,"onUpdate:modelValue":e[1]||(e[1]=a=>s.editItem.id=a),disabled:""},null,8,["modelValue"])]),_:1}),l(I,{label:"产品id"},{default:n(()=>[l(f,{modelValue:s.editItem.productId,"onUpdate:modelValue":e[2]||(e[2]=a=>s.editItem.productId=a)},null,8,["modelValue"])]),_:1}),l(I,{label:"主题id"},{default:n(()=>[l(f,{modelValue:s.editItem.subjectId,"onUpdate:modelValue":e[3]||(e[3]=a=>s.editItem.subjectId=a)},null,8,["modelValue"])]),_:1})]),_:1}),C("div",le,[l(i,{onClick:e[4]||(e[4]=a=>s.editDialogVisible=!1)},{default:n(()=>[v("取消")]),_:1}),l(i,{type:"primary",onClick:r.saveEdit},{default:n(()=>[v("保存")]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])]),C("div",ne,[l(i,{type:"primary",circle:"",onClick:r.addAPI,style:{"margin-top":"10px"}},{default:n(()=>[l(c,null,{default:n(()=>[l(A)]),_:1})]),_:1},8,["onClick"]),l(i,{type:"danger",circle:"",onClick:e[7]||(e[7]=a=>r.Sort()),style:{"margin-top":"10px"}},{default:n(()=>[l(c,null,{default:n(()=>[l(N)]),_:1})]),_:1})])],64)}const re=z(te,[["render",ae]]);export{re as default};

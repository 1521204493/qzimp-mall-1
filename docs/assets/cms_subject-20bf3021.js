import{_ as R,r as _,c as h,a as V,b as e,w as O,d as o,F as G,E as H,e as J,o as m,g as w,i as g,j as Q,k as W,l as X}from"./index-abac234f.js";import{a as y,E as Y,b as x,c as r,d as Z,e as $,f as ee,g as te}from"./index-5d52cb72.js";import{E as le,a as oe,b as ae}from"./el-progress-ca4d4ee9.js";import{E as ne}from"./el-date-picker-c408b619.js";import{E as se}from"./el-input-number-f4f00921.js";let S;const I=()=>{S=Y.service({lock:!0,text:"加载中...",spinner:"wave"})},C=()=>{S&&S.close()},ie=async a=>{I();try{return await y.request({url:"/mall/cms-subject/one/"+a,method:"get"})}catch(t){throw t}finally{C()}},re=async a=>{I();try{return await y.request({url:"/mall/cms-subject/del/"+a,method:"get"})}catch(t){throw t}finally{C()}},de=async a=>{I();try{return await y.request({url:"/mall/cms-subject/edit",method:"post",data:a})}catch(t){throw t}finally{C()}},ue=async a=>{I();try{return await y.request({url:"/mall/cms-subject/add",method:"post",data:a})}catch(t){throw t}finally{C()}},ce=async a=>{I();try{return await y.request({url:"/mall/cms-subject/page",method:"post",data:a})}catch(t){throw t}finally{C()}},E={One:ie,Del:re,Edit:de,Add:ue,Page:ce};const me={data(){return{pic:"",nameOptions:[],json:{current:1,size:999},ping:!1,searchText:"",currentPage:1,pageSize:6,total:0,tableData:[],editDialogVisible:!1,editItem:{},selectedRow:null}},computed:{paginatedData(){const a=(this.currentPage-1)*this.pageSize,t=a+this.pageSize;return this.filteredtableData.slice(a,t)},filteredtableData(){return this.searchText?this.tableData.filter(a=>String(a.name).includes(String(this.searchText))):this.tableData}},methods:{openEditDialog(a){this.editItem={...a},this.editDialogVisible=!0},handlePageChange(a){this.currentPage=a},saveEdit(){console.log(this.editItem),x.confirm("确定修改吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const a=this.tableData.findIndex(t=>t.id===this.editItem.id);a!==-1?this.tableData.splice(a,1,this.editItem):this.tableData.push(this.editItem),this.editDialogVisible=!1,r.success("修改成功！"),this.editItem={}}).catch(()=>{r.info("修改取消！")})},fetchData(){E.Page(this.json).then(a=>{this.tableData=a.data.data.page.records||a.data.records,console.log(a),r.success("刷新成功！"),this.tableData}).catch(a=>{r.error("刷新失败，请检查网络！"),console.error("Error fetching data:",a)})},Insert(a){E.Add(a).then(t=>{delete a.isNew,r.success("插入数据成功！")}).catch(t=>{r.error("插入数据失败！"),console.error("保存修改失败:",t)})},created(){this.pic},Alter(a){E.Edit(a).then(t=>{console.log("修改保存成功:",t.data),r.success("修改数据成功！")}).catch(t=>{r.error("修改数据失败！"),console.error("保存修改失败:",t)})},Del(a){x.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{E.Del(a.id).then(t=>{const b=this.tableData.findIndex(P=>P.id===a.id);b!==-1&&this.tableData.splice(b,1),console.log("删除成功:",t.data),r.success("删除成功！")}).catch(t=>{r.error(response.msg),console.error("删除失败:",t)})}).catch(()=>{})},delND(a){x.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const t=this.tableData.findIndex(b=>b.id===a.id);t!==-1&&this.tableData.splice(t,1),r.success("删除成功！")}).catch(()=>{r.error("删除失败！"),console.log("取消删除 API",a)})},addAPI(){r.success("添加数据ing");const a={albumPics:"",categoryId:0,categoryName:"",collectCount:0,commentCount:0,content:"",createTime:"",description:"",forwardCount:0,id:0,pic:"",productCount:0,readCount:0,recommendStatus:0,showStatus:0,title:"",isNew:!0};this.tableData.push(a);const t=Math.ceil(this.tableData.length/this.pageSize);this.handlePageChange(t)},SortUp(){this.tableData=this.tableData.sort((a,t)=>a.sort===null?1:t.sort===null?-1:a.sort-t.sort)},SortDown(){this.tableData=this.tableData.sort((a,t)=>a.sort===null?1:t.sort===null?-1:t.sort-a.sort)},Sort(){this.ping=!this.ping,this.ping?(this.SortUp(),r.success("顺序排序")):(this.SortDown(),r.success("逆序排序"))}},created(){this.fetchData()}},pe=["src"],fe=["src"],_e={key:0},ge={key:1},be={key:0},he={key:1},Ve={slot:"footer"},ye={class:"button"};function Ie(a,t,b,P,n,d){const p=H,s=te,U=_("Position"),c=Q,u=J,B=_("EditPen"),v=_("Delete"),j=Z,z=$,A=_("Upload"),T=le,i=W,f=se,q=ne,D=oe,N=ae,F=X,K=ee,L=_("DocumentAdd"),M=_("Sort");return m(),h(G,null,[V("div",null,[e(p,{modelValue:n.searchText,"onUpdate:modelValue":t[0]||(t[0]=l=>n.searchText=l),placeholder:"请输入搜索关键字",clearable:"",onClear:a.clearSearch,onKeyup:O(a.performSearch,["enter"]),style:{"margin-bottom":"20px"}},null,8,["modelValue","onClear","onKeyup"]),e(j,{data:d.paginatedData,"header-cell-style":{background:"#eef1f6",color:"#606266"},borde:""},{default:o(()=>[e(s,{prop:"albumPics",label:"专辑图片"},{default:o(({row:l})=>[V("img",{src:l.albumPics.split(","),width:"100",height:"100"},null,8,pe)]),_:1}),e(s,{prop:"categoryId",label:"类别id"}),e(s,{prop:"categoryName",label:"类名"}),e(s,{prop:"collectCount",label:"收藏数"}),e(s,{prop:"commentCount",label:"评论数量"}),e(s,{prop:"content",label:"内容"}),e(s,{prop:"createTime",label:"编辑时间"}),e(s,{prop:"description",label:"描述"}),e(s,{prop:"forwardCount",label:"转发数"}),e(s,{prop:"id",label:"id"}),e(s,{prop:"pic",label:"图片"},{default:o(({row:l})=>[V("img",{src:l.pic,width:"100",height:"100"},null,8,fe)]),_:1}),e(s,{prop:"productCount",label:"产品数"}),e(s,{prop:"readCount",label:"浏览数"}),e(s,{prop:"recommendStatus",label:"推荐状态"},{default:o(({row:l})=>[l.showStatus==0?(m(),h("span",_e,"推荐")):(m(),h("span",ge,"不推荐"))]),_:1}),e(s,{prop:"showStatus",label:"显示状态"},{default:o(({row:l})=>[l.showStatus==0?(m(),h("span",be,"隐藏")):(m(),h("span",he,"显示"))]),_:1}),e(s,{prop:"title",label:"标题"}),e(s,{prop:"sort",label:"排序"}),e(s,{label:"操作"},{default:o(({row:l})=>[l.isNew?(m(),w(u,{key:0,class:"custom-button",type:"success",circle:"",onClick:k=>d.Insert(l)},{default:o(()=>[e(c,null,{default:o(()=>[e(U)]),_:1})]),_:2},1032,["onClick"])):(m(),w(u,{key:1,class:"custom-button",type:"warning",circle:"",onClick:k=>d.Alter(l)},{default:o(()=>[e(c,null,{default:o(()=>[e(U)]),_:1})]),_:2},1032,["onClick"])),e(u,{type:"primary",circle:"",onClick:k=>d.openEditDialog(l)},{default:o(()=>[e(c,null,{default:o(()=>[e(B)]),_:1})]),_:2},1032,["onClick"]),l.isNew?(m(),w(u,{key:2,type:"danger",circle:"",onClick:k=>d.delND(l)},{default:o(()=>[e(c,null,{default:o(()=>[e(v)]),_:1})]),_:2},1032,["onClick"])):(m(),w(u,{key:3,type:"danger",circle:"",onClick:k=>d.Del(l)},{default:o(()=>[e(c,null,{default:o(()=>[e(v)]),_:1})]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"]),e(z,{"current-page":n.currentPage,"page-size":n.pageSize,total:d.filteredtableData.length,onCurrentChange:d.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"]),e(K,{class:"form",modelValue:n.editDialogVisible,"onUpdate:modelValue":t[18]||(t[18]=l=>n.editDialogVisible=l),onClose:t[19]||(t[19]=l=>n.editDialogVisible=!1)},{default:o(()=>[e(F,null,{default:o(()=>[e(i,{label:"专辑图片"},{default:o(()=>[e(T,{action:"/upload",modelValue:n.editItem.albumPics,"onUpdate:modelValue":t[1]||(t[1]=l=>n.editItem.albumPics=l),"list-type":"picture","auto-upload":!1},{default:o(()=>[e(u,{slot:"trigger",size:"small",circle:"",type:"primary"},{default:o(()=>[e(c,null,{default:o(()=>[e(c,null,{default:o(()=>[e(A)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"类别id"},{default:o(()=>[e(p,{modelValue:n.editItem.categoryId,"onUpdate:modelValue":t[2]||(t[2]=l=>n.editItem.categoryId=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"类名"},{default:o(()=>[e(p,{modelValue:n.editItem.categoryName,"onUpdate:modelValue":t[3]||(t[3]=l=>n.editItem.categoryName=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"收藏数"},{default:o(()=>[e(f,{modelValue:n.editItem.collectCount,"onUpdate:modelValue":t[4]||(t[4]=l=>n.editItem.collectCount=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"评论数量"},{default:o(()=>[e(f,{modelValue:n.editItem.commentCount,"onUpdate:modelValue":t[5]||(t[5]=l=>n.editItem.commentCount=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"内容"},{default:o(()=>[e(p,{modelValue:n.editItem.content,"onUpdate:modelValue":t[6]||(t[6]=l=>n.editItem.content=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"编辑时间"},{default:o(()=>[e(q,{modelValue:n.editItem.editTime,"onUpdate:modelValue":t[7]||(t[7]=l=>n.editItem.editTime=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1}),e(i,{label:"描述"},{default:o(()=>[e(p,{modelValue:n.editItem.description,"onUpdate:modelValue":t[8]||(t[8]=l=>n.editItem.description=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"转发数"},{default:o(()=>[e(f,{modelValue:n.editItem.forwardCount,"onUpdate:modelValue":t[9]||(t[9]=l=>n.editItem.forwardCount=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"id"},{default:o(()=>[e(p,{modelValue:n.editItem.id,"onUpdate:modelValue":t[10]||(t[10]=l=>n.editItem.id=l),disabled:""},null,8,["modelValue"])]),_:1}),e(i,{label:"图片"},{default:o(()=>[e(T,{action:"/upload",modelValue:n.editItem.image,"onUpdate:modelValue":t[11]||(t[11]=l=>n.editItem.image=l),"list-type":"picture","auto-upload":!1},{default:o(()=>[e(u,{slot:"trigger",size:"small",circle:"",type:"primary"},{default:o(()=>[e(c,{name:"el-icon-upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"产品数"},{default:o(()=>[e(f,{modelValue:n.editItem.productCount,"onUpdate:modelValue":t[12]||(t[12]=l=>n.editItem.productCount=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"浏览数"},{default:o(()=>[e(f,{modelValue:n.editItem.viewCount,"onUpdate:modelValue":t[13]||(t[13]=l=>n.editItem.viewCount=l)},null,8,["modelValue"])]),_:1}),e(i,{label:"显示状态"},{default:o(()=>[e(N,{modelValue:n.editItem.showStatus,"onUpdate:modelValue":t[14]||(t[14]=l=>n.editItem.showStatus=l)},{default:o(()=>[e(D,{label:1},{default:o(()=>[g("显示")]),_:1}),e(D,{label:0},{default:o(()=>[g("隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"推荐状态"},{default:o(()=>[e(N,{modelValue:n.editItem.recommendStatus,"onUpdate:modelValue":t[15]||(t[15]=l=>n.editItem.recommendStatus=l)},{default:o(()=>[e(D,{label:1},{default:o(()=>[g(" 推荐 ")]),_:1}),e(D,{label:0},{default:o(()=>[g(" 不推荐 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"排序顺序"},{default:o(()=>[e(f,{modelValue:n.editItem.sort,"onUpdate:modelValue":t[16]||(t[16]=l=>n.editItem.sort=l)},null,8,["modelValue"])]),_:1})]),_:1}),V("div",Ve,[e(u,{onClick:t[17]||(t[17]=l=>n.editDialogVisible=!1)},{default:o(()=>[g("取消")]),_:1}),e(u,{type:"primary",onClick:d.saveEdit},{default:o(()=>[g("保存")]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])]),V("div",ye,[e(u,{type:"primary",circle:"",onClick:d.addAPI,style:{"margin-top":"10px"}},{default:o(()=>[e(c,null,{default:o(()=>[e(L)]),_:1})]),_:1},8,["onClick"]),e(u,{type:"danger",circle:"",onClick:t[20]||(t[20]=l=>d.Sort()),style:{"margin-top":"10px"}},{default:o(()=>[e(c,null,{default:o(()=>[e(M)]),_:1})]),_:1})])],64)}const xe=R(me,[["render",Ie]]);export{xe as default};

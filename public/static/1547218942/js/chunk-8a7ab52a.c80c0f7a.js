(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a7ab52a"],{"214f":function(t,e,i){"use strict";var a=i("32e9"),n=i("2aba"),r=i("79e5"),o=i("be13"),s=i("2b4c");t.exports=function(t,e,i){var l=s(t),c=i(o,l,""[t]),u=c[0],d=c[1];r(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,u),a(RegExp.prototype,l,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},"28a5":function(t,e,i){i("214f")("split",2,function(t,e,a){"use strict";var n=i("aae3"),r=a,o=[].push,s="split",l="length",c="lastIndex";if("c"=="abbc"[s](/(b)*/)[1]||4!="test"[s](/(?:)/,-1)[l]||2!="ab"[s](/(?:ab)*/)[l]||4!="."[s](/(.?)(.?)/)[l]||"."[s](/()()/)[l]>1||""[s](/.?/)[l]){var u=void 0===/()??/.exec("")[1];a=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(i,t,e);var a,s,d,p,g,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,h+"g");u||(a=new RegExp("^"+m.source+"$(?!\\s)",h));while(s=m.exec(i)){if(d=s.index+s[0][l],d>v&&(f.push(i.slice(v,s.index)),!u&&s[l]>1&&s[0].replace(a,function(){for(g=1;g<arguments[l]-2;g++)void 0===arguments[g]&&(s[g]=void 0)}),s[l]>1&&s.index<i[l]&&o.apply(f,s.slice(1)),p=s[0][l],v=d,f[l]>=b))break;m[c]===s.index&&m[c]++}return v===i[l]?!p&&m.test("")||f.push(""):f.push(i.slice(v)),f[l]>b?f.slice(0,b):f}}else"0"[s](void 0,0)[l]&&(a=function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)});return[function(i,n){var r=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,r,n):a.call(String(r),i,n)},a]})},"386d":function(t,e,i){i("214f")("search",1,function(t,e,i){return[function(i){"use strict";var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a):new RegExp(i)[e](String(a))},i]})},39388:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a-card",{staticClass:"app-card",attrs:{bordered:!1}},[i("div",{staticClass:"app-btn-group"},[i("a-row",{attrs:{gutter:10}},[i("a-col",{attrs:{span:4}},[t.$root.CheckPriv(t.$root.Priv.SERVER_NEW)?i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleOpenAddServerDialog}},[t._v("新增服务器")]):t._e()],1),i("a-col",{attrs:{span:10}}),i("a-col",{attrs:{span:4}},[i("a-select",{staticStyle:{width:"100%"},attrs:{allowClear:"",showSearch:"",placeholder:"搜索指定集群",notFoundContent:"无集群数据",optionFilterProp:"children"},model:{value:t.search.groupId,callback:function(e){t.$set(t.search,"groupId",e)},expression:"search.groupId"}},t._l(t.dialogGroupList,function(e){return i("a-select-option",{attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1),i("a-col",{attrs:{span:6}},[i("a-input-search",{attrs:{placeholder:"关键词搜索，ID、名称、IP",enterButton:""},on:{search:t.handleSearch},model:{value:t.search.keyword,callback:function(e){t.$set(t.search,"keyword",e)},expression:"search.keyword"}})],1)],1)],1),i("a-table",{attrs:{columns:t.tableColumns,dataSource:t.tableSource,pagination:t.pagination,loading:t.tableLoading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"group_id",fn:function(e,a){return[t.groupList[e]?i("span",[t._v(t._s(t.groupList[e].name))]):i("span",[i("span",{staticClass:"app-line-through"},[t._v("已删除")])])]}},{key:"op",fn:function(e,a){return i("span",{},[t.$root.CheckPriv(t.$root.Priv.SERVER_EDIT)?i("span",{staticClass:"app-link app-op",on:{click:function(e){t.handleOpenEditServerDialog(a.id)}}},[i("a-icon",{attrs:{type:"edit"}}),t._v("编辑")],1):t._e(),t.$root.CheckPriv(t.$root.Priv.SERVER_DEL)?i("a-popconfirm",{attrs:{title:"确定要删除此服务器吗？",okText:"删除",cancelText:"取消"},on:{confirm:function(e){t.handleDeleteServer(a.id)}}},[i("span",{staticClass:"app-link app-op app-remove"},[i("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1)]):t._e()],1)}}])})],1),i("a-modal",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,confirmLoading:t.dialogConfirmLoading,keyboard:!1,maskClosable:!1,okText:"确定",cancelText:"取消",destroyOnClose:!0},on:{ok:t.dialogSubmit,cancel:t.dialogCancel}},[i("a-spin",{attrs:{spinning:t.dialogLoading}},[i("server-update-component",{ref:"groupUpdateRef",attrs:{"group-list":t.dialogGroupList,detail:t.dialogDetail}})],1)],1)],1)},n=[],r=(i("386d"),i("ac6a"),i("92fa")),o=i.n(r),s=(i("28a5"),i("7f7f"),i("24b4")),l={render:function(){var t=arguments[0],e=this.form,i=e.getFieldDecorator,a=(e.getFieldValue,{labelCol:{span:6},wrapperCol:{span:15}}),n=[];return this.groupList.forEach(function(e){n.push(t("a-select-option",{attrs:{value:e.id}},[e.name]))}),i("id",{initialValue:this.detail.id}),t("a-form",[t("a-form-item",o()([{props:a},{attrs:{label:"所属集群"}}]),[i("group_id",{rules:[{required:!0,message:"请选择服务器所属分组"}],initialValue:this.detail.group_id})(t("a-select",{attrs:{allowClear:!0,showSearch:!0,placeholder:"支持关键词搜索",notFoundContent:"无分组数据",optionFilterProp:"children"}},[n]))]),t("a-form-item",o()([{props:a},{attrs:{label:"服务器名称"}}]),[i("name",{rules:[{required:!0,message:"服务器名称不能为空"}],initialValue:this.detail.name})(t("a-input",{attrs:{autocomplete:"off",placeholder:"请输入服务器名称"}}))]),t("a-form-item",o()([{props:a},{attrs:{label:"IP"}}]),[i("ip",{rules:[{required:!0,message:"服务器IP不能为空"},{validator:function(t,e,i){if(e){var a=e.split(".");4!=a.length&&i("请输入有效ip地址"),a.forEach(function(t){var e=parseInt(t);isNaN(e)&&i("请输入有效ip地址"),(e<0||e>255)&&i("请输入有效ip地址")}),i()}else i("请输入ip地址")}}],initialValue:this.detail.ip})(t("a-input",{attrs:{autocomplete:"off",placeholder:"请输入服务器IP"}}))]),t("a-form-item",o()([{props:a},{attrs:{label:"ssh端口"}}]),[i("ssh_port",{rules:[{required:!0,type:"integer",min:1,max:65535,message:"请输入正确ssh端口号，1-65535之间的数字"}],initialValue:this.detail.ssh_port,normalize:function(t){var e=parseInt(t);return isNaN(e)?t:e}})(t("a-input",{attrs:{autocomplete:"off",placeholder:"请输入ssh端口"}}))])])},props:{detail:{default:function(){return{}},type:Object},groupList:{default:function(){return[]},type:Array}}},c=s["Form"].create()(l),u=i("aa22"),d={data:function(){return{tableColumns:[{dataIndex:"id",title:"ID",width:"6%"},{dataIndex:"name",title:"名称"},{dataIndex:"group_id",title:"集群",width:"20%",scopedSlots:{customRender:"group_id"}},{dataIndex:"ip",title:"IP",width:"15%"},{dataIndex:"ssh_port",title:"SSH Port",width:"10%"},{dataIndex:"op",title:"操作",width:"20%",align:"right",scopedSlots:{customRender:"op"}}],tableSource:[],pagination:{pageSize:10,current:1,total:0},tableLoading:!1,dialogTitle:"",dialogVisible:!1,dialogConfirmLoading:!1,dialogDetail:{},dialogGroupList:[],dialogLoading:!1,search:{keyword:"",groupId:void 0}}},components:{ServerUpdateComponent:c},computed:{groupList:function(){var t={};return this.dialogGroupList.forEach(function(e){t[e.id]=e}),t}},methods:{handleSearch:function(t){this.search.keyword=t,this.pagination.current=1,this.handleTableChange(this.pagination)},handleTableChange:function(t){this.pagination.current=t.current,this.getDataList({page:t.current,pageSize:t.pageSize})},handleOpenAddServerDialog:function(){this.dialogTitle="新增服务器",this.dialogVisible=!0,this.dialogDetail={}},handleOpenEditServerDialog:function(t){this.dialogTitle="编辑服务器信息",this.dialogVisible=!0,this.dialogDetail={},this.getDataDetail(t)},handleDeleteServer:function(t){var e=this;Object(u["b"])({id:t}).then(function(t){e.$message.success("删除成功",1),e.$root.ResetPagination(e.pagination),e.handleTableChange(e.pagination)})},dialogCancel:function(){this.dialogVisible=!1},dialogSubmit:function(){var t=this;this.$refs.groupUpdateRef.validateFields(function(e,i){e||(t.dialogConfirmLoading=!0,t.dialogDetail.id?Object(u["j"])(i).then(function(e){t.$message.success("服务器信息更新成功",1,function(){t.dialogCancel(),t.dialogConfirmLoading=!1,t.handleTableChange(t.pagination)})}).catch(function(e){t.dialogConfirmLoading=!1}):Object(u["h"])(i).then(function(e){t.$message.success("服务器信息创建成功",1,function(){t.dialogCancel(),t.dialogConfirmLoading=!1,t.handleTableChange(t.pagination)})}).catch(function(e){t.dialogConfirmLoading=!1}))})},getDataDetail:function(t){var e=this;this.dialogLoading=!0,Object(u["e"])({id:t}).then(function(t){e.dialogLoading=!1,e.dialogDetail=t}).catch(function(t){e.dialogLoading=!1})},getDataList:function(t){var e=this;this.tableLoading=!0;var i=(t.page-1)*t.pageSize,a=this.search.groupId?this.search.groupId:0,n=this.search.keyword;Object(u["f"])({group_id:a,keyword:n,offset:i,limit:t.pageSize}).then(function(t){e.tableLoading=!1,e.pagination.total=t.total,e.tableSource=t.list}).catch(function(t){e.tableLoading=!1})},getDataGroupList:function(){var t=this;Object(u["d"])({offset:0,limit:9999}).then(function(e){e.list&&(t.dialogGroupList=e.list)})}},mounted:function(){this.getDataGroupList();var t=this.$route.query.op,e=this.$route.query.id;"edit"==t&&e>0?(this.handleOpenEditServerDialog(e),this.handleSearch(e)):this.handleTableChange(this.pagination)}},p=d,g=i("2877"),f=Object(g["a"])(p,a,n,!1,null,null,null);f.options.__file="Server.vue";e["default"]=f.exports},"92fa":function(t,e){var i=/^(attrs|props|on|nativeOn|class|style|hook)$/;function a(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce(function(t,e){var n,r,o,s,l;for(o in e)if(n=t[o],r=e[o],n&&i.test(o))if("class"===o&&("string"===typeof n&&(l=n,t[o]=n={},n[l]=!0),"string"===typeof r&&(l=r,e[o]=r={},r[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(s in r)n[s]=a(n[s],r[s]);else if(Array.isArray(n))t[o]=n.concat(r);else if(Array.isArray(r))t[o]=[n].concat(r);else for(s in r)n[s]=r[s];else t[o]=e[o];return t},{})}},aa22:function(t,e,i){"use strict";i.d(e,"g",function(){return n}),i.d(e,"i",function(){return r}),i.d(e,"d",function(){return o}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return l}),i.d(e,"h",function(){return c}),i.d(e,"j",function(){return u}),i.d(e,"f",function(){return d}),i.d(e,"e",function(){return p}),i.d(e,"b",function(){return g});var a=i("e1d2");function n(t){return Object(a["b"])("/server/group/new",t)}function r(t){return Object(a["b"])("/server/group/update",t)}function o(t){return Object(a["a"])("/server/group/list",t)}function s(t){return Object(a["a"])("/server/group/detail",t)}function l(t){return Object(a["b"])("/server/group/delete",t)}function c(t){return Object(a["b"])("/server/new",t)}function u(t){return Object(a["b"])("/server/update",t)}function d(t){return Object(a["a"])("/server/list",t)}function p(t){return Object(a["a"])("/server/detail",t)}function g(t){return Object(a["b"])("/server/delete",t)}},aae3:function(t,e,i){var a=i("d3f4"),n=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}}}]);
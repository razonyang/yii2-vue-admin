(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cd95efe"],{"12c0":function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"b",(function(){return u}));var n=i("b775"),a=i("4328"),o=i.n(a);function r(t){return Object(n["a"])({url:"/article-categories?"+o.a.stringify(t),method:"get"})}function s(t,e){return e=e?"?"+o.a.stringify(e):"",Object(n["a"])({url:"/article-categories/".concat(t).concat(e),method:"get"})}function c(t){return Object(n["a"])({url:"/article-categories",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/article-categories/"+t,method:"put",data:e})}function u(t){return Object(n["a"])({url:"/article-categories/"+t,method:"delete"})}},"179d":function(t,e,i){},2423:function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"b",(function(){return u}));var n=i("b775"),a=i("4328"),o=i.n(a);function r(t){return Object(n["a"])({url:"/articles?"+o.a.stringify(t),method:"get"})}function s(t,e){return e=e?"?"+o.a.stringify(e):"",Object(n["a"])({url:"/articles/".concat(t).concat(e),method:"get"})}function c(t){return Object(n["a"])({url:"/articles",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/articles/"+t,method:"put",data:e})}function u(t){return Object(n["a"])({url:"/articles/"+t,method:"delete"})}},2954:function(t,e,i){"use strict";var n=i("179d"),a=i.n(n);a.a},"40ef":function(t,e,i){},"8e56":function(t,e,i){},"9adc":function(t,e,i){"use strict";var n=i("fcb3"),a=i.n(n);a.a},b8d1:function(t,e,i){"use strict";var n=i("8e56"),a=i.n(n);a.a},cb2d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-container"},[i("el-form",{ref:"form",staticClass:"form-container",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.form.status}},[i("StatusDropdown",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submit}},[t._v("\n        "+t._s(t.$t("common.submit"))+"\n      ")])],1),t._v(" "),i("div",{staticClass:"form-main-container"},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[i("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}},[t._v("\n              "+t._s(t.$t("common.title"))+"\n            ")])],1),t._v(" "),i("div",{staticClass:"postInfo-container"},[i("el-row",[i("el-col",{attrs:{span:8}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:t.$t("common.author"),prop:"author"}},[i("el-input",{model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:10}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:t.$t("common.releaseTime"),prop:"release_time"}},[i("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Select date and time"},model:{value:t.releaseTime,callback:function(e){t.releaseTime=e},expression:"releaseTime"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:t.$t("article.category"),prop:"release_time"}},[i("el-select",{attrs:{clearable:"",filterable:"",remote:"","remote-method":t.findCategories,loading:t.loading},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}},t._l(t.categories,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1)],1)],1)],1)],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"70px",label:t.$t("common.summary"),prop:"summary"}},[i("el-input",{staticClass:"article-textarea",attrs:{rows:2,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.summaryLength,expression:"summaryLength"}],staticClass:"word-counter"},[t._v(t._s(t.summaryLength)+"words")])],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:t.$t("common.cover"),"label-position":"top",prop:"cover"}},[i("Upload",{model:{value:t.form.cover,callback:function(e){t.$set(t.form,"cover",e)},expression:"form.cover"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:t.$t("common.content"),prop:"content"}},[i("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)],1)],1)},a=[],o=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])}),r=[],s=(i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    upload\n  ")]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:t.action,"list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n        Click upload\n      ")])],1),t._v(" "),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n      Cancel\n    ")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      Confirm\n    ")])],1)],1)}),c=[],l=(i("456d"),i("5f87")),u={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{action:"https://yii2.razonyang.com/api/backend/v1/upload/images?access_token="+Object(l["a"])(),dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var i=e.uid,n=Object.keys(this.listObj),a=0,o=n.length;a<o;a++)if(this.listObj[n[a]].uid===i)return this.listObj[n[a]].url=t.data.url,void(this.listObj[n[a]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=Object.keys(this.listObj),n=0,a=i.length;n<a;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new Promise((function(a,o){var r=new Image;r.src=i.createObjectURL(t),r.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)}))}}},d=u,m=(i("2954"),i("2877")),f=Object(m["a"])(d,s,c,!1,null,"171eed7b",null),h=f.exports,p=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],g=p,b=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],v=b,y=(i("ac4d"),i("8a81"),[]);function w(){return window.tinymce}var _=function(t,e){var i=document.getElementById(t),n=e||function(){};if(!i){var a=document.createElement("script");a.src=t,a.id=t,document.body.appendChild(a),y.push(n);var o="onload"in a?r:s;o(a)}function r(e){e.onload=function(){this.onerror=this.onload=null;var t=!0,i=!1,n=void 0;try{for(var a,o=y[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var r=a.value;r(null,e)}}catch(s){i=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}y=null},e.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+t),e)}}function s(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,i=!1,n=void 0;try{for(var a,o=y[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var r=a.value;r(null,t)}}catch(s){i=!0,n=s}finally{try{e||null==o.return||o.return()}finally{if(i)throw n}}y=null}}}i&&n&&(w()?n(null,i):y.push(n))},k=_,j="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",C={name:"Tinymce",components:{editorImage:h},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;k(j,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:v,menubar:this.menubar,plugins:g,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",i.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},O=C,x=(i("9adc"),Object(m["a"])(O,o,r,!1,null,"c6234f8a",null)),S=x.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-upload",{staticClass:"image-uploader",attrs:{data:t.dataObj,multiple:!1,"show-file-list":!1,"on-success":t.handleImageSuccess,drag:"",action:t.action}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("\n      将文件拖到此处，或"),i("em",[t._v("点击上传")])])]),t._v(" "),i("div",{staticClass:"image-preview"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[i("img",{attrs:{src:t.imageUrl+"?imageView2/1/w/200/h/200"}}),t._v(" "),i("div",{staticClass:"image-preview-action"},[i("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])])],1)},I=[],T={name:"SingleImageUpload",props:{value:{type:String,default:""}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""},action:"https://yii2.razonyang.com/api/backend/v1/upload/images?access_token="+Object(l["a"])()}},computed:{imageUrl:function(){return this.value}},methods:{rmImage:function(){this.emitInput("")},emitInput:function(t){this.$emit("input",t)},handleImageSuccess:function(t,e,i){this.emitInput(t.data.url)},beforeUpload:function(){return!0}}},E=T,U=(i("b8d1"),Object(m["a"])(E,$,I,!1,null,"6c12a296",null)),L=U.exports,V=i("1aba"),D=i("b804"),z=i("2423"),N=i("12c0"),R=i("77ac"),q={status:1,category_id:void 0,title:"",content:"",summary:"",cover:"",version:void 0,release_time:void 0},M={name:"Detail",components:{Tinymce:S,MDinput:V["a"],Upload:L,Sticky:D["a"],StatusDropdown:R["b"]},props:{id:{type:Number,default:0}},data:function(){var t=this,e=function(e,i,n){if(""===i){var a=t.$t("validate.required",{field:t.$t("common."+e.field)});n(new Error(a))}else n()};return{form:Object.assign({},q),loading:!1,categories:[],rules:{title:[{validator:e}],summary:[{validator:e}],release_time:[{validator:e}],content:[{validator:e}],author:[{validator:e}]},tempRoute:{}}},computed:{summaryLength:function(){return this.form.summary.length},releaseTime:{get:function(){return+new Date(1e3*this.form.release_time)},set:function(t){this.form.release_time=new Date(t).getTime()/1e3}}},created:function(){this.getDetail(),this.tempRoute=Object.assign({},this.$route)},methods:{isEdit:function(){return this.id>0},getDetail:function(){var t=this;this.isEdit()?Object(z["c"])(this.id,{expand:"version,content"}).then((function(e){t.form=e.data,t.categories=[{id:e.data.category_id,name:e.data.category_name}],t.setTagsViewTitle(),t.setPageTitle()})).catch((function(t){console.log(t)})):this.form=Object.assign({},q)},setTagsViewTitle:function(){var t=this.$t("route.articleEdit"),e=Object.assign({},this.tempRoute,{title:"".concat(t," #").concat(this.form.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t=this.$t("route.articleEdit");document.title="".concat(t," - ").concat(this.form.id)},findCategories:function(t){var e=this;Object(N["c"])({filter:{name:t}}).then((function(t){e.categories=t.data.items}))},submit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.isEdit()?Object(z["e"])(t.id,t.form).then((function(e){t.success()})):Object(z["a"])(t.form).then((function(e){t.success(e.data.id)})),t.loading=!1}))},success:function(t){this.$notify({title:this.$t("common.success"),message:this.isEdit()?this.$t("common.updateSuccessfully"):this.$t("common.createSuccessfully"),type:"success",duration:2e3}),this.isEdit()?this.getDetail():this.$router.push({name:"articleEdit",params:{id:t}})}}},B=M,K=(i("e92b"),Object(m["a"])(B,n,a,!1,null,"33360772",null));e["a"]=K.exports},e92b:function(t,e,i){"use strict";var n=i("40ef"),a=i.n(n);a.a},fcb3:function(t,e,i){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff6a408c"],{"007b":function(t,e,i){},"12c0":function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return c})),i.d(e,"e",(function(){return u})),i.d(e,"b",(function(){return l}));var n=i("b775"),a=i("4328"),s=i.n(a);function r(t){return Object(n["a"])({url:"/article-categories?"+s.a.stringify(t),method:"get"})}function o(t,e){return e=e?"?"+s.a.stringify(e):"",Object(n["a"])({url:"/article-categories/".concat(t).concat(e),method:"get"})}function c(t){return Object(n["a"])({url:"/article-categories",method:"post",data:t})}function u(t,e){return Object(n["a"])({url:"/article-categories/"+t,method:"put",data:e})}function l(t){return Object(n["a"])({url:"/article-categories/"+t,method:"delete"})}},"20dc":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-container"},[i("el-form",{ref:"form",staticClass:"form-container",attrs:{model:t.form,rules:t.rules,"label-position":"top"}},[i("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.form.status}},[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submit}},[t._v("\n        "+t._s(t.$t("common.submit"))+"\n      ")])],1),t._v(" "),i("div",{staticClass:"form-main-container"},[i("el-row",[i("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[i("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[t._v("\n            "+t._s(t.$t("common.name"))+"\n          ")])],1)],1)],1)],1)],1)},a=[],s=(i("c5f6"),i("1aba")),r=i("b804"),o=i("12c0"),c={name:""},u={name:"Detail",components:{MDinput:s["a"],Sticky:r["a"]},props:{id:{type:Number,default:0}},data:function(){var t=this,e=function(e,i,n){if(""===i){var a=t.$t("validate.required",{field:t.$t("common."+e.field)});n(new Error(a))}else n()};return{form:Object.assign({},c),loading:!1,rules:{name:[{validator:e}]},tempRoute:{}}},computed:{releaseTime:{get:function(){return+new Date(1e3*this.form.release_time)},set:function(t){this.form.release_time=new Date(t).getTime()/1e3}}},created:function(){this.getDetail(),this.tempRoute=Object.assign({},this.$route)},methods:{isEdit:function(){return this.id>0},getDetail:function(){var t=this;this.isEdit()?Object(o["d"])(this.id).then((function(e){t.form=e.data,t.setTagsViewTitle(),t.setPageTitle()})).catch((function(t){console.log(t)})):this.form=Object.assign({},c)},setTagsViewTitle:function(){var t=this.$t("route.articleCategoryEdit"),e=Object.assign({},this.tempRoute,{title:"".concat(t," #").concat(this.form.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t=this.$t("route.articleCategoryEdit");document.title="".concat(t," - ").concat(this.form.id)},submit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.isEdit()?Object(o["e"])(t.id,t.form).then((function(e){t.success()})):Object(o["a"])(t.form).then((function(e){t.success(e.data.id)})),t.loading=!1}))},success:function(t){this.$notify({title:this.$t("common.success"),message:this.isEdit()?this.$t("common.updateSuccessfully"):this.$t("common.createSuccessfully"),type:"success",duration:2e3}),this.isEdit()?this.getDetail():this.$router.push({name:"articleCategoryEdit",params:{id:t}})}}},l=u,m=(i("7b0e"),i("2877")),d=Object(m["a"])(l,n,a,!1,null,"3c090698",null);e["a"]=d.exports},"7b0e":function(t,e,i){"use strict";var n=i("007b"),a=i.n(n);a.a},d214:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("detail",{attrs:{id:t.id}})},a=[],s=i("20dc"),r={name:"EditForm",components:{Detail:s["a"]},data:function(){return{id:parseInt(this.$route.params.id)}}},o=r,c=i("2877"),u=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=u.exports}}]);
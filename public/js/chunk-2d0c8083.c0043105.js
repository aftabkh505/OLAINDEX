(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8083"],{"52c3":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bg-white"},[r("b-row",{staticStyle:{height:"5rem"}}),r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{md:"6"}},[r("p",{staticClass:"h1 text-center mb-4"},[e._v("OLAINDEX")]),r("b-card",{staticClass:"shadow border-0",attrs:{"bg-variant":"light","header-class":"border-bottom-0"},scopedSlots:e._u([{key:"header",fn:function(){return[r("i",{staticClass:"ri-lock-fill"}),e._v(" 登陆 ")]},proxy:!0}])},[r("b-card-body",[r("b-form",{on:{submit:e.login}},[r("b-form-group",{attrs:{label:"用户名","label-for":"name"}},[r("b-form-input",{ref:"name",attrs:{id:"name",type:"text",required:"",placeholder:"请输入用户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"请输入密码","label-for":"name"}},[r("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[r("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{small:""}}),r("span",{staticClass:"mx-2"},[e._v("登录")])],1)],1)],1)],1)],1)],1)],1)},n=[],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"page-login",data:function(){return{loading:!1,form:{name:"",password:""}}},methods:c({},Object(s["b"])(["handleLogin"]),{login:function(e){e.preventDefault();var t=this;t.loading=!0,t.handleLogin(t.form).then((function(e){return t.loginSuccess(e)})).catch((function(e){return t.loginFailed(e)}))},loginSuccess:function(e){console.log(e);var t=this;t.loading=!1,t.$router.push({name:"dashboard"}),setTimeout((function(){t.$toasted.success("欢迎回来")}),1e3)},loginFailed:function(e){var t=this;t.loading=!1,console.log(e.response)}})},u=l,b=r("2877"),d=Object(b["a"])(u,o,n,!1,null,null,null);t["default"]=d.exports}}]);
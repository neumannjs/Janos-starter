(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1189:function(t,n,o){"use strict";o.r(n);o(90),o(30);var e={layout:"centered",auth:!1,mounted:function(){var t=window.location.pathname.split("/")[1];["login","admin"].includes(t)&&(t=""),t+=t.length>0?"/":"",this.$auth.loggedIn?this.$router.push("/"+t+"admin/"):this.$auth.loginWith("githubProxy",{params:{redirect_uri:window.location.protocol+"//"+window.location.host+"/"+t+"callback/"}})}},l=o(36),component=Object(l.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);n.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{359:function(t,e,r){var content=r(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("32ac2e46",content,!0,{sourceMap:!1})},360:function(t,e,r){var content=r(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("64e55330",content,!0,{sourceMap:!1})},361:function(t,e,r){var content=r(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("f90fd602",content,!0,{sourceMap:!1})},362:function(t,e,r){var content=r(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("029ee0c6",content,!0,{sourceMap:!1})},363:function(t,e,r){var content=r(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("b7a70dba",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";var n={name:"DescriptionCard",components:{Card:r(143).a},props:{headerString:{type:String,default:""},subheaderString:{type:String,default:""},subheaderUrl:{type:String,default:""},headerOn:{type:Boolean,default:!0},subheaderOn:{type:Boolean,default:!0}}},o=(r(370),r(1)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{attrs:{"header-string":this.headerString,"subheader-string":this.subheaderString,"subheader-url":this.subheaderUrl,"subheader-on":this.subheaderOn,"header-on":this.headerOn}},[e("div",{staticClass:"description-string"},[this._t("default")],2)])},[],!1,null,"58739659",null);e.a=component.exports},367:function(t,e,r){"use strict";var n={name:"InfoPane"},o=(r(372),r(1)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-pane-container"},[e("div",{staticClass:"wrapper-margin wrapper-container"},[this._t("default")],2)])},[],!1,null,"e86be0c0",null);e.a=component.exports},368:function(t,e,r){"use strict";var n=r(359);r.n(n).a},369:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".profile-card-container[data-v-28930ce0]{width:18%;background-color:#fff;border-radius:6px}.cardTitle[data-v-28930ce0]{padding:.25em;font-size:1.5em;text-align:center;font-weight:700;color:#fff;border-radius:6px 6px 0 0}.cardTitle[data-v-28930ce0],.lower[data-v-28930ce0]{background-color:#0a2049}.lower[data-v-28930ce0]{display:flex;align-items:center;flex-direction:column;padding:0 1em 1em;color:#000;border-radius:0 0 6px 6px}.lower div.row[data-v-28930ce0]{display:flex;flex-direction:row}.image img[data-v-28930ce0]{border-radius:6px}#twitter[data-v-28930ce0]{margin-right:1em}.button.action[data-v-28930ce0]{font-weight:700;width:12em;color:#0a2049;background-color:#fff;border-color:#fff;margin-top:1em}.button.action[data-v-28930ce0]:hover{cursor:pointer;-webkit-animation:jelly-data-v-28930ce0 .5s;animation:jelly-data-v-28930ce0 .5s}@-webkit-keyframes jelly-data-v-28930ce0{0%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}50%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}75%{-webkit-transform:scale(.95,1.05);transform:scale(.95,1.05)}}@keyframes jelly-data-v-28930ce0{0%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9,1.1);transform:scale(.9,1.1)}50%{-webkit-transform:scale(1.1,.9);transform:scale(1.1,.9)}75%{-webkit-transform:scale(.95,1.05);transform:scale(.95,1.05)}}",""])},370:function(t,e,r){"use strict";var n=r(360);r.n(n).a},371:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".description-string[data-v-58739659]{font-family:Helvetica Neue;font-size:.75em;color:#999;padding:8px}",""])},372:function(t,e,r){"use strict";var n=r(361);r.n(n).a},373:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".info-pane-container[data-v-e86be0c0]{width:100%;margin-left:5%}.wrapper-container[data-v-e86be0c0]{display:flex;flex-direction:column;align-items:center;width:100%}.wrapper-margin>*[data-v-e86be0c0]{margin-bottom:10px}",""])},374:function(t,e,r){"use strict";r(20);var n=r(4),o=r(15),c=r.n(o),l=r(60),d={name:"SignupCard",components:{},methods:{cardModal:function(){this.$modal.open({parent:this,component:l.a,width:900,hasModalCard:!0,props:{initialState:!1}})},getTwitterCreds:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$post("api/v1/twitter/signin");case 2:e=t.sent,c.a.set("firstVisit",!0),c.a.set("twitterToken",e.oauth_token),window.location="https://api.twitter.com/oauth/authenticate?oauth_token=".concat(e.oauth_token);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},f=(r(368),r(1)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card profile-card-container"},[r("h1",{staticClass:"cardTitle"},[t._v("\n    Join Kowalla\n  ")]),t._v(" "),r("div",{staticClass:"lower"},[r("div",{staticClass:"row"},[r("a",{staticClass:"image is-48x48",attrs:{id:"twitter"},on:{click:t.getTwitterCreds}},[r("img",{attrs:{src:"https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"}})]),t._v(" "),t._m(0)]),t._v(" "),r("a",{staticClass:"button action",on:{click:t.cardModal}},[t._v("Sign Up")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"image is-48x48",attrs:{id:"github",href:"https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00"}},[e("img",{attrs:{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}})])}],!1,null,"28930ce0",null);e.a=component.exports},375:function(t,e,r){"use strict";var n={name:"KowButton",props:{nativeType:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},computed:{buttonDisabled:function(){return this.disabled}},methods:{handleClick:function(t){this.$emit("edit-button-clicked",t)}}},o=(r(378),r(1)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"kow-button",attrs:{disabled:this.buttonDisabled,autofocus:this.autofocus,type:this.nativeType},on:{click:this.handleClick}},[this.$slots.default?e("span",[this._t("default")],2):this._e()])},[],!1,null,"65d41678",null);e.a=component.exports},376:function(t,e,r){"use strict";r(28);var n={name:"ProfileCard",props:{name:{type:String,default:""},username:{type:String,default:""},profilePictureUrl:{type:String,default:""},subheaderString:{type:String,default:"test"},subheaderUrl:{type:String,default:"/about"},stats:{type:Array,default:function(){return[]}},type:{type:String,default:""},isMobile:{type:Boolean,default:!1}},computed:{getStatInfoByIndex:function(i){return this.stats[i].name},getRoute:function(){return"project"===this.type?"/dev/project/".concat(this.username):"/dev/user/".concat(this.username)}}},o=(r(380),r(1)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card profile-card-container"},[r("nuxt-link",{attrs:{to:t.getRoute}},[r("img",{staticClass:"image",class:{"is-mobile":t.isMobile},attrs:{src:t.profilePictureUrl,onerror:"this.src='https://gradientjoy.com/40'"}})]),t._v(" "),r("nuxt-link",{staticClass:"name font-family",attrs:{to:t.getRoute}},[r("b",[t._v(t._s(t.name))])]),t._v(" "),r("div",{staticClass:"username font-family"},[r("nuxt-link",{staticClass:"username-link",attrs:{to:t.getRoute}},[r("b",[t._v("@"+t._s(t.username))])])],1),t._v(" "),r("div",{staticClass:"level is-marginless",class:{"is-mobile":t.isMobile}},t._l(t.stats,function(e){return r("div",{key:e.name,staticClass:"level-item stat-container is-paddingless"},[r("div",{staticClass:"stat-title"},[r("b",[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"stat-info"},[r("b",[t._v(t._s(e.stat))])])])}),0),t._v(" "),r("div",{staticClass:"subheader"},[r("nuxt-link",{staticClass:"subheader-content",attrs:{to:t.subheaderUrl}},[r("b",[t._v(t._s(t.subheaderString))])])],1)],1)},[],!1,null,"647080a9",null);e.a=component.exports},378:function(t,e,r){"use strict";var n=r(362);r.n(n).a},379:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".kow-button[data-v-65d41678]{height:35px;border-radius:6px;background-color:#fff;border:1px solid #e0dddd;font-family:Helvetica Neue;color:#39c9a0;font-size:.875em;cursor:pointer}.kow-button[data-v-65d41678]:hover{background-color:rgba(57,201,160,.75);border:1px solid #2f8168;color:#fff}.kow-button[data-v-65d41678]:focus{outline:none}",""])},380:function(t,e,r){"use strict";var n=r(363);r.n(n).a},381:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".profile-card-container[data-v-647080a9]{display:flex;width:100%;text-align:center;align-items:center;flex-direction:column;background-color:#fff;border-radius:6px;height:auto}.image[data-v-647080a9]{border-radius:6px;margin-top:16px;margin-bottom:8px;height:86px;width:86px;border:1px solid #e0dddd}.image.is-mobile[data-v-647080a9]{height:48px;width:48px}.font-family[data-v-647080a9]{font-family:Helvetica Neue}.font-family[data-v-647080a9],.name[data-v-647080a9]{text-decoration:none}.name[data-v-647080a9]{font-size:1em;color:#000;text-align:center}.username[data-v-647080a9]{margin-top:-4px;font-size:.75em;color:#999}.username[data-v-647080a9]:hover{color:#39c9a0;cursor:pointer}.stat-container[data-v-647080a9]{display:flex;flex-direction:column;width:48px}.stat-title[data-v-647080a9]{font-size:.75em;color:#000}.stat-info[data-v-647080a9]{margin-top:-2px;font-size:1em;color:#39c9a0}.subheader[data-v-647080a9]{border-top:1px solid #e0dddd;padding-top:4px;padding-bottom:4px;width:100%;text-align:center;vertical-align:middle}.subheader-content[data-v-647080a9]{font-family:Helvetica Neue;font-size:.75em;color:#39c9a0}.subheader-content[data-v-647080a9]:hover{text-decoration:underline}.username-link[data-v-647080a9]{font-family:Helvetica Neue;font-size:1em;color:#999;text-decoration:none;cursor:pointer}.username-link[data-v-647080a9]:hover{text-decoration:underline;color:#39c9a0}",""])},411:function(t,e,r){var content=r(466);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("0a6c2391",content,!0,{sourceMap:!1})},412:function(t,e,r){var content=r(468);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("c92be546",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";var n=r(411);r.n(n).a},466:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".box[data-v-67afefb6]{width:800px;max-width:100%}.modal-content[data-v-67afefb6]{border-radius:6px;margin:0;color:#39c9a0;width:auto}.button.action[data-v-67afefb6]{color:#fff;background-color:#39c9a0;border-color:#39c9a0;margin-bottom:1.75em}.profilePic img[data-v-67afefb6]{width:180px;height:180px;border-radius:6px;-o-object-fit:cover;object-fit:cover}.profilePicSection[data-v-67afefb6]{text-align:center}",""])},467:function(t,e,r){"use strict";var n=r(412);r.n(n).a},468:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".fullWidth{width:100%!important}",""])},492:function(t,e,r){"use strict";r.r(e);r(39),r(29),r(20);var n=r(4),o=r(62),c=r(142),l=r(141),d=r(61),f=r(376),m=r(366),h=r(367),v=r(143),x=r(80),w=r(375),_=(r(115),r(114),r(140),{name:"CreateSpaceModal",props:{firstName:{type:String,default:""},lastName:{type:String,default:""},username:{type:String,default:""},profilePicture:{type:String,default:""},description:{type:String,default:""},profileId:{type:String,default:""}},data:function(){return{file:"",editForm:{firstName:"",lastName:"",username:"",description:"",profilePicture:""}}},mounted:function(){this.editForm.firstName=this.firstName,this.editForm.lastName=this.lastName,this.editForm.username=this.username,this.editForm.profilePicture=this.profilePicture,this.editForm.description=this.description},methods:{selectFile:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.file=this.$refs.file.files[0],e=new FileReader,r=this,e.onload=function(t){r.editForm.profilePicture=t.target.result},e.readAsDataURL(this.file);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),uploadImage:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,image;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("file",this.file),e.append("picType","user"),t.prev=3,t.next=6,this.$axios.$post("/api/v1/profilePicUpload",e);case 6:image=t.sent,this.editForm.profilePicture=image.file,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),this.$toast.open({duration:5e3,message:"There was an error uploading your profile picture. Please try again.",position:"is-top",type:"is-danger"});case 14:case"end":return t.stop()}},t,this,[[3,10]])}));return function(){return t.apply(this,arguments)}}(),editProfile:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.profilePicture===e.profilePicture){t.next=4;break}return t.next=3,this.uploadImage();case 3:this.profilePicture.includes("https://kowalla-dev")&&(r=this.profilePicture.split("profile-pics/")[1],this.$axios.$post("/api/v1/imageDelete",{bucket:"kowalla-dev/user/profile-pics",fileName:r}));case 4:return t.prev=4,t.next=7,this.$axios.$put("api/v1/profiles/".concat(this.profileId),{firstName:e.firstName,lastName:e.lastName,username:e.username,description:e.description,profilePicture:e.profilePicture});case 7:n=t.sent,o={firstName:n.firstName,lastName:n.lastName,profilePicture:n.profilePicture,description:n.description,username:n.username},this.$store.commit("user/editProfile",o),n.username!==this.username?this.$router.push({path:"/dev/user/".concat(n.username)}):this.$router.go(),this.$parent.close(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[4,14]])}));return function(e){return t.apply(this,arguments)}}()}}),y=(r(465),r(1)),k=Object(y.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-content"},[r("div",{staticClass:"box"},[r("section",[r("div",{staticClass:"title"},[t._v("Edit Your Profile")]),t._v(" "),r("b-field",{attrs:{label:"Your first name"}},[r("b-input",{attrs:{maxlength:"20"},model:{value:t.editForm.firstName,callback:function(e){t.$set(t.editForm,"firstName",e)},expression:"editForm.firstName"}})],1),t._v(" "),r("b-field",{attrs:{label:"Your last name"}},[r("b-input",{attrs:{maxlength:"20"},model:{value:t.editForm.lastName,callback:function(e){t.$set(t.editForm,"lastName",e)},expression:"editForm.lastName"}})],1),t._v(" "),r("b-field",{attrs:{label:"Your username"}},[r("b-input",{attrs:{maxlength:"20"},model:{value:t.editForm.username,callback:function(e){t.$set(t.editForm,"username",e)},expression:"editForm.username"}})],1),t._v(" "),r("b-field",{attrs:{label:"Profile Picture"}}),t._v(" "),r("div",{staticClass:"profilePicSection"},[r("p",{staticClass:"profilePic"},[r("img",{attrs:{src:t.editForm.profilePicture,onerror:"this.src='https://gradientjoy.com/180'"}})]),t._v(" "),r("a",{staticClass:"button action"},[r("input",{ref:"file",staticClass:"file-input",attrs:{type:"file"},on:{change:function(e){return t.selectFile()}}}),t._v(" "),t.editForm.profilePicture?r("span",[t._v("Change Profile Picture")]):r("span",[t._v("Add Profile Picture")]),t._v("  \n          "),r("font-awesome-icon",{attrs:{icon:"camera"}})],1)]),t._v(" "),r("b-field",{attrs:{label:"Description"}},[r("b-input",{attrs:{maxlength:"500",type:"textarea"},model:{value:t.editForm.description,callback:function(e){t.$set(t.editForm,"description",e)},expression:"editForm.description"}})],1),t._v(" "),r("a",{staticClass:"button action",on:{click:function(e){return t.editProfile(t.editForm)}}},[t._v("\n        Submit\n      ")])],1)])])},[],!1,null,"67afefb6",null).exports,C=r(386),P=r(388),N=r(374),$={name:"UserPageTest",components:{EmptyPostList:P.a,NavPane:l.a,NavCard:x.a,Card:v.a,Header:d.a,ProfileCard:f.a,InfoPane:h.a,DescriptionCard:m.a,EditButton:w.a,EditProfileModal:k,Post:C.a,MobileHeader:o.a,MobileFooter:c.a,SignupCard:N.a},data:function(){return{username:null,profileId:"",firstName:"",lastName:"",profilePictureUrl:"",profileDescription:"",profileStats:[],profileSubs:{subscriptions:[],owned:[]},postList:[]}},computed:{getUsername:function(){return this.username},sort:function(){return this.$store.state.sorting.profile}},watch:{sort:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("/api/v1/profile/posts/".concat(this.profileId,"/").concat(this.sort,"/0"));case 2:return this.postList=t.sent,t.next=5,this.scroll();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},created:function(){this.username=this.$route.params.username},mounted:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("/api/v1/profiles/user/".concat(this.username));case 2:if(!(e=t.sent).hasOwnProperty("firstName")){t.next=22;break}return this.firstName=e.firstName,this.lastName=e.lastName,this.profileDescription=e.description,this.profilePictureUrl=e.profilePicture,this.profileId=e._id,this.profileStats.push({name:"Rep",stat:e.reputation}),this.profileStats.push({name:"Posts",stat:e.postCount}),this.profileStats.push({name:"Replies",stat:e.commentCount}),t.next=14,this.$axios.$get("/api/v1/profiles/".concat(this.profileId,"/subs"));case 14:return r=t.sent,this.profileSubs=r.profileSubscriptions,t.next=18,this.$axios.$get("/api/v1/profile/posts/".concat(this.profileId,"/").concat(this.sort,"/").concat(this.postList.length));case 18:return this.postList=t.sent,t.next=21,this.scroll();case 21:document.title="Kowalla - ".concat(this.firstName," ").concat(this.lastName);case 22:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{callEditProfileModal:function(){this.$modal.open({parent:this,component:k,props:{firstName:this.firstName,lastName:this.lastName,username:this.username,profilePicture:this.profilePictureUrl,description:this.profileDescription,profileId:this.profileId},width:900,hasModalCard:!0})},scroll:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.postList.length&&(e=!1,window.onscroll=Object(n.a)(regeneratorRuntime.mark(function t(){var n,o,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.getElementById("postFeed"),o=window.innerHeight+window.scrollY>=n.offsetHeight-500,e||!o){t.next=15;break}return e=!0,t.next=6,r.$axios.$get("/api/v1/profile/posts/".concat(r.profileId,"/").concat(r.sort,"/").concat(r.postList.length));case 6:return c=t.sent,t.next=9,r.postList.concat(c);case 9:if(l=t.sent,!c.length){t.next=15;break}return t.next=13,l;case 13:r.postList=t.sent,e=!1;case 15:case"end":return t.stop()}},t)})));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),removePostFromPostList:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(this.postList);case 1:if((t.t1=t.t0()).done){t.next=10;break}if(i=t.t1.value,this.postList[i]._id!==e){t.next=8;break}return this.postList.splice(i,1),t.next=7,this.$axios.delete("/api/v1/communities/".concat(this.communityId,"/posts/").concat(e));case 7:return t.abrupt("break",10);case 8:t.next=1;break;case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},S=(r(467),Object(y.a)($,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"screen background-tint"},[r("div",{staticClass:"container is-fullhd is-hidden-touch"},[r("div",{staticClass:"columns is-marginless main-margin",class:{firstVisit:this.$store.state.firstVisit.firstVisit}},[r("div",{staticClass:"column is-one-quarter is-paddingless side-pane"},[r("NavPane",{staticClass:"fixed"})],1),t._v(" "),r("div",{staticClass:"column is-one-half is-paddingless",attrs:{id:"postFeed"}},[t.postList.length?t._e():r("EmptyPostList"),t._v(" "),t._l(t.postList,function(e){return r("Post",{key:e._id,attrs:{post:e},on:{"delete-post":t.removePostFromPostList}})})],2),t._v(" "),r("div",{staticClass:"column is-one-quarter is-paddingless side-pane"},[r("InfoPane",[this.$store.state.user.loggedIn?t._e():r("SignupCard",{staticClass:"fullWidth"}),t._v(" "),r("ProfileCard",{attrs:{name:t.firstName+" "+t.lastName,"profile-picture-url":t.profilePictureUrl,username:t.username,stats:t.profileStats,type:"user"}}),t._v(" "),r("DescriptionCard",{attrs:{"header-string":"About "+t.firstName,"subheader-on":!1}},[t._v("\n            "+t._s(t.profileDescription)+"\n          ")]),t._v(" "),t.profileSubs.owned.length>0&&this.$store.state.user.username!==t.username?r("Card",{attrs:{"header-string":"Made by "+t.firstName,"subheader-on":!1,"header-on":""}},[r("NavCard",{attrs:{"profile-subs":t.profileSubs,type:"profile",selector:"owned"}})],1):t._e(),t._v(" "),t.profileSubs.subscriptions.length>0&&this.$store.state.user.username!==t.username?r("Card",{attrs:{"header-string":t.firstName+"'s Subscriptions","subheader-string":"More communities you'll love"}},[r("NavCard",{attrs:{"profile-subs":t.profileSubs,type:"profile",selector:"subscriptions"}})],1):t._e()],1)],1)])]),t._v(" "),r("div",{staticClass:"columns is-marginless is-hidden-desktop mobile-main-margin",class:{firstVisit:this.$store.state.firstVisit.firstVisit}},[r("div",{staticClass:"side-pane"},[r("ProfileCard",{attrs:{name:t.firstName+" "+t.lastName,"profile-picture-url":t.profilePictureUrl,username:t.username,stats:t.profileStats,"is-mobile":"",type:"user"}})],1),t._v(" "),r("DescriptionCard",{staticClass:"newsfeed-margin",attrs:{"header-string":"About "+t.firstName,"subheader-on":!1}},[t._v("\n      "+t._s(t.profileDescription)+"\n    ")]),t._v(" "),r("div",{staticClass:"side-pane"},[this.$store.state.user.username===t.username?r("EditButton",{on:{"edit-button-clicked":t.callEditProfileModal}},[r("b",[t._v("Edit Settings")])]):t._e()],1),t._v(" "),t.postList.length?t._e():r("EmptyPostList"),t._v(" "),t._l(t.postList,function(e){return r("Post",{key:e._id,staticClass:"newsfeed-margin",attrs:{"is-mobile":!0,post:e},on:{"delete-post":t.removePostFromPostList}})})],2)])},[],!1,null,null,null));e.default=S.exports}}]);
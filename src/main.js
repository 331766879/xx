// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import  vueRouter from 'vue-router';
Vue.use(vueRouter);

import vueResource from 'vue-resource';
Vue.use(vueResource);

import '../static/hello-mui/css/mui.min.css';
import  '../static/mui/css/mui.css';
// import '../static/mui/js/mui.min';
import '../static/iconfont/iconfont.css'

import '../static/site.css';
import $ from 'jquery';
import animate from 'animate.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import 'mint-ui/lib/style.min.css';
import mintUI from 'mint-ui';
Vue.use(mintUI);

//  使用图片预览组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


import home from './components/home';
import all_products from './components/All_ products';
import shop_intro from './components/Shop_intro';
import Pindan from './components/Pindan';
import pindan_list from './components/Pindan_list';
import Details from './components/Details';
import datails_evaluate from './components/Details_evaluate';
import Details_info from './components/details_info';
import shopping from './components/shopping';
import shop_true from './components/shopinfo';
import line_item from './components/Line _item';
import line_item_list from './components/Line_item_list';
import after_sale from './components/Shou_hou/After_sale';
import after_sale_list from './components/Shou_hou/After_sale_list';
import after_sale_info from './components/Shou_hou/After_sale_info';
import type_of_service from './components/Shou_hou/Type_of_service';
import return_cargo from './components/Shou_hou/Return_cargo';
import return_cargo_list from './components/Shou_hou/Return_cargo_list';
import logistics from './components/Shou_hou/Logistics';
import publish_evaluate from './components/Publish_evaluate';


// 3.0.2 定义路由规则
var router1=new vueRouter({
  linkActiveClass:'mui-active',  //改变路由激活时的class名称
  routes:[
    {path:'/',redirect:'/home'}, //设置当服务器启动的时候默认进入 /home中
    {path:'/home',component:home},
    {path:'/all_products',component:all_products},
    {path:'/shop_intro',component:shop_intro},
    {path:'/Pindan',component:Pindan},
    {path:'/pindan_list',component:pindan_list},
    {path:'/details',component:Details},
    {path:'/datails_evaluate',component:datails_evaluate},
    {path:'/details_info/:id',component:Details_info},
    {path:'/shopping',component:shopping},
    {path:'/shop_true',component:shop_true},
    {path:'/line_item',component:line_item},
    {path:'/line_item_list',component:line_item_list},
    {path:'/after_sale',component:after_sale},
    {path:'/after_sale_list',component:after_sale_list},
    {path:'/after_sale_info',component:after_sale_info},
    {path:'/type_of_service',component:type_of_service},
    {path:'/return_cargo',component:return_cargo},
    {path:'/return_cargo_list',component:return_cargo_list},
    {path:'/logistics',component:logistics},
    {path:'/publish_evaluate',component:publish_evaluate},

  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el:'#app',
  // 使用路由对象实例
  router:router1,
  // render:function(create){create(App)} //es5的写法
  render:c=>c(App)  // es6的函数写法 =>：goes to
});


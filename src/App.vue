<template>
  <div>


    <!--&lt;!&ndash;2.0 利用vue-router的<router-vue>进行占位&ndash;&gt;-->
    <router-view></router-view>


    <!--3.0 利用mui中tabbar组件实现系统底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <div class="tit">
        <span class="mui-tab-label">商品分类</span>
        </div>

      </router-link>
      <router-link class="mui-tab-item" to="/shop_intro">
        <div class="tit">
        <span class="mui-tab-label">店铺介绍</span>
        </div>
      </router-link>
      <router-link class="mui-tab-item" to="/after_sale">
        <span class="iconfont icon-kefu1"></span>
        <span class="mui-tab-label">客服联系</span>

      </router-link>
    </nav>
  </div>
</template>

<script>

  export default {

}
</script>

<style >

  .mui-bar-tab{
  height: 100px;
  padding-bottom:40px;
}
  .tit{
    width: 138px;
    line-height: 40px;
    border-right: 1px solid #999 !important;
  }
  .mui-tab-label{
    font-size: 14px;

  }
  .mui-bar{
    background-color: #fff;
    filter:alpha(Opacity=60);-moz-opacity:0.8;opacity: 0.8;
  }
  .icon-kefu1::before{
    top: 3px;
    font-size:30px;
    display: block;


  }
</style>

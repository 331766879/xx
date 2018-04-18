<template>
   <div class="yu">
     <div class="heard">
       <header class="mint-header  is-fixed">
         <div class="mint-header-button is-left">
           <a href="#/After_sale" class="router-link-active">
             <button class="mint-button mint-button--default mint-button--normal">
               <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
             </button></a></div>
         <span>退款详情</span>
       </header>
     </div>

     <div class="title_1">

       <div class="title_1_l">
         <i class="iconfont icon-success"></i>
       </div>
         <div class="title_1_r">
         <p>退货退款成功</p>
         <span>2018-03-27 15:22:12</span>
         </div>
       </div>

     <router-link to="logistics">
     <div class="title_2">
       <div class="title_2_q">
         <p>退货数量</p>
         <div>
           <span>20</span>
         </div>
       </div>
     </div>
     </router-link>

     <div class="title_3">
       <div class="title_3_n">
         <p>退款金额</p>
         <div>
           <i>￥ 99.00</i>
         </div>
       </div>
     </div>

     <div class="title_4">
        <span>退款信息</span>
     </div>

     <div class="title_1_b">
       <img src="../../../src/assets/title.png" alt="">
       <div class="title_1_b_r">
         <p>渔获高端定制t个性给定不一样的你</p>
         <span>颜色分类：黑色；</span>
         <span>尺码：L</span> <br>
       </div>
     </div>

     <div class="title_5">
        <span>退回总金额：</span>
        <span>退款金额：</span>
        <span>申请时间：</span>
        <span>原订单号：</span>
     </div>

     </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .heard{
    line-height: 45px;
    margin-bottom: 40px;
  }
  .mint-header{
    padding: 0 14px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .mint-header span{
    color: #000;
  }
  .mint-button-icon i{
    color: #000;
  }

  .title_1{
    height: 90px;
    background-color: #464652;
    display: flex;
    justify-content:start;
    align-items: center;
  }
  .title_1 .title_1_l i{
    margin: 0 15px;
  }
  .title_1 .title_1_r p{
    font-size: 14px;
    color: #fff;
  }
  .title_1 .title_1_r span{
    font-size: 8px;
    color: #fff;
  }
  .icon-success:before {
    font-size:30px;
    color: #fff;
  }


  .title_2{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_2 .title_2_q{
    height: 100%;
    padding-right: 14px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 p,span{
    font-size: 8px;
    color: #000;
  }

  .title_3{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .title_3 .title_3_n{
    height: 50px;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_3 .title_3_n p{
    font-size: 7px;
    color: #000;
  }
  .title_3 .title_3_n i{
    font-style: normal;
    font-size: 8px;
    color: #dd0a0a;
  }

  .title_4{
    padding: 0 14px;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
  }

  .title_1_b{
    height: 100px;
    padding: 0 14px;
  }
  .title_1_b img{
    width: 86px;
    height: 86px;
    margin-top: 8px;
    border: 1px solid #999;
  }
  .title_1_b .title_1_b_r{
    width: 70%;
    height: 86px;
    margin-top: 8px;
    padding-left: 10px;
    float: right;

  }
  .title_1_b .title_1_b_r p{
    font-size: 8px;
    color: #000;
  }
  .title_1_b .title_1_b_r span{
    font-size: 7px;
    color: #999;
  }

  .title_5{
    height: 400px;
    padding: 15px 14px;
    background-color: #fff;
  }
  .title_5 span{
     display: block;
     color: #999;
  }

</style>

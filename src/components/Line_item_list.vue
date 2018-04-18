<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/Line_item" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>订单详情</span>
        </header>
      </div>

      <div class="title_1">
        <div class="title_1_2">
         <p>卖家已发货</p>
        <div class="title_1_x">
          <span>物流单号：12345667</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        </div>
      </div>

      <div class="title_2">
        <div  class="title_2_s">
          <div>
            <i class="iconfont icon-map"></i>
            <span>柚子</span>
          </div>
          <span>13797899348</span>
        </div>
        <div class="title_2_x">
          <span>江苏省无锡市新吴区国家软件团鲸鱼座A座7F</span>
          <i class="el-icon-arrow-right" ></i>
        </div>
      </div>

      <div class="title_3">
        <ul>
          <li>索罗特渔具 <i class="el-icon-arrow-right"></i> </li>
        </ul>
      </div>

      <div class="title_1_b">

        <img src="../../src/assets/title.png" alt="">
        <div class="title_1_b_r">
          <p>渔获高端定制t个性给定不一样的你</p>
          <span>颜色分类：黑色；</span>
          <span>尺码：L</span> <br>
          <ul>
            <p>￥<i>99.00</i></p>
            <li>×1</li>
          </ul>
        </div>
      </div>

      <div class="title_4">
        <button>退款</button>
      </div>

      <div class="title_5">
       <div class="title_5_1">
         <p>订单编号：34555555</p>
         <p>下单时间：2018-03-19 12:21:09</p>
       </div>
      </div>

       <div class="title_6">
         <div class="title_6_1">
         <p>支付宝方式：支付宝</p>
         </div>
       </div>

      <div class="title_7">
        <div class="title_7_1">
          <p>发票类型：普通发票</p>
          <p>发票抬头：个人</p>
          <p>发票内容：商品明细</p>
        </div>
      </div>

     <div class="title_8">
       <div class="title_8_q">
        <div class="title_8_1">
          <span>商品总额</span>
          <span>￥99.00</span>
        </div>
       <div class="title_8_2">
         <span>优惠</span>
         <span>￥1.5</span>
       </div>
       <div class="title_8_3">
         <span>运费</span>
         <span>￥12.00</span>
       </div>
       </div>
     </div>

    <div class="title_9">
       <div class="title_9_1">
         <span>实付款</span>
         <span><i>￥</i> <i>112.50</i> </span>
       </div>
    </div>

   <div class="title_10">
     <div class="title_10_1">
       <img src="../../src/assets/客服-灰.png" alt="" style="width: 22px; height: 22px;">
       <p>联系客服</p>
     </div>

     <div class="title_10_2">

         <button>查看物流</button>

         <router-link to="/publish_evaluate">
           <button style="">确认收货</button>
         </router-link>



     </div>

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
    background-color: #EFEFF4;
  }
  .mint-header span{
    color: #000;
  }
  .mint-button-icon i{
    color: #000;
  }
  .title_1{
    height: 90px;
    padding-right: 14px;
    background-color: #464652;
    display: flex;
    align-items: center;
  }
  .title_1 .title_1_2{
    width: 100%;
    margin-left: 44px;
  }
  .title_1 .title_1_2 p{
    font-size: 7px;
    color:#fff ;
  }
  .title_1 .title_1_2 .title_1_x{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 .title_1_2  .title_1_x span,i{
    font-size: 6px;
    color: #fff;
  }
  .title_1 .title_1_2  .title_1_x i{

  }

  .title_2{
    height: 89px;
    padding: 0 14px;
    margin-bottom: 10px;
    background-color: #fff;
    box-sizing: border-box;
  }
  .title_2 .title_2_s {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 .title_2_s i{
    margin-right: 10px;
  }
  .title_2 .title_2_s span{
    font-size:7px ;
    color: #000;
  }


  .title_2 .title_2_x{
    height: 45px;
    display: flex;
    justify-content: space-between;
  }
  .title_2 .title_2_x span{
    margin-left: 28px;
    font-size:7px ;
    color: #999;
  }
  .title_2 .title_2_x i{
    margin-top: 3px;
  }


  .title_3{
    height: 40px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;

  }
  .title_3 ul{
    width: 100%;
    padding: 0 14px;
    list-style: none;

  }
  .title_3 ul li{
    font-size:7px;
  }

  .title_1_b{
    height: 100px;
    padding: 0 14px;
    background-color: #EFEFF4;
    box-sizing: border-box;
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

  .title_1_b .title_1_b_r p:nth-child(4)> i{
    font-size: 7px;
    font-style: normal;
  }
  .title_1_b .title_1_b_r ul{
    float: right;
    width: 100%;
    list-style: none;
    margin-top: 20px;
  }
  .title_1_b .title_1_b_r ul>p{
    font-size: 6px !important;
    color: #dd0a0a !important;
    float: left;
  }
  .title_1_b .title_1_b_r ul>p i{
    font-style: normal;
    font-size: 8px;
    color: #dd0a0a;
  }
  .title_1_b .title_1_b_r ul li{
    font-size: 8px;
    float: right;
  }



  .title_4{
    height: 50px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .title_4 button{
    width: 80px;
    height: 31px;
    border-radius: 20px;
    border: 1px solid #000;
    font-size: 7px;
    margin-right: 14px;
  }

  .title_5{
    background-color: #fff;
    padding: 0 0 0 14px ;
  }
  .title_5 .title_5_1{
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #EFEFF4;
  }
  .title_5 .title_5_1 p{
    font-size: 7px;
  }
  .title_5 p:nth-child(1){
    margin-bottom: 14px;
    color: #999;
  }

  .title_6{
    padding: 0  0 0 14px;
    background-color: #fff;
  }
  .title_6 .title_6_1{
    padding: 16px 0;
    border-bottom: 1px solid #EFEFF4;
  }
  .title_6 .title_6_1 p{
    font-size: 7px;
  }


 .title_7{
   background-color: #fff;
   padding-left: 14px;
   margin-bottom: 10px;
 }

  .title_7 .title_7_1{
    padding: 16px 0;
  }
  .title_7 .title_7_1 p{
    font-size: 7px;
  }

  .title_8{
    background-color: #fff;
    padding-left: 14px;
  }
  .title_8 .title_8_q{
    padding: 16px 14px 16px 0;
    border-bottom: 1px solid #EFEFF4;
  }
  .title_8 span{
    font-size: 7px;
    color: #999;
  }
  .title_8_1,.title_8_2,.title_8_3{
    display: flex;
    justify-content: space-between;
  }

  .title_9{
    background-color: #fff;
    padding: 0 14px;
  }
  .title_9 .title_9_1{
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
  }
  .title_9 .title_9_1 span:nth-child(1){
    font-size: 7px;
    color: #000;
  }
  .title_9 .title_9_1 span:nth-child(2) i{
    color: #dd0a0a;
    font-style: normal;
  }
  .title_9 .title_9_1 span:nth-child(2) i:nth-child(1){
    font-size: 7px;
  }
  .title_9 .title_9_1 span:nth-child(2) i:nth-child(2){
    font-size:15px;
  }


  .title_10{
    padding: 0 14px;
    margin-top: 10px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
  .title_10 .title_10_1{
    text-align: center;
  }
  .title_10 .title_10_1 p{
    font-size: 7px;
  }
  .title_10 .title_10_2{
    display: flex;
    align-items: center;
  }

  .title_10 .title_10_2  button{
    width: 80px;
    height: 31px;
    border-radius: 20px;
    font-size: 7px;
  }
  .title_10 .title_10_2 >button{
    margin-right: 10px;
  }
  .title_10 .title_10_2 a button{
    border-color: #dd0a0a;
    color: #dd0a0a;
  }






</style>

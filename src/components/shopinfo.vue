<template>
  <div>
    <div class="heard">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left">
        <a href="#/pindan_list" class="router-link-active">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
          </button>
        </a>
      </div>
      <span class="mint-header-title">确认订单</span>
      <div class="mint-header-button is-right">
        <button class="mint-button mint-button--default mint-button--normal">
          <span class="mint-button-icon"><i class="mui-icon mui-icon-search"></i></span>
        </button>
      </div>
    </header>
    </div>

    <div class="title_1">
       <div  class="title_1_s">
         <div>
         <i class="iconfont icon-map"></i>
         <span>柚子</span>
         </div>
         <span>13797899348</span>
       </div>
       <div class="title_1_x">
         <span>江苏省无锡市新吴区国家软件团鲸鱼座A座7F</span>
         <i class="el-icon-arrow-right" ></i>
       </div>
    </div>


    <div class="title_2">
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

      <div class="title_3">
        <div class="title_3_n">
         <p>配送方式</p>
        <div>
          <span>快递 <i>￥12</i> </span>
          <i class="el-icon-arrow-right"></i>
        </div>
        </div>
      </div>

    <div class="title_3">
      <div class="title_3_n">
        <p>发票抬头</p>
        <div>
          <span>个人</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="title_4">
      <div class="title_4_n">
          <span>共1件</span>
          <span>合计：<i >￥105.00</i></span>
      </div>
    </div>

    <div class="title_5">
      <div class="title_5_n">
        <p>渔获币 <i>可用300个渔获币抵用￥3.00</i></p>
        <div>
          <mt-switch ></mt-switch>
        </div>
      </div>

    </div>

    <div class="title_5_f">
        <span>使用 <input type="text" value="" style="width: 50px;height: 16px; font-size: 8px;padding: 0;margin: 0; text-align: center">  渔获币抵用 <i>￥3.00</i></span>
    </div>



     <div class="title_6">
       <span>选填：</span><input type="text" placeholder="给商家留言(45字以内)" maxlength="45">
     </div>


    <div class="footer">
      <div class="footer_1">
        <span>实付款 <i>￥</i> <i>105.00</i> </span>
          <button  @click="toggle">提交订单</button>
      </div>
    </div>


    <!--弹框确认付款-->



    <transition name="show"
                enter-active-class="fadeInUpBig"
                leave-active-class="fadeOutRight"
    >

   <div class="mb animated" v-show="isshow">
    <div class="pop-up " >
        <div class="pop-up_1">
          <span>确认付款</span>
          <i class="iconfont icon-close"></i>
        </div>
      <div class="pop-up_2">
        <span>￥ <i>180.00</i> </span>
      </div>

      <div class="pop-up_3">
        <p>支付方式</p>
        <div class="pop-up_3_1">
          <div class="pop-up_3_1_l">
           <i class="iconfont icon-zhifubao" style="color: #0395DF;"></i>
            <span>支付宝</span>
          </div>
          <!--勾选圆点-->
          <div class="mint-cell-title">
            <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
            </label>
          </div>
        </div>
      </div>

      <div class="pop-up_3">
        <div class="pop-up_3_1">
          <div class="pop-up_3_1_l">
            <i class="iconfont icon-weixin1" style="color: #72D310;"></i>
            <span>微信支付</span>
          </div>
          <!--勾选圆点-->
          <div class="mint-cell-title">
            <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
            </label>
          </div>
        </div>
      </div>
      <div class="pop-up_3">
        <div class="pop-up_3_1">
          <div class="pop-up_3_1_l">
            <i class="iconfont icon-paypal" style="color: #023185"></i>
            <span>Paypal</span>
          </div>
          <!--勾选圆点-->
          <div class="mint-cell-title">
            <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
            </label>
          </div>
        </div>
      </div>


      <div class="pop-up_4">
         <button  @click="toggle" class="btn">确认付款</button>
      </div>

    </div>
   </div>
    </transition>

  </div>

</template>

<script>

    export default {
      data(){
        return{
          isshow:false
        }
      },
      methods:{
        toggle:function () {
          this.isshow= !this.isshow;
        }
      }
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

  .title_1{
    height: 89px;
    padding: 0 14px;
    margin-bottom: 10px;
    background-color: #fff;
    box-sizing: border-box;
  }
  .title_1 .title_1_s {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 .title_1_s i{

    margin-right: 10px;
  }
  .title_1 .title_1_s span{
    font-size:7px ;
    color: #000;
  }


  .title_1 .title_1_x{
    height: 45px;
    display: flex;
   justify-content: space-between;
  }
  .title_1 .title_1_x span{
    margin-left: 28px;
    font-size:7px ;
    color: #000;
  }
  .title_1 .title_1_x i{
    margin-top: 3px;
  }

  .title_2{
    height: 40px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;

  }
  .title_2 ul{
    width: 100%;
    padding: 0 14px;
    list-style: none;

  }
  .title_2 ul li{
    font-size:7px;
  }

  .title_1_b{
    height: 100px;
    padding: 0 14px;
    background-color: #EFEFF4;
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


  .title_3{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_3 .title_3_n{
    height: 50px;
    padding-right: 14px;
    border-bottom: 1px solid #EFEFF4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_3 .title_3_n p,span{
    font-size: 7px;
    color: #000;
  }

  .title_3 .title_3_n i{
    font-style: normal;

  }

  .title_4{
    height: 50px;
    padding-right: 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .title_4 .title_4_n span:nth-child(1){
    margin-right: 10px;
  }
  .title_4 .title_4_n i{
    font-style: normal;
    color: #dd0a0a ;
  }

  .title_5{
    height: 60px;
    padding: 0 14px;
    background-color: #fff;
    display: flex;
  }
  .title_5 .title_5_n{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_5 .title_5_n p{
    font-size: 8px;
    color: #000;

  }
  .title_5 .title_5_n p i{
    font-size: 6px;
    color: #999;
    font-style: normal;
    margin-left: 10px;
  }


  .title_5_f{
    padding: 0 14px;
    height: 30px;
    background-color: #f7f7f7;
    margin-bottom: 10px;

  }
  .title_5_f span{
    line-height: 30px;
    color: #999;
  }
  .title_5_f span i{
     color: #dd0a0a;
    font-style: normal;
  }



  .title_6{
     height: 50px;
     padding: 0 14px;
     font-size: 8px;
     background-color: #fff;
     margin-bottom: 30px;
   }
  .title_6 span{
    color: #999;

  }
  .title_6 input{
    width: 70%;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 8px;
    border: #fff;
    padding: 0;
  }



  .footer{
    height:100px ;
    margin-bottom: 100px;
    background-color: #fff;
  }
  .footer .footer_1{
    height: 50px;
    padding: 0 0 0 14px;
    /*background-color: burlywood;*/
  }
  .footer .footer_1 span{
    font-size: 12px;
    line-height: 50px;

  }
  .footer .footer_1 span i{
    color: #dd0a0a;
    font-style: normal;
  }
  .footer .footer_1 span i:nth-child(1){
    font-size: 7px;
    margin-left: 10px;
  }
  .footer .footer_1 span i:nth-child(2){
    font-size: 14px;
  }
  .footer .footer_1 button{
    float: right;
    width: 135px;
    height: 50px;
    color: #fff;
    background-color: #dd0a0a;
  }



  /*弹框确认付款*/
  .mb{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index:2008;
    position: fixed;
    bottom: 0;
    left: 0;

  }

   .pop-up{
    width: 100%;
    height: 451px;
    background-color: #fff;
     position: fixed;
     bottom: 0;
     left: 0;
  }

  .pop-up .pop-up_1{
    text-align: center;
    padding-right: 14px;
    border-bottom: 1px solid #EFEFF4;
  }
  .pop-up .pop-up_1 span{
    line-height: 50px;
    font-size: 16px;
  }
  .pop-up .pop-up_1 i{
    display: inline-block;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    float: right;
    color: #999;
  }

  .pop-up .pop-up_2{
    width: 100%;
    padding-right: 14px;
  }
  .pop-up .pop-up_2 span{
    display: inline-block;
    width: 100%;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;

  }
  .pop-up .pop-up_2 span i{
    font-style: normal;
    font-size: 25px;
  }
  .pop-up .pop-up_3{
    width: 100%;
    padding: 0 14px;
  }
  .pop-up .pop-up_3 p{
    font-size: 14px;
    line-height: 30px;
    color: #999;
  }

  .pop-up .pop-up_3 .pop-up_3_1{
    height: 50px;
    padding: 0 10px;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  .pop-up .pop-up_3 .pop-up_3_1 .pop-up_3_1_l{
    display: flex;
    align-self: center;
  }
  .pop-up .pop-up_3 .pop-up_3_1 .pop-up_3_1_l i{
    font-size: 40px;
    margin-right: 10px;
  }
  .pop-up .pop-up_3 .pop-up_3_1 .pop-up_3_1_l span{
    font-size: 14px;
  }

  .mint-cell-title{
      position: absolute;
      right: 25px;
    }
  .mint-checkbox-input:checked+.mint-checkbox-core{
    background-color: #dd0a0a;
    color: #dd0a0a;
    border-color: #dd0a0a;
  }


  .pop-up .pop-up_4{
    width: 100%;
    padding: 0 14px;
  }
  .pop-up .pop-up_4 button{
    width: 100%;
    line-height: 31px;
    background-color: #dd0a0a;
    color: #fff;
    border-color: #dd0a0a;
    border-radius: 15px;
    margin-top: 20px;
  }


</style>

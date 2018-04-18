<template>
  <div >
    <div class="heard">
      <header class="mint-header is-fixed ">
        <div class="mint-header-button is-left">
          <a href="#/home" class="router-link-active">
            <button class="mint-button mint-button--default mint-button--normal">
              <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              <label class="mint-button-text"></label></button></a></div>
        <div class="mint-header-button is-right">
          <button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon">
              <i class="iconfont icon-cart"></i></span>
            <label class="mint-button-text"></label></button>
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon"><i class="mintui mintui-more"></i></span> <label class="mint-button-text"></label></button>
        </div></header>
      <img src="../../src/assets/catches.png" alt="">
    </div>



    <div class="title_1">
      <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      <i>拼￥699</i>
      <i>￥69</i>
      <div class="title_1_s">
        <span>快递12元</span>
        <span>2019人付款</span>
      </div>
    </div>

    <div class="title_2">
      <ul>
        <li>
          <span>94人正在拼单,可直接参与</span>
          <div class="title_2_r">
            <p>查看全部</p>
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
        <li>
          <div class="title_2_l">
            <img src="../../src/assets/mui.png" alt="">
            <img src="../../src/assets/mui.png" alt="">
          </div>
          <div class="title_2_r">
            <div>
              <span >还差<i>1人</i>拼成</span>
              <span>剩余23:24:14</span>
            </div>
        <router-link to="Pindan">
            <button >去拼单</button>
        </router-link>

          </div>

        </li>
        <li>  </li>

      </ul>
    </div>

    <div class="title_3">
      <span>已选“默认”“7.3*15mm”</span>
      <i class="el-icon-arrow-right"></i>
    </div>

    <div class="title_4">
       <div class="title_4_u">
      <span>用户评价(243)</span>
      <router-link to="/datails_evaluate">
        <div class="title_4_r">
          <p>查看全部</p>
          <i class="el-icon-arrow-right"></i>
        </div>
      </router-link>
       </div>

        <div class="title_4_d">
           <div class="title_4_d_l">
             <div class="title_4_d_l_s">
             <img src="../../src/assets/mui.png" alt="">
             <span>米开朗基罗里脊</span>
             </div>
             <p>好评！鱼尺非常好用再也不用非常不用非常不用非常不用非常不用非常不用非常常不用非常用非常</p>
           </div>
              <div class="title_4_d_r">
                <img src="../../src/assets/mui.png" alt="">
                <span>2张</span>
              </div>

        </div>

    </div>

    <div class="title_5">
      <img src="../../src/assets/title.png" alt="">
      <div class="title_5_t">
        <div class="title_5_t_l">
          <p>索罗特渔具</p>
          <span>商品数量 <i>198</i> </span>
          <span>总数量  <i>24567</i> </span>
        </div>
        <div class="title_5_t_r">
          <p>进店逛逛 </p>
          <i class="el-icon-arrow-right"></i>
        </div>

      </div>
    </div>

    <div class="title_6">
      <div class="title_6_1">
        <p ><i ></i>产品详情<i ></i></p>
      </div>
      <div class="title_6_2">
        <p>钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼鱼钓鱼钓鱼钓鱼钓鱼钓鱼钓鱼鱼钓鱼钓鱼</p>
      </div>

      <div class="title_6_3">
        <ul>
          <li><img src="../../src/assets/mui.png" alt=""><li>
          <li></li>
        </ul>
      </div>
    </div>



    <div class="footer">
      <div class="footer_q">
        <div class="footer_l">
          <i class="iconfont icon-dianpu"><br> 店铺</i>
          <i class="iconfont icon-kefu"><br>客服</i>
          <i class="iconfont icon-weibiaoti2fuzhi03"><br>收藏</i>
        </div>
        <div class="footer_r">

          <router-link to="pindan" >

            <button style=" height: 40px;background-color: #000;color: #fff;border-radius: 20px 0 0 20px;border: 0">发起拼单</button>

          </router-link>

          <router-link to="shop_true" >

            <button style="height: 40px;background-color: #dd0a0a;color: #fff;border-radius:  0 20px 20px 0;border: 0">立即购买</button>

          </router-link>

        </div>
      </div>
    </div>

    <!--弹框-->




  </div>
</template>

<script>

  export default {
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .tan_c{
    margin-top: 80%;
  }
  .mint-header-button .mint-button:nth-child(1) {
    margin-right: 10px;
  }
  .mint-header {
    background-color: #EFEFF4;
  }
  .heard{
    height: 332px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFEFF4;
  }
  .mint-button-icon{
    width: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50px;
    background-color: #999;

  }




  /*第一个内容区*/
  .title_1{
    height: 117px;
    padding: 14px 10px 0 14px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .title_1 p{
    font-weight: bold;
    font-size: 8px;
    color: #000;
  }
  .title_1 i{
    font-style: normal;
    font-size: 16px;
    color: #dd0a0a;
    margin-right: 15px;
  }
  .title_1 i:nth-child(3){
    text-decoration: line-through;
    color: #999 ;
  }

  .title_1 span{
    font-size: 12px;
    margin-right: 40px;
    color: #999;
  }

  /*第二个内容区*/

  .title_2 ul{
    list-style: none;
    background-color: #fff;
    margin: 0 0 10px ;
    padding: 0;
  }
  .title_2 ul li{
    border-bottom: 1px solid #EFEFF4;
  }
  .title_2 ul li:nth-child(1){
    line-height: 42px;
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title_2 ul li:nth-child(1) .title_2_r{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 ul li:nth-child(1) .title_2_r p{
    font-size: 6px;
    margin: 0;
  }
  .title_2 ul li:nth-child(1) span:nth-child(1){
    font-size: 7px;
    color:#000;
  }
  .title_2 ul li:nth-child(1) span:nth-child(2){
    font-size: 6px;
    color: #999;
  }
  .title_2 ul li:nth-child(2){
    height: 50px;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
  }

  .title_2 ul li:nth-child(2) .title_2_l{
    display: flex;
    align-items: center;
  }
  .title_2 ul li:nth-child(2) img{
    width: 32px;
    height: 32px;
    float: left;
    margin-right: -10px;
    border-radius: 100px ;
    border: 3px solid #fff;

  }
  .title_2 ul li:nth-child(2) .title_2_r{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .title_2 ul li:nth-child(2) .title_2_r span:nth-child(1){
    display: block;
    font-size: 6px;
    color: #000;
  }
  .title_2 ul li:nth-child(2) .title_2_r span:nth-child(1) i{
    font-style: normal;
    color: #dd0a0a;
  }
  .title_2 ul li:nth-child(2) span{
    margin-top: 10px;
    font-size: 6px;
    color: #999;
  }
  .title_2 ul li:nth-child(2) button{
    float: right;
    width: 80px;
    height: 31px;
    margin-left: 10px;
    border-radius: 20px;
    font-size: 7px;
    color: white;
    background-color: #dd0a0a;
  }


  /*第三个内容区*/
  .title_3{
    line-height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_3 span{
    font-size: 7px;
    color: #000;
  }


  /*第四个内容区*/
  .title_4{
    height: 200px;
    background-color: #fff;
    margin-bottom: 10PX;
    padding: 0 14px;

  }
  .title_4 .title_4_u{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_4 span{
    font-size: 7px;
  }
  .title_4 .title_4_r{
    display: flex;
    justify-content: center;
  }
  .title_4 .title_4_r i{
    color: #999;
  }
  .title_4 .title_4_r p{
    margin: 0;
    font-size: 6px;
    color: #999;
  }

  .title_4 .title_4_d{
    height: 130px;
    box-shadow:2px 2px 2px 2px #999 ;
    display: flex;
    justify-content: space-between;

  }
  .title_4 .title_4_d .title_4_d_l{
    padding: 0 12px 17px 12px;
  }
  .title_4 .title_4_d .title_4_d_l .title_4_d_l_s{
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .title_4 .title_4_d .title_4_d_l .title_4_d_l_s img{
    width: 25px;
    height: 25px;
    margin-right: 5px;
    border-radius: 100px;
  }
  .title_4 .title_4_d .title_4_d_l .title_4_d_l_s p,span{
    font-size: 6px;
  }
  .title_4 .title_4_d .title_4_d_l p{
    color: #000 ;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .title_4 .title_4_d .title_4_d_l .title_4_d_l_s span{
    color: #999;
  }
  .title_4 .title_4_d .title_4_d_r{
    position: relative;
  }
  .title_4 .title_4_d .title_4_d_r img{
    width: 126px;
    height: 130px;
  }
  .title_4 .title_4_d .title_4_d_r span{
    display: inline-block;
    width: 40px;
    line-height: 20px;
    text-align: center;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    border-radius: 20px;
    position: absolute;
    top: 8px;
    right: 8px;
  }




  /*第五个内容区*/
  .title_5{
    height:81px;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_5 img{
    width: 60px;
    height: 60px;
    box-shadow:5px 5px 5px #888888 ;
  }
  .title_5 .title_5_t{
    width: 300px;
    height: 80px;
    margin-left: 15px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .title_5 .title_5_t .title_5_t_l{

  }


  .title_5 .title_5_t .title_5_t_l p{
    margin-top: 15px;
    color: #000;
    font-size: 14px;
  }
  .title_5  .title_5_t span{
    color: #999;
    font-size: 12px;
    margin-right: 20px;

  }
  .title_5  .title_5_t span i{
    font-style: normal;
    color: #000;
  }
  .title_5 .title_5_t .title_5_t_r{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_5 .title_5_t .title_5_t_r p{
    font-size:6px;
    color: #999;
    margin: 0;
  }

  /*第六个内容区*/
  .title_6{
    background-color: #fff;
    margin-bottom: 180px;
  }
  .title_6  .title_6_1{
    height: 82px;
    font-size: 6px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_6  .title_6_1 i{
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: #999;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .title_6  .title_6_1 p{
    margin: 0;
    font-size: 7px;
    color: #000;
  }
  .title_6  .title_6_2{

    background-color: #efeff4;
    padding: 0 14px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title_6  .title_6_2 p{
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 7px;
    color: #999;
  }
  .title_6  .title_6_3 {
    /*margin-bottom: 200px;*/
  }
  .title_6  .title_6_3 ul{
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .title_6  .title_6_3 ul li{
    margin-bottom: 10px;
  }
  .title_6  .title_6_3 ul li img{
    width: 100%;
    height: 221px;
  }


  .footer{
    width: 100%;
    height: 80px;
    padding: 0 14px;
    background-color: #fff;
    position: fixed;
    bottom: 100px;

  }
  .footer .footer_q{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer .footer_l{
    display: flex;
    justify-content: center;
  }
  .footer .footer_l i{
    display: inline-block;
    text-align: center;
    margin-right: 20px;
    font-size: 8px;
    color: #999;
  }
  .icon-dianpu:before,.icon-kefu:before,.icon-weibiaoti2fuzhi03:before{
    font-size: 20px;
  }
  .footer .footer_r{
    display: flex;
    justify-content: start;
  }






</style>


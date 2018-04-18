<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/home" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>店铺简介</span>
        </header>
      </div>

       <div class="title_1">
         <div class="title_1_n">
               <div class="title_1_l">
               <img  src="../../src/assets/mui.png" alt="">
                 <div>
                 <p>索罗特渔具</p>
                 <span>2.3万粉丝</span>
                 </div>
               </div>

             <button><i class="iconfont icon-selected"></i>已关注</button>
         </div>
       </div>

     <div class="title_2">
         <div class="title_2_l">
            <p>136</p>
            <span>全部商品</span>
         </div>
         <div class="title_2_c">
           <p>28</p>
           <span>拼单</span>
         </div>
       <div class="title_2_r">
           <p>19</p>
           <span>新品</span>
       </div>
     </div>

      <div class="title_3">
        <ul>
          <li><span>商品评分</span> <i>9.88</i> <i>高于同行30.6%</i> </li>
          <li><span>服务态度</span> <i>9.88</i> <i>高于同行30.6%</i></li>
          <li><span>物流速度</span> <i>9.88</i> <i>高于同行30.6%</i></li>
        </ul>
      </div>

      <div class="title_4">
        <div class="title_4_n">
          <p>联系卖家</p>
          <div>
            <i class="iconfont icon-kefu"></i>
          </div>
        </div>
      </div>

      <div class="title_5">
        <div class="title_5_n">
          <p>店铺二维码</p>
          <div>
            <i class="iconfont icon-erweima"></i>
          </div>
        </div>
      </div>

      <div class="title_6">
        <div class="title_6_n">
          <p>联系卖家</p>
          <span>江苏无锡</span>
        </div>
      </div>

      <div class="title_7">
        <div class="title_7_n">
          <p>开店时间</p>
          <span>2017-03-12</span>
        </div>
      </div>

      <div class="title_8">
         <p>代理品牌</p>
         <div class="title_8_d">
           <ul>
             <li><img src="../../src/assets/mui.png" alt=""></li>
             <li><img src="../../src/assets/mui.png" alt=""></li>
             <li><img src="../../src/assets/mui.png" alt=""></li>
           </ul>
         </div>
      </div>


    </div>


</template>

<script>
    export default {

       data(){
         return{

         }

       },
      created(){

      },
      methods: {


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
    height:90px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_1 .title_1_n{
    height: 100%;
    display: flex;
    padding-right: 14px;
    border-bottom: 1px dashed #EFEFF4;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 .title_1_n  .title_1_l{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_1 .title_1_n  .title_1_l img{
    width: 58px;
    height: 58px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .title_1 .title_1_n  .title_1_l p{
    font-size: 7px;
    color: #000;
  }
  .title_1 .title_1_n  .title_1_l span{
    font-size: 6px;
    color: #999;
  }
  .title_1 .title_1_n button{
    width: 78px;
    padding-right: 10px;
    height: 31px;
    font-size: 7px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_1 .title_1_n button>i{
    width: 25px;
    line-height: 31px;
    font-size: 30px;
  }

  .title_2{
    height: 82px;
    padding: 0 14px;
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
  .title_2 .title_2_l,.title_2_c,.title_2_r{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
  .title_2 .title_2_l{
    margin-left: 30px;
  }
  .title_2 .title_2_r{
    margin-right: 30px;
  }
  .title_2 p{
    font-size: 9px;
    color: #000;
  }
  .title_2  span{
    font-size: 6px;
    color: #999;
  }

  .title_3{
    height: 119px;
    padding:  0 14px;
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  .title_3 ul{
    list-style: none;
  }
  .title_3 ul li{

  }
  .title_3 ul li span{
    font-size: 7px;
    margin-right: 39px;
    color: #000;
  }
  .title_3 ul li i{
    font-style: normal;
    font-size: 7px;
    color: #dd0a0a;
  }
  .title_3 ul li i:nth-child(2){
    margin-right: 25px;
  }

  .title_4{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_4 .title_4_n{
    height: 50px;
    padding-right: 14px;
    border-bottom: 1px solid #EFEFF4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_4 .title_4_n p{
    font-size: 7px;
    color: #000;
  }
  .title_4 .title_4_n i{
    font-style: normal;
    color: dodgerblue;
  }

  .title_5{
    height: 50px;
    padding-left: 14px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .title_5 .title_5_n{
    height: 50px;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_5 .title_5_n p{
    font-size: 7px;
    color: #000;
  }
  .title_5 .title_5_n i{
    font-style: normal;
  }

  .title_6{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_6 .title_6_n{
    height: 50px;
    padding-right: 14px;
    border-bottom: 1px solid #EFEFF4;
    display: flex;
    align-items: center;
  }
  .title_6 .title_6_n p{
    font-size: 7px;
    margin-right: 39px;
    color: #000;
  }
  .title_6 .title_6_n span{
    font-size: 7px;
    color: #999;
  }

  .title_7{
    height: 50px;
    padding-left: 14px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .title_7 .title_7_n{
    height: 50px;
    padding-right: 14px;
    display: flex;
    align-items: center;
  }
  .title_7 .title_7_n p{
    font-size: 7px;
    margin-right: 39px;
    color: #000;
  }
  .title_7 .title_7_n span{
    font-size: 7px;
    color: #999;
  }

  .title_8{
    height: 113px;
    padding: 20px 14px;
    background-color: #fff;

  }
  .title_8 p{
    font-size: 7px;
    color: #000;
  }
  .title_8 .title_8_d ul{
    margin-top: 20px;
    list-style: none;
  }
  .title_8 .title_8_d ul li{

    float: left;
  }
  .title_8 .title_8_d ul li img{
    width: 60px;
    height: 30px;
    margin-right: 29px;
  }


</style>

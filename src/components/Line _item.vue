<template>
   <div>
     <div class="heard">
       <header class="mint-header is-fixed">
         <div class="mint-header-button is-left">
           <a href="#/shopping" class="router-link-active">
             <button class="mint-button mint-button--default mint-button--normal">
               <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
             </button>
           </a>
         </div>
         <span class="mint-header-title">我的订单</span>
         <div class="mint-header-button is-right">
           <button class="mint-button mint-button--default mint-button--normal">
             <span class="mint-button-icon"><i class="mui-icon mui-icon-search"></i></span>
           </button>
         </div>
       </header>
     </div>


     <div  class="tab3">
       <el-tabs v-model="activeName2" @tab-click="handleClick" class="tab_1">
         <el-tab-pane label="全部" name="first">

         </el-tab-pane>

         <el-tab-pane label="代付款" name="second">

         </el-tab-pane>

         <el-tab-pane label="待接收" name="third">

         </el-tab-pane>

         <el-tab-pane label="待评价" name="four">

         </el-tab-pane>

       </el-tabs>
     </div>

     <div class="title_1">
       <div class="title_1_n">
         <div>
         <p>索罗特渔具</p>
         <i class="el-icon-arrow-right"></i>
         </div>
         <div>
           <span>卖家已发货</span>
         </div>
       </div>
     </div>

   <router-link to="/line_item_list">
    <div class="title_2">
      <img src="../../src/assets/title.png" alt="">
      <div class="title_2_r">
        <div class="title_2_r_s">

          <span>渔获高端定制T个性定制给不一样的你</span>

          <span>￥99.00</span>
        </div>
        <div class="title_2_r_x">
          <div>
          <span>颜色分类：黑色；</span>
          <span>尺码：L</span>
          </div>
          <span>×1</span>
        </div>
      </div>
    </div>
   </router-link>

     <div class="title_3">
       <span>共1件</span>
       <span>应付总额：<i>￥</i> <i>105.00</i></span>
       <span>(含运费￥<i>6.00</i>)</span>
     </div>

     <div class="title_4">
        <button>查看物流</button>
        <button>确认收货</button>
     </div>


    </div>
</template>

<script>
    export default {
      data() {
        return {
          activeName2: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {

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
    height: 40px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_1 .title_1_n{
    height: 40px;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 .title_1_n p{
    display: inline-block;
  }
  .title_1 .title_1_n p,span{
    font-size: 7px;
    color: #000;
  }

  .title_1 .title_1_n i{
    font-style: normal;
    font-size: 7px;
    color: #999;
  }


  .title_2{
    height: 100px;
    display: flex;
    padding: 0 14px;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 img{
    width: 86px;
    height: 86px;
    margin-right: 10px;
  }

  .title_2 .title_2_r{
    height: 86px;
    padding-top: 10px;
  }
  .title_2 .title_2_r span{
    font-size: 7px;
  }
  .title_2 .title_2_r .title_2_r_s{
    display: flex;
    justify-content: space-between;
  }

  .title_2 .title_2_r .title_2_r_s span{
     color: #000;
  }


  .title_2 .title_2_r .title_2_r_x{
    display: flex;
    justify-content: space-between;
  }
  .title_2 .title_2_r .title_2_r_x span{
    color: #999;
  }






  .title_3{
    height:40px ;
    background-color: #fff;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    border-bottom: 1px solid #EFEFF4;
  }
  .title_3 span{
    font-size: 12px;
    margin-right: 14px;
  }
  .title_3 span:nth-child(2) i{
    color: #dd0a0a;
    font-style: normal;
  }
  .title_3 span:nth-child(2) i:nth-child(2){
    font-size: 15px;
  }
  .title_3 span:nth-child(3) i{
    font-style: normal;
  }


  .title_4{
    height: 60px;
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
    font-size: 7px;
    margin-right: 14px;
  }
  .title_4 button:nth-child(2){
    border-color: #dd0a0a;
    color: #dd0a0a;
  }
</style>

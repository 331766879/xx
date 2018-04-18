<template>
     <div>
       <div class="heard">
         <header class="mint-header  is-fixed">
           <div class="mint-header-button is-left">
             <a href="#/after_sale" class="router-link-active">
               <button class="mint-button mint-button--default mint-button--normal">
                 <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
               </button></a></div>
           <span>售后服务</span>
         </header>
       </div>

       <div class="title_1">
         <ul>
           <li>索罗特渔具 <i class="el-icon-arrow-right"></i> </li>
         </ul>
       </div>

       <div class="title_1_b">
         <img src="../../../src/assets/title.png" alt="">
         <div class="title_1_b_r">
           <p>渔获高端定制t个性给定不一样的你</p>
           <span>颜色分类：黑色；</span>
           <span>尺码：L</span> <br>
           <ul>
             <li>×1</li>
           </ul>
         </div>
       </div>

       <div class="title_2">
          <div class="title_2_l">
             <i class="iconfont icon-success"></i>
             <span>退款成功</span>
          </div>
         <router-link to="line_item_list">
           <button>查看详情</button>
         </router-link>
       </div>


       <div class="title_1">
         <ul>
           <li>索罗特渔具 <i class="el-icon-arrow-right"></i> </li>
         </ul>
       </div>

       <div class="title_1_b">
         <img src="../../../src/assets/title.png" alt="">
         <div class="title_1_b_r">
           <p>渔获高端定制t个性给定不一样的你</p>
           <span>颜色分类：黑色；</span>
           <span>尺码：L</span> <br>
           <ul>
             <li>×1</li>
           </ul>
         </div>
       </div>

       <div class="title_2">
         <div class="title_2_l">
           <i class="iconfont icon-success"></i>
           <span>退款成功</span>
         </div>
         <button>查看详情</button>
       </div>

     </div>
</template>

<script>
    export default {

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
    height: 40px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;

  }
  .title_1 ul{
    width: 100%;
    padding: 0 14px;
    list-style: none;

  }
  .title_1 ul li{
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
  .title_1_b .title_1_b_r ul li{
    font-size: 8px;
    float: right;
  }

  .title_2{
    height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 .title_2_l i{
    font-size: 10px;
    color: #dd0a0a;
    font-weight: bold;
  }
  .title_2 .title_2_l span{
    font-size: 8px;
    color: #000;
  }
  .title_2 button{
    width: 80px;
    height: 31px;
    font-size: 8px;
    border: 1px solid #dd0a0a;
    border-radius: 15px;
    color:#dd0a0a;
  }






</style>

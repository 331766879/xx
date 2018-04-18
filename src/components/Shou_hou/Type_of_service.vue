<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/After_sale" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>选择服务类型</span>
        </header>
      </div>

      <div class="title_1_b">
        <img src="../../../src/assets/title.png" alt="">
        <div class="title_1_b_r">
          <p>渔获高端定制t个性给定不一样的你</p>
          <span>颜色分类：黑色；</span>
          <span>尺码：L</span> <br>
          <ul>
            <li>￥<i>99.00</i></li>
          </ul>
        </div>
      </div>

     <router-link to="return_cargo">
      <div class="title_2">
         <div class="title_2_q">
             <div class="title_2_l">
              <p>我要退货</p>
              <p>未收到或或卖家未卖家协商同意前提下</p>
             </div>
             <div >
               <i class="el-icon-arrow-right"></i>
             </div>
         </div>
      </div>
     </router-link>


      <div class="title_2">
        <div class="title_2_q">
          <div class="title_2_l">
            <p>我要换货</p>
            <p>未收到或或卖家未卖家协商同意前提下</p>
          </div>
          <div >
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
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


  .title_1_b{
    height: 100px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
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
  .title_1_b .title_1_b_r ul>li{
    font-size: 8px ;
    float: left;
  }
  .title_1_b .title_1_b_r ul>li i{
    font-style: normal;
    font-size: 12px;
  }


   .title_2{
     height: 60px;
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
   .title_2 .title_2_l p:nth-child(1){
     color: #000;
   }

  .el-icon-arrow-right:before{
    color: #999;
  }
</style>

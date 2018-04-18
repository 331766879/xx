<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/Return_cargo_list" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>查看物流</span>
        </header>
      </div>

      <div class="title_1">
        <i class="iconfont icon-wuliu"></i>
        <div class="title_1_r">
          <p>物流公司 <span>顺丰快递</span></p>
           <p>物流单号 <span>837565665</span></p>
        </div>
      </div>

      <div class="title_2">
        <div class="title_2_l">
          <ul>
            <li>
              <div>
                <i class="iconfont icon-map" style="font-size: 20px;"></i>
              </div>
              <div class="line"></div>
              <div class="title_b">
                <h5>快件已到达{北京}发往{集散中心}</h5>
                <p>2017-04-11 12:04:30</p>
              </div>
            </li>

            <li>
               <div class="round"></div>
              <div class="line"></div>
              <div  class="title_b">
                <h5>快件已到达{北京}发往{集散中心}</h5>
                <p>2017-04-11 12:04:30</p>
              </div>
            </li>
            <li>
              <div class="round"></div>
              <div class="line"></div>
              <div  class="title_b">
                <h5>快件已到达{北京}发往{集散中心}</h5>
                <p>2017-04-11 12:04:30</p>
              </div>
            </li>
            <li>
              <div class="round"></div>
              <div  class="title_b">
                <h5>快件已到达{北京}发往{集散中心}</h5>
                <p>2017-04-11 12:04:30</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="title_3">
        <div class="title_3_1">
          <p ><i ></i>猜你喜欢<i ></i></p>
        </div>
      </div>

      <div class=" commodity ">
        <ul>

            <li>
              <div class="img_tp">
                <img src="../../../src/assets/title.png" alt="">
              </div>
              <p>渔获高级会员服务，助你渔获满满</p>
              <i>￥644</i>
              <span>12341付款</span>
              <b>···</b>
            </li>



            <li>
              <div class="img_tp">
                <img src="../../../src/assets/title.png" alt="">
              </div>
              <p>渔获高级会员服务，助你渔获满满</p>
              <i>￥644</i>
              <span>12341付款</span>
              <b>···</b>
            </li>



            <li>
              <div class="img_tp">
                <img src="../../../src/assets/title.png" alt="">
              </div>
              <p>渔获高级会员服务，助你渔获满满</p>
              <i>￥644</i>
              <span>12341付款</span>
              <b>···</b>
            </li>



            <li>
              <div class="img_tp">
                <img src="../../../src/assets/title.png" alt="">
              </div>
              <p>渔获高级会员服务，助你渔获满满</p>
              <i>￥644</i>
              <span>12341付款</span>
              <b>···</b>
            </li>

        </ul>

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
    background-color: #efeff4;

  }
  .mint-header span{
    color: #000;
  }
  .mint-button-icon i{
    color: #000;
  }


  .title_1{
    height: 80px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .title_1 i{
    width: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 0;
    margin-right: 10px;
    border-radius: 100px;
    background-color: #bfbfbf;
  }
  .icon-wuliu:before{
    font-size: 20px;
    color: #fff;
  }
  .title_1 .title_1_r p{
    font-size: 8px;
    color: #999;

  }
  .title_1 .title_1_r p span{
      font-size: 8px;
      color: #000;
      margin-left: 10px;
  }

  .title_2 {
    height: 200px;
    padding: 10px 14px ;
    background-color: #fff;

  }

  .title_2 .title_2_l ul{
      width: 100%;
      height: 100%;
      list-style: none;
  }
  .title_2 .title_2_l ul li{
    width: 100%;
    height: 50px;
    position: relative;
  }
  .title_2 .title_2_l  .line{
    position: absolute;
    content: '';
    height: 80%;
    width: 2px;
    left: 9px;
    top: 18px;
    background-color: #999;
  }
  .title_2 .title_2_l .title_b{
    position: absolute;
    top: 0;
    left:30px;
  }
  .title_2 .title_2_l .title_b h5,p{
    font-size: 8px;
  }
  .title_2 .title_2_l .round{
    width: 10px;
    height: 10px;
    position: absolute;
    left: 5px;
    top: 8px;
    border-radius: 100px;
    background-color: #999;
  }


  .title_3{

  }
  .title_3  .title_3_1{
    height: 50px;
    font-size: 6px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title_3  .title_3_1 i{
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: #999;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .title_3  .title_3_1 p{
    margin: 0;
    font-size: 7px;
    color: #000;
  }


  .commodity{
    width: 100%;
    height:260px ;
  }
  .commodity ul{
    width: 100%;
    height:260px ;
    /*background-color: red;*/
    list-style: none;

  }
  .commodity ul li{
    width: 50%;
    height:265px ;
    padding-left: 14px;
    padding-right: 14px;
    border-bottom: 1px solid #bababa;
    float: left;
    background-color: white;


  }
  .commodity ul li:nth-child(odd){
    border-right: 1px solid #bababa;
  }
  .commodity ul li .img_tp{
    width: 100%;
    text-align: center;
  }
  .commodity ul li .img_tp img{
    margin-top: 30px;
  }
  .commodity ul li p,i,span,b{
    margin-top: 14px;
  }
  .commodity ul li p{
    font-size: 14px !important;
    color: #000;

  }
  .commodity ul li i{
    float: left;
    font-size: 18px;
    font-style: normal;
    margin-right: 10px;
    color: #dd0a0a;
  }
  .commodity ul li span{
    float: left;
    font-size: 12px;
    color: #999;
  }
  .commodity ul li b{
    float: right;
    margin-right: 5px;
    font-size: 20px;
    color: #999;

  }

</style>

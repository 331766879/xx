<template>
    <div >
        <div class="heard">
          <header class="mint-header is-fixed ">
            <div class="mint-header-button is-left">
              <a href="#/all_products" class="router-link-active">
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
         <i>￥69</i>
         <i class="iconfont icon-zuanshi"></i>
         <i>￥69</i>
        <div class="title_1_s">
         <span>快递12元</span>
         <span>2019人付款</span>
        </div>
      </div>


      <div class="title_2">
        <div>
           <span>领劵</span>
           <span>满88减20，满200减50</span>
        </div>
           <i class="el-icon-arrow-right"></i>
      </div>


      <div class="title_3">
         <span>已选“默认”“7.3*15mm”</span>

         <i  @click="toggle"   class="el-icon-arrow-right"></i>

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

        <mt-swipe :show-indicators="false" :auto="0">
          <mt-swipe-item>

            <div class="title_4_d">
              <div class="title_4_d_l">
                <div class="title_4_d_l_s">
                  <img src="../../src/assets/title.png" alt="">
                  <span>米开朗基罗里脊</span>
                </div>
                <p>好评！鱼尺非常好用再也不用非常不用非常不用非常不用非常不用非常不用非常常不用非常用非常</p>
              </div>
              <div class="title_4_d_r">
                <img src="../../src/assets/mui.png" alt="">
                <span>2张</span>
              </div>

            </div>

          </mt-swipe-item>

          <mt-swipe-item>

            <div class="title_4_d">
              <div class="title_4_d_l">
                <div class="title_4_d_l_s">
                  <img src="../../src/assets/title.png" alt="">
                  <span>米开朗基罗里脊</span>
                </div>
                <p>好评！鱼尺非常好用再也不用非常不用非常不用非常不用非常不用非常不用非常常不用非常用非常</p>
              </div>
              <div class="title_4_d_r">
                <img src="../../src/assets/mui.png" alt="">
                <span>2张</span>
              </div>

            </div>

          </mt-swipe-item>

        </mt-swipe>


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

           <router-link to="shopping" >

                   <button style=" height: 40px;background-color: #000;color: #fff;border-radius: 20px 0 0 20px;border: 0">加入购物车</button>

           </router-link>

           <router-link to="shop_true" >

                  <button style="height: 40px;background-color: #dd0a0a;color: #fff;border-radius:  0 20px 20px 0;border: 0">立即购买</button>

           </router-link>

         </div>
        </div>
      </div>

      <!--弹框选尺寸类型-->

      <transition name="show"
                  enter-active-class="fadeInUpBig"
                  leave-active-class="zoomOutDown"
      >
     <div class="mb animated"  v-show="isshow">
        <div class="pop_up ">
          <div class="pop_up_t">
            <img src="../../src/assets/mui.png" alt="">
            <div class="pop_up_t_r">
              <p><i>￥69.00</i></p>
              <p>库存12</p>
              <p>选择 型号，颜色</p>
            </div>
          </div>

          <div class="pop_up_c">
            <div class="pop_up_c_t">
             <p>型号</p>
            <ul>
              <li>xm-1223</li>
              <li>xl-1243</li>
            </ul>
            </div>

            <div class="pop_up_c_d">
              <p>颜色</p>
              <ul>
                <li>粉色</li>
                <li>黄色</li>
                <li>咖啡色</li>
              </ul>
            </div>
          </div>

          <div class="pop_up_b">
            <p>购买数量</p>
            <div>
              <ul>
                <li>-</li>
                <li>1</li>
                <li>+</li>
              </ul>
            </div>
          </div>


          <div class="btn">
            <button  @click="toggle">加入购物车</button>
            <button>立即购买</button>
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
        toggle:function(){
          this.isshow= !this.isshow;
        }
      }
    }
</script>

<style scoped>

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

}
.title_1 i:nth-child(3){
  color: #37abd2;
  font-size: 8px;
  margin-right: 15px;
}
.title_1 i:nth-child(4){
    text-decoration: line-through;
    color: #999 ;
  }

.title_1 span{
  font-size: 12px;
  margin-right: 40px;
  color: #999;
}


.title_2 {
    height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    /*background-color: #bd2c00;*/
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
    margin-right: 10px;
    /*background-color: greenyellow;*/
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
  .title_6 >.title_6_3 {

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



  .mb{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 2008;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .pop_up{
    width: 100%;
    height:700px;
    padding-top: 35px;

    padding-left: 14px;
    border-radius: 13px 13px 0 0;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left:0;

  }
  .pop_up .pop_up_t{
    border-bottom: 1px solid #EFEFF4;
    /*background-color: greenyellow;*/
    display: flex;
  }
  .pop_up .pop_up_t img{
    width: 105px;
    height: 105px;
    margin-bottom: 29px;
    margin-right:20px ;
  }
  .pop_up .pop_up_t .pop_up_t_r i{
    font-style: normal;
    font-size:9px;
    color: #dd0a0a;
  }
  .pop_up .pop_up_t .pop_up_t_r p{
    color: #000;
    margin: 0;
  }
  .pop_up .pop_up_t .pop_up_t_r{
    padding-top: 40px;
  }
  .pop_up .pop_up_c{
    display: flex;
    padding-bottom: 19px;
    border-bottom: 1px solid #EFEFF4;
    flex-direction: column;
    align-items: start;
  }
  .pop_up .pop_up_c .pop_up_c_t p{
    margin-top: 19px;
    margin-bottom: 10px;
    color: #000;
  }
  .pop_up .pop_up_c  ul{
    list-style: none;
    padding: 0;
   margin: 0;
  }
  .pop_up .pop_up_c  ul li{
    float: left;
    margin-right: 10px;
    padding: 9px 18px;
    font-size: 7px;
    background-color: #F5F5F5;
    border-radius: 20px;
  }

  .pop_up .pop_up_c .pop_up_c_d ul{

  }
  .pop_up .pop_up_c .pop_up_c_d p{
    margin-top: 28px;
    margin-bottom: 10px;
    color: #000;
  }

  .pop_up_b{
    padding-right: 14px;
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pop_up_b p{
    font-size: 8px;
    color: #000;
    margin: 0;
  }
  .pop_up_b ul{
    list-style: none;
    margin: 0;
  }
  .pop_up_b ul li{
    float: left;
    width: 31px;
    line-height: 31px;
    font-size: 8px;
    margin-right: 3px;
    text-align: center;
    background-color: #fafafa;
  }
  .pop_up .btn{
    padding-right: 14px;
    /*background-color: greenyellow;*/
  }
  .pop_up .btn button{
    width: 50%;
    height: 40px;
    margin-top: 180px;
    margin-right: -5px;
    border: 0;
  }
  .pop_up .btn button:nth-child(1){
    background-color: #000;
    color: #fff;
    border-radius: 20px 0 0 20px;
  }
  .pop_up .btn button:nth-child(2){
    background-color: #dd0a0a;
    color: #fff;
    border-radius:0 20px 20px 0;
  }

</style>

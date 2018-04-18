<template>
  <div>
      <div class="heard">
        <header class="mint-header  ">
          <div class="mint-header-button is-left">
            <a href="#/details" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
                </button></a></div>
          <span>用户评价 （256）</span>
        </header>
      </div>

       <div class="content_1">
         <button>全部</button>
         <button>有图(136)</button>
       </div>

     <div class="content_2">
       <div class="content_2_h">
         <img src="../../src/assets/mui.png" alt="">
         <span>米沙米开朗琪里脊</span>
         <ul >
           <li><i class="mui-icon mui-icon-star-filled"></i></li>
           <li><i class="mui-icon mui-icon-star-filled"></i></li>
         </ul>
       </div>

     <div class="content_2_c">
       <span>2018-3-21</span>
       <span>黑色分类:黑色</span>
       <span>尺码:L</span>
     </div>
       <div class="content_2_f">
       <p>好评！感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获</p>

       <vue-preview  :slides="slide1" @close="handleClose"></vue-preview>

       </div>
       <div class="content_2_b">
        <button><i class="iconfont icon-good"></i>21</button>
       </div>
     </div>

     <div class="content_3">
       <div class="content_3_h">
         <img src="../../src/assets/mui.png" alt="">
         <span>米沙米开朗琪里脊</span>
         <ul >
           <li><i class="mui-icon mui-icon-star-filled"></i></li>
           <li><i class="mui-icon mui-icon-star-filled"></i></li>
         </ul>

       </div>

       <div class="content_3_c">
         <span>2018-3-21</span>
         <span>黑色分类:黑色</span>
         <span>尺码:L</span>
       </div>

       <div class="content_3_f">
       <p>好评！感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获感谢渔获</p>
       </div>
       <div class="content_3_b">
         <button><i class="iconfont icon-good"></i>点赞</button>
       </div>

     </div>

     </div>

</template>

<script>
    export default {
         data(){
           return{
             slide1: [
               {
                 src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                 msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                 alt: 'picture1',
                 title: 'Image Caption 1',
                 w: 600,
                 h: 400
               },
               {
                 src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                 msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                 alt: 'picture2',
                 title: 'Image Caption 2',
                 w: 600,
                 h: 400
               },
               {
                 src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                 msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                 alt: 'picture2',
                 title: 'Image Caption 2',
                 w: 600,
                 h: 400
               }
             ]
           }
         },
      created(){

      },
         methods:{
           handleClose () {
             console.log('close event')
           }
         }
    }
</script>

<style scoped>

.heard{
  line-height: 45px;
}
.mint-header{
  background-color: #EFEFF4;

}
.mint-header span{
  color: #000;
}

/*第一块*/
 .content_1{
   padding: 0 14px;
   height:50px;
   background-color: #fff;
   border-bottom: 1px solid #EFEFF4;
 }
.content_1 button:nth-child(1){
  width: 70px;
  height: 31px;
  border-radius: 20px;
  font-size: 7px;
  margin-top: 8px;
  color: white;
  background-color: #dd0a0a;
}
.content_1 button:nth-child(2){
  width: 80px;
  height: 31px;
  border-radius: 20px;
  font-size: 7px;
  margin-top: 8px;
  color: #000;
  background-color: #ffeded;
}

/*第二块*/
.content_2 {

}
.content_2  .content_2_h {
  padding: 12px 14px 11px 14px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.content_2  .content_2_h ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.content_2  .content_2_h ul li{
  float: left;
  padding-bottom: 5px;
}
.content_2  .content_2_h ul li i{
  font-size: 16px;
  color: #ecbd52;
}
.content_2  .content_2_h img{
  width: 34px;
  height: 34px;
  margin-right: 10px;
  border-radius: 100px;
}
.content_2 .content_2_h span{
  font-size: 7px;
  margin-right: 16px;
}
.content_2 .content_2_c{
  padding: 0 14px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.content_2 .content_2_c span{
  font-size: 6px;
  color: #999;
  margin-right: 15px;
}

.content_2 .content_2_f {
  padding: 0 14px;
  background-color: #fff;

}
.content_2 .content_2_f p{
  padding:20px 0;
  margin: 0;
  color: #000;
  font-size: 7px;
}
.content_2 .content_2_f ul{
  height: 112px;
  list-style: none;
  padding: 0;
  margin: 0;
 display: flex;
 justify-content: space-between;
}
.content_2 .content_2_f ul li{
  float: left;
  width: 30%;
  height: 112px;
}
.content_2 .content_2_f ul li img{
  width: 100%;
  height: 100%;
  border: 1px solid #999;
}
.content_2 .content_2_b {
  background-color: #fff;
  text-align: right;
  padding: 0 14px;
  margin-bottom: 10px;
}
.content_2 .content_2_b button{
  width: 80px;
  line-height: 16px;
  border-radius: 20px;
  margin: 18px 0;


}
.content_2 .content_2_b button i{
  margin-right: 8px;

}

/*第三块*/
  .content_3{
    height: 222px;

  }
.content_3  .content_3_h{
  padding: 12px 14px 11px 14px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.content_3  .content_3_h img{
  width: 34px;
  height: 34px;
  margin-right: 10px;
  border-radius: 100px;
}
.content_3 .content_3_h span{
  font-size: 7px;
  margin-right: 16px;
}
.content_3  .content_3_h ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.content_3  .content_3_h ul li{
  float: left;
  padding-bottom: 5px;
}
.content_3  .content_3_h ul li i{
  font-size: 16px;
  color: #ecbd52;
}
.content_3 .content_3_c{
  padding: 0 14px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.content_3 .content_3_c span{
  font-size: 6px;
  color: #999;
  margin-right: 15px;
}

.content_3 .content_3_f {
  padding: 0 14px;
  background-color: #fff;

}
.content_3 .content_3_f p{
  padding:20px 0;
  margin: 0;
  color: #000;
  font-size: 7px;
}

.content_3 .content_3_b {
  background-color: #fff;
  text-align: right;
  padding: 0 14px;
  margin-bottom: 10px;
}
.content_3 .content_3_b button{
  width: 80px;
  line-height: 16px;
  border-radius: 20px;
  margin: 18px 0;


}
.content_3 .content_3_b button i{
  margin-right: 8px;
}

</style>

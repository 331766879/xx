<template>
     <div>
       <div class="heard">
       <header class="mint-header  is-fixed">
         <div class="mint-header-button is-left">
           <a href="#/After_sale" class="router-link-active">
             <button class="mint-button mint-button--default mint-button--normal">
               <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
             </button></a></div>
         <span>申请退款</span>
       </header>
     </div>

       <div class="title_1_b">
         <img src="../../../src/assets/title.png" alt="">
         <div class="title_1_b_r">
           <p>渔获高端定制t个性给定不一样的你</p>
           <span>颜色分类：黑色；</span>
           <span>尺码：L</span> <br>
         </div>
       </div>

       <div class="title_2">
         <div class="title_2_q">
           <p>退货数量</p>
           <div>
             <ul>
               <li>-</li>
               <li>75</li>
               <li>+</li>
             </ul>
           </div>
         </div>
       </div>

       <div class="title_1">
         <div class="title_1_n">
           <p >退款原因</p>
           <div>
             <i  @click="toggle" class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div>

       <div class="title_3">
         <div class="title_3_q">
           <p>退货数量</p>
           <div>
              <span>20</span>
           </div>
         </div>
       </div>

       <div class="title_4">
         <div class="title_4_n">
           <p>退款金额</p>
           <div>
             <i>￥ 99.00</i>
           </div>
         </div>
       </div>

       <div class="title_5">
         <span>退款说明</span> <input type="text" placeholder="(选填)" maxlength="45">
       </div>

       <div class="title_6">
         <p>上传凭证(最多3张)</p>
         <div >
           <el-upload
             class="avatar-uploader"
             action="https://jsonplaceholder.typicode.com/posts/"
             :show-file-list="false"
             :on-success="handleAvatarSuccess"
             :before-upload="beforeAvatarUpload">
             <img v-if="imageUrl" :src="imageUrl" class="avatar">
             <i v-else class="iconfont icon-camera  avatar-uploader-icon" ></i>
           </el-upload>
         </div>
       </div>

       <div class="title_7">
         <router-link to="return_cargo_list">
           <button >提交</button>
         </router-link>
       </div>


       <!--弹框退款原因-->
       <transition name="show"
                   enter-active-class="fadeInUpBig"
                   leave-active-class="fadeOutRight"
       >
      <div class="mb animated" v-show="isshow">
       <div class="Pop-out">
          <div class="Pop-out_1">
            <p>退款原因</p>
          </div>

          <div class="Pop-out_2">
            <div class="Pop-out_2_l">
              <p>7天无理由退换货</p>
            </div>

            <div class="mint-cell-title" >
              <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
              </label>
            </div>

          </div>
          <div class="Pop-out_2">
           <div class="Pop-out_2_l">
             <p>拍错了/不喜欢、不合适</p>
           </div>

           <div class="mint-cell-title" >
             <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
             </label>
           </div>

         </div>
          <div class="Pop-out_2">
           <div class="Pop-out_2_l">
             <p>与商品描述不符</p>
           </div>

           <div class="mint-cell-title" >
             <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span>
            </span>
             </label>
           </div>

         </div>

          <button @click="toggle">关闭</button>

       </div>
      </div>
       </transition>
     </div>
</template>

<script>
    export default {
      data() {
        return {
          imageUrl: '',
          isshow:false
        };
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          console.log(file);
          const isJPG = file.type === 'image/jpeg';
          const isPNG = file.type === 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG && isPNG) {
            this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
          }

          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        toggle:function(){
           this.isshow=!this.isshow;
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

  .title_1{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_1 .title_1_n{
    height: 50px;
    padding-right: 14px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 .title_1_n p{
    font-size: 7px;
    color: #000;
  }
  .title_1 .title_1_n i{
    font-style: normal;
  }

  .title_2{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .title_2 .title_2_q{
    height: 100%;
    padding-right: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 p{
    font-size: 8px;
    color: #000;
  }
  .title_2 ul{
    list-style: none;
  }
  .title_2 ul li{
    float: left;
    width: 20px;
    height: 20px;
    font-size: 8px;
    margin-right: 3px;
    text-align: center;
    background-color: #f5f5f5;
  }

  .title_3{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_3 .title_3_q{
    height: 100%;
    padding-right: 14px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_3 p,span{
    font-size: 8px;
    color: #000;
  }

  .title_4{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .title_4 .title_4_n{
    height: 50px;
    padding-right: 14px;
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
    font-size: 8px;
    color: #dd0a0a;
  }


  .title_5{
    height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .title_5 span{
    font-size: 8px;
    margin-right: 5px;
  }
  .title_5 input{
    width: 70%;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 8px;
    border: #fff;
    padding: 0;
  }


  .title_6{
    background-color: #fff;
    padding: 8px 14px ;

  }
  .title_6 p{
    margin-bottom: 10px;
  }

  .title_7{
    margin-top: 100px;
  }
  .title_7 button{
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #dd0a0a;
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
  .Pop-out{
    width: 100%;
    height:450px;
    background-color:#fff;
    position: fixed;
    bottom: 0;
    left: 0;

  }
  .Pop-out .Pop-out_1{
    text-align: center;
    background-color: #fff;
  }
  .Pop-out .Pop-out_1 p{
    line-height: 50px;
    font-size: 16px;
    color: #000;
  }

  .Pop-out .Pop-out_2{
    height: 50px;
    margin-left: 14px;
    background-color: #fff;
    border-bottom: 1px solid #EFEFF4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Pop-out .Pop-out_2 .Pop-out_2_l p{
    font-size: 14px;
    color: #000;
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

  .Pop-out button{
    width: 100%;
    line-height: 47px;
    background-color: #dd0a0a;
    color: #fff;
    margin-top: 180px;
  }



</style>

<template>
     <div>
       <div class="heard">
         <header class="mint-header  is-fixed">
           <div class="mint-header-button is-left">
             <a href="#/After_sale" class="router-link-active">
               <button class="mint-button mint-button--default mint-button--normal">
                 <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
               </button></a></div>
           <span>申请换货</span>
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

       <div class="title_1">
         <p>换货数量</p>
         <div>
           <ul>
             <li>-</li>
             <li>75</li>
             <li>+</li>
           </ul>
         </div>
       </div>

       <div class="title_2">
         <div class="title_2_n">
           <p>退款原因</p>
           <div>
             <i class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div>

       <div class="title_3">
         <div class="title_3_l">
           <span class="">收货地址</span>
         </div>
         <div class="title_3_z">
             <div  class="title_3_s">
                   <span>柚子</span>
                   <span>13797899348</span>
             </div>
             <div class="title_3_x">
                   <span>江苏省无锡市新吴区国家软件团鲸鱼座A座7F</span>
              </div>
         </div>
           <i class="el-icon-arrow-right" ></i>
       </div>

       <div class="title_4">
         <span>换货说明</span> <input type="text" placeholder="(选填)" maxlength="45">
       </div>

       <div class="title_5">
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

         <div class="title_6">
           <router-link to="type_of_service">
           <button>提交</button>
           </router-link>
         </div>

     </div>
</template>

<script>
    export default {
      data() {
        return {
          imageUrl: ''
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

          if (!isJPG && !isPNG) {
            this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
          }

          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
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


  .title_1{
    height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_1 p{
    font-size: 8px;
    color: #000;
  }
  .title_1 ul{
    list-style: none;
  }
  .title_1 ul li{
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 3px;
    text-align: center;
    background-color: #fafafa;
  }

  .title_2{
    height: 50px;
    padding-left: 14px;
    background-color: #fff;
  }
  .title_2 .title_2_n{
    height: 50px;
    padding-right: 14px;
    border-bottom: 1px solid #EFEFF4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title_2 .title_2_n p{
    font-size: 7px;
    color: #000;
  }
  .title_2 .title_2_n i{
    font-style: normal;

  }

  .title_3{
    height: 100px;
    padding: 30px 14px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .title_3 .title_3_z .title_3_s{
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
  }
  .title_3 span{
    font-size: 7px;
  }
  .title_3 i{
    line-height: 40px;
  }

  .title_4{
    height: 50px;
    padding: 0 14px;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .title_4 span{
    font-size: 8px;
    margin-right: 5px;
  }
  .title_4 input{
    width: 70%;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 8px;
    border: #fff;
    padding: 0;
  }


  .title_5{
    background-color: #fff;
    padding: 8px 14px ;

  }
  .title_5 p{
    margin-bottom: 10px;
  }

 .title_6{
   margin-top: 100px;
   margin-bottom: 100px;
 }
  .title_6 button{
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #dd0a0a;
  }




</style>

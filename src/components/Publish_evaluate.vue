<template>
    <div>
      <div class="heard">
        <header class="mint-header is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/pindan_list" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button>
            </a>
          </div>
          <span class="mint-header-title">发表评价</span>
          <div class="mint-header-button is-right">
            <button class="mint-button mint-button--default mint-button--normal">
              <span class="mint-button-icon"><p class="">发布</p></span>
            </button>
          </div>
        </header>
      </div>

      <div class="title_1">

        <img src="../../src/assets/mui.png" alt="">
        <span>商品评分</span>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <span>非常好</span>
      </div>

       <div class="title_2">
          <p>好评！感谢渔获的高端定制渔获的高端定制渔获的高端定制渔获的高端定制</p>


         <div class="title_2_d">
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

      <div class="title_3">
        <div class="title_3_1">
         <i class="iconfont icon-dianpu"></i>
         <span>店铺评分</span>
        </div>
        <div class="title_3_2">
        <span>服务态度</span>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
        <span>非常好</span>
        </div>

         <div class="title_3_3">
           <span>物流速度</span>
           <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
           <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
           <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
           <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
           <i data-v-6ab855f4="" class="mui-icon mui-icon-star-filled"></i>
         </div>



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

          if (!isJPG && isPNG) {
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
    background-color: #EFEFF4;

  }
  .mint-header span,p{
    color: #000;
  }

  .title_1{
    height: 60px;
    padding: 0 14px;
    border-bottom: 1px solid #EFEFF4;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  .title_1 img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .title_1 span{
    font-size: 7px;
  }
  .title_1 span:nth-child(2){
    color: #000;
    margin-right: 16px;
  }
  .title_1 span:nth-last-child(1){
    color: #999;
  }
  .title_1 i{
    font-size:14px;
    color: #999;
    padding-bottom: 5px;
    margin-right: 13px;
  }
  .mui-icon-star-filled:before{
    color: #cecece;
  }


  .title_2{
    height: 253px;
    padding: 15px 14px 17px 14px;
    margin-bottom: 10px;
    background-color: #fff;
    position: relative;
  }
  .title_2 p{
    font-size: 7px;
  }
  .title_2  .title_2_d{
    position: absolute;
    left: 14px;
    bottom: 17px;
  }


  .title_3{
    height: 145px;
    padding: 10px 14px 0 14px;
    background-color: #fff;
  }

  .title_3 .title_3_1 span{
    font-size:14px;
    color: #999;
  }
  .title_3 .title_3_1 i{
    font-size:14px;
    color: #999;
    margin-right: 10px;
  }
  .title_3 .title_3_2{
    margin-top: 20px;
  }
  .title_3 .title_3_2 span:nth-child(1){
    font-size: 7px;
    margin-right: 16px;
    color: #000;
  }
  .title_3 .title_3_2 span:nth-last-child(1){
    font-size: 7px;
    color: #999;
  }
  .title_3 .title_3_2 i{
    margin-right: 13px;
    font-size: 14px;
  }

  .title_3 .title_3_3{
    margin-top: 20px;
  }

  .title_3 .title_3_3 span{
    font-size: 7px;
    margin-right: 16px;
    color: #000;
  }
  .title_3 .title_3_3 i{
    margin-right: 13px;
    font-size: 14px;
  }

</style>

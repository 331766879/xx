<template >
  <div>
    <div class="heard">
      <header class="mint-header is-fixed">
        <div class="mint-header-button is-left">
          <a href="#/" class="router-link-active">
            <button class="mint-button mint-button--default mint-button--normal">
              <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
            </button>
          </a>
        </div>
        <span class="mint-header-title">商品分类</span>
        <div class="mint-header-button is-right">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon"><i class="iconfont icon-gengduo-tianchong"></i></span>
          </button>
        </div>
      </header>
    </div>

    <div class="title_1">
      <div class="title_1_n">
        <p>全部商品</p>
        <div>
          <router-link to="all_products">
          <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>

   <div class="title_2_q">
     <ul>
       <li>
         <div class="title_2">
           <div class="title_2_n">
             <p>户外装备</p>
             <div>
               <i class="el-icon-arrow-right"></i>
             </div>
           </div>
         </div>
       </li>
       <li> <div class="title_2">
         <div class="title_2_n">
           <p>钓钩</p>
           <div>
             <i class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div></li>
       <li> <div class="title_2">
         <div class="title_2_n">
           <p>浮漂</p>
           <div>
             <i class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div></li>
       <li> <div class="title_2">
         <div class="title_2_n">
           <p>饵料</p>
           <div>
             <i class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div></li>
       <li> <div class="title_2">
         <div class="title_2_n">
           <p>配件</p>
           <div>
             <i class="el-icon-arrow-right"></i>
           </div>
         </div>
       </div></li>
     </ul>
   </div>



  </div>

</template>

<script>
    export default {
      data(){
        return{

        };
      },
      methods:{

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
    height: 50px;
    padding-left: 14px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .title_1 .title_1_n{
    height: 50px;
    padding-right: 14px;
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
    color: #000;
  }


  .title_2_q{

  }
  .title_2_q ul{
    list-style: none;
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


</style>

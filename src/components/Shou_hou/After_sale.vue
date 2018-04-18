<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>申请换货</span>
        </header>
      </div>

      <router-link to="after_sale_list">
      <div class="title_1">
        <div class="title_1_q">


        <div class="title_1_l">
        <div  class="title_1_s">
          <div>
            <span>柚子</span>
          </div>
          <span>13797899348</span>
        </div>
        <div class="title_1_x">
          <span>江苏省无锡市新吴区国家软件团鲸鱼座A座7F</span>
        </div>
        </div>

         <div class="title_1_r">
           <div class="mint-cell-title">
             <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span></span>
               <span class="mint-checkbox-label"></span>
             </label>
           </div>
         </div>
        </div>
      </div>
      </router-link>


      <router-link to="after_sale_info">
      <div class="title_1">
        <div class="title_1_q">
          <div class="title_1_l">
            <div  class="title_1_s">
              <div>
                <span>强哥</span>
              </div>
              <span>13797899348</span>
            </div>
            <div class="title_1_x">
              <span>江苏省无锡市新吴区国家软件团鲸鱼座A座7F3楼座</span>
            </div>
          </div>

          <div class="title_1_r">
            <div class="mint-cell-title">
              <label class="mint-checklist-label">
            <span class="mint-checkbox">
              <input type="checkbox" class="mint-checkbox-input" value="选项A">
              <span class="mint-checkbox-core"></span></span>
                <span class="mint-checkbox-label"></span>
              </label>

            </div>
          </div>
        </div>
      </div>
      </router-link>


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
    height: 84px;
    padding-left: 14px;
    background-color: #fff;
    box-sizing: border-box;

  }

  .title_1 .title_1_q{
    height: 100%;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .title_1 .title_1_q .title_1_l{
    width: 90%;
    height: 100%;
  }
  .title_1 .title_1_s {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

  }

  .title_1 .title_1_s span{
    font-size:8px ;
    color: #000;
  }
  .title_1 .title_1_x span{
    font-size:6px ;
    color: #999;
  }
  .mint-checkbox-input:checked+.mint-checkbox-core{
    background-color: #dd0a0a !important;
    border-color: #dd0a0a !important;
  }





</style>

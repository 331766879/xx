<template>
    <div>
      <div class="heard">
        <header class="mint-header  is-fixed">
          <div class="mint-header-button is-left">
            <a href="#/home" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
              </button></a></div>
          <span>拼单</span>
        </header>
      </div>

      <div class="pin_list">
        <ul>
          <li >
            <div class="pin_list_l">
              <img src="../../src/assets/客服-灰.png" alt="">
              <span>喵喵喵</span> <br>
              <p>
                <i>还差1人</i>
                <i>剩余23:24:14</i>
              </p>

            </div>
            <button @click="centerDialogVisible = true">去拼单</button>
          </li>
        </ul>
      </div>

  <div  class="tan_c">
      <el-dialog
        title="参加喵喵喵的拼单"
        :visible.sync="centerDialogVisible"
        width="75%"
       center>

        <span>仅剩 <i>5</i>个名额</span>
        <span>23:24:14 后结束</span>
        <div class="image">
          <div class="image_1">
           <img src="../../src/assets/参与拼单@1x.png" alt="">
           <p>拼主</p>
          </div>

           <img src="../../src/assets/参与拼单@1x.png" alt="">

        </div>
        <span slot="footer" class="dialog-footer">

            <button @click="centerDialogVisible = false">参与拼单</button>

  </span>
      </el-dialog>
  </div>





    </div>
</template>

<script>
    export default {
          data(){
            return{
              centerDialogVisible:false
            }
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


.pin_list{
  height: 58px;
  background-color: #fff;
  padding: 0 14px;
  border-bottom: 1px solid #EFEFF4;
}
.pin_list ul{
  width: 100%;
  height: 58px;
  list-style: none;
}
  .pin_list ul li{
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
.pin_list .pin_list_l img{
  width: 38px;
  height: 38px;
  float: left;

}
  .pin_list .pin_list_l span{
    margin-left: 10px;
  }
  .pin_list .pin_list_l p{
    width: 180px;
    display: flex;
    justify-content: left;
    margin-left: 50px;
  }
  .pin_list .pin_list_l p i{

    font-style: normal;
  }
  .pin_list .pin_list_l p i:nth-child(1){
    margin-right: 10px;
  }

  .pin_list ul li button{
    width: 80px;
    height: 31px;
    background-color: #dd0a0a;
    color: #fff;
    border-radius: 20px;

  }


/*弹窗*/

  .tan_c span i{
    font-style: normal;
    margin: 3px;
    color: #dd0a0a;
  }
  .tan_c span{
    color: #000;
    font-size: 14px;
  }
  .tan_c span:nth-child(2){
    margin-left: 10px;
  }
  .tan_c .image{
    height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .tan_c .image .image_1{
    position: relative;
  }
  .tan_c .image img{
    width: 38px;
    height: 38px;
    margin-right: 10px;
    border-radius: 100px;

  }
  .tan_c .image .image_1 p{
    width: 40px;
    line-height: 20px;
    font-size: 5px;
    color: #fff;
    background-color: dodgerblue;
    border-radius: 15px;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  .tan_c button{
    width: 85%;
    height: 40px;
    border-radius: 20px;
    color: #fff;
    background-color: #dd0a0a;
  }

</style>

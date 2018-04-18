<template >
  <div>

    <div class="heard ">

      <img class="pic"  src="../../src/assets/mui.png" alt="" >

        <a href="#/home" class="router-link-active">
          <i class="mintui mintui-back jt" style="font-size: 20px; color: #fff"></i>
        </a>

      <img class=" search" src="../../src/assets/搜索-黑.png" alt="">
      <input type="text"  placeholder="搜索产品名或品类" >

      <i class="iconfont icon-gengduo4"></i>
      <p></p>
    </div>

    <div class="title">
      <div class="top">
        <div class="top_img">
          <img src="../../src/assets/title.png" alt="">
        </div>
        <div class="top_r">
          <h5>索罗特渔具</h5>
          <span >无锡</span>
          <span>2.3万粉丝</span>
          <button>关注</button>
        </div>
      </div>
    </div>

    <div class="introduce">
      <input type="checkbox" id="introduce">
      <p>索罗特渔具是中国知名渔具品牌，诞生2004年的无锡，以优良的品质文明于是以优良的品质文明以优良的品质文明于是以优良的品质文明以优良的品质文明于是以优良的品质文明以优良的品质文明于是以优良的品质文明以优良的品质文明于是以优良的品质文明</p>
      <label for="introduce"><p><i></i>展开简介<i></i></p></label>
    </div>


    <div  class="tab">

      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab_1">
        <el-tab-pane label="全部商品" name="first">

          <div class="tab2">
            <el-tabs v-model="activeName1" @tab-click="handleClick">

              <el-tab-pane label="综合" name="first">

                <div class=" commodity ">
                  <ul>
                    <router-link to="/details">
                      <li>
                        <div class="img_tp">
                          <img src="../../src/assets/title.png" alt="">
                        </div>
                        <p>渔获高级会员服务，助你渔获满满</p>
                        <i>￥644</i>
                        <span>12341付款</span>
                        <b>···</b>
                      </li>
                    </router-link>

                    <router-link to="/details">
                      <li>
                        <div class="img_tp">
                          <img src="../../src/assets/title.png" alt="">
                        </div>
                        <p>渔获高级会员服务，助你渔获满满</p>
                        <i>￥644</i>
                        <span>12341付款</span>
                        <b>···</b>
                      </li>
                    </router-link>

                    <router-link to="/details">
                      <li>
                        <div class="img_tp">
                          <img src="../../src/assets/title.png" alt="">
                        </div>
                        <p>渔获高级会员服务，助你渔获满满</p>
                        <i>￥644</i>
                        <span>12341付款</span>
                        <b>···</b>
                      </li>
                    </router-link>

                    <router-link to="/details">
                      <li>
                        <div class="img_tp">
                          <img src="../../src/assets/title.png" alt="">
                        </div>
                        <p>渔获高级会员服务，助你渔获满满</p>
                        <i>￥644</i>
                        <span>12341付款</span>
                        <b>···</b>
                      </li>
                    </router-link>
                  </ul>

                </div>



              </el-tab-pane>

              <el-tab-pane label="销售" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="新品" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="价格" name="fourth">定时任务补偿</el-tab-pane>

              <!--切换商品竖向排列-->
              <el-tab-pane label="" name="five">

                <router-link to="details">
                  <div class="picture_list">
                    <ul >
                      <li class="img_list">
                        <img  src="../../src/assets/title.png">
                      </li>
                      <li class="title_list">
                        <p >能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <i>￥644</i>
                        <span>12341付款</span>
                        <b>···</b>
                      </li>
                    </ul>
                  </div>
                </router-link>

                <div class="picture_list">
                  <ul >
                    <li class="img_list">
                      <img  src="../../src/assets/title.png">
                    </li>
                    <li class="title_list">
                      <p >能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                      <i>￥644</i>
                      <span>12341付款</span>
                      <b>···</b>
                    </li>
                  </ul>

                </div>

                <div class="picture_list">
                  <ul >
                    <li class="img_list">
                      <img  src="../../src/assets/title.png">
                    </li>
                    <li class="title_list">
                      <p >能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                      <i>￥644</i>
                      <span>12341付款</span>
                      <b>···</b>
                    </li>
                  </ul>

                </div>
              </el-tab-pane>

            </el-tabs>
          </div>

        </el-tab-pane>

        <el-tab-pane label="拼单" name="second">
          <router-link to="pindan_list">
            <div id="imglist">
              <ul>
                <li>
                  <img src="../../src/assets/yuju.png" alt="">
                  <div id="desc">
                    <h5>索罗特渔具是中国知名渔具品牌，诞生2004年的无锡，以优良的品质文明</h5>
                    <i>￥644</i>
                    <span>12341付款</span>

                    <button>去拼单</button>

                  </div>
                </li>
                <li></li>
              </ul>
            </div>
          </router-link>


        </el-tab-pane>

        <el-tab-pane label="新品" name="third">
          <div id="imglist1">
            <ul>
              <Li>
                <p>3月7日</p>
              </Li>
              <Li>
                <img src="../../src/assets/yuju.png" alt="">
                <div id="desc1">
                  <h5>索罗特渔具是中国知名渔具品牌，诞生2004年的无锡，以优良的品质文明于是以优良的品质文明于是以优良的品质文明于是以优良的品质文明于是</h5>
                  <i>￥644</i>

                </div>
              </Li>
            </ul>

          </div>






        </el-tab-pane>

      </el-tabs>
    </div>




  </div>

</template>

<script>
  export default {
    data(){
      return{
        activeName: 'first',
        activeName1: 'first'
      };
    },
    methods:{
      handleClick(tab, event) {

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
    width: 100%;
    height: 128px;
    text-align: center;
    background-color: blanchedalmond;
    position: relative;
  }
  .heard .pic{
    width: 100%;
    height: 100%;
  }
  .heard .jt{
    width: 15px;
    height: 15px;
    position: absolute;
    top: 31%;
    left: 5%;
  }
  .heard .search{
    width: 15px;
    height: 15px;
    position: absolute;
    top: 44%;
    left: 18%;
  }
  .heard i{
    font-size:20px ;
    color: #fff;
    position: absolute;
    right: 6%;
    top: 31%;
  }
  .heard input{
    width: 70%;
    height: 30px;
    border-radius: 25px;
    border: 1px solid #fff ;
    font-size: 14px;
    padding-left: 30px;
    background-color: #fff;
    filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
    position: absolute;
    left: 15%;
    top: 49px;
  }
  .title{
    width: 100%;
    height: 70px;
    background-color: #fff;
    padding-left: 14px;
    padding-right: 14px;
  }
  .title .top{
    width: 100%;
    display: flex;
    justify-content: space-between;

  }
  .title .top .top_img{
    position: relative;

  }
  .title .top img{
    width: 70px;
    height: 70px;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #888888;
    position: absolute;
    left: 0;
    top: -20px;
  }
  .title .top .top_r{
    width: 70%;
    margin-top: 10px;
  }
  .title .top .top_r h5{
    font-size: 8px;
    color: #000;
  }
  .title .top .top_r span{
    font-size: 6px;
    color: #999;
  }

  .title .top .top_r span:nth-child(2){
    display: inline-block;
    width: 30px;
    line-height: 15px;
    font-size: 6px;
    color: #8f8f94;
    border-right: 1px solid #8f8f94;
  }
  .title .top .top_r span:nth-child(3){
    font-size: 6px;
    color: #8f8f94;
  }
  .title .top_r button{
    width: 80px;
    height: 31px;
    float: right;
    border-radius: 20px;
    color: white;
    background-color: dodgerblue;
  }


  .introduce{
    background: #fff;
    font-size: 6px;
    padding: 0 14px;
    margin-bottom: 10px;
  }

  .introduce p{
    height: 40px;
    overflow: hidden;
  }

  .introduce label p{
    text-align: center;
    margin-top: 20px;
  }
  #introduce:checked + p{
    height: auto;
  }

  .introduce label{
    display: block;
    margin: auto;
    cursor: pointer;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  #introduce{
    display:none;
  }

  .introduce label p i{
    display: inline-block;
    width: 90px;
    height: 1px;
    background-color: #999;
  }

  .introduce label p>i{
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
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

  /*拼单样式*/
  #imglist {
    width: 100%;
    height:239px ;
    margin-bottom: 10px;
    background-color: #fff;
    padding-bottom: 10px;
  }
  #imglist li{
    list-style:none;
    position: relative ;
  }
  #imglist img{
    width:100%;
    height: 150px;
    margin-bottom: 11px;
    /*background-color: red;*/
  }
  #desc{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    position: relative;
  }
  #desc h5{
    font-size: 9px;
    color: #000;
    font-weight: bold;
    line-height: 15px;
    margin-bottom: 11px;
  }
  #desc i{
    font-size: 9px;
    font-style: normal;
    color: #dd0a0a;
    margin-right: 20px;
  }
  #desc span{
    font-size: 6px;
    color: #999;
  }
  #desc button{
    float: right;
    width: 80px;
    height: 31px;
    border-radius: 20px;
    font-size: 7px;
    color: white;
    background-color: #dd0a0a;
    position: absolute;
    right: 14px;
    bottom: 0;
  }

  /*新品样式 到时候把id改成对应的类*/
  #imglist1 {
    height: 508px;
    padding-bottom: 650px;
  }
  #imglist1 ul{
    height: 508px;
    background-color: #fff;

  }

  #imglist1 p{
    width: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 6px;
    color: #999;
    background-color: #F5F5F5;
  }
  #imglist li{
    list-style:none;
    position: relative ;
  }
  #imglist1 img{
    width:100%;
    height: 375px;
    margin-bottom: 11px;
  }
  #desc1{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
  }
  #desc1 h5{
    color: #000;
    font-size: 9px;
    line-height: 15px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  #desc1 i{
    display: inline-block;
    color: #dd0a0a;
    margin: 0 0 15px 0 ;
  }


  /*商品竖向列表样式*/
  .picture_list ul{
    height: 160px;
    background-color: white;
    list-style: none;
    margin-bottom: 2px;
    display: flex;
  }
  .picture_list ul .img_list{
    width: 200px;
    margin-right: 10px;
  }
  .picture_list ul .img_list img{
    width: 100%;
    height: 140px;
    box-shadow: 1px 1px 1px #999;
    background-color: #f9f2f4;

  }
  .picture_list ul .title_list{
    padding-right: 10px;
  }
  .picture_list ul .title_list i,span,b{

  }
  .picture_list ul .title_list p{
    margin-top: 30px;
    font-weight: bold;
    color: #000;
  }
  .picture_list ul .title_list i{
    float: left;
    font-size: 18px;
    margin-right: 10px;
    color: #dd0a0a;
  }

  .picture_list ul .title_list span{
    float: left;
    font-size: 12px;
    color: #999;
  }
  .picture_list ul .title_list b{
    float: right;
    margin-right: 5px;
    font-size: 20px;
    color: #999;
  }
</style>


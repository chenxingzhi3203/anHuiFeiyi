<template>
  <div class="hello">
    <h1 style="height: 20px;">
      <span> <img alt="logo" style="height: 24px;width: 24px;margin: 0px;" src="@/assets/commonImg/logo.png">{{ msg
        }}</span>

      <span> <img alt="logo" style="height: 64px;width: 64px;float: right;" src="@/assets/commonImg/qt.png" />
        <span class="QTclass"> 扫一扫 </span>
      </span>

    </h1>
    <div>
      <el-switch v-model="modelValue" class="mb-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="博物馆模式" inactive-text="教学模式" />
    </div>
    <div class="card-wrap">
      <!-- vue的遍历，目的是创造data.length个数的card -->
      <div class="card-context" v-for="item in cards" :key="item.name">
        <div class="card-item">
          <div class="card-toolbar">
            <span class="card-name">{{ item.name }}</span>
            <span v-if="!!item.name" class="more">
              <button class="custom-btn btn card-lesson" v-if="!modelValue">{{ item.lesson }}</button>

              <router-link :to="`/goods?name=${item.name}`">
                <img src="@/assets/commonImg/more-two.svg" style="width: 20px;height: 20px;" />
              </router-link>
            </span>
          </div>
          <div class="card-info"
            :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeiyiWorld",
  data() {
    return {
      // 数据
      msg: '欢迎来到安徽非遗',
      modelValue: true,//默认博物馆模式
      cards: [
        { name: "纸笺加工技艺", img: require("@/assets/zhijianjiagong/zhijianjiagong0.png"), btnImg: "go", lesson: '第一课时' },
        { name: "桑皮纸制作技艺", img: require("@/assets/sangpizhizhizuo/sangPiZhiZhiZao0.png"), btnImg: "go", lesson: '第一课时' },
        { name: "徽墨制作技艺", img: require("@/assets/huimozhizuo/huimozhizuojy0.png"), btnImg: "go", lesson: '第二课时' },
        { name: "界首彩陶烧制技艺", img: require("@/assets/jieshoucaitaozhizhuogongyi/jieshoucaitao0.png"), btnImg: "go", lesson: '第二课时' },
        { name: "万安罗盘制作技艺", img: require("@/assets/wananluopan/wananluopan0.png"), btnImg: "go", lesson: '第三课时' },
        { name: "歙砚制作技艺", img: require("@/assets/sheyanzhizao/sheyanzhizao0.png"), btnImg: "go", lesson: '第三课时' },
        { name: "芜湖铁画制造技艺", img: require("@/assets/wuhutiehuazhizao/wuhutiehuazhizao0.png"), btnImg: "go", lesson: '第四课时' },
        { name: "宣纸制作技艺", img: require("@/assets/xuanzhizhizuojiyi/xuanzhizhizuojiyi0.png"), btnImg: "go", lesson: '第四课时' },
        { name: "豆腐传统制作技艺", img: require("@/assets/doufuzhizao/doufuzhizao0.png"), btnImg: "go", lesson: '第五课时' },
        { name: "徽派传统民居建筑营造技艺", img: require("@/assets/huipaiminjuzhizao/huipaiminjuzhizao0.png"), btnImg: "go", lesson: '第五课时' },


        //开始
        { name: "毛笔制作技艺", img: require("@/assets/maobizhizuo/maobizhizuo0.png"), btnImg: "go", lesson: '第六课时' },
        { name: "刻铜", img: require("@/assets/ketong/ketong0.png"), btnImg: "go", lesson: '第六课时' },
        { name: "宣笔制作技艺", img: require("@/assets/xuanbizhizuo/xuanbizhizuo0.png"), btnImg: "go", lesson: '第七课时' },
        { name: "绿茶制作技艺（太平猴魁）", img: require("@/assets/taipinghokui/taipinghokui0.png"), btnImg: "go", lesson: '第七课时' },
        { name: "红茶制作技艺（祁门红茶）", img: require("@/assets/qimenhoncha/qimenhoncha0.png"), btnImg: "go", lesson: '第八课时' },
        { name: "漆器髹饰技艺", img: require("@/assets/qiqijiyi/qiqijiyi0.png"), btnImg: "go", lesson: '第八课时' },
        { name: "绿茶制作技艺（六安瓜片）", img: require("@/assets/luanguapian/luanguapian0.png"), btnImg: "go", lesson: '第九课时' },
        { name: "绿茶制作技艺（黄山毛峰）", img: require("@/assets/huangshanmaofeng/huangshanmaofeng0.png"), btnImg: "go", lesson: '第九课时' },
        {},
        {}
      ],
    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb-2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: fit-content;
}

.QTclass {
  display: inline-block;
  float: right;
  font-size: 14px;
  color: cornflowerblue;
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.card-context {
  flex: 1;
  width: 300px;
  min-width: 300px;
  height: 214px;
  margin: 10px 0;
}

.more {
  float: right;
  margin-right: 4px;
}

.card-item {
  display: flex;
  flex-direction: column;
}

.card-item:hover {
  transform: scale(1.02);
  transition: all 600ms linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.card-toolbar {
  background-color: #dbf4f4;
  margin: 0 10px;
}

.card-name {
  float: left;
  margin-left: 6px;
}

.card-lesson {
  background-color: #fff;
  padding: 2px;
  border: 1px solid #9c9c9c;
}

.card-context.no-border {
  border: none;
}

.card-info {
  margin: auto;
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(190, 195, 199, 0.5);
  /* border-radius: 2px; */
}


.custom-btn {
  width: 90px;
  height: 20px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

.btn {
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  line-height: 20px;
  padding: 0;
  border: none;
  vertical-align: super;
}

.btn span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn:before,
.btn:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  /* background: rgba(251, 75, 2, 1); */
  background: #409eff;

  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
    -4px -4px 5px 0px rgba(255, 255, 255, .9),
    7px 7px 20px 0px rgba(0, 0, 0, .2),
    4px 4px 5px 0px rgba(0, 0, 0, .3);
  transition: all 0.3s ease;
}

.btn:before {
  height: 0%;
  width: 2px;
}

.btn:after {
  width: 0%;
  height: 2px;
}

.btn:hover {
  /* color: rgba(251, 75, 2, 1); */

  color: #409eff;
  background: transparent;
}

.btn:hover:before {
  height: 100%;
}

.btn:hover:after {
  width: 100%;
}

.btn span:before,
.btn span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  /* background: rgba(251, 75, 2, 1); */
  background: #409eff;

  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
    -4px -4px 5px 0px rgba(255, 255, 255, .9),
    7px 7px 20px 0px rgba(0, 0, 0, .2),
    4px 4px 5px 0px rgba(0, 0, 0, .3);
  transition: all 0.3s ease;
}

.btn span:before {
  width: 2px;
  height: 0%;
}

.btn span:after {
  height: 2px;
  width: 0%;
}

.btn span:hover:before {
  height: 100%;
}

.btn span:hover:after {
  width: 100%;
}
</style>
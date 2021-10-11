<template>
  <!-- 积分信息 -->
  <NavBar />
  <!-- 卡片区域 -->
  <div class="cardBox">
    <div
      :class="computedRole(item)"
      v-for="(item, idx) in cardList"
      :key="item.id"
      @click.stop="getScoped(item)"
    >
      <p class="count" v-if="!item.isClick" v-html="idx + 1"></p>
    </div>
  </div>
  <van-overlay class="zBox" :show="resDialog" @click="resDialog = false">
    <div class="msgBox" @click.stop>
      <van-icon
        name="close"
        class="floaIcon"
        color="#FFEB3B"
        size="2rem"
        @click="resDialog = false"
      />
      <p class="msgFont" v-html="userInfo.total"></p>
    </div>
  </van-overlay>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { reactive, ref } from "@vue/reactivity";
import { provide, watch } from "@vue/runtime-core";
import { computedWin } from "@/utils/tool.js";
export default {
  name: "index",
  components: { NavBar },
  setup() {
    let userInfo = reactive({ icon: "", total: 0 });
    provide("userInfo", userInfo);
    let cardList = reactive(computedWin(9));
    let resDialog = ref(false);
    watch(cardList, (res) => {
      let flag = res.every((el) => {
        return el.isClick === true;
      });
      resDialog.value = flag && true;
    });
    function getScoped(item) {
      //   console.log("点击", item);
      if (!item.isClick) {
        let idx = cardList.findIndex((e) => {
          return e.id === item.id;
        });
        userInfo.total += cardList[idx].scoped;
        cardList[idx].isClick = true;
      }
    }
    function computedRole(item) {
      return item.isClick
        ? item.getrole === "bader"
          ? "cardHoverBader"
          : "cardHovergooder"
        : "card";
    }
    return { cardList, getScoped,userInfo,resDialog, computedRole };
  },
};
</script>

<style>
.cardBox {
  width: 100%;
  height: 31.25rem;
  /* background-color: teal; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
}
.card {
  width: 6.25rem;
  height: 9.375rem;
  background: url("../../assets/cover.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 0.5625rem;
  margin: 0.375rem;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
.cardHoverBader {
  width: 6.25rem;
  height: 9.375rem;
  background: url("../../assets/del30.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 0.5625rem;
  margin: 0.375rem;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.1) rotateY(360deg);
  background-color: #000;
}
.cardHovergooder {
  width: 6.25rem;
  height: 9.375rem;
  background: url("../../assets/add100.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 0.5625rem;
  margin: 0.375rem;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.1) rotateY(360deg);
  background-color: #000;
}
.count {
  font-family: fontDo;
  color: #fff;
  font-size: 1.875rem;
}
.msgBox {
  width: 21.875rem;
  height: 9.25rem;
  background-color: #2d294e;
  border-radius: 0.5625rem;
  background: url("../../assets/gift.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 35%;
  left: 0.75rem;
  transform: translateZ(999px);
}
.floaIcon {
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
}
.msgFont {
  font-size: 1.3rem;
  font-family: fontDo;
  position: absolute;
  /* top: 9.375rem; */
  bottom: 1.4rem;
  width: 2.8125rem;
  right: 3.0375rem;
  transform: translateX(-50%);
  text-align: center;
  letter-spacing: 1px;
  color: #FFC107;
  /* background-color: orangered; */
}
.zBox {
  transform: translateZ(999px);
}
</style>
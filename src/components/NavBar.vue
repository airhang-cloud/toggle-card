<template>
  <div class="navBox">
    <van-image
      width="3rem"
      height="3rem"
      round
      src="http://img.airhang.ltd/me.jpg"
    >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <div class="scopedBox">
      <img class="icon" src="@/assets/scoped.png" alt="" />
      <p v-html="userinfo.total"></p>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { inject, watch } from "@vue/runtime-core";
export default {
  name: "index",
  setup() {
    let userinfo = inject("userInfo");
    return { userinfo };
  },
};
</script>

<style scoped lang="less">
.navBox {
  width: 100%;
  height: 3.75rem;
  /* background-color: orange; */
  display: flex;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
}
.scopedBox {
  width: calc(100% - 5rem);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    color: orange;
    font-size: 1.175rem;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
}
.icon {
  width: 3.6rem;
  height: auto;
}
</style>
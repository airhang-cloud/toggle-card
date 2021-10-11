<template>
  <router-view />
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <van-loading type="circular" color="#FFEB3B" />
    </div>
  </van-overlay>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "index",
  setup() {
    let show = ref(true);
    window.onload = function(){
      console.log("加载");
      show.value = false;
    }
    return { show };
  },
};
</script>
<style lang="less">
@font-face {
  font-family: "fontDo";
  src: url("./assets/锐字潮牌真言简2.0免费 大粗.ttf"); /* Safari, Android, iOS */
}
* {
  padding: 0;
  margin: 0;
}
body,
html {
  background: #212121;
}
.wrapper{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>

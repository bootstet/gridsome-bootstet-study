<template>
  <div class="never">
    <div class="main-slide" >
      <div
        v-for="item in constantRouterMap"
        :key="item.path"
        :index="item.path"
      >
        <g-link class="link" :to="item.path">{{item.meta.title}}</g-link>
      </div>
    </div>
    
    <div class="main-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import { constantRouterMap } from "../../route";
export default {
  components: {
  },
  data() {
    return {
      constantRouterMap,
      active: "",
      parentUrl: "",
      menuList: [],
    };
  },
  computed: {
  },
  mounted() {
    let arr = this.$route.path.split("/");
    this.active = "/" + arr[1] + "/" + arr[2];
    console.log(constantRouterMap)
  },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
    openTokenDialog() {
      this.$refs.tokenDialog.open(() => {});
    },
    cancellation() {
      this.$store.dispatch("Cancellation");
    },
  },
};
</script>
<style>
  .never {
    /* width: 200px; */
    width: 100%;
    height: 500px;
    display: flex;
  }
  .never .main-slide {
    flex: 2;
  }
  .never .main-content {
    flex: 5;
    border: 1px solid #666;
  }
  .never .link {
    width: 200px;
    height: 80px;
    border: 1px solid #000;
    color: red;
  }
</style>
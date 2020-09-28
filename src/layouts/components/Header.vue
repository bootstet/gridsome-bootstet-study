<template>
  <div class="page">
    <h1 class="header_h">bootstet 博客</h1>
    <h3 class="header_t">欢迎来到bootstet博客</h3>
    <nav class="nav">
      <g-link class="nav__link" to="https://github.com/bootstet">Github 主页</g-link>
      <g-link class="nav__link" to="/about/">博客源码</g-link>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    };
  },
  props: {
    urlSrc: String
  },
  components: {},
  mounted: function () {
    console.log('---', this.urlSrc)
  }
};
</script>

<style>
  .page {
    width: 100%;
    height: 300px;
    background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45));
    color: rgb(255, 255, 255);
    overflow: hidden;
  }
  .header_h {
    text-align: center;
    margin-top: 60px;
    overflow: hidden;
  }
  .header_t {
    text-align: center;
    margin-top: 10px;
  }
  .nav {
    margin: 0 auto;
    text-align: center;
  }
  .nav .nav__link {
    padding: .75rem 1rem;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;
    color: hsla(0,0%,100%,.7);
    background-color: hsla(0,0%,100%,.08);
    border: 1px solid hsla(0,0%,100%,.2);
    border-radius: .3rem;
    transition: color .2s,background-color .2s,border-color .2s;
  }

</style>

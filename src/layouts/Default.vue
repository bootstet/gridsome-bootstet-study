<template>
  <div class="layout">
    <header class="header">
      <Header >
      </Header>
    </header>
    <SideBar>
    <slot/>
    </SideBar>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from './components/Header'
import SideBar from './components/SideBar'
export default {
   data() {
     return {

     }
   },
   components: {
     Header,
     SideBar
   }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  /* max-width: 760px; */
  margin: 0 auto;
  /* padding-left: 20px; */
  padding-right: 20px;
}

.header {
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  border: 1px solid #000; */
}

.nav__link {
  margin-left: 20px;
}
</style>

<script>
export default {
  
}
</script>

<template>
  <div id="app">
    <div class="header">
      <h1><router-link to="/">首頁</router-link></h1>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/about">關於</router-link>
          </li>
          <li>
            <router-link to="/products">產品</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang='scss' scoped>
@import './scss/_var.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: $container;
  margin: 0px auto;
  padding: 38px 0px;
  h1 {
    a {
      font-size: 24px;
      text-decoration: none;
    }
  }
}
.menu {
  display: flex;
  align-items: center;
  li {
    & + li {
      margin-left: 10px;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
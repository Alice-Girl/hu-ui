<script setup>
</script>

<template>
  <!-- <header>
    <van-row gutter="20">
      <van-col span="4">2</van-col>
      <van-col span="20">20</van-col>
    </van-row>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <div class="hy-main">
    <div class="hy-header border">
      
    </div>
    <div class="hy-body"></div>
  </div> -->
  <RouterView />
</template>

<style scoped>
.van-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  /* background: var(--van-popup-background); */
  transition: var(--van-popup-transition);
  -webkit-overflow-scrolling: touch;
  background: rgba(0, 0, 0, .7)!important;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

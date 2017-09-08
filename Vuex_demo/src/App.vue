<template>
  <div id="app">
    <h2>我的购物车</h2>
    <products></products>
    <cart></cart>
  </div>
</template>
<script>
  import products from './components/products.vue'
  import cart from './components/cart.vue'
  export default{
      name:'app',
    components:{
          products,
      cart
    },
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<template>
  <div class="cart">
    <table>
      <caption>购物车</caption>
      <thead>
          <tr>
            <th>产品名次</th>
            <th>单价</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
      </thead>
      <tbody>
      <tr v-for="p in products" v-show="p.num">
        <td>{{p.title}}</td>
        <td>{{p.price}}</td>
        <td>{{p.num}}</td>
        <td>
          <button @click="deleteCartProduct(p)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <p>总计:{{allprice}}</p>
      <p><button @click="submitCart">去付款</button></p>
      <p>提示:{{messageInfo}}</p>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
      computed:mapGetters({
        products:'cartProducts',//cartProducts  var    cartProducts  = function(state){return state.cart.added;} from getters.js

        allprice:'allprice',
        messageInfo:'messageInfo',
      }),
    methods:mapActions([
        "deleteCartProduct",
        "submitCart"
    ]),
    created(){}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  table {
    width: 600px;
    margin: 50px auto;
    line-height: 30px;
  }

  button{
    padding: 5px 10px;
  }
</style>


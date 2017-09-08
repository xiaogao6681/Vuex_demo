/**
 * Created by xiaogao on 2017/9/7.
 */
//商品列表
var allProducts = function(state){
  return state.products.all;
}

//购物车商品
var cartProducts  = function(state){
  return state.cart.added;
}

//购物车商品总价

var allprice = function(state){
  var products = state.cart.added;
  var allprice = 0;  //起初的价格积累
  // each price and amount,get the totalprice
  for(let i = products.length-1;i>=0;i--){
    allprice += products[i].price * products[i].num;
  }
  return allprice; // 返回商品总价
}

//提示信息
var messageInfo = function(state){
  return state.cart.messageInfo; //返回信息
}

export default{
  allProducts,
  cartProducts,
  allprice,
  messageInfo
}

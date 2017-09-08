/**
 * Created by xiaogao on 2017/9/7.
 */
var state = {
  all:[]  //获取的商品
}

var mutations = {
  receive_product:function(state,products){
    //console.log(products);// 此时的商品从哪里来的？ 从actions中的products传过来
    state.all = products;
  },
  add_to_cart:function(state,productInfo){ //添加到购物车
    state.all.find(function(p){
      return p.id === productInfo.id;

    }).inventory--;
      console.log(productInfo);
  },

  delete_cart_product:function(state,productInfo){
    state.all.find(function(p){
      return p.id === productInfo.id;
    }).inventory++;
  }
}
export default {
  state,
  mutations
}

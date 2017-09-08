/**
 * Created by xiaogao on 2017/9/8.
 */
//调用获取产品的
import api_product from '../API/product';

//调用获取商品列表的方法action
var getAllProducts = function(context){
  var commit = context.commit;
  api_product.getProducts(function(products){ //products从setTimeout(callback(_products),300);中的_products中传递过来
      commit("receive_product",products);
  })
};

//调用增加购物车商品列方法的action
var addToCart = function(context,productInfo){  //productInfo从哪里来？
  var commit = context.commit;
      if(productInfo.inventory>0){
          commit("add_to_cart",productInfo);//执行添加到购物车
  }
}

//调用删除购物车产品的action
var deleteCartProduct = function(context,productInfo){
    var commit = context.commit;
    if(productInfo.num > 0){
      commit("delete_cart_product",productInfo)
    }
}
var submitCart = function(context){
  var commit = context.commit;
  commit("submit_cart_product");
}

export default {
  getAllProducts,
  addToCart,
  deleteCartProduct,
  submitCart,
}

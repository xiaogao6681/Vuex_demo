/**
 * Created by xiaogao on 2017/9/7.
 */
const state ={
  added:[],//购物车全部商品
  messageInfo:'确认后请提交！',
}
//mutations
const mutations = {
  //添加产品的同步方法
  add_to_cart:function(state,productInfo){//@click="addToCart(p)  此时的productInfo是在vue中的p传递过来的，而p是来自allProducs里面的
    var record = state.added.find(function(p){//查询是不是已经存在
        return p.id === productInfo.id;
    })
    if(!record){
        state.added.push({
          title:productInfo.title,
          id:productInfo.id,
          price:productInfo.price,
          num:1,
        })
    }else{
        record.num++;
    }
  },
  //删除产品的同步方法
  delete_cart_product:function(state,productInfo){
    state.added.find(function(p){
      return p.id === productInfo.id;
    }).num--;
  },
  //提交购物车
  submit_cart_product:function(state){
    state.added = [];
    state.messageInfo = '提交成功！';
  }
}
export default {
  state,
  mutations
}

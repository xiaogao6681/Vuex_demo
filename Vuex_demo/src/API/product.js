/**
 * Created by xiaogao on 2017/9/7.
 */
//The data of server
var _products = [
  {"id":1,"title":'Air jordan 3',"price":1299,"inventory":5},
  {"id":2,"title":'Air jordan 4',"price":899,"inventory":1},
  {"id":3,"title":'Air jordan 5',"price":2499,"inventory":6},
]
export default {
  //get the data
  getProducts:function(callback){
    setTimeout(callback(_products),300);
  },
}

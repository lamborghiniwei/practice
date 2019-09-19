/*
* 2019-09-18
* 发布订阅模式仿写
* es6版本
* */
//  事件中心
class PubSub {
   constructor () {
       this.list = []
   }
   //   订阅
   subscribe (key, fn) {
       //   不存在创建一个新数组
       if (!this.list[key]) {
           this.list[key] = []
       }
       this.list[key].push(fn)
   }
   //   发布
   publish (key, ...arg) {
       for(let fn of this.list[key]) {
           fn.call(this, ...arg)
       }
   }
   //   取消订阅
   unSubscribe (key, fn) {
       let fnList = this.list[key]
       if (!fnList) return false
       //   不传入fn,则清空所有key下的订阅
       if (!fn) {
           fnList.length = 0
       } else {
           fnList.forEach((item, index) => {
               if (item === fn) {
                   fnList.splice(index, 1)
               }
           })
       }
   }
}
let pubSub1 = new PubSub()
//  订阅
pubSub1.subscribe('onwork', time => {
    console.log(`上班了${time}`)
})
pubSub1.subscribe('offwork', time => {
    console.log(`下班了${time}`)
})
pubSub1.subscribe('eat', time => {
    console.log(`吃饭了${time}`)
})
pubSub1.publish('onwork', '9:00')
pubSub1.publish('offwork', '18:00')


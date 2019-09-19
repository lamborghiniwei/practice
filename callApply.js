/*
* call 源码实现
* 2019-09-19
* */

Function.prototype.myCall = function (context) {
    console.log(this) //    bar
    context.fn = this //    foo.fn = [Function bar]
    context.fn() // 调用这个方法,此时的调用者是foo, this指向 foo
    delete context.fn //    执行完删除它,仅适用一次,避免该属性被其他方面使用(遍历)
}
let foo = {
    name: '我是王倩倩'
}
function bar () {
    console.log(this.name)
}
bar.myCall(foo)

Function.prototype.myCall2 = function (context, ...arg) {
    //  null undefined 时候 上下文对象为window call时传入null undefined上下文是window
   if (typeof context === 'object') {
       context = context || window
   } else {
       context = Object.create(null)
   }
   console.log('context', context)
   let fn = Symbol() // 用Symbol来做属性key的值,保持唯一性,避免冲突
   context[fn] = this
   const result = context[fn](...arg)
   //   执行完避免永久存在
   delete context[fn]
   //   函数可以有返回值
   return result
}
let name = '我是全局name'
let test = {
   name: 'lzw'
}
function sayName () {
    console.log(this.name)
}
sayName.myCall2(test)
sayName.myCall2()
sayName.myCall2(null)

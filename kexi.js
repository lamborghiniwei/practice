/*
* currying 函数柯西化
* 又称部分求值
* */

let acount = (
    function () {
        let temp = [];
        return function () {
           if(arguments.length === 0) {
               let count = 0
               temp.forEach(function (item) {
                   count += item
               })
               console.log(count)
               return count
           } else {
               //   temp.push(...arguments)
               [].push.apply(temp, arguments);
           }
        }
    }
)()
acount(100)
acount(200)
acount(300, 400)
acount()

let curring = function (fn) {
   let args = []
   return function () {
       if (arguments.length === 0) {
           return fn.apply(this, args)
       } else {
           [].push.apply(args, arguments);
           return arguments.callee;
       }
   }
}



/*
* 简单的AOP实现
* 2019-09-24
* */
function myAop(originFn, before, after) {
    function _class() {
        console.log(arguments)
        before.apply(this, arguments)
        originFn.apply(this, arguments)
        after.apply(this, arguments)
    }
    return _class
}

function add(a, b) {
    console.log(a, b)
}
 add = myAop(add, function () {
   console.log('before')
}, function () {
    console.log('after')
})
add(2, 3)

/*
* 或者
* */
/*let add1 = myAop(add, function () {
    console.log('before')
}, function () {
    console.log('after')
})
add1(2, 3)*/

/*
* 函数节流(throttle)
* 规定在一个单位时间内,只能触发一次函数,如果这个单位时间内触发多次函数,只有一次生效(间隔执行)
* */
function throttle(fn, delay) {
    let timer = null;
    return function () {
        let context = this;
        let arg = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                fn.call(context, arg)
                timer = null
            }, delay)
        }
    }
}
let throttle1 = throttle(function () {
    console.log('我是节流呀')
}, 3000)
throttle1()
setTimeout(() => {
    throttle1()
}, 2000)

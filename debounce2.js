/*
* 防抖(debounce)
* 2019-09-19
* 在事件被触发的n秒后再执行回调函数, 如果在这n秒内又被触发,则重新计时延迟时间
* 比如延时60秒触发, 在60秒内再次触发,重新计时60秒后再执行
* */
//  立即执行
function debounce(fn, delay) {
    let timer = null;
    let callNow
    return function () {
        let context = this;
        let args = arguments;
        callNow = !timer;
        timer = setTimeout(() => {
            timer = null
        }, delay)
        callNow && fn.call(context, args)
    }
}
console.log(new Date())
let debounce1 = debounce(function () {
    console.log('我是防抖立即执行');
    console.log(new Date())
}, 3000);
debounce1()
setTimeout(() => {
    debounce1()
}, 2000)

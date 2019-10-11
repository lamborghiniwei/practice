/*
* 利用AOP写个测试demo
* 表单验证 提交 提醒
* */
function beforeSubmit() {
    if (value) {
        console.log('表单验证成功')
    } else{
        throw Error('输入框的值不得为空')
    }
}
function submit(value) {
   console.log('提交中值为' + value)
}

function afterSubmit() {
    console.log('提交成功')
}

function aopSubmit(originFn, before, after) {
   return function () {
       before.apply(this, arguments)
       originFn.apply(this, arguments)
       after.apply(this, arguments)
   }
}
let inputDom,value;
function clickHandle () {
    inputDom = document.getElementById('input');
    value = inputDom.value;
    testAop(value)
}
let testAop = aopSubmit(submit, beforeSubmit, afterSubmit)


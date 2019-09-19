/*
* 2019-09-18
* 观察者模式
* es6版
* */

class Subject {
    //  放置一些观察者
    constructor () {
        this.observerList = []
    }
    //  添加观察者
    add (observer) {
        this.observerList.push(observer)
    }
    //  删除观察者
    del (observer) {
        let index = this.observerList.findIndex(item =>
            item === observer
        )
        index > -1 && this.observerList.splice(index, 1)
    }
    //  通知观察者
    notify () {
        this.observerList.forEach((item) => {
            item.update()
        })
    }
}
//  备胎工厂
class Observer {
    constructor (name) {
       this.name = name
    }
    update () {
        console.log('我的女神发消息啦,我是备胎---' + this.name)
    }
}
//  备胎组
let observer1 = new Observer('朱鹏程')
let observer2 = new Observer('张思铭')
//  女神下对老实人下手
let subject = new Subject()
subject.add(observer1)
subject.add(observer2)
//  女神脱单,集体失恋
subject.notify()

//  老张痛悟, 远离渣女
subject.del(observer2)
subject.notify()

## 1.Charles实现本地数据mock
## 2.ajax请求一般放在componentDidMount中
## 3.this的绑定放在constructor中，在初始化组件时只调用一次
## 4.setState本身就有性能优化，改变状态时用函数形式
## 5.动画用transtion 自定义用keyframes,第三方库 react-transition-group
## 6.redux步骤
> (1)编写actionType,使用字符串，方便log
> (2)通过dispatch通知store
> (3)store将原先state和actionType传送给reducer
> (4)reducer根据不同的actionType分别处理(纯函数)，并返回state
> (5)组件里可以通过store.subscribe()监听store的改变，store.getState()获取当前state,通过this.setState()直接替换
## 7.ui(傻瓜)组件和容器（聪明）组件
## 8.无状态组件（不需要用到生命周期，constructor)就是一个函数
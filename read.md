# react学习笔记
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
## 9.redux-thunk中间件，支持action是函数，还有redux-log中间件
## 10.redux-saga中间件可以将异步操作单独拆分到一个文件夹，generator函数
## 11.使用react-redux,provider核心组件，connect组件内来连接公共store
## 12.样式的公共管理	styled-components 
> --save-dev 是你开发时候依赖的东西，--save是你发布之后还依赖的东西。
## 13.阿里云图标，新建项目导入图标，下载使用, iconfont中路径更改为当前./
## 14.动画react-transition-group classNames
## 15.react-redux步骤
> (1) 从redux中引入createStore，创建store
> (2) 创建reducer.js(他是一个向外暴露的默认的纯函数),接受默认的state和action,根据actionType返回更改后的state
> (3) 组件中从react-redux中引入connect，用以链接公共的store，用mapStateToProp和mapDispathToProp将state和dispath映射到当前组件中
> (4) 当前组件如需更改store里的数据，首先创建一个action，通过dispath给store，store自动给reducer处理，reducer处理后会放回新状态
## 16.redux-devtools的使用，详见GitHub
## 17.拆分reducer，用combineReducer合并并且导出
## 18.immutable.js生成immutable对象,通过get set修改
## 19.用redux-imutable来生成combineReducer,state就是一个immutable对象
## 20.onClick={()=>{}}
## 21.react-router
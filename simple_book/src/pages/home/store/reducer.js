import { fromJS } from 'immutable'
import * as constants from './constants'

// 设置state初始值 已转化immutable对象
const defaultState =fromJS({
    topicList: []
})
// 默认暴露一个纯函数
export default (state = defaultState, action)=> {
    switch(action.type) {
        case constants.GETTOPLIST:
            return state.set('topicList',action.list)
		default: 
			return state
	}
}

import * as constants from './constants'
import { fromJS } from 'immutable'

// 设置state初始值
const defaultState =fromJS({
	focused: false
})
// 默认暴露一个纯函数
export default (state=defaultState, action)=> {
	switch(action.type) {
		case constants.SEARCH_FOCUS: {
			return state.set('focused', true)
		}
		case constants.SEARCH_BLUR: {
			return state.set('focused', false)
		}
		default: {
			return state
		}
	}
}

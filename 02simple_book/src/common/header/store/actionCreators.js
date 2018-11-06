import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () =>({
	type: constants.SEARCH_FOCUS
})
export const searchBlur = () =>({
	type: constants.SEARCH_BLUR
})
export const onMouseEnter = () =>({
	type: constants.ONMOUSE_ENTER
})
export const onMouseLeave = () =>({
	type: constants.ONMOUSE_LEAVE
})
export const switchItem = (page) =>({
	type: constants.SWITCHITEM,
	page
})
// 获取数据时，放回数据和页码
const changeList = (data) =>({
	type: constants.CHANGELIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})
export const getList = () =>{
	// thunk允许书写函数，这里可以写一些异步操作
	return (dispath)=>{
		axios.get('/api/getList.json').then((res)=>{
			// 修I改store里的数据
			dispath(changeList(res.data.data))
		}).catch((e)=>{
			console.log(e)
		})
	}
}
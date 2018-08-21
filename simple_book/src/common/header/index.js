import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import { connect } from	'react-redux'
import  { actionCreators }  from './store'
import { 
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem
 } from './style.js'



class Header extends Component {
	getSearchInfoList() {
		// 将store中immutable数组转变为普通数组
		const jsList = this.props.list.toJS()
		// 定义一个临时数组
		const pageList = []
		// 每页只显示10条数据 jsList.length - (this.props.totalPage-1)*10
		if (jsList.length) {
			// 如果当前是最后一页
			if( this.props.page === this.props.totalPage ) {
				for(let k = (this.props.page - 1) * 10;k < jsList.length; k++) {
					pageList.push(
						<SearchInfoItem key={k}>{jsList[k]}</SearchInfoItem>
					)
				}
			} else {
				for(let k = (this.props.page - 1) * 10;k < this.props.page * 10; k++) {
					pageList.push(
						<SearchInfoItem key={k}>{jsList[k]}</SearchInfoItem>
					)
				}
			}
		}
		if (this.props.focused || this.props.mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={this.props.handleMouseEnter}
					onMouseLeave={this.props.handleMouseLeave}
				>
					<SearchInfoTitle>
					热门搜索
						<SearchInfoSwitch onClick={()=>{this.props.handleSwitch(this.props.page, this.props.totalPage)}}>
						<i className="iconfont">&#xe786;</i>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
						{pageList}
				</SearchInfo>
			)
		}else {
			return null
		}
	}
	render() {
		return (
				<HeaderWrapper>
					<Logo/>
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载APP</NavItem>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
						<SearchWrapper>
							<CSSTransition
								timeout={200}
								in={this.props.focused}
								classNames="fade"
							>	
								<NavSearch 
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe644;</i>
							{this.getSearchInfoList()}
						</SearchWrapper>
					</Nav>
					<Addition>
						<Button className="writting">
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
						<Button className="reg">注册</Button>
					</Addition>
				</HeaderWrapper>
			)
	}
}
// 将公共的state传给当前组件当作props
const mapStateToProps = (state) => {
	return {
		// state.getIn(['header', 'focused'])等价写法
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		mouseIn: state.getIn(['header', 'mouseIn']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage'])
	}
}
// 将Dispath传给当前组件当作props
const mapDispathToProps = (dispath) => {
	return {
		handleInputFocus() {
			// 派发action,交给reducer处理
			dispath(actionCreators.getList())
			dispath(actionCreators.searchFocus())
		},
		handleInputBlur() {
			// 派发action,交给reducer处理
			dispath(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispath(actionCreators.onMouseEnter())
		},
		handleMouseLeave() {
			dispath(actionCreators.onMouseLeave())
		},
		handleSwitch(page, totalPage) {
			if(page < totalPage) {
				dispath(actionCreators.switchItem(page + 1))
			} else {
				dispath(actionCreators.switchItem(1))
			}
		} 
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header)
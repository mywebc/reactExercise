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
							<SearchInfo>
								<SearchInfoTitle>
								热门搜索
									<SearchInfoSwitch>
									换一批
									</SearchInfoSwitch>
								</SearchInfoTitle>
								<div>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									<SearchInfoItem>教育</SearchInfoItem>
									
								</div>
							</SearchInfo>
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
		focused:state.get('header').get('focused')
	}
}
// 将Dispath传给当前组件当作props
const mapDispathToProps = (dispath) => {
	return {
		handleInputFocus() {
			// 创建一个action
			// const action = {
			// 	type: 'search_focus'
			// };
			// 派发action,交给reducer处理
			dispath(actionCreators.searchFocus())
		},
		handleInputBlur() {
			// 创建一个action
			// const action = {
			// 	type: 'search_blur'
			// };
			// 派发action,交给reducer处理
			dispath(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header)
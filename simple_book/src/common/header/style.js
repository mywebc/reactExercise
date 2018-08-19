import styled from 'styled-components'
import logo from '../../statics/logo.png'

// 带样式的div标签
export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 56px;
	background: url(${logo});
	background-size: contain;
`;
export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`;
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left  {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;
export const SearchWrapper = styled.div `
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px; 
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	border: none;
	padding: 0 35px 0 20px;
	margin-left: 20px;
	box-sizing: border-box;
	outline: none;
	margin-top: 9px;
	border-radius: 19px;
	background: #eee;
	color: #777;
	font-size: 14px;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.fade-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	&.fade-enter-active {
		width: 240px;
	}
	&.fade-exit {
		width: 240px;
		transition: all .2s ease-out;
	}
	&.fade-exit-active {
		width: 160px;
	}
`;
export const SearchInfo = styled.div`
	position: absolute;
	right: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 15px;
	font-size: 14px;
	color: #9696;
`
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 14px;
`
export const SearchInfoItem = styled.a`
	font-size: 12px;
	padding:0 5px;
	color: #787878;
	line-height: 20x;
	display: block;
	border-radius: 3px;
	border: 1px solid #ddd;
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
`
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;
export const Button = styled.div`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`

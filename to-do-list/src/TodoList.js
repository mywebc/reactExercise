import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'
// Fragment占位标签，可以替换JSX语法的根元素，并且不显示
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  // 需手动绑定函数内this到当前组件
  handleInputChange(e) {
    const value = e.target.value
    // this.setState({
    //   inputValue: e.target.value
    // })
    // 用函数形式修改state
  this.setState(() => ({inputValue: value}))
  }
  // 点击btn添加
  handleBtnClick() {
    if(this.state.inputValue === '') {
      return 
    }
    this.setState((prevState) => {
      const list = [...prevState.list, prevState.inputValue]
      return {
        list,
        inputValue: ''
      }
    })
    // this.setState({
    //   // 展开运算符，将之前的数组和现在的值合并成一个新数组
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  //  点击item删除
  handleItemClick(index) {
    // 不推荐直接修改state里面的值，影响后期性能优化
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    }
    )
  }
  render() {
    return (
      <Fragment>
      {/* class=>className for=>htmlFor */}
      <label htmlFor="input">输入内容</label>
        <input type="text" 
        id="input"
        value = {this.state.inputValue}
        onChange = {this.handleInputChange.bind(this)}
        className='input'
        />
        <button onClick = {this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {/* 对于输入的比如<h1></h1> 不需要转义的dangerouslySetInnerHTML={{__html: item}} */}
          {this.state.list.map((item, index) => {
            return (
            // <li
            //  key = {index}
            //  onClick = {this.handleItemClick.bind(this, index)}
            //  >
            //  {item}
            //  </li>
            <TodoItem 
              key={index}
              content={item}
              index={index}
              deleteItem={this.handleItemClick.bind(this)}
            />
             )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;

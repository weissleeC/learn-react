import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props){
    super(props)
    // this 指向需要绑定到父组件
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, test } = this.props;
    return(
      <Fragment>
        <li>
          {test} - {content}
          <button style={{ marginLeft:'20px' }} onClick={this.handleClick}>删除</button>
        </li>
      </Fragment>
    )
  }

  handleClick(){
    //console.log( this.props.index )
    const { deleteItem,index } = this.props
    deleteItem( index );
  }
}

// 对该组件进行强校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;
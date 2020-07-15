import React from 'react'

const Contact = (props) => {
    console.log(props);

    const clickHandle = () => {
        // push 是叠加上一次的页面，而 replace 是替换，上一个页面不存在

        props.history.push('/');
        // props.history.replace('/');
    }
    
    return(
        <div>hi, contact <br />  <button onClick={ clickHandle }>返回首页</button></div>
    )
}

export default Contact;
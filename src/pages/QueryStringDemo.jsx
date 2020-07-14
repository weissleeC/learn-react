import React from 'react';
import querystring from 'querystring';

const QueryStringDemo = (props) => {

    const value = querystring.parse(props.location.search.substr(1));
    console.log(value);

    return(
        <div>QueryString <br/> <p style={{ color:'#888' }}>hello:{value.name} - ID:{value.id}</p> </div>
    )
}

export default QueryStringDemo;
import React from 'react';

function Greeting(props, children) {
    let name = 'World'
    if (props.name) name = props.name;

    return (
        <div>
            {props.children ? <p>{props.children}</p>: <h1>Hello {name}</h1>}
            {/*<h1>Hello {name}</h1>
            <p>{props.children}</p>*/}
        </div>
    )
}

export default Greeting;
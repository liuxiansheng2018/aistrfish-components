import React from 'react'

interface CompoundedComponent extends React.ForwardRefExoticComponent<any & React.RefAttributes<HTMLElement>> {
    __ANT_BUTTON: boolean;
    Group: any
}

function InternalButton (props:any) {
    return (
        <div>{props.title}</div>
    )
}

const Button = InternalButton



export default Button
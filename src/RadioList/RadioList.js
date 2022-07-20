import React, { useState } from 'react';
import styled from 'styled-components';


const List = styled.div`
    margin: 0 1rem;
    line-height: 2.4rem;
`


function RadioList(props) {

    return(
        <List>
            {React.Children.map(props.children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return null;
                }
                const checked = props.value == null ? index === 0 : props.value === child.props.value;
                return React.cloneElement(child, {
                    name: props.name,
                    checked: checked,
                    disabled: props.disabled || child.props.disabled,
                    onChange: props.onChange,
                    tabIndex: (index === 0 && !props.value) || checked ? '0' : '-1',
                })
            })}
        </List>
    )
}


export default RadioList;
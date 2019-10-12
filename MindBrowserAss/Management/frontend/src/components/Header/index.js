import React from 'react';

export default (props) => {
    return(
            <div className="app-header">
            {props.children}
            <h1>Employee List</h1>
            </div>
    );
}
import React, { Component } from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked){
        classes += "-o";
    }
    return(
      <React.Fragment>
              <i className={classes} aria-hidden="true"
                 style={{cursor:"pointer"}}
                onClick={props.onClick}
              />
      </React.Fragment>
    );
}

export default Like;
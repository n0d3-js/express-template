/* eslint-disable react/prop-types */

import React from 'react';
import Nav from './Nav';

export default (props) => (
  <div>
    <Nav />

    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

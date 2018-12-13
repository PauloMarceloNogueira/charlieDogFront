import React from 'react';

import './List.scss';

const Filters = (props) => (
  <div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <ul className="list-group lista-links">
        {props.data.map((result, key) => <li key={key} className="list-group-item"><a href={result.href} title={result.title}>{result.title}</a></li>)}
      </ul>   
    </div>
  </div>
  
);

export default Filters;
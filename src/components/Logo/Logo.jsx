import React from 'react';

const Logo = (props) => (
  <div>
    {props.withTitle ? <img src="https://s3.amazonaws.com/charliedog/logo-rodape.png" alt="Charlie & Dogs" /> : 
      <div className="col-lg-2 col-md-2 col-sm-2">
        <a href="#" title="Charlie & Dogs"><img src="https://s3.amazonaws.com/charliedog/Dogs/logo.svg" alt="Charlie & Dogs" /></a>
      </div>
    }
  </div>
);

export default Logo;
import React from 'react';
import List from '../../components/List/List.jsx';
import Logo from '../../components/Logo/Logo.jsx';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <List 
          data = {[
            {
              title: 'mini',
              href: '#'
            },
            {
              title: 'pequeno porte',
              href: '#'
            },
            {
              title: 'médio porte',
              href: '#'
            },
            {
              title: 'grande porte',
              href: '#'
            },
          ]}
        />
         <List 
          data = {[
            {
              title: 'até R$100,00',
              href: '#'
            },
            {
              title: 'de R$100 a R$300',
              href: '#'
            },
            {
              title: 'de R$300 a R$500',
              href: '#'
            },
            {
              title: 'acima de R$500',
              href: '#'
            },
          ]}
        />
        <div className="col-lg-4 col-md-4 col-sm-4 text-right">
          <Logo withTitle={true}/>
          <br />
          <p className="telefone">11 0000.0000<br/>
          <a href="mailto:#" title="Entre em contato!">contato@charlieedog.com.br</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
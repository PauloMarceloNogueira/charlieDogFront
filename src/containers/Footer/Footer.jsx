import React from 'react';
import List from '../../components/List/List.jsx';
import ValueList from '../../components/List/ValueList.jsx';
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
              href: '#',
              size: 'mini'
            },
            {
              title: 'pequeno porte',
              href: '#',
              size: 'small',
            },
            {
              title: 'médio porte',
              href: '#',
              size: 'medium',
            },
            {
              title: 'grande porte',
              href: '#',
              size: 'big'
            },
          ]}
        />
         <ValueList 
          data = {[
            {
              title: 'até R$100,00',
              href: '#',
              min: 0,
              max: 100,
            },
            {
              title: 'de R$100 a R$300',
              href: '#',
              min: 100,
              max: 300,
            },
            {
              title: 'de R$300 a R$500',
              href: '#',
              min: 300,
              max: 500,
            },
            {
              title: 'acima de R$500',
              href: '#',
              min: 500,
              max: 10000,
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
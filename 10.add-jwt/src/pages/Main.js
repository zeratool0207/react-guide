import React from 'react';

import { getLocal } from '../common/common';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Main = () => {

  return (
    <>
      <Header/>
      <div>Main</div>
      <nav>
          <ul>
              <li>
                  <Link to="/faq">Faq</Link>
              </li>
              <li>
                  <Link to="/grid">Grid</Link>
              </li>
          </ul>
      </nav>
    </>
  )
}

export default Main;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return <div className="header">Header</div>;
  }
}

function headerFactory(root, store) {
  ReactDOM.render(<Header />, root);
}

export {headerFactory};
export {Header};




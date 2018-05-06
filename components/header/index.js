import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return <div className="header">Header</div>;
  }
}

function mount(element, store) {
  ReactDOM.render(<Header />, element);
}

function unmount(element) {
  ReactDOM.unmountComponentAtNode(element);
}

export {mount, unmount};
export {Header};




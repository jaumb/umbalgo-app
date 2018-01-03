import React, { Component } from 'react';

export default class UmbAlgoApp extends Component {
  constructor(props) {
    super(props);
    this.store = {};
  }

  render() {
    return (
      <div className={'umbalgo-app'}>
        <span>{'Hello!'}</span>
      </div>
    );
  }
}

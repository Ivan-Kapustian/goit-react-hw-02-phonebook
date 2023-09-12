import React, { Component } from 'react';
class Filter extends Component {
  state = {};
  render() {
    const { filter, change } = this.props;
    return (
      <label>
        Фільтр по імені
        <input type="text" value={filter} onChange={change} />
      </label>
    );
  }
}

export default Filter;

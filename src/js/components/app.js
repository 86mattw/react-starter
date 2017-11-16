import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchList } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  renderList() {
    return this.props.list.map((item, idx) => (
      <li key={idx}>{item}</li>
    ));
  }

  render() {
    return (
      <div>
        <h1>The App</h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list
});

export default connect(mapStateToProps, { fetchList })(App);

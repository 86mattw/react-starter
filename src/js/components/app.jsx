import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchList } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  renderList() {
    return this.props.list.map(item => (
      <li key={item}>{item}</li>
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

App.propTypes = {
  fetchList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  list: state.list,
});

export default connect(mapStateToProps, { fetchList })(App);

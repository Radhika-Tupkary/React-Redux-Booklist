import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// Anything returned from mapStateToProps and mapDispatchToProps will show up as props on BookList container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passsed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);     // passing action to all the reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect takes a function and a component to produce a container.
// A container is a smart component - a component which cares about app's state. It acts like a bridge between react and redux.
// In this case, we have promoted our BookList component to be a container.

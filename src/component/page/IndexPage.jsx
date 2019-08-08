import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import IndexComponent from '../share/IndexComponent';
import { connect } from 'react-redux';
import * as action from '../../actions/action';
import { Redirect } from 'react-router-dom';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEdit: {},
      edit: false,
      redirect: false,
      id: ''
    }
  }
  componentDidMount() {
      this.props.dispatch(action.requestGetStore());
  }
  onDelete = (id) => {
    this.props.dispatch(action.requestRemoveStore(id))
  }
  onUpdate = (id) => {
    let item = [...this.props.data].filter(item => item.id === id);
    if (item.length > 0) {
      this.setState({
        id: id,
        dataEdit: item[0],
        edit: true,
        redirect: true
      })
    }
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={'/form/' + this.state.id}></Redirect>
      )
    }
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <IndexComponent data={this.props.data} onDelete={this.onDelete} onUpdate={this.onUpdate}></IndexComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}
function mapPropsToState(state) {
  return {
    data: state.stores.all
  }
}

export default connect(mapPropsToState, null)(IndexPage);
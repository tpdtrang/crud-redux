import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import FormComponent from '../share/FormComponent';
import { connect } from 'react-redux';
import * as action from '../../actions/action';
import axios from 'axios';

class CreateEditPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dataEdit: {},
      edit: false
    }
  }

  componentDidMount() {
    if (this.props.match.params.new !== undefined) {
      var self = this;
      axios.request({
        method: 'GET',
        url: `http://localhost:3000/array/${this.props.match.params.new}`,
        headers: {
          'Content-type': 'application/json',
          "Acect": "application/json"
        }

      }).then(function (response) {
        self.setState({
          dataEdit: response.data,
          edit: true
        })

      }).catch(function (error) {
        console.log(error);

      })
    }

  }
  onAdd = (data) => {
    this.props.dispatch(action.requestCreateStore(data));
    this.props.history.push('/');
  }
  onUpdate = (data) => {
    this.props.dispatch(action.requestUpdateStore(data));
    this.props.history.push('/');
  }
  
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <FormComponent onAdd={this.onAdd} edit={this.state.edit} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate}></FormComponent>
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

export default connect(mapPropsToState, null)(CreateEditPage);
import React, { Component } from 'react';
var dataFormat = require('dateformat')
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      description: '',
      date: ''
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit !== prevProps.edit) {
      this.setState({
        id: this.props.dataEdit.id,
        image: this.props.dataEdit.image,
        title: this.props.dataEdit.title,
        description: this.props.dataEdit.description,
        date: dataFormat(this.props.dataEdit.datam, 'yyyy-mm-dd')
      })
    }
  }
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.edit) {

      this.props.onUpdate(this.state);
    } else {
      this.props.onAdd(this.state);
    }
  }
  render() {
    return (
      <section className="form-container">
        <div className="container">
          <div className="p-form">
            <div className="p-title">
              <h2 className="heading-2">Form</h2>
            </div>
            <form className="p-content text-left" onSubmit={this.onSubmit}>
              <label>Images: </label>
              <input type="text" name="image" onChange={this.onHandleChange} value={this.state.image} />
              <label>Title: </label>
              <input type="text" name="title" onChange={this.onHandleChange} value={this.state.title} />
              <label>Description: </label>
              <input type="text" name="description" onChange={this.onHandleChange} value={this.state.description} />
              <label>Date: </label>
              <input type="date" name="date" onChange={this.onHandleChange} value={this.state.date} />
              <button type="submit" className="btn waves-effect">SAVE</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default FormComponent;
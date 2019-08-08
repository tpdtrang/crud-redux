import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexComponent extends Component {
  onDelete(id) {
    var self = this.props;
    self.onDelete(id);
  }
  onUpdate(id) {
    this.props.onUpdate(id);
  }
  render() {
    return (
      <section className="content-container">
        <div className="container">
          <div className="p-content-title">
            <div className="row">
              <div className="col-lg-6">
                <div className="p-title">
                  <h2 className="heading-2">Recent Blog Posts</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-add">
                  <button className="btn-add waves-effect"><Link className="link" to="/form"><i className="fas fa-plus" /> add</Link></button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-content-post">
            <div className="row">
              {this.props.data.map(data => (
                <div className="col-lg-4" key={data.id}>
                  <div className="item-content">
                    <img className="img" src={data.image} alt='true' width="100%" />
                    <div className="p-content">
                      <div className="p-title">
                        <h3 className="heading-3">{data.title}</h3>
                      </div>
                      <div className="p-description">
                        <p className="text">{data.description}</p>
                      </div>
                      <div className="p-date">
                        <p className="date">{data.date}</p>
                      </div>
                      <div className="btn">
                        <button type="submit" className="btn waves-effect" onClick={this.onUpdate.bind(this, data.id)}>EDIT</button>
                        <button type="submit" className="btn waves-effect" onClick={this.onDelete.bind(this, data.id)}>DELETE</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IndexComponent;
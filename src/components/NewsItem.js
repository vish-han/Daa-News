import React, { Component } from 'react';

export default class NewsItem extends Component {
     
  render() {
    return( 
        <div className="card my-3 m-5" style={{width: "18rem"}}>
  <img src={this.props.src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{(this.props.title).slice(0,45)}...</h5>
    <p className="card-text">{(this.props.description)}...</p>
    <a href={this.props.newsURL} className="btn btn-outline-primary">Read More</a>
  </div>
</div>);
  }
}

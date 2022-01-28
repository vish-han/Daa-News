import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="card my-3 m-5">
        <img
          src={
            !this.props.src
              ? "https://images.livemint.com/img/2022/01/22/600x338/Election_Commission_1642819354907_1642819355043.jpg"
              : this.props.src
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.props.source}
          </span>
          <h5 className="card-title">{this.props.title}...</h5>
          <p className="card-text">{this.props.description}...</p>
          <a href={this.props.newsURL} className="btn btn-outline-dark">
            Read More
          </a>

          <p className="card-text my-2">
            <small className="text-muted">
              By {this.props.author} on{" "}
              {new Date(this.props.publishedAt).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

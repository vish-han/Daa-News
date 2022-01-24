import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    console.log("this is a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  componentDidMount = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d707098271244ee5b4ea757fc4c7bc2f&pageSize=6`;
    let ParsedData = await fetch(url);
    let data = await ParsedData.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d707098271244ee5b4ea757fc4c7bc2f&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let ParsedData = await fetch(url);
    let data = await ParsedData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page + 1,
    });
  };
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d707098271244ee5b4ea757fc4c7bc2f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let ParsedData = await fetch(url);
    let data = await ParsedData.json();
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <div className="container ">
          <h2 className="text-center fs-40 mb-2 mt-10 display-1">
            Top Headlines
          </h2>

          <div className="row">
            {this.state.articles &&
              this.state.articles.map((news) => {
                return (
                  <div className="col-md-4" key={news.url}>
                    <NewsItem
                      title={news.title ? news.title.slice(0, 45) : ""}
                      description={
                        news.description ? news.description.slice(0, 88) : ""
                      }
                      src={news.urlToImage}
                      newsURL={news.url}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between mb-4">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous{" "}
            </button>
            <button
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

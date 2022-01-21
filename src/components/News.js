import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor(){
    super()
    console.log("this is a constructor");
  }
  render() {
    return <div className='container'>
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-3">
      
  <NewsItem title="cricket news" description="lofdbffjhfsbdhjgbhfdj" src="https://images.news18.com/ibnlive/uploads/2022/01/covid-19-testing-164204561216x9.png"/>
          </div>
         <div className="col-md-3">
        <NewsItem title="cricket news" description="lofdbffjhfsbdhjgbhfdj"/>
          </div>
           <div className="col-md-3">
        <NewsItem title="cricket news" description="lofdbffjhfsbdhjgbhfdj"/>
          </div>
          <div className="col-md-3">
        <NewsItem title="cricket news" description="lofdbffjhfsbdhjgbhfdj"/>
          </div>
        </div>
       

    </div>;
  }
}

import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  articles= [
    {
      "source": { "id": null, "name": "News18" },
      "author": "Bharvi Dasson",
      "title": "Omicron LIVE Updates: Kerala Sees Highest Daily Spike at 46,383; Delhi Slashes RT-PCR Rates, Home Collectio - News18",
      "description": "Omicron Updates: Maharashtra on Wednesday recorded 43,697 new coronavirus positive cases, 10 per cent more than the previous day.",
      "url": "https://www.news18.com/news/india/omicron-live-updates-covid19-pandemic-who-india-delhi-mumbai-kerala-covidvaccines-livenews-4677209.html",
      "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/covid-19-testing-164204561216x9.png",
      "publishedAt": "2022-01-20T14:27:07Z",
      "content": "Jan 20, 2022 19:57 ISTDelhi to have Cheaper RT-PCR Tests \r\nThe Delhi government made RT-PCR tests cheaper in the national capital. Now, home collection of samples for RT-PCR test will cost Rs 500 ins… [+12318 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "realme 9 Pro+ First Look,OnePlus Nord Under 20K,OPPO Reno7 India Launch,Redmi Note 11 Specs-#TTN1253 - Trakin Tech",
      "description": "Hello Friends Welcome to Tech News No. 1253. Today There Are Lots Of Amazing Tech News Lined Up For You. So Let's Get Started And Don't Forget To Like & Subs...",
      "url": "https://www.youtube.com/watch?v=RtDDFccb_sM",
      "urlToImage": "https://i.ytimg.com/vi/RtDDFccb_sM/maxresdefault.jpg",
      "publishedAt": "2022-01-20T13:43:38Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "Akhilesh Yadav To Run From Stronghold Karhal In Central UP: Sources - NDTV",
      "description": "UP Assembly Election: Samajwadi leader Akhilesh Yadav is likely to contest next month's UP election from the Karhal seat in Mainpuri district, which is seen as a Yadav family stronghold, party sources said Thursday evening.",
      "url": "https://www.ndtv.com/india-news/akhilesh-yadav-likely-to-contest-up-polls-from-family-stronghold-sources-2719626",
      "urlToImage": "https://c.ndtvimg.com/2022-01/a0th85f_akhilesh-yadav_650x400_20_January_22.jpg",
      "publishedAt": "2022-01-20T13:42:00Z",
      "content": "UP votes in a seven-phase poll that begins February 10, with results due March 10 (File)\r\nHighlights\r\n<ul><li>The Karhal seat is currently held by Sobaran Yadav of the Samajwadi Party\r\n</li><li>Yeste… [+3277 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "Vickey Lalwani",
      "title": "Remo D'Souza's wife Lizelle breaks down: 'My brother Jason ended his life while my dad had gone for dialy - Times of India",
      "description": "It doesn't get worse than this. Remo D'Souza's father-in-law, suffering from kidney ailment, had lost his wife four",
      "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/remo-dsouzas-wife-lizelle-breaks-down-my-brother-jason-ended-his-life-while-my-dad-had-gone-for-dialysis-exclusive/articleshow/89020974.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-89021119,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-42600/89021119.jpg",
      "publishedAt": "2022-01-20T13:08:00Z",
      "content": null
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Explained | The challenge of antimicrobial resistance - The Hindu",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMicGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9oZWFsdGgvZXhwbGFpbmVkLXRoZS1jaGFsbGVuZ2Utb2YtYW50aW1pY3JvYmlhbC1yZXNpc3RhbmNlL2FydGljbGUzODI5NzYzMC5lY2XSAXVodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvaGVhbHRoL2V4cGxhaW5lZC10aGUtY2hhbGxlbmdlLW9mLWFudGltaWNyb2JpYWwtcmVzaXN0YW5jZS9hcnRpY2xlMzgyOTc2MzAuZWNlL2FtcC8?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-01-20T13:02:11Z",
      "content": null
    }
    
  ]
  constructor(){

    super()
    console.log("this is a constructor");
    this.state={
      articles:this.articles,
      loading:false
    }
    
  }
      async  componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d707098271244ee5b4ea757fc4c7bc2f"
let data= await fetch(url);
let parsedData=await data.json();
this.setState({articles:parsedData.articles})   
     }
  render() {
    return <div className='container my-3' >
        <h2 className='text-center fs-40 mb-4 font-weight-bold'>Top Headlines</h2>
        
        <div className="row">
          {this.state.articles.map((news)=>{return(<div className="col-md-3" key={news.url}>
      <NewsItem title={news.title?news.title.slice(0,45):""} description={news.description?news.description.slice(0,88):""} src={news.urlToImage} newsURL={news.url}/>
          </div>) })}
          
        
        </div>
       

    </div>;
  }
}

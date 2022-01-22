import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "CryptoPotato" },
      author: "Jordan Lyanchev",
      title:
        "Market Watch: Cryptocurrencies See Double-Digit Drops After Wall Street’s Friday Bloodbath - CryptoPotato",
      description:
        "The crypto market continues to bleed out with massive double-digit losses evident from bitcoin and most altcoins.",
      url: "https://cryptopotato.com/market-watch-cryptocurrencies-see-double-digit-drops-after-wall-streets-friday-bloodbath/",
      urlToImage:
        "https://cryptopotato.com/wp-content/uploads/2020/10/CryptoMarketBears-min.jpg",
      publishedAt: "2022-01-22T09:33:52Z",
      content:
        "The bears continue to have complete control over the cryptocurrency market with numerous double-digit price losses from almost all assets. This comes just hours after the US stock market dumped in va… [+2687 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "In Tamil Nadu Schoolgirl's Suicide, High Court Directs Holding Of Last Rites - NDTV",
      description:
        "The Madras High Court's Madurai bench on Saturday directed the parents of the 17-year-old girl who died by suicide on Wednesday - after alleging abuse and attempts to convert her to Christianity - to collect her body and conduct last rites.",
      url: "https://www.ndtv.com/tamil-nadu-news/in-tamil-nadu-schoolgirls-suicide-high-court-directs-holding-of-last-rites-2723409",
      urlToImage:
        "https://c.ndtvimg.com/police-generic-istock_625x300_1529674184579.jpg",
      publishedAt: "2022-01-22T09:10:00Z",
      content:
        "Police say the girl had not initially complained about the alleged conversion. (Representational)\r\nChennai: The Madras High Court's Madurai bench on Saturday directed the parents of the 17-year-old g… [+2462 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Edited by Gadgets 360 Newsdesk",
      title:
        "Google Now Has a Wordle Easter Egg: Here's How to Find It - Gadgets 360",
      description:
        "Wordle is a free-to-play game where you need to guess a secret five-letter word in no more than six tries. It can only be played on a dedicated website.",
      url: "https://gadgets.ndtv.com/games/news/wordle-google-seach-easter-egg-how-to-see-access-2723240",
      urlToImage:
        "https://i.gadgets360cdn.com/large/wordle_website_screenshot_new_1641474361623.jpg",
      publishedAt: "2022-01-22T08:58:16Z",
      content:
        "Wordle has taken the Internet by storm, presenting a pleasant-yet-formidable daily challenge for people forced inside their homes across the world due to the ongoing coronavirus-induced pandemic. For… [+1290 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'Lata Mangeshkar Still In ICU, "Showing Signs Of Improvement": Doctor - NDTV',
      description:
        '"It is difficult to say for how many days she will be in the hospital," said the doctor',
      url: "https://www.ndtv.com/entertainment/lata-mangeshkar-showing-signs-of-improvement-still-in-icu-doctor-2723346",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/ehn7jm48_lata-mangeshkar_625x300_22_January_22.jpg",
      publishedAt: "2022-01-22T08:38:46Z",
      content:
        "A throwback of Lata Mangeshkar. (courtesy latathemangeshkar)\r\nHighlights\r\n<ul><li>Lata Mangeshkar was hospitalized earlier this month\r\n</li><li> She was hospitalised after testing positive \r\n</li><li… [+2034 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Nick Jonas and Priyanka Chopra’s newborn is a baby girl, say reports - Hindustan Times",
      description:
        "Reports claim that Priyanka Chopra and Nick Jonas' newborn is a baby girl. The couple welcomed their first child via surrogacy recently and shared the news on social media.  | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/nick-jonas-and-priyanka-chopra-s-newborn-is-a-baby-girl-say-reports-101642833963504.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/22/1600x900/priyanka-chopra-nic_1642834092946_1642834116655.jpg",
      publishedAt: "2022-01-22T08:37:18Z",
      content:
        "Priyanka Chopra and Nick Jonas announced on Saturday midnight that they have become parents to a baby via surrogacy. While the couple did not disclose further details, unconfirmed reports claim that … [+2064 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "It's official: Akhilesh Yadav to contest UP polls from Karhal in Mainpuri - Hindustan Times",
      description:
        "Uttar Pradesh assembly elections 2022: The announcement was made by Samajwadi Party national general secretary Ramgopal Yadav at a press conference. Akhilesh Yadav is an MP, and has never contested assembly elections. Karhal has been a stronghold of the Samaj…",
      url: "https://www.hindustantimes.com/elections/uttar-pradesh-assembly-election/its-official-akhilesh-yadav-to-contest-up-polls-from-karhal-in-mainpuri-101642840044137.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/22/1600x900/akhilesh_yadav_to_contest_up_polls_from_karhal_1642840199931_1642840200121.jpg",
      publishedAt: "2022-01-22T08:34:33Z",
      content:
        "The Samajwadi Party (SP) put to rest the speculation about party chief Akhilesh Yadav contesting the upcoming Uttar Pradesh Assembly election, confirming that he will be fielded from Karhal in Mainpu… [+2254 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title: "Indian Family Of 4 Freeze To Death Near US-Canada Border - NDTV",
      description:
        "In a heartbreaking tragedy, a family of four Indians, including a baby, has died from exposure to extreme cold weather on the Canadian side of the border with the US in an apparent human smuggling operation.",
      url: "https://www.ndtv.com/india-news/family-of-four-believed-to-be-indians-frozen-to-death-along-us-canada-border-man-charged-with-human-smuggling-2721389",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/0njstjvo_canada-snow_625x300_22_January_22.jpg",
      publishedAt: "2022-01-22T08:18:00Z",
      content:
        "All four bodies were located within 9-12 metres of the border. (Representational)\r\nToronto/New York: In a heartbreaking tragedy, a family of four Indians, including a baby, has died from exposure to … [+4638 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Trisha Sengupta",
      title:
        "Nasa’s intriguing post on solar flares leaves people amazed - Hindustan Times",
      description:
        "Nasa took to Instagram to share the intriguing post on solar flares. | Trending",
      url: "https://www.hindustantimes.com/trending/nasas-intriguing-post-on-solar-flares-leaves-people-amazed-101642828189142.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/22/1600x900/Nasa_solar_flare_video_Instagram_1642828362627_1642828381566.PNG",
      publishedAt: "2022-01-22T08:10:02Z",
      content:
        "Nasa often takes to Instagram to share intriguing posts. In their latest share they shared about the Sun and solar flare. The interesting post has now captured peoples attention. There is a chance th… [+1490 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "IPL 2022: KL Rahul gives you 3 things, no brainer for Lucknow to pick him as captain - Gautam Gambhir - India Today",
      description:
        "IPL 2022: Lukcnow Indian Premier League franchise paid Rs 17 crore to sign India batting star KL Rahul as their captain for the new season. They also drafted in Marcus Stoinis and Ravi Bishnoi.",
      url: "https://www.indiatoday.in/sports/cricket/story/why-kl-rahul-captain-ipl-2022-lucknow-team-gautam-gambhir-mentor-1903143-2022-01-22",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/klrahulipl202-647x363.jpeg?Vmpa34bW8a5bwzXzAB9UeYVU1B7zYacg",
      publishedAt: "2022-01-22T07:57:55Z",
      content: null,
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Amit Mudgill",
      title:
        "YES Bank Q3 Results: Lender posts 77% YoY jump in profit at Rs 266 crore - Economic Times",
      description:
        "The bank reported a 31 per cent YoY drop in net interest income (NII) at Rs 1,764 crore from Rs 2,560 crore in the same quarter last year. Net interest margin (NIM) for the quarter came in at 2.4 per cent compared with 2.2 per cent in the September quarter an…",
      url: "https://economictimes.indiatimes.com/markets/stocks/earnings/yes-bank-q3-results-lender-posts-77-yoy-jump-in-profit-at-rs-266-crore/articleshow/89056144.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-89056143,width-1070,height-580,imgsize-56254,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-01-22T07:56:00Z",
      content:
        "NEW DELHI: Private lender on Saturday reported a 77 per cent year-on-year (YoY) jump in net profit at Rs 266 crore for the December quarter compared with a profit of Rs 151 crore in the corresponding… [+1814 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Direct, emotional connect between administration, public needed: PM to DMs - Hindustan Times",
      description:
        "Prime Minister Narendra Modi was interacting with district magistrates from across the country on the implementation of key government schemes. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/direct-emotional-connect-between-administration-public-needed-pm-modi-to-dms-101642836398878.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/22/1600x900/pm_modi_interaction_with_district_magistrates_1642837261296_1642837261517.png",
      publishedAt: "2022-01-22T07:42:33Z",
      content:
        "Prime Minister Narendra Modi on Saturday lauded aspirational districts for removing the barriers in taking the country forward. Interacting with district magistrates from across the country on the im… [+1900 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "OnePlus 10R with Dimensity 9000 expected to be launched by the end of 2022 - India Today",
      description:
        "A fresh report reveals that OnePlus is also gearing up to launch the successor to the 9R, dubbed OnePlus 10R. The smartphone may use a MediaTek Dimensity 9000 processor.",
      url: "https://www.indiatoday.in/technology/news/story/oneplus-10r-with-dimensity-9000-expected-to-be-launched-by-the-end-of-2022-1903136-2022-01-22",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/Screenshot_2022-01-22_at_1.06.-647x363.png?fwZ9O1.SD2RTv7yUGrQd88ZJU0jlPHI3",
      publishedAt: "2022-01-22T07:41:26Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Neetu Kapoor shares candid photos of Rishi Kapoor and her sharing a laugh on wedding anniversary: ‘In remembrance’ - Hindustan Times",
      description:
        "Neetu Kapoor shared a post for her late husband Rishi Kapoor on the occasion of their 42nd wedding anniversary. See it here. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/neetu-kapoor-shares-candid-photos-of-rishi-kapoor-and-her-sharing-a-laugh-on-wedding-anniversary-in-remembrance-101642835102657.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/22/1600x900/neetu_kapoor_1642835330232_1642835330372.jpg",
      publishedAt: "2022-01-22T07:40:17Z",
      content:
        "Neetu Kapoor remembered her late husband Rishi Kapoor on their wedding anniversary with a sweet Instagram post. In remembrance, she wrote along with a heart emoji, as she shared candid pictures of th… [+1795 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "IPL 2022: Full List Of Retained Players, Draft Picks - NDTVSports.com",
      description:
        "While the mega IPL 2022 auction is expected to see some intense bidding wars, there are some big names that won't be part of the auction pool after being retained by their respective sides or chosen as draft picks by the two new IPL franchises.",
      url: "https://sports.ndtv.com/cricket/ipl-2022-full-list-of-retained-players-draft-picks-2723288",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/ru9okn08_ms-dhoni-virat-kohli-ipl-afp_625x300_22_January_22.jpg",
      publishedAt: "2022-01-22T07:37:13Z",
      content:
        "The Indian Premier League (IPL) on Saturday announced that a total of 1,214 players, from India and other parts of the world, had registered for the IPL 2022 auction. With 59 players, Australia had t… [+1952 chars]",
    },
    {
      source: { id: null, name: "The Weather Channel" },
      author: null,
      title:
        "Long COVID Affecting Human Brains, Nervous Systems at Deeper Levels; Urgent Need for Research on Complications: Expert | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
      description:
        "Long COVID can cause a wide range of symptoms in the brain and nervous system, including loss of taste and smell, exhaustion, pain, autonomic disorders, and/or headache, as well as psychological effects like depression. - Articles from The Weather Channel | w…",
      url: "https://weather.com/en-IN/india/coronavirus/news/2022-01-22-long-covid-affecting-human-brain-nervous-system-at-deeper-level",
      urlToImage: "https://s.w-x.co/in-brain_6.jpg",
      publishedAt: "2022-01-22T07:32:03Z",
      content:
        "Long COVID is affecting human brains and nervous systems at a deeper level, and there is an urgent need for significant research into identifying the full extent of its complications and underlying c… [+2172 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "Pfizer, Moderna boosters up to 90% effective against Omicron: CDC - Al Jazeera English",
      description:
        "Three US studies offer more evidence that third dose of COVID vaccine is highly effective against Omicron.",
      url: "https://www.aljazeera.com/news/2022/1/22/boosters-90-effective-against-omicron-hospitalisations-study",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2021/12/AP21342448804833.jpg?resize=1200%2C630",
      publishedAt: "2022-01-22T07:31:41Z",
      content:
        "Booster shots of the Pfizer-BioNTech and Moderna vaccines have proven highly effective at preventing Omicron-related hospitalisations, according to three new studies by the US Centers for Disease Con… [+2883 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "etimes.in",
      title:
        "'Main Chala': Salman Khan and Pragya Jaiswal paint the town red with their love ballad- Watch - Times of India",
      description:
        "Bollywood's 'Dabangg' star Salman Khan and Pragya Jaiswal have come together for a beautiful romantic track titled",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/main-chala-salman-khan-and-pragya-jaiswal-paint-the-town-red-with-their-love-ballad-watch/articleshow/89055537.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-89055537,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-18506/89055537.jpg",
      publishedAt: "2022-01-22T07:21:00Z",
      content: null,
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Apurva Vishwanath",
      title:
        "Explained: How DMs selectively used a court ruling; despite pleas in HC and SC, cases still in limbo - The Indian Express",
      description:
        "The Supreme Court -- in the Destruction of Public and Private Properties versus State of Andhra Pradesh -- had held that the cost of damage must be recovered by those responsible but through a judicial process and not by the state.",
      url: "https://indianexpress.com/article/explained/explained-uttar-pradesh-anti-caa-protesters-property-damage-yogi-adityanth-court-orders-7735929/",
      urlToImage:
        "https://images.indianexpress.com/2022/01/anti-caa-protests.jpeg",
      publishedAt: "2022-01-22T06:54:12Z",
      content:
        "The stay followed UP’s admission in the High Court on how it had interpreted the civil law principle of joint and several liability in these cases. In essence, the state said the entire amount assess… [+6414 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "WhatsApp users may soon be able to transfer chats from Android phones to iPhones - Kalinga TV",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMicmh0dHBzOi8va2FsaW5nYXR2LmNvbS90ZWNobm9sb2d5L3doYXRzYXBwLXVzZXJzLW1heS1zb29uLWJlLWFibGUtdG8tdHJhbnNmZXItY2hhdHMtZnJvbS1hbmRyb2lkLXBob25lcy10by1pcGhvbmVzL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-01-22T06:51:57Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("this is a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container ">
        <h2 className="text-center fs-40 mb-2 display-1">Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((news) => {
            return (
              <div className="col-md-3" key={news.url}>
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
      </div>
    );
  }
}

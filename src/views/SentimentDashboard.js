import React, { useEffect, useState, useCallback, useRef, } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import { CalculatePercentage } from "../utils/CalcUtils";

import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
import PriceChart from "../components/dashboard/PriceChart";
// import ChartComponent from "../components/blog/AreaChart";
import AssetPieChart from "../components/dashboard/AssetPieChart";
import SearchBar from "../components/common/SearchBar";
import AssetsTable from "../components/common/AssetsTables";
import WordCloud from "../components/common/WordCloud";
import TweetStream from "../components/dashboard/TweetStream";
import AssetNews from "../components/dashboard/AssetNews";
import TopPlatforms from "../components/common/TopPlatforms";
import LineChart from "../components/common/LineChart"
import TickerProfile from "../components/dashboard/TickerProfile";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

import { useDispatch, useSelector } from 'react-redux';
//useref for chart reference

const SentimentDashboard = ({ smallStats }) => {
  const assetStore = useSelector((state) => state.asset);

  console.log({assetStore})

  const canvas = useRef({})
  

  const [asset, setAsset] = useState({});
  const [assets, setAssets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState('');
  const [assetUrl, setAssetUrl] = useState('');
  const [currentTwitterSentiment, setCurrentTwitterSentiment] = useState(0);
  const [currentRedditSentiment, setCurrentRedditSentiment] = useState(0);
  const [currentSentiment, setCurrentSentiment] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [lastSentiment, setLastSentiment] = useState(0);
  const [lastPrice, setLastPrice] = useState(0);
  const [description, setDescription] = useState('');

  const [marketCap, setMarketCap] = useState(0);
  const [marketCapPercentage, setMarketCapPercentage] = useState(0);

  const [priceData, setPriceData] = useState([]);
  const [sentimentData, setSentimentData] = useState([]);
  const [assetNews, setAssetNews] = useState([]);

  useEffect(()=>{
    setAsset(assetStore.selectedAsset)
    setAssets(assetStore.assets)
  },[assetStore])


  //when asset gets picked
  useEffect(()=>{
    if(asset && asset.data){
      let twitterSent = asset.data.sentimentData[0].sentiment.substring(0,5)
      let redditSent = asset.data.redditSentiment[0].sentiment.substring(0,5)
      let average_sentiment = (parseFloat(twitterSent) + parseFloat(redditSent)) / 2
      setLoaded(false);
      setTitle(asset.data.name)
      setAssetUrl(asset.data.asset_url)
      setDescription(asset.data.description)
      setCurrentTwitterSentiment(twitterSent)
      setCurrentRedditSentiment(redditSent)
      setCurrentSentiment(average_sentiment.toString().substring(0,5))
      setLastSentiment(asset.data.sentimentData[asset.data.priceData.close.length].sentiment)
      setCurrentPrice(asset.data.priceData.close.at(-1))
      setLastPrice(asset.data.priceData.close[0])
      setMarketCap(asset.data.assetQuote.marketCap)
      setMarketCapPercentage(asset.data.assetQuote.regularMarketChangePercent)
      setPriceData(asset.data.priceData.close)
      setSentimentData(asset.data.sentimentData)
      setAssetNews(asset.data.assetNews)
      setTimeout(() => {
        setLoaded(true);
      }, 50);
    }
  }, [asset])

  
  
  // {
    //   label: "Sentiment",
    //   value: "5.89",
    //   percentage: "4.7%",
    //   increase: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "6", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(0, 184, 216, 0.1)",
    //       borderColor: "rgb(0, 184, 216)",
    //       data: [1, 2, 1, 3, 5, 4, 7]
    //     }
    //   ]
    // },

  smallStats[0].value = (currentPrice>1000) ? '$'.concat(Math.floor(currentPrice)) : '$'.concat(currentPrice)
  smallStats[0].percentage = CalculatePercentage(currentPrice, lastPrice)
  smallStats[1].value = '$'.concat(Math.floor(marketCap/ 1000000000), 'B')
  smallStats[1].percentage = Math.floor(marketCapPercentage)

  //set twitter and reddit sentiment for smallStats
  smallStats[2].value = currentTwitterSentiment
  smallStats[3].value = currentRedditSentiment


  if(Object.keys(asset).length === 0){
    return(
     <Container fluid className="main-content-container px-4">
       <Row noGutters className="page-header py-4">
          <PageTitle
            title="Welcome"
            subtitle="Scial Dashboard"
            className="text-sm-left mb-3"
          />
        </Row>
       
       {/* Search Bar */}
       <SearchBar/>
       <Row>
          <Col>
            <AssetsTable assets={assets}/>
          </Col>
        </Row>
     </Container>
    )
  }
  
  return (


  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title={title}
        subtitle="Scial Dashboard"
        className="text-sm-left mb-3"
      />
    </Row>

    {/* Small Stats Blocks */}

    {/* Current Sentiment */}
    <Row>
      <Col className="col-lg mb-4" {...{ md: "6", sm: "6" }}>
        <SmallStats
          id={'small-stats'}
          variation="1"
          chartData={[{
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(0, 184, 216, 0.1)",
            borderColor: "rgb(0, 184, 216)",
            data: [1, 2, 1, 3, 5, 4, 7]
          }]}
          chartLabels={[null, null, null, null, null, null, null]}
          label="Sentiment"
          value={currentSentiment}
          percentage={CalculatePercentage(currentSentiment, lastSentiment).toString().concat("%")}
          increase={CalculatePercentage(currentSentiment, lastSentiment) > 0 ? true : false}
          // decrease={true}
        />
      </Col>
      

      {/* Price */}
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage.toString().concat("%")}
            increase={stats.percentage > 0 ? true : false}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* Price to Sentiment Overview */}
      <Col lg="9" md="12" sm="12" className="mb-4">
        {loaded && <PriceChart
          key={sentimentData[0]}
          title={title}
          sentimentData={sentimentData}
          priceData={priceData}
        />}
      </Col>

      {/* Asset Profile */}
      <Col lg="3" md="7" sm="12" className="mb-4">
        <TickerProfile 
          title={title}
          assetUrl={assetUrl} 
          description={description}
          currentPrice={currentPrice}
          currentSentiment={currentSentiment} 
        />
      </Col>

      </Row>
      <Row>

        {/* Asset News */}
        <Col lg="5" md="12" sm="12" className="mb-4">
          <AssetNews 
            articles={assetNews}
            />
        </Col>

        {/* Tweet Stream */}
        <Col lg="4" md="12" sm="12" className="mb-4">
          <TweetStream />
        </Col>

        {/* Top Platforms */}
        <Col lg="3" md="12" sm="12" className="mb-4">
          <TopPlatforms />
        </Col>

      </Row>
      {/* <Row> */}

      {/* WorldCloud */}
      {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <WordCloud />
      </Col> */}

      {/* Tweet Stream */}
      {/* <Col lg="4" md="12" sm="12" className="mb-4">
        <TweetStream />
      </Col> */}

      {/* Top Referrals */}
      {/* <Col lg="3" md="12" sm="12" className="mb-4">
        <TopPlatforms />
      </Col> */}
    {/* </Row> */}
    {/* <Row> */}
      {/* Sentiment Overview */}
      {/* <Col lg="8" md="12" sm="12" className="mb-4">
        <LineChart />
      </Col> */}

      {/* Users by Device */}
      {/* <Col lg="4" md="6" sm="12" className="mb-4">
        <AssetPieChart />
      </Col> */}
    {/* </Row> */}
  </Container>
)};

SentimentDashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

SentimentDashboard.defaultProps = {
  smallStats: [
    {
      label: "Price",
      value: "$112.31",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Market Cap",
      value: "$371B",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Twitter",
      value: "7,891",
      percentage: "2.71",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Reddit",
      value: "17,281",
      percentage: "2.4",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default SentimentDashboard;

import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import axios from 'axios';
import config from "../../env";
import yahooStockPrices from 'yahoo-stock-prices';

import IntervalDatePicker from "../common/IntervalDatePicker";
import Chart from "../../utils/MultiChart";
import stockData from "../../data/stockData.json"
import { aaplSentData } from "../../data/aaplSentData"

function PriceChart(props, sentimentData) {
    const chartOptions = {
        ...{
          responsive: true,
          legend: {
            position: "top"
          },
          elements: {
            line: {
              // A higher value makes the line look skewed at this ratio.
              tension: 0.3
            },
            point: {
              radius: 0
            }
          },
          scales: {
            xAxes: [
              { 
                gridLines: false,
                ticks: {
                  callback(tick, index) {
                    // Jump every 6 values on the X axis labels to avoid clutter.
                    return index % 6 !== 0 ? "" : tick.slice(10, tick.length);
                  }
                }
              }
            ],
            yAxes: [
              {
                id: 'A',
                type: "linear",
                position: 'left',
                ticks: {
                  suggestedMax: 45,
                  callback(tick) {
                    if (tick === 0) {
                      return tick;
                    }
                    // Format the amounts using Ks for thousands.
                    return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                  }
                }
              },
              {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  max: 10,
                  min: -10
                }
              }
            ]
          },
          hover: {
            mode: "nearest",
            intersect: false
          },
          tooltips: {
            custom: false,
            mode: "nearest",
            intersect: false
          }
        },
        ...props.chartOptions
      };

    const chartConfig = {
        type: "LineWithLine",
        data: props.chartData,
        options: chartOptions
    };

    const canvasRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
      if (canvasRef && canvasRef.current){
        console.log({canvasRef});
          const SentimentChart = new Chart(canvasRef.current, chartConfig);
          setChartInstance(SentimentChart);
          const buoMeta = SentimentChart.getDatasetMeta(0);
          buoMeta.data[0]._model.radius = 0;
          buoMeta.data[
              props.chartData.datasets[0].data.length - 1
          ]._model.radius = 0;

          // Render the chart.
          SentimentChart.render();
      }

    }, [canvasRef, props.chartData]);


    // const updateData = (newDates, newPrices, newSentScores) => {
    //   SentimentChart.config.data.chartData.labels = dates
    //   SentimentChart.config.data.chartData.datasets[0] = newPrices;
    //   SentimentChart.config.data.chartData.datasets[1] = newSentScores;
    //   SentimentChart.update();
    // }

    const getSentimentData = (ticker, date) => {
      axios.get(`${config.API_URL}/api/data/${ticker}`)
      .then(res => {
        if (res.data.success != false){
          console.log(res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

    const getStockPrices = async (ticker, date) => {
      let {startMonth, startDay, startYear, endMonth, endDay, endYear, frequency} = [1, 1, 2022, 1, 2, 2022, 1] 
      const prices = await yahooStockPrices.getHistoricalPrices(startMonth, startDay, startYear, endMonth, endDay, endYear, 'AAPL', frequency)
      console.log(prices)
    }



    const handleDateChange = (e) => {
      console.log(e.target.value);

      // Fetch data, pass the date and dataset
      console.log(chartInstance);
      console.log(props.chartData)
      console.log(props.chartData.datasets)
      // let dates = readDates();
      // let prices = readPrices();
      // let sentScores = readSents();
      

      // updateData(dates, prices, sentScores);
    }

  
    const { title } = props.title;
    return (
        <Card small className="h-100">
        <CardHeader className="border-bottom">
            <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
            <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
                <IntervalDatePicker value={props.child} onClick={handleDateChange}/>
            </Col>
            <Col>
                <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                >
                Export to CSV &rarr;
                </Button>
            </Col>
            </Row>
            <canvas
            height="120"
            ref={canvasRef}
            style={{ maxWidth: "100% !important" }}
            />
        </CardBody>
        </Card>
    );
  
}

PriceChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};


// stockData.stockData.forEach(element => console.log(element.y));

//read price + sentiment data

//user selects ticker. Default is 30 minute data. If user selects weekly data get more. 
//parameters are ticker and interval range (default daily)

//filter for date
var priceData = stockData.stockData.filter(element => element.timestamp.includes('2021-04-26'));
var sentData = aaplSentData;
console.log(sentData);

console.log(priceData);

const readPrices = (tickerData) => {
  var data = [];
  var start = 102;
  var end = tickerData.length - 88;
  for (var i=start; i<end; i++){
    data.push(tickerData[i].y)
  }
  return data
}

const readDates = (tickerData) => {
  var dates = [];
  for (var i=102; i<tickerData.length-88; i++){
    dates.push(tickerData[i].timestamp);
  }
  return dates
}

const readSents = (tickerData) => {
  var sentScores = [];
  for (var i=0; i<98; i++){
    sentScores.push(tickerData[i].tss);
  }
  return sentScores
}

var priceDataset = readPrices(priceData, '2021-04-26');
var sentDataset = readSents(sentData);
var dateLabels = readDates(priceData);
console.log(priceDataset);
// console.log(dateLabels);
// console.log(sentDataset);



PriceChart.defaultProps = {
  title: "Sentiment to Price",
  chartData: {
    labels: dateLabels,
    datasets: [
      {
        label: "Price",
        yAxisID: 'A',
        fill: "start",
        data: priceDataset,
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Sentiment",
        yAxisID: 'B',
        fill: "start",
        data: sentDataset,
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderDash: [3, 3],
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
  }
};

export default PriceChart;

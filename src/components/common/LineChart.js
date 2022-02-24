import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

import { sentimentData }  from '../../data/sampleData';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {

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
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              type: 'linear',
              display: 'true',
              position: 'left',
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
      ...this.props.chartOptions
    };

    const SentimentChart = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.props.chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = SentimentChart.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    SentimentChart.render();
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
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
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}


const tickerData = (dataSet, tickers) => {
    var data = [];
    const bgColors = ["rgba(0,123,255,0.1)", "rgba(0,255,123,0.1)"]
    const borderColors = ["rgba(0,123,255,1)", "rgba(0,255,123,1)"]
    for (var i = 0; i < tickers.length; i++) {
        var sentData = dataSet.filter(dataSet => {
            if(dataSet.ticker === tickers[i]){
                return dataSet.tss
            }
        })
        let sentScores = []
        for(var k = 0; k < sentData.length; k++) {
            sentScores.push(sentData[k].tss)
        }
        // sentData.filter(sentData => sentData.tss);
        var dataset = {
            label: tickers[i],
            fill: "start",
            data: sentScores,
            backgroundColor: bgColors[i],
            borderColor: borderColors[i],
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3

        }
        data.push(dataset);
    }
    return data;
};

var tickers = ['AAPL', 'TSLA']
const sentDataSets = tickerData(sentimentData, tickers);


LineChart.propTypes = {
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

LineChart.defaultProps = {
  title: "Sentiment Over Time",
  chartData: {
    labels: Array.from(new Array(7), (_, i) => (i === 0 ? 1 : i)),
    datasets: sentDataSets
  }
};




export default LineChart;

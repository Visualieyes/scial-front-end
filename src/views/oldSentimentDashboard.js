import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
import PriceChart from "../components/dashboard/PriceChart";
// import ChartComponent from "../components/blog/AreaChart";
import UsersByDevice from "../components/dashboard/UsersByDevice";
import WordCloud from "../components/common/WordCloud";
import Discussions from "../components/dashboard/Discussions";
import TopReferrals from "../components/common/TopReferrals";
import LineChart from "../components/common/LineChart"
import TickerProfile from "../components/dashboard/TickerProfile";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const SentimentDashboard = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Sentiment: AAPL"
        subtitle="Scial Dashboard"
        className="text-sm-left mb-3"
      />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* Price to Sentiment Overview */}
      <Col lg="9" md="12" sm="12" className="mb-4">
        <PriceChart />
      </Col>

      {/* Users by Device */}
      <Col lg="3" md="7" sm="12" className="mb-4">
        <TickerProfile />
      </Col>

      {/* New Draft */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <WordCloud />
      </Col>

      {/* Discussions */}
      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>

      {/* Top Referrals */}
      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
    </Row>
    <Row>
      {/* Sentiment Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <LineChart />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>
    </Row>
  </Container>
);

SentimentDashboard.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

SentimentDashboard.defaultProps = {
  smallStats: [
    {
      label: "Sentiment",
      value: "5.89",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
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
      value: "$1.8T",
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
      percentage: "2.71%",
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
      percentage: "2.4%",
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
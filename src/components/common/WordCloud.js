import { TagCloud } from 'react-tagcloud';
import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

const WordCloud = ({ title, data }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => console.log(`'${tag.value}' was selected!`)}
        />
    </CardBody>
  </Card>
);

WordCloud.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

WordCloud.defaultProps = {
  title: "Word Cloud",
  data: [
    { value: 'Electric Car', count: 38 },
    { value: 'Airpods', count: 30 },
    { value: 'Tim Cook', count: 28 },
    { value: 'Apple to the Moon', count: 25 },
    { value: 'Options', count: 33 },
    { value: 'Apple vs Fortnite', count: 21 },
    { value: 'Apple for life', count: 22 },
    { value: 'Apple is life', count: 13 },
    { value: 'iMac', count: 18 },
    { value: 'Apple store', count: 20 },
    { value: 'Apple lawsuit', count: 13 },
    { value: 'iMac', count: 17 },
    { value: 'Apple Options', count: 24 },
    { value: 'Apple addict', count: 16 },
    { value: 'Macbook Pro', count: 19 },
    { value: 'iCloud', count: 26 },
    { value: 'Apple Car', count: 32 },
    { value: 'Apple stock', count: 34 },
  ]
};

export default WordCloud;





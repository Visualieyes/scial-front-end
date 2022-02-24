/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

const tickerProfile = ({ title, description, assetUrl, currentPrice, currentSentiment}) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
        <span className="d-flex mb-2">

            {/* <i className="material-icons mr-1">flag</i> */}
            <p>{description}</p>
            {/* <a className="ml-auto" href="#">
              Edit
            </a> */}
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">language</i>
            <strong className="mr-1">Website:&nbsp;
            <a className="ml-auto" href={assetUrl}>{assetUrl}{"  "}
            </a>
            </strong>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Price:</strong> ${currentPrice}{" "}
            {/* <a className="ml-auto" href="#">
              Edit
            </a> */}
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Sentiment:</strong>{" "}
            <strong className="text-success">{currentSentiment}</strong>{" "}
            {/* <a className="ml-auto" href="#">
              Edit
            </a> */}
          </span>
          {/* <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Supply:</strong> 1.46M{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span> */}
          {/* <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">EBITDA:</strong>{" "}
            <strong className="text-warning">1.4</strong>
          </span> */}
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          {/* <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Add to Portfolio
          </Button> */}
          <Button theme="accent" size="sm">
            <i className="material-icons">file_copy</i> Add to Watchlist
          </Button>
          {/* <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Add to Watchlist
          </Button> */}
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

tickerProfile.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

tickerProfile.defaultProps = {
  title: "Apple"
};

export default tickerProfile;

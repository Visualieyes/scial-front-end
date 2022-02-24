import React from 'react';
import PropTypes from "prop-types";
import AreaChartWithYPercent from './../common/psChart';
import { getData } from "./../../utils/utils"
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import RangeDatePicker from "../common/RangeDatePicker";
import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	constructor(props) {
		super(props);

	  }
	
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
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
                View Full Report &rarr;
              </Button>
            </Col>
          </Row>
          <TypeChooser>
				{type => <AreaChartWithYPercent type={type} data={this.state.data} />}
			</TypeChooser>
        </CardBody>
      </Card>
			
		)
	}
}
ChartComponent.propTypes = {
	/**
	 * The component's title.
	 */
	title: PropTypes.string,
	/**
	 * The chart dataset.
	 */
}

export default ChartComponent;
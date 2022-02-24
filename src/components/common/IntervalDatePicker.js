import React from "react";
import classNames from "classnames";
import {
  Button, ButtonGroup
} from "shards-react";

import "../../assets/range-date-picker.css";

class IntervalDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: 0,
      endDate: undefined
    };
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleEndDateChange(e) {
    this.setState({
      endDate: e.target.value 
    });
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
        <ButtonGroup className="mb-3" value={this.state.endDate}>
            <Button theme="white" value={1} onClick={(e) => {this.props.onClick(e)}}>1D</Button>
            {/* <Button theme="white" value={7} onClick={(e) => {this.props.onClick(e)}}>1W</Button>
            <Button theme="white" value={31} onClick={(e) => {this.props.onClick(e)}}>1M</Button>
            <Button theme="white" value={365} onClick={(e) => {this.props.onClick(e)}}>1Y</Button>
            <Button theme="white" value={-1} onClick={(e) => {this.props.onClick(e)}}>MAX</Button> */}
            {/* <Button theme="white" value={5} onClick={(e) => this.handleEndDateChange(e, 'value')}>MAX</Button> */}
        </ButtonGroup>
    );
  }
}

export default IntervalDatePicker;

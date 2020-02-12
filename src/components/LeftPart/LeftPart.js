/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./LeftPart.scss";

import { Card, InputNumber, Slider } from "antd";
import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";

class LeftPart extends React.Component {
  render() {
    const { setDownPayment, setPropertyValue, setRent, base } = this.props;
    const { rentValue, propertyValue, downPayment } = base;

    return (
      <div className="LeftPart">
        <form>
          <Card title="Rent">
            <Card.Grid hoverable={false}>
              <InputNumber
                name="rentValue"
                id="rentValue"
                min={500}
                max={4000}
                defaultValue={rentValue}
                value={rentValue}
                formatter={rentValue =>
                  `$ ${rentValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={rentValue => rentValue.replace(/\$\s?|(,*)/g, "")}
                onChange={setRent}
              />
            </Card.Grid>
            <Card.Grid hoverable={false}>
              <Slider
                min={500}
                max={4000}
                defaultValue={rentValue}
                tooltipVisible
                onChange={setRent}
                value={typeof rentValue === "number" ? rentValue : 0}
              />
            </Card.Grid>
          </Card>
          <Card title="Property Value">
            <Card.Grid hoverable={false}>
              <InputNumber
                name="propertyValue"
                id="propertyValue"
                min={50000}
                max={4000000}
                defaultValue={propertyValue}
                value={propertyValue}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
                onChange={setPropertyValue}
              />
            </Card.Grid>
            <Card.Grid hoverable={false}>
              <Slider
                min={50000}
                max={4000000}
                defaultValue={propertyValue}
                tooltipVisible
                onChange={setPropertyValue}
                value={typeof propertyValue === "number" ? propertyValue : 0}
              />
            </Card.Grid>
          </Card>
          <Card title="Down Payment">
            <Card.Grid hoverable={false}>
              <InputNumber
                name="downPayment"
                id="downPayment"
                min={250}
                max={600}
                defaultValue={downPayment}
                value={downPayment}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
                onChange={setDownPayment}
              />
            </Card.Grid>
            <Card.Grid hoverable={false}>
              <Slider
                min={250}
                max={600}
                defaultValue={downPayment}
                tooltipVisible
                onChange={setDownPayment}
                value={typeof downPayment === "number" ? downPayment : 0}
              />
            </Card.Grid>
          </Card>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  };
};

export default connect(mapStateToProps, {
  setRent,
  setPropertyValue,
  setDownPayment
})(LeftPart);

import React from "react";

const configPopover = {
  popover: {
    downPaymentValue: {
      conditions: true,
      response: [
        {
          condition: 0,
          text: (
            <div>
              The minimum downpayment is based on property value:{" "}
              <li>5% of the first $500k</li>
              <li>10% of the remainder if less than $1M</li>
              <li>A property over 1 million requires a 20% downpayment</li>
            </div>
          )
        },
        {
          condition: 1,
          text: (
            <div>
              Your down payment should represent at least 5% of the value of the
              property when it does not exceed $250,000.
            </div>
          )
        },
        {
          condition: 2,
          text: (
            <div>
              Your down payment should represent 5% of the first $500k + 10% the
              remainder when it surpasses $500,000 but does not exceed
              $1,000,000.
            </div>
          )
        },
        {
          condition: 3,
          text: (
            <div>
              Your down payment should represent 20% of the value of the
              property when it exceeds $1,000,000.
            </div>
          )
        }
      ]
    },
    amountAnnualTaxesValue: {
      conditions: false,
      response: {
        text: (
          <div>
            <p>
              These amounts are determined by your municipality, according to
              the value of the property.
            </p>
            <p>School taxes are only applicable in Quebec.</p>
          </div>
        )
      }
    }
  }
};

export default configPopover;

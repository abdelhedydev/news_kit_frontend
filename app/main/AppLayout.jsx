import React from "react";
import { withRouter } from "next/router";
import PropTypes from "prop-types";

// components
import Body from "./body/Body";
import UIUtils from "../../app-core/ui-api-lib";

const { Components } = UIUtils;
const { Header, Footer } = Components;

const AppLayout = ({ type }) => (
  <div>
    <Header />
    <Body type={type} />
    <Footer />
  </div>
);

// prop type validation
AppLayout.propTypes = {
  type: PropTypes.string
};

// default prop
AppLayout.defaultProps = {
  type: "Home"
};

export default withRouter(AppLayout);

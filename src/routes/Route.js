import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import DefaultLayout from "../pages/_layouts/default";
import NotFound from "../pages/_layouts/notFound";

const RouteWrapper = ({ component: Component, notFound, ...rest }) => {
  const Layout = notFound ? NotFound : DefaultLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

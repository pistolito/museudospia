import React from "react";
import PropType from "prop-types";

import { Wrapper } from "./styles";

const NotFound = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NotFound;

NotFound.propTypes = {
  children: PropType.element.isRequired,
};

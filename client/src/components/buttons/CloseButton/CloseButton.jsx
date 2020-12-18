import React from 'react';
import './CloseButton.scss'
import PropTypes from "prop-types";

const CloseButton = ({doAction}) => (
  <div className='closeButton' onClick={doAction}/>
);

CloseButton.propTypes = {
  doAction: PropTypes.func,
};

export default CloseButton;
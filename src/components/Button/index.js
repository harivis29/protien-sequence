import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    disabled,
    handleClick,
    type,
    buttonLabel,
    ariaLabel,
    tabIndex,
    role,
    children
  } = props;

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
    >
      {children.length ? children : buttonLabel}
    </button>
  );
};

Button.propTypes = {
  buttonLabel: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
  children: PropTypes.node
}

Button.defaultProps = {
  buttonLabel: '',
  ariaLabel: '',
  tabIndex: 0,
  role: 'button',
  children: []
};

export default Button;

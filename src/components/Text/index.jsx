import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import textVariants from '../../constants/textVariants';

const Root = styled.span((props) => ({
  fontFamily: 'inter, sans-serif',
  fontSize: {
    'body-large': '1rem',
    'body-small': '0.875rem',
    'label-large': '1rem',
  }[props.variant],
  fontWeight: {
    'body-large': 400,
    'body-small': 400,
    'label-large': 500,
  }[props.variant],
  transition: 'color 200ms ease',
}));

Text.propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
  variant: PropTypes.oneOf(textVariants),
};

export default function Text(props) {
  const { children, className, component, ...rest } = props;

  return (
    <Root as={component} className={classnames('text', className)} {...rest}>
      {children}
    </Root>
  );
}

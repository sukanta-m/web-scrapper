import * as React from 'react';

import styled from 'styled-components';

const UnstyledDescription = ({ className, ...props}) => {
  return (
    <p {...props} className={className}>{props.children}</p>
  );
}

export const Description = styled(UnstyledDescription)`
  &&& {
    text-align: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    margin: 0;
  }
`

export default Description;
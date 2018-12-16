import React from 'react';

import { Grommet, Box, Button } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Open Sans',
    },
    colors: {
      darkGrey: '#3b404f',
      accentCold: '#3ab6e6',
    },
  },
  button: {
    extend: `
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    background-color: #3ab6e6;
    border: none;
    border-radius: 3px;
    padding: 16px 42px;
    `,
  },
};

const TestControls = ({ title, onClick }) => (
  <Grommet theme={theme}>
    <Box
      pad="8px"
      background="darkGrey"
      width="249px"
      height="262px"
      round="xsmall"
      direction="row"
      align="center"
      justify="center"
    >
      <Button label={title} onClick={onClick} hoverIndicator color="darkGrey" />
    </Box>
  </Grommet>
);

export default TestControls;

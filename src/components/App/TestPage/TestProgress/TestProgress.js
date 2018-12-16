import React from 'react';

import { Grommet, Box, Text, Meter } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Oswald',
    },
    colors: {
      darkGrey: '#3b404f',
      accentCold: '#3ab6e6',
    },
  },
  text: {
    extend: `
    text-transform: uppercase;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 37px;
    `,
  },
};

const TestProgress = ({ numberOfQuestions, numberOfCurrentQuestion }) => (
  <Grommet theme={theme}>
    <Box
      pad="0px"
      // background="darkGrey"
      direction="row"
      alignContent="center"
    >
      <Box
        direction="row"
        align="center"
        margin={{ right: '20px' }}
        fill="horizontal"
      >
        <Meter
          type="bar"
          background="grey"
          values={[
            {
              value: (numberOfCurrentQuestion / numberOfQuestions) * 100,
              color: 'accentCold',
            },
          ]}
          size="full"
          thickness="xsmall"
        />
      </Box>
      <Box direction="row" align="center">
        <Text size="large" weight="bold">
          {numberOfCurrentQuestion}/{numberOfQuestions}
        </Text>
      </Box>
    </Box>
  </Grommet>
);

export default TestProgress;

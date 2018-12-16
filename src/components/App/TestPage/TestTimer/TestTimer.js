import React from 'react';

import { Grommet, Box, Stack, Text, Meter } from 'grommet';

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
    color: white;
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    `,
  },
};

const TestTimer = ({ currentTime, isPaused }) => (
  <Grommet theme={theme}>
    <Box
      pad="58px"
      background="darkGrey"
      width="249px"
      height="262px"
      round="xsmall"
      direction="row"
      align="center"
    >
      <Stack anchor="center">
        <Meter
          type="circle"
          background="grey"
          values={[
            { value: currentTime, color: 'accentCold', highlight: false },
          ]}
          size="full"
          thickness="small"
        />
        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
          <Text size="xlarge" weight="bold">
            {isPaused ? 'Pause' : currentTime}
          </Text>
        </Box>
      </Stack>
    </Box>
  </Grommet>
);

export default TestTimer;

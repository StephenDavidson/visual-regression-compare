import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  expect: {
    toMatchSnapshot: { threshold: 0.1 },
  },
};
export default config;
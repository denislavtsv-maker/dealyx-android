import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'online.dealyx.app',
  appName: 'DEALYX',
  webDir: 'www',
  server: {
    // Preview shell connects to the existing production site and therefore shares its API,
    // user accounts, listings, messages, and database. Before public store submission, bundle
    // a tested local frontend build instead of relying on a remote URL.
    url: 'https://dealyx.online',
    cleartext: false,
    allowNavigation: ['dealyx.online', '*.dealyx.online']
  },
  ios: { contentInset: 'automatic' },
  android: { allowMixedContent: false }
};
export default config;

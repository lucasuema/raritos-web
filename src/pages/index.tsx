import React, { useCallback } from 'react';
import Layout from '../components/Layout';
import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Footer from 'src/components/Footer';

import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import raritosAbi from '../contract/raritos.json';

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: 'AXt7pgHlkPTYIdhiuwZQrJTdWIfFEUN0' }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'raritos.family',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const IndexPage = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        theme={darkTheme({ accentColor: '#FBFF00', accentColorForeground: 'black' })}
        chains={chains}
      >
        <Layout title="The Raritos">
          <Header />
          <Hero />
          <Footer />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default IndexPage;

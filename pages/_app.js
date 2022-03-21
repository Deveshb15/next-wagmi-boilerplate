import '../styles/globals.css'
import { Provider, defaultChains, InjectedConnector } from 'wagmi'

function MyApp({ Component, pageProps }) {

  const connectors = () => {
    return [
      new InjectedConnector({ 
        chains: defaultChains,
        options: { shimDisconnect: true },
      }),
    ];
};

  return (
    <Provider autoConnect connectors={connectors}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp

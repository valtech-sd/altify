import '../styles/globals.css';
import { StateProvider } from '../context/state';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />{' '}
    </StateProvider>
  );
}

export default MyApp;

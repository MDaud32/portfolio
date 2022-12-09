import '../styles/globals.css';
import { Artifika } from '@next/font/google';

const artifika = Artifika({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={artifika.className}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;

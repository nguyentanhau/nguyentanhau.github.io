// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

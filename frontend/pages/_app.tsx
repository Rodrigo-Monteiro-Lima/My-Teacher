import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header';
import { ThemeProvider } from '@mui/material';
import theme from '../src/themes/themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

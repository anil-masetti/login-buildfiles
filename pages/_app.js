// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query'

import '../styles/globals.css'
const queryClient = new QueryClient()
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}
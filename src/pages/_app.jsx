import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popp",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <div className={`${poppins.variable} font-popp`}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className='bg-light w-full min-h-screen'>
          <Component key={router.asPath} {...pageProps} />
        </main>
      </div>
    </>
  )
}
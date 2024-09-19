import '../styles/globals.css'; // Import your global CSS here
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; // For loading progress bar
import 'nprogress/nprogress.css'; // For progress bar styling

// Custom App component
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Handle route change events for NProgress
  useEffect(() => {
    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeComplete = () => NProgress.done();
    const handleRouteChangeError = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Clean up the event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Food Delivery</title>
      </Head>
      <Navbar /> {/* Add the Navbar here */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

/* Core */
import router from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import nprogress from 'nprogress';

/* Instruments */
import '@/theme/global.css';
import '@/theme/palette.css';
import '@/theme/nprogress.css';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    return (
        <>
            <Head>
                <link href = '/favicon.png' rel = 'shortcut icon' />
                {/* <link
                        as = 'font'
                        href = '/radnika-next-medium.woff2'
                        rel = 'preload'
                        type = 'font/woff2'
                    /> */}
                <title>Клевер</title>
            </Head>
            <props.Component { ...props.pageProps } />
        </>
    );
};

export default _App;

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

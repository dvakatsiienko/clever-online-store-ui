/* Core */
import router from 'next/router';
import { AppProps } from 'next/app';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import nprogress from 'nprogress';

/* Instruments */
import '@/theme/global.css';
import '@/theme/palette.css';
import '@/theme/nprogress.css';
import { CartStateProvider } from '@/helpers';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    return (
        <CartStateProvider>
            <props.Component { ...props.pageProps } />
        </CartStateProvider>
    );
};

export default _App;

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

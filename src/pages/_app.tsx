/* Core */
import router from 'next/router';
import { AppProps } from 'next/app';
import {
    ApolloProvider,
    ApolloClient,
    NormalizedCacheObject
} from '@apollo/client';
import nprogress from 'nprogress';

/* Components */
import { Layout } from '@/features/Layout';

/* Instruments */
import '@/theme/global.css';
import '@/theme/nprogress.css';
import { withApollo } from '@/lib';
import { CartStateProvider } from '@/helpers';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    return (
        <CartStateProvider>
            <ApolloProvider client = { props.apollo }>
                <Layout>
                    <props.Component { ...props.pageProps } />
                </Layout>
            </ApolloProvider>
        </CartStateProvider>
    );
};

_App.getInitialProps = async (options: any) => {
    let pageProps = {
        query: {},
    };

    if (options.Component.getInitialProps) {
        pageProps = await options.Component.getInitialProps(options.ctx);
    }

    pageProps.query = options.ctx.query;

    return { pageProps };
};

export default withApollo(_App);

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

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
import '@/theme/palette.css';
import '@/theme/nprogress.css';
import { useApollo } from '@/lib/apollo';
import { CartStateProvider } from '@/helpers';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    const apolloClient = useApollo(props.pageProps.initialApolloState);

    return (
        <CartStateProvider>
            <ApolloProvider client = { apolloClient }>
                <Layout>
                    <props.Component { ...props.pageProps } />
                </Layout>
            </ApolloProvider>
        </CartStateProvider>
    );
};

export default _App;

// export default withApollo(_App);

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

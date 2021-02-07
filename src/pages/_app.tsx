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
import { Page } from '@/components';

/* Instruments */
import { withData } from '@/lib';
import '@/theme/nprogress.css';
import '@/theme/global.css';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    return (
        <ApolloProvider client = { props.apollo }>
            <Page>
                <props.Component { ...props.pageProps } />
            </Page>
        </ApolloProvider>
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

export default withData(_App);

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

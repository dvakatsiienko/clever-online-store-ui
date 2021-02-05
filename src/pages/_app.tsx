/* Core */
import router from 'next/router';
import { AppProps } from 'next/app';
import {
    ApolloProvider,
    ApolloClient,
    NormalizedCacheObject
} from '@apollo/client';
import nprogress from 'nprogress';
import { ThemeProvider } from 'styled-components';

/* Components */
import { Page } from '@/components';

/* Instruments */
import { withData } from '@/lib';
import { GlobalStyle } from '@/theme';
import '@/theme/nprogress.css';

const _App = (
    props: AppProps & { apollo: ApolloClient<NormalizedCacheObject> },
) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme = {{}}>
                <ApolloProvider client = { props.apollo }>
                    <Page>
                        <props.Component { ...props.pageProps } />
                    </Page>
                </ApolloProvider>
            </ThemeProvider>
        </>
    );
};

_App.getInitialProps = async (options: any) => {
    let pageProps = {
        query: options.ctx.query,
    };

    if (options.Component.getInitialProps) {
        pageProps = await options.Component.getInitialProps(options.ctx);
    }

    return pageProps;
};

export default withData(_App);

router.events.on('routeChangeStart', nprogress.start);
router.events.on('routeChangeComplete', nprogress.done);
router.events.on('routeChangeError', nprogress.done);

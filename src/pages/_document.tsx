/* Core */
import Document, {
    Html,
    Head,
    NextScript,
    Main,
    DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class _Document extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App { ...props } />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang = 'en-CA'>
                <Head>
                    <link href = '/favicon.png' rel = 'shortcut icon' />
                    <link
                        as = 'font'
                        href = '/radnika-next-medium.woff2'
                        rel = 'preload'
                        type = 'font/woff2'
                    />
                    {this.props.styles}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;

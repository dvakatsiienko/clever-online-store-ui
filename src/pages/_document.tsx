/* Core */
import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class _Document extends Document {
    static getInitialProps(props) {
        const sheet = new ServerStyleSheet();

        const page = props.renderPage(App => props =>
            sheet.collectStyles(<App { ...props } />),
        );
        const styleTags = sheet.getStyleElement();

        return {
            ...page,
            styleTags,
        };
    }

    render() {
        return (
            <Html lang = 'en-CA'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;

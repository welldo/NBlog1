import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)
        const config = await import(`../data/config.json`)

        return {
            ...initialProps,
            config: config.default
        }
    }
    render() {
        const { title, description, author } = this.props.config
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/static/image/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:url" content="https://blog.yungeeker.com/index.html" />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:locale" content="zh_CN" />
                    <meta property="article:author" content={author.name} />
                    <meta property="article:tag" content={author.name} />
                    <meta property="article:tag" content="云极客" />
                    <meta name="twitter:card" content="summary" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
                    <meta name="renderer" content="webkit" />
                    <meta name="force-rendering" content="webkit" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <script defer src="//hm.baidu.com/hm.js?29ab8ced8f951b925920356991531a45"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

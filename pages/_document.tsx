import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html prefix='og: http://ogp.me/ns#'>
        <Head>
          <meta charSet='utf-8' />
          <title>Finaxis - Website</title>
          {/* <!-- Fav Icons --> */}
          <link
            rel='shortcut icon'
            href='images/favicon.png'
            type='image/x-icon'
          />
          <link rel='icon' href='images/favicon.png' type='image/x-icon' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />

          {/* <!-- Stylesheets --> */}
          <link
            href='lib/font-awesome/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
            rel='stylesheet'
          />
          <link href='css/finaxis-header-footer.css' rel='stylesheet' />
          <link href='css/finaxis-style.css' rel='stylesheet' />
        </Head>{' '}
        <body>
          <Main />
          <NextScript />
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
          <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
          <script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js'
            crossOrigin='anonymous'
          ></script>
          <script></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument

import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../store/reducers";
import Head from "next/head";

const initStore = (initialState = {}) => {
  return createStore(reducers, applyMiddleware(reduxThunk));
};

export default withRedux(initStore, { debug: false })(
  class _ extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <html prefix="og: http://ogp.me/ns#">
            <Head>
              <meta property="og:title" content="RoomR8r" />
              <meta property="og:type" content="website" />
              <meta property="og:description" content="Looking out for tenants and landlords alike. Gamble with the lottery not your housing" />
              <meta
                property="og:url"
                content="https://roomr8r.herokuapp.com/login"
              />
              <meta property="og:author"  content="Fortune Creig"/>
              <meta
              property="og:image"
              content="static/imgs/ogp.png"
            />
              <title>RoomR8r | home</title>
              <link
                href="https://fonts.googleapis.com/css?family=Lexend+Tera|Poppins|Fira+Sans&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </html>
        </Container>
      );
    }
  }
);

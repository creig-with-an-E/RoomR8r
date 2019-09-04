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
  class _ extends App{
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
        <html prefix="og:http://ogp.me/ns#">
          {/* <Container> */}
          <Head>
            <meta name="title" property="og:title" content="RoomR8r" />
            <meta property="og:type" content="website" />
            <meta
              name="description"
              property="og:description"
              content="Community of renters and landlord's alike. Using the app you are able to view and add your own review of the landlord and the house culture at a particular address. This app is built with one goal and one goal alone to improve the renting and leasing markets for all stakeholders at hand."
            />
            <meta
              property="og:url"
              content="http://roomr8r.ca/"
            />
            <meta name="author" property="og:author" content="Fortune Creig" />
            <meta property="og:image" content="http://roomr8r.ca/static/imgs/ogp_image.png" />
            <title>RoomR8r • home</title>
            <link rel="shortcut icon" href="http://roomr8r.ca/static/imgs/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css?family=Lexend+Tera|Poppins|Fira+Sans&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        {/* </Container> */}
        </html>
      );
    }
  }
);

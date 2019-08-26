import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../store/reducers";
import Head from "next/head"

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
          <Head>
            <title>RoomR8r | home</title>
            <link href="https://fonts.googleapis.com/css?family=Lexend+Tera|Poppins|Fira+Sans&display=swap" rel="stylesheet"></link>
          </Head>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);

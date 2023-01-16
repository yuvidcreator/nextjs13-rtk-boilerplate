import '@/styles/globals.css'
import { Provider } from "react-redux";
import Layout from '@/components/common/Layout/Layout'
import store from '@/redux/app/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

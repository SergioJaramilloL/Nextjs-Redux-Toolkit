import '@/styles/globals.css'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { wrapper } from '../redux/store'

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <>
      <Provider store={store}>
        <header>
          <Link href='/sync'> Síncrono </Link>
          <Link href='/async'> Asíncrono </Link>
        </header>
        <Component {...props.pageProps} />
      </Provider>
    </>
  )
}

export default App


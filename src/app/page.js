'use client'

import Header from '@/components/Layout/Header'
import Main from '@/components/Layout/Main'
import { Provider } from 'react-redux'
import store from '../store/index'

export default function Home()
{
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </>
  )
}

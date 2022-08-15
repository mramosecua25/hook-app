import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
// import { FocusScreen } from './useRef/FocusScreen'
// import { Layout } from './useLayoutEffect/Layout'
// import { Memorize } from './memos/Memorize'
// import { MemoHook } from './memos/MemoHook'
import { CallbackHook } from './memos/CallbackHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    <CallbackHook />
  </React.StrictMode>
)

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import StateContext from './contexts/StateContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StateContext>
)

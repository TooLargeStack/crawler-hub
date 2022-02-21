import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from './routes/index'
import { TooLargeStack } from './theme'

export const App = () => {
  return (
    <ChakraProvider resetCSS theme={TooLargeStack}>
      <AppRoutes />
    </ChakraProvider>
  )
}

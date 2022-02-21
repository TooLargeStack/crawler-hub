import * as React from 'react'
import { Box, SimpleGrid, Container } from '@chakra-ui/react'

const Hub = () => {

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{sm: 1, md: 2}} spacing={15}>
        <Box borderWidth='1px' borderRadius='lg' height="5rem">
          Teste
        </Box>
        <Box borderWidth='1px' borderRadius='lg' height="5rem">
          Teste
        </Box>
        <Box borderWidth='1px' borderRadius='lg' height="5rem">
          Teste
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Hub
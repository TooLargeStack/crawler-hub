import React, { ReactElement } from 'react';
import { Flex, Text, Box, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface AuxProps {
  children?: ReactElement | ReactElement[],
  toggleVisibility: () => void,
  props?: {
    name: string,
    style: Object,
    color: string
  } | undefined
}

const NavBarContainer = ({ children, toggleVisibility, ...props  } : AuxProps) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={2}
      bg={["primary.500", "primary.500", "#8c2c84", "#8c2c84"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Box>
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <IconButton
            variant="outline"
            aria-label='Expand drawer'
            icon={<HamburgerIcon />}
            onClick={toggleVisibility}
          ></IconButton>
          <Text fontSize='xl' align="left" >CRUB dfgsgfd</Text>
        </Flex>
      </Box>
      {children}
    </Flex>
  )
}

export default NavBarContainer
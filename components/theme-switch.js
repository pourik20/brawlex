import React from 'react'
import { Box, useColorMode, useColorModeValue, Flex } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const btnColor = useColorModeValue('gray.300', 'gray.700')
  return (
    <Box
      as='button'
      rounded='md'
      color={useColorModeValue('gray.900', 'white')}
      cursor='pointer'
      onClick={toggleColorMode}
      px={2}
      py={1}
      //   bg={useColorModeValue('teal.400', 'gray.800')}
      _hover={{
        bg: useColorModeValue('teal.300', 'gray.700'),
        transitionDuration: '0.4s',
      }}
    >
      <Flex p={1.5} justifyContent='center' alignItems='center'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Flex>
    </Box>
  )
}

export default ThemeSwitch

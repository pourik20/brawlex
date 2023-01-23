import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ThemeSwitch from './theme-switch'

const Links = ['Home', 'Find player']
const LinksMap = {
  Home: '/',
  'Find player': '/player',
}

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    color={useColorModeValue('gray.700', 'gray.300')}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('black', 'white'),
      bg: useColorModeValue('teal.500', 'gray.700'),
    }}
    href={href}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('teal.500', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            bg={useColorModeValue('teal.500', 'gray.800')}
            _hover={{
              bg: useColorModeValue('teal.400', 'gray.700'),
              transitionDuration: '0.4s',
            }}
            size={'md'}
            border={'2px'}
            borderColor='gray.800'
            icon={
              isOpen ? (
                // eslint-disable-next-line react-hooks/rules-of-hooks
                <CloseIcon color={useColorModeValue('gray.800', 'gray.300')} />
              ) : (
                <HamburgerIcon
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue('gray.800', 'gray.300')}
                />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Text fontSize='xl'>Brawlex</Text>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link} href={LinksMap[link]}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <ThemeSwitch />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={LinksMap[link]}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

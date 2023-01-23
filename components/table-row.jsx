import { Tr, Td, Flex, Image, Text } from '@chakra-ui/react'

const TableRow = ({ title, iconPath, value }) => {
  return (
    <Tr>
      <Td>
        <Flex alignItems='center' justifyContent='space-between' px={5}>
          <Flex alignItems='center' justifyContent='center' gap={2}>
            <Image src={iconPath} alt='trophy' w={7}></Image>
            <Text>{title}</Text>
          </Flex>
          <Text>{value}</Text>
        </Flex>
      </Td>
    </Tr>
  )
}

export default TableRow

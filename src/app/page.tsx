'use client'

import { Flex, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      height='100vh'
      width='100vw'
    >
      <Text 
        fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
        fontWeight='bold'
        color='gray.800'
      >
        Next.js 16 + Chakra UI 3
      </Text>
    </Flex>
  )
}

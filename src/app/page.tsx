'use client'

import { Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function HomePage() {
  const testEnv = process.env.NEXT_PUBLIC_TEST_ENV

  useEffect(() => {
    // 初回マウント時
    console.log('ページが表示されました')

    // タブ復帰時
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        console.log('ハイサイ！')
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

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
        おっす<br />
        Main ブランチです<br />
        環境変数: {testEnv || 'なし'}
      </Text>
    </Flex>
  )
}

import { ClientHomePage } from './client-page'

export default function HomePage() {
  // Server Component: ランタイムの環境変数を読める
  const pubTestEnv = process.env.NEXT_PUBLIC_TEST_ENV || 'なし'
  const testEnv = process.env.TEST_ENV || 'なし'

  return <ClientHomePage pubTestEnv={pubTestEnv} testEnv={testEnv} />
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 開発環境での二重レンダリングを防止
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  turbopack: {},
  // Docker用の最適化: standalone出力を有効化
  output: 'standalone',
}

module.exports = nextConfig

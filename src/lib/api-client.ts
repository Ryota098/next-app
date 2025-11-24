import Axios from 'axios'
import axiosRetry from 'axios-retry'

// APIエラーの型定義
export interface ApiError {
  message: string
  code?: string
  details?: unknown
}

// baseURLを取得する関数
const getBaseURL = (): string => {
  // MSW有効時は空文字列にしてMSWがインターセプトできるようにする
  if (process.env.NEXT_PUBLIC_ENABLE_MOCK === 'true') {
    return ''
  }

  // 本番環境のAPI URLが設定されている場合
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }

  // 環境変数が設定されていない場合はエラー
  throw new Error('NEXT_PUBLIC_API_URL is not set')
}

/**
 * API Client
 *
 * MSW有効時: モックデータを使用
 * 本番環境: Python API (NEXT_PUBLIC_API_URL)
 */
export const apiClient = Axios.create({
  baseURL: getBaseURL(),
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  timeout: 180000, // 3分（検証処理に対応）
  maxBodyLength: 500 * 1024 * 1024, // 500MB
  maxContentLength: 500 * 1024 * 1024, // 500MB
})

/**
 * リトライ設定
 * ネットワークエラーと5xxエラーに対して自動リトライ
 */
axiosRetry(apiClient, {
  retries: 3, // 最大3回リトライ
  retryDelay: axiosRetry.exponentialDelay, // 指数バックオフ
  retryCondition: (error) => {
    // ネットワークエラーまたはべき等なリクエストのエラー
    // または5xxサーバーエラーの場合にリトライ
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      (error.response?.status !== undefined && error.response.status >= 500)
    )
  },
})

/**
 * レスポンスインターセプター
 * グローバルなエラーハンドリング
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 認証エラー
    if (error.response?.status === 401) {
      // TODO: ログインページへリダイレクト
      console.error('Unauthorized')
    }

    // サーバーエラー
    if (error.response?.status >= 500) {
      console.error('Server error:', error.response?.data)
    }

    return Promise.reject(error)
  },
)

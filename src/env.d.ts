/// <reference types="vite/client" />

interface ImportMetaEnv {
  BASE_URL: string
  // 其他环境变量可以在这里声明
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

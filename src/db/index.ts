import env from '@/env'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/connect'
import * as schema from './schema'
// import { createClient } from '@libsql/client-wasm'

console.log('> TURSO_DATABASE_URL:', env.TURSO_DATABASE_URL)

export const db = await drizzle('turso', {
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  schema,
})

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/connect'
import env from '../env'
import * as schema from './schema'

export const db = await drizzle('turso', {
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  schema,
})

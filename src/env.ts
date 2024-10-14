import { config } from '@dotenvx/dotenvx'
import { z } from 'zod'

const envSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    TURSO_DATABASE_URL: z.string(),
    TURSO_AUTH_TOKEN: z.string(),
    isProduction: z.boolean().default(false),
    isDevelopment: z.boolean().default(true),
  })
  .transform((data) => ({
    ...data,
    isProduction: data.NODE_ENV === 'production',
    isDevelopment: data.NODE_ENV === 'development',
  }))

const { parsed } = config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
})

if (!parsed) {
  throw new Error('No environment variables found')
}

export default envSchema.parse({ ...parsed, ...process.env })

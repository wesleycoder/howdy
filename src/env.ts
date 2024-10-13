import { config } from '@dotenvx/dotenvx'
import { z } from 'zod'

const envSchema = z.object({
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
})

const { parsed } = config()

if (!parsed) {
  throw new Error('No environment variables found')
}

const env = envSchema.parse(parsed)

export default env

import { sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const memories = sqliteTable('memories', {
  id: int().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
  createdAt: int({ mode: 'timestamp_ms' }).notNull().default(sql`current_timestamp`),
  updatedAt: int({ mode: 'timestamp_ms' }).default(sql`current_timestamp`),
  deletedAt: int({ mode: 'timestamp_ms' }),
  userId: text().notNull(),
})

export const relatedMemories = sqliteTable('related_memories', {
  id: int().primaryKey({ autoIncrement: true }),
  memoryId: int()
    .references(() => memories.id)
    .notNull(),
  relatedMemoryId: int()
    .references(() => memories.id)
    .notNull(),
})

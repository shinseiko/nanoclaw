// Vitest runs under Node, which doesn't have bun:sqlite.
// This shim maps bun:sqlite → better-sqlite3 for tests only.
// At runtime (bun), this file is never loaded.
import BetterSqlite3 from 'better-sqlite3';
export const Database = BetterSqlite3;

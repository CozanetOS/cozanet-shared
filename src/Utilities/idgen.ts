import * as crypto from 'crypto';

export function generateId(prefix?: string): string {
  const uuid = crypto.randomUUID();
  return prefix ? `${prefix}:${uuid}` : uuid;
}

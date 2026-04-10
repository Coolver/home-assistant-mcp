import { tools } from './tools/index.js';

export function tryParseStructuredArg(value: unknown, expectedType?: string): unknown {
  if (typeof value !== 'string') {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return value;
  }

  const looksLikeStructuredJson =
    (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'));
  const shouldParse = expectedType === 'object' || expectedType === 'array' || looksLikeStructuredJson;

  if (!shouldParse) {
    return value;
  }

  try {
    const parsed = JSON.parse(trimmed);
    if (expectedType === 'object' && parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed;
    }
    if (expectedType === 'array' && Array.isArray(parsed)) {
      return parsed;
    }
    if (!expectedType) {
      return parsed;
    }
  } catch {
    // Keep original value; downstream validation returns a clear error.
  }

  return value;
}

export function normalizeToolArgs(toolName: string, rawArgs: Record<string, unknown>): Record<string, unknown> {
  const normalized: Record<string, unknown> = { ...rawArgs };
  const tool = tools.find((t) => t.name === toolName);
  const properties = tool?.inputSchema?.properties as Record<string, { type?: string }> | undefined;

  if (properties) {
    for (const [key, schema] of Object.entries(properties)) {
      if (key in normalized) {
        normalized[key] = tryParseStructuredArg(normalized[key], schema?.type);
      }
    }
  } else {
    for (const [key, value] of Object.entries(normalized)) {
      normalized[key] = tryParseStructuredArg(value);
    }
  }

  if (toolName === 'ha_call_service' && normalized.service_data === undefined && normalized.data !== undefined) {
    normalized.service_data = tryParseStructuredArg(normalized.data, 'object');
  }

  return normalized;
}

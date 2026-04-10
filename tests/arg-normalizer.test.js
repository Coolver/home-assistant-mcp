import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeToolArgs, tryParseStructuredArg } from '../build/arg-normalizer.js';

test('tryParseStructuredArg parses object json strings', () => {
  const value = '{"entity_id":"automation.test"}';
  const parsed = tryParseStructuredArg(value, 'object');
  assert.deepEqual(parsed, { entity_id: 'automation.test' });
});

test('tryParseStructuredArg parses array json strings', () => {
  const value = '["AC","downstairs AC"]';
  const parsed = tryParseStructuredArg(value, 'array');
  assert.deepEqual(parsed, ['AC', 'downstairs AC']);
});

test('normalizeToolArgs aliases data to service_data for ha_call_service', () => {
  const args = normalizeToolArgs('ha_call_service', {
    domain: 'automation',
    service: 'trigger',
    data: '{"entity_id":"automation.some_automation"}',
  });

  assert.deepEqual(args.service_data, { entity_id: 'automation.some_automation' });
});

test('normalizeToolArgs parses aliases array for update registry', () => {
  const args = normalizeToolArgs('ha_update_entity_registry', {
    entity_id: 'climate.downstairs_ac',
    aliases: '["AC","downstairs AC"]',
  });

  assert.deepEqual(args.aliases, ['AC', 'downstairs AC']);
});


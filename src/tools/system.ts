/**
 * System Operation Tools
 * Configuration validation, reload, restart, logs
 */

export const systemTools = [
  {
    name: 'ha_check_config',
    description: '[READ-ONLY] Validate Home Assistant configuration. Safe operation - only checks, does not modify.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'ha_reload_config',
    description: '[WRITE] Reload Home Assistant configuration. APPLIES changes - requires approval!',
    inputSchema: {
      type: 'object',
      properties: {
        component: {
          type: 'string',
          description: 'Component to reload: "automations", "scripts", "templates", "core", or "all" (default: "all")',
          enum: ['automations', 'scripts', 'templates', 'core', 'all'],
        },
      },
    },
  },
  {
    name: 'ha_restart',
    description: '[WRITE] FULL restart of Home Assistant. Completely restarts HA Core. Use when configuration changes require full restart (e.g., new dashboards, integrations). HA will be unavailable for 30-60 seconds. DISRUPTIVE - requires approval!',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'ha_get_logs',
    description: '[READ-ONLY] Get this add-on\'s own log (its connection and API chatter). For the Home Assistant Core log shown in Settings → System → Logs, use ha_core_logs. Safe operation - only reads data.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Number of log entries to retrieve (default: 100)',
        },
        level: {
          type: 'string',
          description: 'Filter by log level: DEBUG, INFO, WARNING, ERROR (optional)',
          enum: ['DEBUG', 'INFO', 'WARNING', 'ERROR'],
        },
      },
    },
  },
  {
    name: 'ha_core_logs',
    description: '[READ-ONLY] Read the Home Assistant journal from Supervisor: Core (Settings → System → Logs), the Supervisor, or the host OS. Default source is core. level keeps that level and above plus the following traceback. host is the OS journal and is noisy. Not available outside Home Assistant OS. Safe operation - only reads data.',
    inputSchema: {
      type: 'object',
      properties: {
        source: {
          type: 'string',
          description: 'Which journal to read. Default: core',
          enum: ['core', 'supervisor', 'host'],
        },
        lines: {
          type: 'number',
          description: 'How many recent lines to fetch (default 100, max 500)',
        },
        level: {
          type: 'string',
          description: 'Optional minimum level. WARNING keeps warnings, errors, and critical lines.',
          enum: ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'],
        },
      },
    },
  },
];




























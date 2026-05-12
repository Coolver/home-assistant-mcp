/**
 * Dashboard Tools
 * Lovelace dashboard generation and management
 */

export const dashboardTools = [
  {
    name: 'ha_analyze_entities_for_dashboard',
    description: '[READ-ONLY] Get entities for AI-driven dashboard generation with pagination/filtering. Safe operation - only reads data. Use summary_only=true to reduce payload; if has_next=true, request next page.',
    inputSchema: {
      type: 'object',
      properties: {
        domains: {
          type: 'array',
          items: { type: 'string' },
          description: 'Optional domain filters (e.g., ["climate", "light"])',
        },
        summary_only: {
          type: 'boolean',
          description: 'If true, return lightweight entity summary instead of full state objects',
        },
        page: {
          type: 'number',
          description: 'Page number (1-based, default 1)',
        },
        page_size: {
          type: 'number',
          description: 'Entities per page (default 250, max 500)',
        },
        full_list: {
          type: 'boolean',
          description: 'If true, return full list without pagination',
        },
      },
    },
  },
  {
    name: 'ha_preview_dashboard',
    description: '[READ-ONLY] Preview current Lovelace dashboard configuration. Shows existing ui-lovelace.yaml if configured. Safe operation - only reads data.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'ha_apply_dashboard',
    description: '[WRITE] Apply generated dashboard configuration to Home Assistant. Creates file, auto-registers in configuration.yaml, and restarts HA. Creates automatic Git backup. MODIFIES configuration - requires approval!',
    inputSchema: {
      type: 'object',
      properties: {
        dashboard_config: {
          type: 'object',
          description: 'Dashboard configuration object (from ha_generate_dashboard)',
        },
        create_backup: {
          type: 'boolean',
          description: 'Create Git backup before applying (default: true)',
        },
        filename: {
          type: 'string',
          description: 'Dashboard filename (default: ai-dashboard.yaml)',
        },
        register_dashboard: {
          type: 'boolean',
          description: 'Auto-register dashboard in configuration.yaml (default: true)',
        },
      },
      required: ['dashboard_config'],
    },
  },
  {
    name: 'ha_delete_dashboard',
    description: '[WRITE] Delete dashboard file and remove from configuration.yaml. Restarts Home Assistant. Creates automatic Git backup. DESTRUCTIVE - requires approval!',
    inputSchema: {
      type: 'object',
      properties: {
        filename: {
          type: 'string',
          description: 'Dashboard filename to delete (e.g., ai-dashboard.yaml)',
        },
        remove_from_config: {
          type: 'boolean',
          description: 'Remove from configuration.yaml (default: true)',
        },
        create_backup: {
          type: 'boolean',
          description: 'Create Git backup before deleting (default: true)',
        },
      },
      required: ['filename'],
    },
  },
];




























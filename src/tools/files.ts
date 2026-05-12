/**
 * File Operation Tools
 */

export const fileTools = [
  {
    name: 'ha_read_file',
    description: '[READ-ONLY] Read a file from Home Assistant configuration directory. Safe operation - only reads data.',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Path to the file relative to /config (e.g., "configuration.yaml", "automations.yaml", "scripts/my_script.yaml")',
        },
      },
      required: ['path'],
    },
  },
  {
    name: 'ha_write_file',
    description: '[WRITE] Write content to a file in Home Assistant. MODIFIES configuration - requires approval. Provide a meaningful description of what and why you are changing (e.g., "Add motion sensor automation", "Fix temperature threshold", "Update dashboard layout").',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Path to the file relative to /config',
        },
        content: {
          type: 'string',
          description: 'Content to write to the file',
        },
        description: {
          type: 'string',
          description: 'Optional: Human-readable description of what and why you are changing (e.g., "Add automation for motion sensor light control", "Fix temperature threshold in climate automation", "Update dashboard to show new sensors"). This will be used in Git commit message.',
        },
      },
      required: ['path', 'content'],
    },
  },
  {
    name: 'ha_list_files',
    description: '[READ-ONLY] List files and directories in Home Assistant with pagination support. Safe operation - only reads data. Default page_size is 250; if response has has_next=true, request next page.',
    inputSchema: {
      type: 'object',
      properties: {
        directory: {
          type: 'string',
          description: 'Directory path relative to /config (default: "/")',
        },
        pattern: {
          type: 'string',
          description: 'File glob pattern to filter results (default: "*.yaml"). Use "*" to list all files, "*.mdc" for Cursor rules, etc.',
        },
        page: {
          type: 'number',
          description: 'Page number (1-based, default 1)',
        },
        page_size: {
          type: 'number',
          description: 'Files per page (default 250, max 500)',
        },
        full_list: {
          type: 'boolean',
          description: 'If true, return full list without pagination',
        },
      },
    },
  },
  {
    name: 'ha_delete_file',
    description: '[WRITE] Delete a file from Home Assistant. DESTRUCTIVE - requires approval!',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Path to the file to delete',
        },
      },
      required: ['path'],
    },
  },
];




























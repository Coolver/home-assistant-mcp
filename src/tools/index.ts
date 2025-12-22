/**
 * MCP Tools - Modular Tool Definitions
 * 
 * Tools are organized by domain for better maintainability
 */

import { fileTools } from './files.js';
import { systemTools } from './system.js';
import { dashboardTools } from './dashboard.js';

// TODO: Import remaining tool modules as they're created
// import { entityTools } from './entities.js';
// import { helperTools } from './helpers.js';
// import { automationTools } from './automations.js';
// import { scriptTools } from './scripts.js';
// import { gitTools } from './git.js';
// import { hacsTools } from './hacs.js';
// import { addonTools } from './addons.js';

// For now, import remaining tools from parent (temporary during migration)
import { tools as allTools } from '../tools.js';

// List of tools already migrated to modules
const migratedToolNames = [
  'ha_read_file', 'ha_write_file', 'ha_list_files', 'ha_delete_file',  // files
  'ha_check_config', 'ha_reload_config', 'ha_restart', 'ha_get_logs',  // system
  'ha_analyze_entities_for_dashboard', 'ha_preview_dashboard', 'ha_apply_dashboard', 'ha_delete_dashboard',  // dashboard
  // Note: Git tools (ha_git_history, ha_git_pending, ha_git_commit, etc.) are in tools.ts
  // and will be included in remainingTools (not in this list)
];

// Filter out migrated tools (avoid duplicates)
const remainingTools = allTools.filter(
  tool => !migratedToolNames.includes(tool.name)
);

// Export combined tools array
export const tools = [
  ...fileTools,
  ...systemTools,
  ...dashboardTools,
  ...remainingTools,
];

// Export individual tool arrays for direct access
export { fileTools, systemTools, dashboardTools };


# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2025-11-09

### ✨ NEW: HACS Support

**One-Click HACS Installation via Cursor AI!**

Added MCP tools for HACS:
- `ha_install_hacs` - Install HACS automatically
- `ha_hacs_status` - Check if HACS is installed
- `ha_hacs_list_repositories` - List available integrations/themes
- `ha_hacs_install_repository` - Install from HACS store

**What this means:**
- 🎯 No more manual HACS installation!
- 🤖 Just ask: "Install HACS"
- 📦 Opens access to 1000+ integrations
- ✅ AI handles: download → extract → restart → configure

**Example:**
```
User: "Install HACS and then install Xiaomi Gateway 3"
AI: Installs HACS → Installs integration → Creates automations
```

**Requirements:**
- HA Cursor Agent v2.1.0+

## [2.0.0] - 2025-11-08

### 🚨 BREAKING CHANGES

- **Removed `HA_TOKEN` support** - only `HA_AGENT_KEY` is accepted now
  - Old configurations with `HA_TOKEN` will **STOP WORKING**
  - Must update to `HA_AGENT_KEY` in your Cursor MCP configuration
  - Cleaner API without legacy naming

### Migration Required

**If you're using `HA_TOKEN`:**

```json
// OLD (will not work in v2.0.0+):
{
  "env": {
    "HA_TOKEN": "your-key"
  }
}

// NEW (required):
{
  "env": {
    "HA_AGENT_KEY": "your-key"
  }
}
```

**How to migrate:**
1. Update HA Cursor Agent add-on to v2.0.0
2. Get new configuration from Web UI (Settings → Add-ons → HA Cursor Agent → Open Web UI)
3. Copy the ready-to-use JSON config
4. Update Cursor: Settings → Tools & MCP → Edit your server or add new one
5. Restart Cursor

### Why This Change?

- ✅ Accurate naming: It's an Agent Key, not a HA Token
- ✅ No confusion with Home Assistant authentication tokens
- ✅ Simpler codebase
- ✅ Clear API semantics

### What Stays the Same

- ✅ Same MCP tools and functionality
- ✅ Same HA Cursor Agent API endpoints
- ✅ Only variable name changed

---

## [1.0.14] - 2025-11-08

### Documentation
- Fixed Ingress Panel access path in documentation

## [1.0.13] - 2025-11-08

### Documentation
- Updated setup instructions to use Cursor Settings UI

## [1.0.12] - 2025-11-08

### Documentation
- Updated agent version requirements

## [1.0.11] - 2025-11-08

### Documentation
- Updated to reference agent v1.0.11+

## [1.0.10] - 2025-11-08

### Documentation
- Updated to reference agent v1.0.10+

## [1.0.9] - 2025-11-08

### Added
- Support for `HA_AGENT_KEY` environment variable (with backward compatibility to `HA_TOKEN`)

## [1.0.8] - 2025-11-08

### Documentation
- Updated for API Key authentication instead of Long-Lived Tokens

## [1.0.7] - 2025-11-08

### Documentation
- Updated for HA Cursor Agent v1.0.9+ with API Key system

## [1.0.6] - 2025-11-08

### Fixed
- Fixed `ha_reload_config` to properly pass component parameter

### Added
- `ha_git_diff` tool for viewing differences between commits

## [1.0.5] - 2025-11-08

### Changed
- Updated tool descriptions with [READ-ONLY] and [WRITE] labels

## [1.0.4] - 2025-11-08

### Added
- Better log formatting for `ha_get_logs` tool

## [1.0.3] - 2025-11-08

### Added
- Git diff functionality

## [1.0.2] - 2025-11-08

### Documentation
- Updated README with improved instructions

## [1.0.1] - 2025-11-08

### Fixed
- Initial release fixes

## [1.0.0] - 2025-11-08

### Added
- Initial release
- MCP server for Home Assistant via HA Cursor Agent
- Full API coverage (files, entities, helpers, automations, scripts, system, backup, logs)
- TypeScript implementation
- NPM package publication

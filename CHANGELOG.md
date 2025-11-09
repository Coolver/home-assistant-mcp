# Changelog

All notable changes to this project will be documented in this file.

## [2.3.1] - 2025-11-09

### 🔧 Feature: Repository Management

**Add-on Repository Management** - Add community repositories to access popular add-ons!

### New MCP Tools (2 repository tools)

**Repository Management:**
- `ha_list_repositories` - List all connected add-on repositories
- `ha_add_repository` - Add custom add-on repository URL

### Why This Matters

**Problem:** Users see only 1-2 add-ons because community repositories aren't connected.

**Solution:** AI can now:
1. Check which repositories are connected
2. Suggest adding popular repositories
3. Add repositories programmatically
4. Show available add-ons after adding repository

**Popular repositories:**
- Community: https://github.com/hassio-addons/repository
- Zigbee2MQTT: https://github.com/zigbee2mqtt/hassio-zigbee2mqtt
- ESPHome: https://github.com/esphome/hassio

### Changes

- Added `ha_list_repositories` tool
- Added `ha_add_repository` tool
- AI can now manage repository sources
- Better explanation when minimal add-ons available

### Requires

- HA Cursor Agent v2.3.10+

## [2.3.0] - 2025-11-09

### 🚀 MAJOR: Complete Add-on Management

**Full add-on lifecycle management** - Install, configure, and control Home Assistant add-ons via Cursor AI!

### New MCP Tools (12 add-on tools)

**Add-on Lifecycle:**
- `ha_list_addons` - List all available and installed add-ons
- `ha_list_installed_addons` - List only installed add-ons
- `ha_addon_info` - Get detailed add-on information
- `ha_addon_logs` - Read add-on logs for troubleshooting
- `ha_install_addon` - Install add-on (Zigbee2MQTT, Node-RED, etc)
- `ha_uninstall_addon` - Uninstall add-on
- `ha_start_addon` - Start add-on service
- `ha_stop_addon` - Stop add-on service
- `ha_restart_addon` - Restart add-on service
- `ha_update_addon` - Update add-on to latest version
- `ha_get_addon_options` - Get add-on configuration
- `ha_set_addon_options` - Configure add-on options

### Features

**Agent v2.3.0 adds Supervisor API:**
- Full add-on management via Supervisor API
- Timeout handling for long operations
- Error handling and user-friendly messages
- Log monitoring capabilities

**Full workflow now works:**
```
✅ "Install Zigbee2MQTT for my Sonoff dongle"
✅ "Setup Mosquitto MQTT broker"
✅ "My Zigbee2MQTT isn't working - check logs and fix"
✅ "Update all my add-ons"
```

### README Improvements

- ✅ Added "🔌 Manage Add-ons & Services" section
- ✅ Clear examples: Zigbee2MQTT, MQTT, Node-RED
- ✅ Shows natural language prompts for add-on operations
- ✅ Better visibility of service management features

**Impact:**
- Complete infrastructure setup automation
- Simplified Zigbee/MQTT configuration
- Automated add-on troubleshooting
- Aligned with agent v2.3.0

**Requires:** HA Cursor Agent v2.3.0+

## [2.2.2] - 2025-11-09

### 📝 Documentation Enhancement

**README Improvements**
- ✅ Added "📦 Extend with Community Integrations" section to main capabilities
- ✅ Clear examples of HACS usage with natural language prompts
- ✅ Better visibility of community integrations feature (1000+ repos)
- ✅ Improved feature discoverability in main README

**Impact:**
- Users better understand HACS capabilities from README
- Clear examples of how to use HACS through Cursor AI
- Better alignment with agent v2.2.3 documentation

## [2.2.1] - 2025-11-09

### 🧠 Tool Descriptions Enhancement

**Proactive HACS Support**
- ✅ Enhanced `ha_hacs_status` description - now instructs AI to ALWAYS check this first when HACS is mentioned
- ✅ Updated `ha_hacs_list_repositories` - reminds to check status and offer installation if needed
- ✅ Updated `ha_hacs_search` - same proactive installation logic
- ✅ Better AI behavior - automatically offers HACS installation when user requests custom integrations

**Impact:**
- AI now proactively suggests HACS installation
- Improved user experience - no need to manually discover HACS
- Aligned with agent v2.2.2 AI Instructions

## [2.2.0] - 2025-11-09

### 🚀 MAJOR: Complete HACS Integration with WebSocket

**Full HACS Management** - Browse, search, and install 1000+ integrations via Cursor AI!

### New MCP Tools

Added 7 HACS tools (4 new, 3 enhanced):

**Installation:**
- `ha_install_hacs` - Install HACS automatically
- `ha_hacs_status` - Check if HACS is installed

**Repository Management (NEW - WebSocket powered):**
- `ha_hacs_list_repositories` - List all HACS repositories ✨ Enhanced
- `ha_hacs_search` - Search by name/author/description ✨ NEW
- `ha_hacs_install_repository` - Install from HACS ✨ Enhanced  
- `ha_hacs_update_all` - Update all repositories ✨ NEW
- `ha_hacs_repository_details` - Get detailed repo info ✨ NEW

### Features

**Agent v2.2.0 adds WebSocket:**
- Persistent WebSocket connection to Home Assistant
- Real-time state access
- Service calls via WebSocket
- Auto-reconnect with backoff
- Background task management

**Full workflow now works:**
```
User: "Install HACS and then install Xiaomi Gateway 3"

AI:
1. Installs HACS from GitHub ✅
2. Restarts Home Assistant ✅
3. Waits for connection ✅
4. Searches: "xiaomi gateway" ✅
5. Finds: "AlexxIT/XiaomiGateway3" ✅
6. Installs via hacs.download ✅
7. Guides through config ✅
```

**What you can do:**
- 📦 "Install HACS"
- 🔍 "Search for Xiaomi integrations in HACS"
- ⬇️ "Install Xiaomi Gateway 3 from HACS"
- 🔄 "Update all my HACS integrations"
- 📊 "Show me details about the Xiaomi Gateway integration"

**Requirements:**
- HA Cursor Agent v2.2.0+ (with WebSocket)
- HACS configured via UI first time (one-time)

## [2.1.0] - 2025-11-09

### ✨ NEW: HACS Support (Initial)

Basic HACS installation support (file operations only).

**Note:** v2.1.0 only supported installation. v2.2.0 adds full repository management with WebSocket.

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

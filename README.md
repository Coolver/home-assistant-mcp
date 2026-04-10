# Home Assistant Vibecode MCP

[![NPM Version](https://img.shields.io/npm/v/@coolver/home-assistant-mcp)](https://www.npmjs.com/package/@coolver/home-assistant-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> ⚙️ This MCP server works together with the  
> [Home Assistant Vibecode Agent](https://github.com/Coolver/home-assistant-vibecode-agent),  
> installed as a Home Assistant add-on.  
> The agent runs on your Home Assistant instance and provides “eyes and hands” for AI IDEs like Cursor, VS Code, Claude Code, or any other MCP-enabled IDE.

**Let AI build your Home Assistant automations – or act as your DevOps for the ones you write by hand. Just describe what you need in natural language. 🏠🤖**

You describe your goal → AI inspects your Home Assistant → designs a custom solution → and deploys it on-board automatically. 🚀

And if you prefer to handcraft your automations and scripts yourself, the agent can simply act as your DevOps and extra pair of hands: quickly uploading your changes, running tests, and analyzing logs on demand. **You stay in control and decide how much you delegate to AI and how deep it should go.**

Transform the way you manage your smart home. This add-on enables **Cursor**, **Visual Studio Code (VS Code)**, or any **MCP-enabled IDE** to:

- 📝 Analyze your Home Assistant configuration, entities, and devices  
- 🏗️ Create intelligent automations, scripts, and complete systems — including Home Assistant helpers that can be fully managed programmatically  
- 🎨 Design and customize Lovelace dashboards with full control over cards, layouts, and styling  
- 🖌️ Create and tweak themes for a personalized UI  
- 🔄 Safely deploy changes with automatic Git-based versioning  
- 🔍 Monitor and troubleshoot your setup through log analysis  
- 📦 Install and manage HACS integrations and custom repositories  

No more manual YAML editing or searching through documentation - just describe what you want in natural language!

**Example:** *"Install smart climate control for my radiators"* → AI creates 10+ automations, helpers, sensors, and scripts optimized for YOUR TRVs.

Built on [Model Context Protocol](https://modelcontextprotocol.io/) and powered by [HA Vibecode Agent](https://github.com/Coolver/home-assistant-cursor-agent).


### ✨ Key Features

### 🔍 Analyze your setup

✅ Read your full configuration — entities, automations, scripts, helpers  
✅ Understand your devices — capabilities, relations, and usage patterns  
✅ Learn existing logic — analyze how your current automations and scripts behave  

---

### 🏗️ Build intelligence

✅ Create complete systems — multiple interconnected automations in seconds  
✅ Generate helpers and sensors — tailored to your actual setup and needs  
✅ Write optimized scripts — based on real entities, areas, and devices  
✅ Refactor existing logic — improve or merge automations instead of starting from scratch  

---

### 📊 Dashboards & UI

✅ Create and update Lovelace dashboards — fully programmatically  
✅ Add, remove, or rearrange cards — stat, graphs, history, custom cards, and more  
✅ Control layouts and views — organize rooms, areas, and scenarios  
✅ Design and tweak themes — colors, typography, and styles for a personalized UI  

---

### 🔒 Safe operations

✅ Git-based versioning — every change is tracked with meaningful commit messages  
✅ Human-readable commits — AI explains *what* changed and *why*  
✅ Configuration validation — test before apply to reduce breaking changes  
✅ One-click rollback — revert to a previous state if something goes wrong  
✅ Activity log — full audit trail of what the agent did and when  

---

### 📦 Extend with the community

✅ Install and configure HACS — unlock 1000+ community integrations  
✅ Search repositories — themes, plugins, custom components, dashboards  
✅ Install integrations — one-command setup for new HACS components  
✅ Keep things fresh — update all HACS repositories from a single place  

---

**Result:**  
You describe your goal → AI inspects your Home Assistant → designs a custom solution → and deploys it on-board automatically. 🚀

---

### 🚀 How is this different from other MCP modules for Home Assistant?

Most MCP integrations I’ve seen for Cursor, VS Code or Claude work only on your local machine and talk to Home Assistant over SSH and sometimes the REST API.

For serious Home Assistant work, that’s not really enough:

Home Assistant is not just a bunch of YAML files.
It exposes multiple internal APIs, and some of the most important ones are only available from inside HA itself over the WebSocket API.

When you access HA only via SSH, the AI usually has to generate and upload a helper script on every request, then execute it blindly on the host.
Since that script can be different every time, each request is a bit of a black box — more like playing Russian roulette than doing reliable automation.

Because of that, I chose a different architecture.

This project is **split into two modules**:

**Home Assistant Agent** (this module) – runs inside Home Assistant (as an add-on),
has native access to all relevant APIs, files and services,
and exposes a safe, well-defined interface for external tools.

**Home Assistant MCP server** – runs on your computer alongside your AI IDE (Cursor, VS Code, etc.)
and talks to the Agent over a controlled API instead of SSH hacks (installation steps below)

This design makes working with Home Assistant faster, more predictable, safer and repeatable.
Your AI IDE gets exactly the actions and data it needs — through a stable API — instead of constantly inventing ad-hoc scripts and hoping they behave correctly.

---

## 📋 Prerequisites

Before installing, you need:

1. **Home Assistant** running (any version)
2. **[HA Vibecode Agent](https://github.com/Coolver/home-assistant-vibecode-agent)** v2.2.0+ installed as add-on
3. **Agent Key** from HA Vibecode Agent (auto-generated on first start)
4. **AI-enabled editor** installed (Cursor, VS Code + GitHub Copilot, Claude Code etc)

---

## 🚀 Quick Start (5 minutes)

### Step 0: Install Node.js (if not already installed)

The MCP server requires Node.js to run on your computer (where your AI editor is installed):

1. Check if Node.js is already installed: open terminal and run `node --version`
2. If not installed or version is below v20.0.0, download and install from **[nodejs.org](https://nodejs.org)** (use the **24.x LTS** build when possible)
3. After installation, verify: `node --version` should show v20.0.0 or higher (v24 LTS recommended)
4. **Important:** Install Node.js on the computer where your AI editor runs, not on the Home Assistant server

### Step 1: Install HA Vibecode Agent

Install the agent in your Home Assistant from :

1. Go to **Settings** → **Add-ons** → **Add-on Store**
2. Click **⋮** → **Repositories**
3. Add: `https://github.com/Coolver/home-assistant-vibecode-agent`
4. Install **HA Vibecode Agent** (v2.0.0+)
5. **Start** the agent

### Step 2: Setup MCP in Your AI Editor

**Get configuration from Home Assistant:**
1. Open your **Home Assistant** (usually http://homeassistant.local:8123)
2. Go to **Settings** → **Add-ons** → **HA Vibecode Agent**
3. Click **"Open Web UI"** button
4. Click the **Cursor** or **VS Code** tab (depending on which IDE you want to use with Home Assistant) and **follow the setup instructions**. You’ll need to install and configure Cursor or VS Code so they can connect to the HA Agent via the MCP protocol.
5. That’s it — **you’re ready to start** working with your Home Assistant scripts, automations and dashboards using AI.
If you find this project useful and want to support its development, **please consider giving it a [GitHub Star](https://github.com/Coolver/home-assistant-mcp) ⭐**


### Step 3: Test Connection

**Verify everything works:**

Open your AI editor (Cursor, VS Code, etc) and send this message to AI:
```
Connect to my Home Assistant and show me:
1. List of all my climate entities
2. Current status of the HA Vibecode Agent

This will verify the MCP connection is working.
```

If AI successfully returns your entities and agent status, you're all set! ✅

**Troubleshooting:** If connection fails:
- Check that HA Vibecode Agent is running
- Ensure your AI editor was fully restarted
- Verify configuration was pasted correctly

### Step 4: Start Building!

Just describe what you want in natural language - AI will handle the rest!

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `HA_AGENT_URL` | URL of HA Vibecode Agent | Yes | `http://homeassistant.local:8099` |
| `HA_AGENT_KEY` | Agent Key for authentication | Yes | - |

### Custom Agent URL

If your agent runs on a different URL:

```json
{
  "mcpServers": {
    "home-assistant": {
      "command": "npx",
      "args": ["-y", "@coolver/home-assistant-mcp@latest"],
      "env": {
        "HA_AGENT_URL": "http://<home-assistant-host>:8099",
        "HA_AGENT_KEY": "your_api_key_here"
      }
    }
  }
}
```

---

## 🐛 Troubleshooting

### "Invalid Agent Key" error

1. Check your Agent Key is correct in `mcp.json` (under `HA_AGENT_KEY`)
2. Regenerate key if needed: Settings → Add-ons → HA Vibecode Agent → Open Web UI
3. Make sure HA Vibecode Agent is running
4. Verify agent is accessible: `curl http://homeassistant.local:8099/api/health`

### "Connection refused"

1. Check HA Vibecode Agent is started in Home Assistant
2. Verify the URL in `HA_AGENT_URL`
3. Make sure port 8099 is not blocked by firewall

### "spawn npx ENOENT" error

This error means Node.js is not installed or not found in your system PATH.

**Solution:** Install Node.js (v20.0.0 or higher; **v24 LTS** recommended) on the computer where Cursor is running:

1. Download and install Node.js from [https://nodejs.org](https://nodejs.org)
2. Restart Cursor completely after installation
3. Verify installation by running `node --version` in a terminal

**Important:** Node.js must be installed on **your computer** (where Cursor, VS Code, Claude or other IDE runs), not on the Home Assistant server.

---

## 🔐 Security

- ✅ All communication goes through HA Vibecode Agent (port 8099)
- ✅ Agent Key authentication for MCP clients
- ✅ Agent validates Agent Key for all requests
- ✅ Agent uses internal SUPERVISOR_TOKEN for Home Assistant API operations
- ✅ Your Agent Key is stored only in local IDE config file
- ⚠️ **Never commit `mcp.json` with your Agent Key to git!**

---

## 🤝 Related Projects

- **[HA Vibecode Agent](https://github.com/Coolver/home-assistant-cursor-agent)** - Home Assistant add-on (required)
- **[Model Context Protocol](https://modelcontextprotocol.io/)** - Protocol specification

---

## 📝 License

MIT © Vladimir Eremeev

---

## 🔧 Development

### Project Structure

```
home-assistant-mcp/
├── package.json            # NPM package config
├── tsconfig.json           # TypeScript config
├── src/
│   ├── index.ts           # MCP server entry point
│   ├── ha-client.ts       # HA Agent API client
│   ├── handlers.ts        # Tool request handlers
│   ├── tools.ts           # Legacy tool definitions
│   └── tools/             # Modular tool definitions
│       ├── index.ts       # Tool exports
│       ├── files.ts       # File operation tools
│       ├── system.ts      # System operation tools
│       └── dashboard.ts   # Dashboard tools
├── build/                 # Compiled JavaScript output
├── README.md
├── CHANGELOG.md
└── QUICK_START.md
```

### Architecture

**MCP Server** (`index.ts`) ← Communication Protocol  
↓  
**Tool Handlers** (`handlers.ts`) ← Business Logic  
↓  
**HA Client** (`ha-client.ts`) ← HTTP API Wrapper  
↓  
**HA Vibecode Agent** (https://github.com/Coolver/home-assistant-vibecode-agent) (REST API) ← Home Assistant Integration

---

## 🙏 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💬 Support

- 🐛 **Issues:** [GitHub Issues](https://github.com/Coolver/home-assistant-mcp/issues)
- 💡 **Discussions:** [GitHub Discussions](https://github.com/Coolver/home-assistant-mcp/discussions)

---

## ⭐ Show your support

Give a ⭐️ if this project helped you control your smart home with AI!

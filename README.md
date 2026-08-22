# Haxball Headless Bot

A feature-rich, yet lightweight Haxball bot. Runs entirely in the browser console — no server, install, or Node setup required. Saves you from the chores of manually moderating a Haxball room.

## Table of contents

- [Features](#features)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Configuration](#configuration)
  - [Room name](#room-name)
  - [Max players](#max-players)
  - [Admin passwords](#admin-passwords)
  - [Trusted admin list](#trusted-admin-list)
  - [Stadium data](#stadium-data)
- [Commands](#commands)

## Features

- Automatically mutes spammers
- Blacklist players by auth, IP address, or nickname
- A wide range of chat commands, including a hidden admin mode
- Command prefix is `.` (`!` also works)

## Requirements

- A Chromium-based browser (Chrome, Edge, Brave, etc.)
- Nothing else — the bot is a single script pasted into the browser console, no installation needed

## Quick start

1. Go to [haxball.com/headless](https://www.haxball.com/headless) and open the browser console (<kbd>F12</kbd>, or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>)
2. Copy-paste the bot code into the console and press <kbd>Enter</kbd>
3. Open the room URL in a new tab (<kbd>Ctrl</kbd> + click it) to join the game
4. Type `.help` in chat, or see the [Chat Commands wiki](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands) for the full list

> **Tip:** keep the console tab open — closing it, or letting the browser put the tab to sleep, stops the room.

## Configuration

It's recommended to edit the following before running the bot for the first time. All of these live near the top of the script.

### Room name

Find the room name string and replace it with your own:

```javascript
// before
'4v4 Qatar/BFF Futsal | SYD'

// after
'Your room name here'
```

### Max players

Find `maxPlayers` and set your player cap. Note this value may appear as a hex literal (e.g. `0xe` is `14` in decimal):

```javascript
// before
'maxPlayers': 0xe

// after
'maxPlayers': 12
```

### Admin passwords

Set your own admin passwords near the top of the script:

```javascript
// before
'adminpw1'

// after
'Your new password'
```

Each password maps to an admin level. Each level is an **array**, so you can set multiple passwords per level.

| Level | Can do |
|---|---|
| L1 | Stop / start games |
| L2 | Kick / ban |
| L3 | Mute / blacklist |
| L4 | Change security settings — reserve this for the room owner |

> ⚠️ Do **not** share your L4 password unless you trust that person completely — it can change who else has admin access.

**Notes for admins:**
- Get admin rights by typing `.admin yourPassword123` in chat — this grants *hidden* admin (no yellow name, no visible cursor)
- To become a visible admin instead, type `.toggle_admin` (alias: `.ta`)
- Passwords are case-sensitive; spaces are the only disallowed character
- Set another player's admin level with `.setadminlevel [playerName] [level]` (alias: `.sal`)

### Trusted admin list

Save trusted admins by their auth codes so they don't need a password:

```javascript
[
  { "L": 4, "d": "description for admin 1", "a": "auth1" },
  { "L": 3, "d": "description for admin 2", "a": "auth2" }
]
```

`L` is admin level, `d` is a free-text description, `a` is the player's auth code.

### Stadium data

To load custom maps via chat commands, point this at your own hosted JSON:

```javascript
mapsUrl: "https://example.com/my_maps.json"
```

That file should be a JSON array where each entry describes one map:

```javascript
[
  { "name": "Futsal", "t": [4, 4], "hbs": { "name": "..." } },
  { "name": "LongBounce", "m": "X = Brake", "hbs": { "name": "..." } },
  { "name": "etc", "m": "", "hbs": { "name": "..." } }
]
```

- `hbs` — the map's `.hbs` file contents. Minifying them first (e.g. with a [JSON minifier](https://jsonformatter.org/json-minify)) keeps the file small.
- `m` — sets the room's MOTD when that map loads
- `t` — sets team caps, e.g. `[4, 4]` for 4v4
- The last entry in the array must **not** have a trailing comma

You can reload a different stadium file at any time with `.fetch stadiums [url]` — omit the URL to re-fetch the same file (watch out for browser caching).

## Commands

Full command reference: [Chat Commands wiki](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands)

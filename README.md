# Haxball Headless Bot
A feature-rich, yet lightweight Haxball bot. 

Saves you from many chores of manually moderating a Haxball room.


# Main Features
- Chat spam detection and prevention
- Blacklisting players based on IP address or nickname
- A lot of handy chat commands and hidden admin mode
- Command prefix is `.`


# Quick Start
- Go to [https://www.haxball.com/headless](https://www.haxball.com/headless) and open the browser console (shortcut: <kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>)
- Copy-paste the bot code (`bot_tr.js` (Türkçe) or `bot_en.js` (English)) and press <kbd>Enter</kbd>
- Done! Open the room URL on a new tab (<kbd>Ctrl</kbd> + <kbd>LeftClick</kbd>) and enjoy the game!
- See [Chat commands wiki](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands) for the list of available commands


# Customizing
Some basic config is heavily recommended, others are optional. [Notepad++](https://notepad-plus-plus.org/) can be useful for editing code.
## Important Configuration
### Room name
You should edit the room name in the first line of code, to have something like this:
```javascript
roomName:"👽 My Room Name"
```

### Admin password
You should edit this part in Line 2:
```javascript
adminPass:"aDmInPw#*123"
```
* Notes for admins:
  * When you join the room, you can get admin rights by typing `.admin aDmInPw#*123` in chat
  * You can become a hidden admin by typing `.admin aDmInPw#*123 hidden`. Your name will not be highlighted in yellow but you will still be able to use admin commands. It is useful to detect naughty players etc.
  * Password is case-sensitive and cannot have spaces

### Stadium data
If you want to load your custom maps with chat commands, edit this part in Line 2:
```javascript
mapsUrl:"https://example.com/my_maps.json"
```
Stadium data should be a valid JSON object where keys are map names and values are `*.hbs` file contents. An example can be found [here](https://api.jsonbin.io/b/60f97503a263d14a2979f185). The object should look like this:
```javascript
{
  "Futsal":{"name":"..."},
  "SpaceBounce":{"name":"..."},
  "etc":{"name":"..."}
}
```
Notice there is no comma at the end of last stadium. It is recommended to minify your hbs files with a JSON minifier.

## Optional Configuration
There are other customizable stuff like chatColor, teamColors etc. They are also in the first lines in case you want to edit them.


# Notes
- This bot is intended to use under admin supervision, which means it is not ideal to setup on a VPS and leave unattended. It doesn't have kick votes, afk detection etc.
- You can still do manual admin stuff (kick players, swap teams, restart game etc.), there is no known problem
- For further information, check out basro's [Headless Host Reference](https://github.com/haxball/haxball-issues/wiki)
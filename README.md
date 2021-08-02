# Haxball Headless Bot
A feature-rich, yet lightweight Haxball bot. 

Saves you from many chores of manually moderating a Haxball room.


# Main Features
- Automatically mutes spammers
- You can blacklist players based on IP address or nickname
- A lot of handy chat commands and hidden admin mode
- Command prefix is `.`


# Quick Start
- Go to [https://www.haxball.com/headless](https://www.haxball.com/headless) and open the browser console (shortcut: <kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>)
- Copy-paste the bot code into the console and press <kbd>Enter</kbd>
- Done! Open the room URL on a new tab (<kbd>Ctrl</kbd> + <kbd>LeftClick</kbd>) to join the game
- Type `.help` in chat or see [Chat commands wiki](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands) for the list of commands


# Customizing
It is recommended to edit a few things before running the bot. These can be found at the very beginning of the code. [Notepad++](https://notepad-plus-plus.org/) can be useful for editing stuff.
## Room name
Type a custom room name like this:
```javascript
roomName:"👽 My Room Name",
```

## Max players
You can also edit the player capacity of the room:
```javascript
maxPlayers:12,
```
However, it is recommended to have a big room capacity. You can reduce it later using the [.game poplimit](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands#game-action) command.

## Admin password
You should edit this part:
```javascript
adminPass:"aDmInPw#*123"
```
* Notes for admins:
  * When you join the room, you can get admin rights by typing `.admin aDmInPw#*123` in chat
  * You can become a hidden admin by typing `.admin aDmInPw#*123 hidden`. Your name will not be highlighted in yellow but you will still be able to use admin commands. It is useful to detect naughty players etc.
  * Password is case-sensitive and cannot have spaces

## Stadium data
If you want to load your custom maps with chat commands, edit this part:
```javascript
mapsUrl:"https://example.com/my_maps.json"
```
Stadium data should be a valid JSON object where keys are map names and values are `*.hbs` file contents. An example can be found [here](https://api.jsonbin.io/b/60f97503a263d14a2979f185). The object should look like this:
```javascript
{
  "Futsal":{"name":"..."},
  "LongBounce":{"name":"..."},
  "etc":{"name":"..."}
}
```
Notice there is no comma at the end of last stadium. It is recommended to minify your hbs files with a JSON minifier.

Alternatively (not recommended), you can add stadium data to the very end of the code like this:
```javascript
room.onRoomLink=()=>{
  Bot.data.maps={
    "Futsal":{"name":"..."},
    "LongBounce":{"name":"..."},
    "etc":{"name":"..."}
  }
}
```
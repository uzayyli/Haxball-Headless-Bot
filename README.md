# Haxball Headless Bot

**NOTE**: version 7 is still under testing and it may contain bugs, [version 6](https://github.com/uzayyli/Haxball-Headless-Bot/tree/master/old/version6_stable) is pretty much tested and has no known bugs.

A feature-rich, yet lightweight Haxball bot. 

Saves you from many chores of manually moderating a Haxball room.


# Main Features
- Automatically mutes spammers
- Can blacklist players based on auth, IP address or nickname
- A lot of handy chat commands and hidden admin mode
- Command prefix is `.` (`!` also works)


# Quick Start
- Go to [https://www.haxball.com/headless](https://www.haxball.com/headless) and open the browser console (shortcut: <kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>)
- Copy-paste the bot code into the console and press <kbd>Enter</kbd>
- Done! Open the room URL on a new tab (<kbd>Ctrl</kbd> + <kbd>LeftClick</kbd>) to join the game
- Type `.help` in chat or see [Chat commands wiki](https://github.com/uzayyli/Haxball-Headless-Bot/wiki/Chat-Commands) for the list of commands


# Customizing
It is recommended to edit a few things before running the bot. [Notepad++](https://notepad-plus-plus.org/) can be useful for editing stuff.
## Room name
In the beginning of the code, type a custom room name like this:
```javascript
roomName:"👽 My Room Name",
```

## Max players
You can also edit the player capacity of the room:
```javascript
maxPlayers:12,
```

## Admin passwords
You should edit admin passwords near the beginning of the file:
```javascript
"adminpw1", "adminpw4" // etc
```
Each password is for a different admin level. L1 admins can only stop / start the games etc. L2 can kick / ban, L3 can mute / blacklist people, so be careful who you share this password with. L4 admin can change security settings so it should be reserved for the room owner. Do NOT give out your L4 admin password unless you 101% trust someone!

Notice that each level is an array so it can have multiple passwords.

* Notes for admins:
  * When you join the room, you can get admin rights by typing `.admin aDmInPw#*123 h` in chat. This will make you a hidden admin, (no yellow name, no mouse)
  * If you want to be a visible admin, omit the final `h` character, such as `.admin aDmInPw#*123`
  * Password is case-sensitive and cannot have spaces! Space is the only character that is not allowed
  * You can set another player's admin level with `.setadminlevel [playerName] [level] [visible]`. You can use `.sal` command alias too.

## Trusted admin list
You can save trusted admins by their auth codes and intended admin levels so they don't need to supply a password. An example JSON file should look like this:
```javascript
[
  {"L" : 4, "d" : "description for admin 1", "a": "auth1"},
  {"L" : 3, "d" : "description for admin 2", "a": "auth2"},
]
```

## Stadium data
If you want to load your custom maps with chat commands, edit this part:
```javascript
mapsUrl:"https://example.com/my_maps.json"
```
Stadium data should be a valid JSON object where keys are map names and values are `*.hbs` file contents. The object should look like this:
```javascript
[
  {"name": "Futsal", "t":[4,4], "hbs" : {"name":"..."}},
  {"name": "LongBounce", "m" : "X = Brake", "hbs" : {"name":"..."}},
  {"name":"etc", "m" : "", "hbs" : {"name":"..."}}
]
```
Notice there is no comma at the end of last stadium. `"m"` values change the MOTD of the room when loaded. `"t"` sets team caps such as 4v4. It is recommended to minify your .hbs files with a JSON minifier, such as [this one](https://jsonformatter.org/json-minify).

You can parse a different JSON file using this command: `.map refetch [url]` (no need to supply a URL if you are updating the same file. Beware of caching, though)

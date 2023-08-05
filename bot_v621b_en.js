(()=>{const room=HBInit({roomName:"👽 My Haxball Room",public:!0,maxPlayers:12,noPlayer:!0}),po=(room.setTeamColors(1,60,16777215,[16748922,9720903,5188902]),room.setTeamColors(2,60,16777215,[8038911,4678292,2503759]),room.setTeamsLock(!0),room.setScoreLimit(3),room.setTimeLimit(5),room.setDefaultStadium("Hockey"),room.startGame(),{}),pa=[],data={t:{l:["admin1","admin2","admin3","admin4"],o:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Headless-Bot/main/example_admins.json",data:{}},i:[],u:[],bl_name:[],bl_namepart:[],bl_auth:[],bl_conn:[],p:!1,password:null,h:!1},v:{g:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Headless-Bot/main/example_maps.json",data:{}},$:null,_:null,M:"",P:{commands:"help",sec:"security",sal:"setadminlevel",gm:"gamemode"}},k:{A:[4,4],N:1,S:0,T:!1,F:{id:0,team:0}}},util={q:e=>{let a=Math,t;var r=a.floor,l=a.random;for(a=e.length-1;0<a;a--)t=r(l()*(a+1)),[e[a],e[t]]=[e[t],e[a]]},H:(e,a=9999,t=0)=>{let r=parseFloat(e);return isNaN(r)||r<t?r=t:r>a&&(r=a),r},say:e=>{room.sendAnnouncement(e+"",null,9633550)},pm:(e,a,t)=>{room.sendAnnouncement("💬 "+(t?"(PM from "+t.name+") ":"")+e,a,10151397),t&&room.sendAnnouncement("💬 (PM to "+po[a].name+") "+e,t.id,10151397)},O:(e,a=1)=>{e="(⭐"+a+") "+e;var t=pa,r=room.sendAnnouncement;let l,o;for(l=t.length-1;0<=l;l--)(o=t[l]).C>=a&&r(e,o.id,16768768)},Y:(e=null,a)=>{if(null===e||e.length<1)return null;if("#"===e[0])return po[parseInt(e.substring(1))];a=a||pa,e=e.toLocaleLowerCase();let t,r,l,o=null;for(t=a.length-1;0<=t;t--){if(r=a[t],(l=r.name.toLocaleLowerCase())===e)return r;l.includes(e)&&(o=r)}return o},mute:(e,a,t,r=null,l=!0)=>{e.log.j=0<t?a+6e4*t:0,l&&util.say(`🔕 ${e.name} `+(0<t?`muted for ${t} minutes`:"unmuted")+(r?` (${r})`:""))},B:(e,a)=>{e=e.help;if(e){const t=util.pm;e.forEach(e=>t(e,a))}},k:{I:t=>{try{var a=data.k;if(!a.N)return!1;const i=[[],[],[]];pa.forEach(e=>{var a=e.team;if(a<3){if(e.id===t.id)return!1;i[a].push(e)}});var r=a.A[0]-i[1].length,l=a.A[1]-i[2].length;if(r<=0&&l<=0)return!1;let e;if(r==l)if(a.T){if(!i[0].length)return!1;var o=i[0][0];a.F.id===o.id?(e=a.F.team,a.F.id=0):e=1+Math.floor(2*Math.random()),o.team=e,room.setPlayerTeam(o.id,e),e=3-e}else{var n=room.getScores();e=!n||0===(e=n.red-n.blue)?1+Math.floor(2*Math.random()):e<0?1:2}else e=r<l?2:1;return t.team=e,room.setPlayerTeam(t.id,e),!0}catch(e){console.log("err_addPlayer:"),console.log(e)}},K:t=>{try{var e=data.k,a=e.N,r=t.team;if(a&&0!==r&&3!==r){const d=[[],[],[]];pa.forEach(e=>{var a=e.team;a<3&&e.id!==t.id&&d[a].push(e)});var l=e.A[0]-d[1].length-(e.A[1]-d[2].length);if(0!=l){var o,n,i,s,m=Math.abs(l);if(1===m)d[0].length?((n=(o=d[0])[Math.floor(Math.random()*o.length)]).team=r,room.setPlayerTeam(n.id,r),e.F.id=0):e.T&&((s=(i=d[3-r])[Math.floor(Math.random()*i.length)]).team=0,room.setPlayerTeam(s.id,0),e.F.id=s.id,e.F.team=3-r);else{let e,a=Math.floor(m/2);var u=d[3-r];for(util.q(u);a--;)(e=u.pop()).team=r,room.setPlayerTeam(e.id,r)}}}}catch(e){console.log("err_removePlayer:"),console.log(e)}},D:(e,a=!0)=>{try{e=e||pa.filter(e=>0===e.team);const s=data.k,t=[[],[],[]];pa.forEach(e=>{var a=e.team;a<3&&t[a].push(e)}),a&&util.q(e);var l=[s.A[0]-t[1].length,s.A[1]-t[2].length],o=e.slice(0,Math.min(l[0]+l[1],t[0].length));let r=o.length;if(r){var n=room.setPlayerTeam,i=Math.sign;let e=l[0]-l[1],a=e<0?2:1,t;for(;r;)if((t=o[--r]).team=a,n(t.id,a),0===(e+=i(a-1.5))){if(1===r&&s.T)break;a=1+Math.floor(2*Math.random())}else a=0<e?1:2}}catch(e){console.log("err_addMultiplePlayers:"),console.log(e)}},J:e=>{try{var t=data.k;if(room.stopGame(),scores.red>scores.blue?room.sendAnnouncement(`🏆 Red won ${scores.red} - ${scores.blue}!`,null,15035990):room.sendAnnouncement(`🏆 Blue won ${scores.blue} - ${scores.red}!`,null,5671397),!t.N)return setTimeout(room.startGame,3e3);const n=[[],[],[]],i=e.red>e.blue?1:2;if(pa.forEach(e=>{var a=e.team;a<3&&n[a].push(e)}),1===t.N){var r=n[i];const s=3-i,m=room.setPlayerTeam;var l=n[s];if(l.forEach(e=>{e.team=0,m(e.id,0)}),0===t.S){util.q(r),r.slice(0,Math.ceil(r.length/2)).forEach(e=>{e.team=s,m(e.id,s)});var o=t.A[0]+t.A[1]-r.length;let a=n[0];if(a.length<o)util.q(l),a.push(...l.slice(0,o-a.length));else if(a.length>o){const u=po,d=room.getPlayerList().filter(e=>0===e.team);a=[],d.forEach(e=>{e=u[e.id];0===e.team&&a.push(e)}),a=a.slice(0,o)}util.k.D(a)}else{const c=po,f=room.getPlayerList().filter(e=>0===e.team);currentSpecs=[],f.forEach(e=>{e=c[e.id];0===e.team&&currentSpecs.push(e)}),currentSpecs.push(...l);var a=t.A[0]+t.A[1]-r.length;currentSpecs=currentSpecs.slice(0,a),util.k.D(currentSpecs)}}setTimeout(room.startGame,3e3)}catch(e){console.log("err_endGame:"),console.log(e)}}}},commands={eval:{f:(p,args)=>{eval(args.join(" "))},G:4,cd:5,R:!0,help:null},version:{f:(e,a)=>{util.pm("v6.2.1.b",e.id)},G:0,cd:5,R:!1,help:null},help:{f:(a,e)=>{const t=commands,r=util;e.length?(e=e[0],(e=t[e]||t[data.v.P[e]]).G>a.C?r.pm("You are not authorized to use this command!",a.id):r.B(e,a.id)):(r.pm("Commands: "+Object.keys(t).filter(e=>{e=t[e];return e.G<=a.C&&!e.R}).join(", "),a.id),r.pm("For detailed info: .help [commandName]",a.id))},G:0,cd:10,R:!1,help:null},say:{f:(e,a)=>{util.say("💬 "+e.name+": "+a.join(" "))},G:1,cd:5,R:!1,help:null},pm:{f:(e,a)=>{var t=util.Y(a[0]);if(!t)return"noPlayer";util.pm(a.slice(1).join(" "),t.id,e)},G:5,cd:5,R:!1,help:null},admin:{f:(a,t)=>{const r=data.t.l,l=t[0],o=util.pm;if("list"===l)return a.C<1?"notAllowed":(o("admin list :",a.id),void pa.filter(e=>0<e.C&&e.C<=a.C).map(e=>`(#${e.id}) ${e.name} (L${e.C})`).forEach(e=>{o(e,a.id)}));if("trusted"===l){const u=data.t.o;if(a.C<3)return"notAllowed";var e=t[1];if("list"===e){var n,i,s=u.data;o("trusted admins list:",a.id);for([n,i]of Object.entries(s))i.L<=a.C&&o(n.substr(0,6)+"...: "+i.d+" (L"+i.L+")",a.id)}else if("fetch"===e){if(a.C<4)return"notAllowed";let e=u.url;t[2]&&(u.url=e=t[2]),fetch(e).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){u.data=e,util.O("admin list updated",4)}).catch(e=>{console.log("no trusted admin list: "+e)})}}else{var m=!!t[1];let e;for(e=0;e<r.length;e++)if(l===r[e])return a.C=e+1,room.setPlayerAdmin(a.id,!m),a.log.W=0,util.O(a.name+` ${m?"-hidden- ":""}admin level `+(e+1),e+1);o("Wrong password",a.id)}},G:0,cd:10,R:!1,help:[".admin [password] [hidden = false]",".admin list",".admin trusted list",".admin trusted refetch"]},setadminlevel:{f:(e,a)=>{if(a.length<1)return"wrong";var t=util,r=t.Y(a[0]);if(!r)return"noPlayer";var l=!!a[2];let o=a.length<2?Math.max(r.C,1):t.H(a[1]);if(r.C<4&&4<=o&&(o=3),!(e.id===r.id&&4<=r.C)&&(o>e.C||o<r.C&&r.C>e.C))return"notAllowed";r.C=o,room.setPlayerAdmin(r.id,0<o&&!l),util.O(`${r.name} ${l?"-hidden- ":""}admin level ${o} (${e.name})`,o)},G:2,cd:10,R:!1,help:[".sal [player] [level = 1] [hidden = false]"]},mute:{f:(a,e)=>{if(e.length<2)return"wrong";var t,r,l=e[0];if("all"!==l)return(l=util.Y(l))?l.C>=a.C?"notAllowed":(r=(t=util).H(e[1],10),void t.mute(l,Date.now(),r,a.name,!0)):"noPlayer";{const o=util,n=Date.now(),i=o.mute,s=a.name,m=o.H(e[1],10);pa.filter(e=>e.C<a.C).forEach(e=>{i(e,n,m,s,!1)}),o.say(`🔕 everyone ${0<m?`muted for ${m} minutes`:"unmuted"} (${a.name})`)}},G:3,cd:5,R:!1,help:[".mute [player / all] [minutes]"]},afk:{f:(e,a)=>{var t=a[0];return"list"===t?util.pm("AFKs: "+pa.filter(e=>3===e.team).map(e=>e.name).join(", "),e.id):(a=a.length&&1<e.C?util.Y(t):e)?(room.setPlayerTeam(a.id,0),void(3===a.team?(util.k.I(a)||(a.team=0),util.say(a.name+" is back."+(e.id!==a.id?" ("+e.name+")":""))):(util.k.K(a),a.team=3,util.say(a.name+" AFK."+(e.id!==a.id?" ("+e.name+")":"")),a.id!==e.id&&room.sendAnnouncement("⚠️ "+a.name+", you have been marked as AFK. Please use .afk command to return to the game.",a.id,10151397,"bold",2)))):"noPlayer"},G:0,cd:30,R:!1,help:[".afk: toggles your AFK status",".afk [player]: toggles another player's AFK status (admin only)"]},spec:{f:(e,a)=>{a=a.length&&1<e.C?util.Y(a[0]):e;if(!a)return"noPlayer";util.k.K(a),a.team=0,room.setPlayerTeam(a.id,0),util.say(a.name+" moved to spectators"+(a.id!==e.id?" ("+e.name+")":""))},G:0,cd:10,R:!1,help:[".spec: puts you in spectators",".spec [player]: puts player in spectators (admin only)"]},gamemode:{f:(r,l)=>{var o=data.k;if(!l.length)return util.pm(`game mode: ${o.A[0]}v${o.A[1]} ${0===o.N?"manual":1===o.N?"auto":"captain"} ${0===o.S?"random":"WinnerStays"} (${o.T?"equal teams":"everyone plays"})`,r.id);var n=l[0];if("manual"===n)o.N=0;else{var i=n.split("v"),s=i.filter(e=>0<e.length);let e,a;switch(s.length){case 0:return"wrong";case 1:if(e=a=parseInt(s[0]),isNaN(e))return"wrong";break;case 2:if(e=parseInt(i[0]),isNaN(e))return"wrong";if(a=parseInt(i[1]),isNaN(a))return"wrong"}e=Math.max(0,e),a=Math.max(0,a);var n=o.A,m=[n[0],n[1]],n=(n[0]=e,n[1]=a,e>=m[0]&&a>=m[1]?util.k.D():commands.mix.f(r),l[1]);"captain"===n&&util.pm("Captain mode not implemented yet",r.id),o.N=1;let t=l[2];t&&("ys"===(t=t.toLowerCase())||"ws"===t)?o.S=1:o.S=0;m=l[3];o.T="equal"===m}util.say(`⚙️ (${r.name}) game mode: ${o.A[0]}v${o.A[1]} ${0===o.N?"manual":1===o.N?"auto":"captain"} ${0===o.S?"random":"WinnerStays"} (${o.T?"equal teams":"everyone plays"})`)},G:2,cd:5,R:!1,help:[".gm [RvB / manual] [addMode = auto / captain] [mixMode = rand / YS] [equalTeams = FFA / equal] examples:",".gm manual",".gm 4v4",".gm 4v4 auto rand FFA",".gm 4v4 auto YS equal"]},maps:{f:(e,a)=>{const t=data.v.g;let r=t.url;if(3<e.C&&a.length){if("fetch"===a[0]){if(a[1]&&a[1].length)t.url=r=a[1];else if(!r||!r.length)return util.pm("no JSON URL",e.id);fetch(t.url).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){t.data=e}).catch(e=>{console.log("no custom stadiums: "+e)}),util.O(e.name+" fetched maps",4)}}else util.pm(Object.keys(t.data).join(", "),e.id)},G:1,cd:10,R:!1,help:[".maps: lists stadiums",".maps fetch or maps fetch [newUrl]: fetches map from JSON file (admin lvl. 3 only)"]},load:{f:(e,a)=>{if(!a.length)return"wrong";var t=data.v.g.data,r=a[0].toLowerCase(),l=Object.keys(t);let o,n,i=null;for(o=l.length-1;0<=o;o--){if((n=l[o].toLowerCase())===r){i=l[o];break}n.includes(r)&&(i=l[o])}if(!i)return util.pm("No such stadium",e.id);a=t[i];let s=a.hbs;"string"!=typeof s&&(s=a.hbs=JSON.stringify(s)),room.stopGame(),room.setCustomStadium(s),s=data.v.M=a.m&&a.m.length?a.m:null,util.say(`🏑 ${e.name} loaded `+i),s&&util.say("ℹ️ "+s),room.startGame()},G:1,cd:10,R:!1,help:[".load [stadiumName]"]},motd:{f:(e,a)=>{var t,r=data.v;!!a.length?(t=a[0]).length&&"null"!==t&&"clear"!==t?(util.O(e.name+" set welcome message",2),util.say("ℹ️ "+(r.M=a.join(" ")))):(util.O(e.name+" cleared welcome message",2),r.M=null):!r.M||r.M.length<1?util.pm("welcome message is null",e.id):util.say("ℹ️ "+r.M)},G:2,cd:5,help:[".motd: prints welcome message",".motd [msg]: sets new welcome message"]},avatar:{f:(e,a)=>{if(a.length<2)return"wrong";let t=a[0];if("all"===t)t=pa;else{var r=util.Y(t);if(!r)return"noPlayer";t=[r]}let l=a[1];"clear"===l?l=null:"default"===l&&(l="🎃");let o;for(o=t.length-1;0<=o;o--)room.setPlayerAvatar(t[o].id,l);1===t.length?util.O(l?`${e.name} set ${t[0].name}'s avatar to `+l:`${e.name} cleared ${t[0].name}'s avatar`,2):util.O(l?e.name+" set all avatars to "+l:e.name+" cleared all avatars",2)},G:2,cd:10,R:!1,help:[".avatar [player]/all default/clear/[newAvatar]"]},mix:{f:(e,a)=>{data.k.F.id=0,pa.forEach(e=>{e.team<3&&0<e.team&&(e.team=0)}),util.k.D(),util.say(e.name+" mixed the teams")},G:1,cd:5,R:!1,help:null},remix:{f:(e,a)=>{room.stopGame(),commands.mix.f(e),room.startGame()},G:1,cd:5,R:!1,help:null},restart:{f:(e,a)=>{room.stopGame(),room.startGame(),util.say(e.name+" restarted the game")},G:1,cd:5,R:!1,help:null},bb:{f:(e,a)=>{room.kickPlayer(e.id,"See you soon!",!1)},G:0,cd:5,R:!1,help:null},kick:{f:(e,a)=>{var t;return a.length?(t=util.Y(a[0]))?t.C>e.C||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!1):"noPlayer":"wrong"},G:2,cd:5,R:!1,help:[".kick [player] [reason]"]},ban:{f:(e,a)=>{var t;return a.length?(t=util.Y(a[0]))?t.C>e.C||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!0):"noPlayer":"wrong"},G:2,cd:5,R:!1,help:[".ban [player] [reason]"]},clearban:{f:(e,a)=>{if(a.length<1)return"wrong";var t=data.t.u,r=room.clearBan;let l,o=0;if("all"===a[0])for(l=t.length-1;0<=l;l--)r(t[l].id),t.splice(l,1),o++;else{var n=a[0],i=a[1];if(-1===["id","name"].indexOf(n))return"wrong";for(l=t.length-1;0<=l;l--)t[l][n].toString()===i&&(r(t[l].id),t.splice(l,1),o++)}o&&util.O(`${o} ban(s) cleared (${e.name})`,3)},G:3,cd:10,R:!1,help:[".clearban all",".clearban id 123",".clearban name abc"]},security:{f:(a,e)=>{if(!e.length)return"wrong";var t,r=data.t,l=util.O,o=e[0];let n,i;switch(o){case"recentbans":n=r.u;break;case"recentplayers":if(a.C<4)return"notAllowed";n=r.i;break;case"captcha":return e.length<2?"wrong":(i=-1!==["on","1","true"].indexOf(e[1]),room.setRequireRecaptcha(i),l(`Captcha is ${i?"on":"off"} (${a.name})`,3));case"multilogin":return e.length<2?"wrong":a.C<4?"notAllowed":(i=-1!==["on","1","true"].indexOf(e[1]),l(`allowMultiLogin (from new tabs) is ${(r.h=i)?"on":"off"} (${a.name})`,3));case"password":return e.length<2?"wrong":(t=e[1],t=-1!==["off","null","clear",""].indexOf(t)?null:"random"===t?Math.floor(1e11*Math.random()).toString(16):t,room.setPassword(t),l(a.name+" "+(t?"set room password: "+t:"cleared room password"),3));default:return"wrong"}let s,m;1<e.length&&(s=e[1]),2<e.length&&(m=e[2]),i=s&&m?n.filter(e=>e[s]===m):n.slice(-(s||5)),"recentplayers"===o?i=i.map(e=>`(#${e.id}) ${e.name} @${e.conn} | `+e.auth):"recentbans"===o&&(i=i.map(e=>`(#${e.id}) ${e.name} | by: ${e.V} | reason: `+(e.reason||"null"))),m=util.pm,i.forEach(e=>{m(e,a.id)})},G:3,cd:10,R:!1,help:[".sec [recentbans/recentplayers] [maxNum / key] [value]",".sec captcha/password/multilogin [on/off/value]"]},blacklist:{f:(e,a)=>{var t=a[0],r=data.t;if(-1===["name","namepart","auth","conn"].indexOf(t))return"wrong";let l=a[1];if(!l)return util.pm("bl_"+t+": "+JSON.stringify(r["bl_"+t]),e.id);"clear"===l?(r["bl_"+t]=[],util.O(`cleared ${"bl_"+t} (${e.name})`,3)):("namepart"===t&&(l=l.toLocaleLowerCase()),r["bl_"+t].push(l),util.O(`added '${l}' to ${"bl_"+t} (${e.name})`))},G:3,cd:5,R:!1,help:[".blacklist name/namepart/auth/conn [query]/clear"]}};room.onGamePause=e=>{e&&(data.v._=setTimeout(()=>{room.pauseGame(!1)},3e4))},room.onGameUnpause=e=>{e&&clearTimeout(data.v._)},room.onGameStart=()=>{clearTimeout(data.v.$),clearTimeout(data.v._)},room.onGameStop=e=>{e&&(clearTimeout(data.v.$),clearTimeout(data.v._))},room.onTeamVictory=e=>{data.v.$=setTimeout(()=>{util.k.J(e)},3e3)},room.onStadiumChange=(e,a)=>{a&&(data.v.M=null)},room.onPlayerTeamChange=(e,a)=>{var t;if(a)return 3===(t=po[e.id]).team&&0<e.team?(room.setPlayerTeam(e.id,0),util.pm(e.name+" AFK!",a.id)):void(t.team=e.team)},room.onPlayerAdminChange=(e,a)=>{try{if(a){var t=po[e.id],r=po[a.id];if(!e.admin&&t.C>r.C)return util.O(a.name+" is not authorized to demote "+e.name,r.C),room.setPlayerAdmin(e.id,!0);t.C=e.admin?Math.max(1,t.C):0,util.O(`${e.name} ${t.C<1?"demoted":"admin level "+t.C} (${a.name})`,r.C)}}catch(e){console.log("err_onAdminChange:"),console.log(e)}},room.onPlayerKicked=(a,e,t,r)=>{r=r||{id:0,name:"bot"},t&&((l=data.t.u).push({id:a.id,name:a.name,reason:e,U:r.id,V:r.name}),30<l.length)&&l.splice(0,1);var l,e=po[r.id];e&&e.C<2&&(t&&(room.clearBan(a.id),data.t.u=data.t.u.filter(e=>e.id!==a.id),util.say(a.name+"'s ban is lifted")),room.kickPlayer(e.id,"You are not authorized to kick players",!1))},room.onPlayerJoin=e=>{try{const u=e.id,d=e.name,c=e.auth,f=e.conn;{var l,o=d.toLocaleLowerCase();let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].name.toLocaleLowerCase()===o)return room.kickPlayer(u,"A player with this name already exists.",!1);let t=!1,r=data.t;if(!r.h)for(e=a.length-1;0<=e;e--)if((l=a[e].log).auth===c||l.conn===f)return room.kickPlayer(u,"Multiple login ("+a[e].name+")",!1);for(a=r.bl_name,e=a.length-1;0<=e;e--)if(a[e]===d){t=!0;break}if(!t)for(a=r.bl_namepart,e=a.length-1;0<=e;e--)if(o.includes(a[e])){t=!0;break}if(!t)for(a=r.bl_auth,e=a.length-1;0<=e;e--)if(a[e]===c){t=!0;break}if(!t)for(a=r.bl_conn,e=a.length-1;0<=e;e--)if(a[e]===f){t=!0;break}if(t)return room.kickPlayer(u,"blacklist",!0)}var a,t=Date.now(),r={id:u,name:d,team:0,C:0,log:{j:-(t+1e4),X:0,Z:0,W:t+5e3,auth:c,conn:f}},n=(po[u]=r,pa.push(r),data.t.i),i=n.find(e=>e.conn===f||e.auth===c),s=(i&&(0<i.j&&(r.log.j=i.j),i.W>r.log.W&&(r.log.W=i.W),i.name!==d)&&util.O(d+" previous name: "+i.name,1),n.push({id:u,name:d,auth:c,conn:f,j:r.log.j,W:r.log.W}),30<n.length&&n.splice(0,1),data.v.M),m=(s&&s.length&&util.pm("ℹ️ "+s,u),util.k.I(r),data.t.o.data[c]);if(m)return a=m.L,r.C=a,r.log.W=0,r.log.j=0,util.O(r.name+" trusted admin level "+a,a)}catch(e){console.log("err_onPlayerJoin:"),console.log(e)}},room.onPlayerLeave=e=>{try{const l=e.id,o=po[l];if(o){delete po[l];{let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].id===l){a.splice(e,1);break}}var a=data.t.i,t=a.find(e=>e.id===l),r=o.log;t?(t.j=r.j,t.W=r.W):(a.push({id:l,name:o.name,auth:r.auth,conn:r.conn,j:r.j,W:r.W}),30<a.length&&a.splice(0,1)),util.k.K(o)}}catch(e){console.log("err_onPlayerLeave:"),console.log(e)}},room.onPlayerChat=(t,r)=>{var l=(t=po[t.id]).log,o=Date.now();if(t.C<1){let e,a=l.j;if(a<0&&(-a<o?l.j=0:15<r.length&&(a=l.j=-a)),a>o)return util.pm("You cannot chat now.",t.id),!1;if(5e3<(e=o-l.X))l.Z=0;else if(e<1100&&1<++l.Z)return l.Z=0,util.mute(t,o,1,"spam"),!1;l.X=o}var e,a,n,i,s,m,u=r[0];if(("."===u||"!"===u)&&2<r.length&&"."!==r[1])try{return util.O(t.name+": "+r,5),l.W>=o?util.pm("Please wait before using commands again",t.id):(a=(e=r.substring(1).split(" "))[0].toLowerCase(),(n=commands[a]||commands[data.v.P[a]])?n.G>t.C?util.pm("You are not authorized to use this command",t.id):(t.C<4&&(l.W=o+1e3*(n.cd||5)),(i=n.f(t,e.slice(1)))&&(s=util.pm,m=t.id,"wrong"===i?(s("Wrong number of arguments. Correct use:",m),util.B(n,m)):"noPlayer"===i?s("No such player. Please enter part of player name or their ID such as #123",m):"notAllowed"===i&&s("You are not authorized for this action",m))):util.pm("No such command: "+a,t.id)),!1}catch(e){return util.O(t.name+", ["+e.name+"] "+e.message+" @"+e.lineNumber+": "+r,t.C),!1}},commands.maps.f({name:"bot",C:4},["fetch"]),commands.admin.f({name:"bot",C:4},["trusted","fetch"])})();
(()=>{const room=HBInit({roomName:"👽 My Haxball Room",public:!0,maxPlayers:12,noPlayer:!0}),po=(room.setTeamColors(1,60,16777215,[16748922,9720903,5188902]),room.setTeamColors(2,60,16777215,[8038911,4678292,2503759]),room.setTeamsLock(!0),room.setScoreLimit(3),room.setTimeLimit(5),room.setDefaultStadium("Hockey"),room.startGame(),{}),pa=[],data={t:{l:["atmin1","atmin2","atmin3","atmin4"],o:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Headless-Bot/main/example_admins.json",data:{}},i:[],u:[],bl_name:[],bl_namepart:[],bl_auth:[],bl_conn:[],p:!1,password:null,h:!1},v:{k:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Headless-Bot/main/example_maps.json",data:{}},g:null,$:null,_:"",M:{komutlar:"help","yardım":"help",sec:"security",sal:"setadminlevel",gm:"gamemode"}},P:{A:[4,4],T:1,N:0,S:!1,F:{id:0,team:0}}},util={B:e=>{let a=Math,t;var l=a.floor,r=a.random;for(a=e.length-1;0<a;a--)t=l(r()*(a+1)),[e[a],e[t]]=[e[t],e[a]]},O:(e,a=9999,t=0)=>{let l=parseFloat(e);return isNaN(l)||l<t?l=t:l>a&&(l=a),l},say:e=>{room.sendAnnouncement(e+"",null,9633550)},pm:(e,a,t)=>{room.sendAnnouncement("💬 "+(t?"(PM from "+t.name+") ":"")+e,a,10151397),t&&room.sendAnnouncement("💬 (PM to "+po[a].name+") "+e,t.id,10151397)},H:(e,a=1)=>{e="(⭐"+a+") "+e;var t=pa,l=room.sendAnnouncement;let r,o;for(r=t.length-1;0<=r;r--)(o=t[r]).K>=a&&l(e,o.id,16768768)},q:(e=null,a)=>{if(null===e||e.length<1)return null;if("#"===e[0])return po[parseInt(e.substring(1))];a=a||pa,e=e.toLocaleLowerCase();let t,l,r,o=null;for(t=a.length-1;0<=t;t--){if(l=a[t],(r=l.name.toLocaleLowerCase())===e)return l;r.includes(e)&&(o=l)}return o},mute:(e,a,t,l=null,r=!0)=>{e.log.D=0<t?a+6e4*t:0,r&&util.say(`🔕 ${e.name} `+(0<t?t+" dakika susturuldu":"artık konuşabilir")+(l?` (${l})`:""))},j:(e,a)=>{e=e.help;if(e){const t=util.pm;e.forEach(e=>t(e,a))}},P:{I:t=>{try{var a=data.P;if(!a.T)return!1;const i=[[],[],[]];pa.forEach(e=>{var a=e.team;if(a<3){if(e.id===t.id)return!1;i[a].push(e)}});var l=a.A[0]-i[1].length,r=a.A[1]-i[2].length;if(l<=0&&r<=0)return!1;let e;if(l==r)if(a.S){if(!i[0].length)return!1;var o=i[0][0];a.F.id===o.id?(e=a.F.team,a.F.id=0):e=1+Math.floor(2*Math.random()),o.team=e,room.setPlayerTeam(o.id,e),e=3-e}else{var n=room.getScores();e=!n||0===(e=n.red-n.blue)?1+Math.floor(2*Math.random()):e<0?1:2}else e=l<r?2:1;return t.team=e,room.setPlayerTeam(t.id,e),!0}catch(e){console.log("err_addPlayer:"),console.log(e)}},Y:t=>{try{var e=data.P,a=e.T,l=t.team;if(a&&0!==l&&3!==l){const s=[[],[],[]];pa.forEach(e=>{var a=e.team;a<3&&e.id!==t.id&&s[a].push(e)});var r=e.A[0]-s[1].length-(e.A[1]-s[2].length);if(0!=r){var o,n,i,u,m=Math.abs(r);if(1===m)s[0].length?((n=(o=s[0])[Math.floor(Math.random()*o.length)]).team=l,room.setPlayerTeam(n.id,l),e.F.id=0):e.S&&((u=(i=s[3-l])[Math.floor(Math.random()*i.length)]).team=0,room.setPlayerTeam(u.id,0),e.F.id=u.id,e.F.team=3-l);else{let e,a=Math.floor(m/2);var d=s[3-l];for(util.B(d);a--;)(e=d.pop()).team=l,room.setPlayerTeam(e.id,l)}}}}catch(e){console.log("err_removePlayer:"),console.log(e)}},C:(e,a=!0)=>{try{e=e||pa.filter(e=>0===e.team);const u=data.P,t=[[],[],[]];pa.forEach(e=>{var a=e.team;a<3&&t[a].push(e)}),a&&util.B(e);var r=[u.A[0]-t[1].length,u.A[1]-t[2].length],o=e.slice(0,Math.min(r[0]+r[1],t[0].length));let l=o.length;if(l){var n=room.setPlayerTeam,i=Math.sign;let e=r[0]-r[1],a=e<0?2:1,t;for(;l;)if((t=o[--l]).team=a,n(t.id,a),0===(e+=i(a-1.5))){if(1===l&&u.S)break;a=1+Math.floor(2*Math.random())}else a=0<e?1:2}}catch(e){console.log("err_addMultiplePlayers:"),console.log(e)}},J:e=>{try{var t=data.P;if(room.stopGame(),e.red>e.blue?room.sendAnnouncement(`🏆 Kırmızı ${e.red} - ${e.blue} kazandı!`,null,15035990):room.sendAnnouncement(`🏆 Mavi ${e.blue} - ${e.red} kazandı!`,null,5671397),!t.T)return setTimeout(room.startGame,3e3);const n=[[],[],[]],i=e.red>e.blue?1:2;if(pa.forEach(e=>{var a=e.team;a<3&&n[a].push(e)}),1===t.T){var l=n[i];const u=3-i,m=room.setPlayerTeam;var r=n[u];if(r.forEach(e=>{e.team=0,m(e.id,0)}),0===t.N){util.B(l),l.slice(0,Math.ceil(l.length/2)).forEach(e=>{e.team=u,m(e.id,u)});var o=t.A[0]+t.A[1]-l.length;let a=n[0];if(a.length<o)util.B(r),a.push(...r.slice(0,o-a.length));else if(a.length>o){const d=po,s=room.getPlayerList().filter(e=>0===e.team);a=[],s.forEach(e=>{e=d[e.id];0===e.team&&a.push(e)}),a=a.slice(0,o)}util.P.C(a)}else{const c=po,f=room.getPlayerList().filter(e=>0===e.team);currentSpecs=[],f.forEach(e=>{e=c[e.id];0===e.team&&currentSpecs.push(e)}),currentSpecs.push(...r);var a=t.A[0]+t.A[1]-l.length;currentSpecs=currentSpecs.slice(0,a),util.P.C(currentSpecs)}}setTimeout(room.startGame,3e3)}catch(e){console.log("err_endGame:"),console.log(e)}}}},commands={eval:{f:(p,args)=>{eval(args.join(" "))},G:4,cd:5,R:!0,help:null},version:{f:(e,a)=>{util.pm("v6.2.1.b",e.id)},G:0,cd:5,R:!1,help:null},help:{f:(a,e)=>{const t=commands,l=util;e.length?(e=e[0],(e=t[e]||t[data.v.M[e]]).G>a.K?l.pm("Bu komutu kullanma yetkiniz yok",a.id):l.j(e,a.id)):(l.pm("Komutlar: "+Object.keys(t).filter(e=>{e=t[e];return e.G<=a.K&&!e.R}).join(", "),a.id),l.pm("Detaylı bilgi için: .help [komutAdı]",a.id))},G:0,cd:10,R:!1,help:null},say:{f:(e,a)=>{util.say("💬 "+e.name+": "+a.join(" "))},G:1,cd:5,R:!1,help:null},pm:{f:(e,a)=>{var t=util.q(a[0]);if(!t)return"noPlayer";util.pm(a.slice(1).join(" "),t.id,e)},G:5,cd:5,R:!1,help:null},admin:{f:(a,t)=>{const l=data.t.l,r=t[0],o=util.pm;if("list"===r)return a.K<1?"notAllowed":(o("admin listesi :",a.id),void pa.filter(e=>0<e.K&&e.K<=a.K).map(e=>`(#${e.id}) ${e.name} (L${e.K})`).forEach(e=>{o(e,a.id)}));if("trusted"===r){const d=data.t.o;if(a.K<3)return"notAllowed";var e=t[1];if("list"===e){var n,i,u=d.data;o("trusted admins list:",a.id);for([n,i]of Object.entries(u))i.L<=a.K&&o(n.substr(0,6)+"...: "+i.d+" (L"+i.L+")",a.id)}else if("fetch"===e){if(a.K<4)return"notAllowed";let e=d.url;t[2]&&(d.url=e=t[2]),fetch(e).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){d.data=e,util.H("admin list updated",4)}).catch(e=>{console.log("no trusted admin list: "+e)})}}else{var m=!!t[1];let e;for(e=0;e<l.length;e++)if(r===l[e])return a.K=e+1,room.setPlayerAdmin(a.id,!m),a.log.U=0,util.H(a.name+` ${m?"-gizli- ":""}admin level `+(e+1),e+1);o("Hatalı şifre",a.id)}},G:0,cd:10,R:!1,help:[".admin [password] [hidden = false]",".admin list",".admin trusted list",".admin trusted refetch"]},setadminlevel:{f:(e,a)=>{if(a.length<1)return"wrong";var t=util,l=t.q(a[0]);if(!l)return"noPlayer";var r=!!a[2];let o=a.length<2?Math.max(l.K,1):t.O(a[1]);if(l.K<4&&4<=o&&(o=3),!(e.id===l.id&&4<=l.K)&&(o>e.K||o<l.K&&l.K>e.K))return"notAllowed";l.K=o,room.setPlayerAdmin(l.id,0<o&&!r),util.H(`${l.name} ${r?"-gizli- ":""}admin level ${o} (${e.name})`,o)},G:2,cd:10,R:!1,help:[".sal [player] [level = 1] [hidden = false]"]},mute:{f:(a,e)=>{if(e.length<2)return"wrong";var t,l,r=e[0];if("all"!==r)return(r=util.q(r))?r.K>=a.K?"notAllowed":(l=(t=util).O(e[1],10),void t.mute(r,Date.now(),l,a.name,!0)):"noPlayer";{const o=util,n=Date.now(),i=o.mute,u=a.name,m=o.O(e[1],10);pa.filter(e=>e.K<a.K).forEach(e=>{i(e,n,m,u,!1)}),o.say(`🔕 herkes ${0<m?m+" dakika susturuldu":"konuşabilir"} (${a.name})`)}},G:3,cd:5,R:!1,help:[".mute [player / all] [minutes]"]},afk:{f:(e,a)=>{var t=a[0];return"list"===t?util.pm("AFKs: "+pa.filter(e=>3===e.team).map(e=>e.name).join(", "),e.id):(a=a.length&&1<e.K?util.q(t):e)?(room.setPlayerTeam(a.id,0),void(3===a.team?(util.P.I(a)||(a.team=0),util.say(a.name+" oyuna geri döndü."+(e.id!==a.id?" ("+e.name+")":""))):(util.P.Y(a),a.team=3,util.say(a.name+" AFK."+(e.id!==a.id?" ("+e.name+")":"")),a.id!==e.id&&room.sendAnnouncement("⚠️ "+a.name+", AFK olduğunuz tespit edildi. Lütfen oyuna geri dönmek için .afk komutunu kullanın.",a.id,10151397,"bold",2)))):"noPlayer"},G:0,cd:30,R:!1,help:[".afk: toggles your AFK status",".afk [player]: toggles another player's AFK status (admin only)"]},spec:{f:(e,a)=>{a=a.length&&1<e.K?util.q(a[0]):e;if(!a)return"noPlayer";util.P.Y(a),a.team=0,room.setPlayerTeam(a.id,0),util.say(a.name+" speclendi"+(a.id!==e.id?" ("+e.name+")":""))},G:0,cd:10,R:!1,help:[".spec: puts you in spectators",".spec [player]: puts player in spectators (admin only)"]},gamemode:{f:(l,r)=>{var o=data.P;if(!r.length)return util.pm(`oyun modu: ${o.A[0]}v${o.A[1]} ${0===o.T?"manual":1===o.T?"auto":"captain"} ${0===o.N?"random":"YS"} (${o.S?"eşit takımlar":"herkes oyunda"})`,l.id);var n=r[0];if("manual"===n)o.T=0;else{var i=n.split("v"),u=i.filter(e=>0<e.length);let e,a;switch(u.length){case 0:return"wrong";case 1:if(e=a=parseInt(u[0]),isNaN(e))return"wrong";break;case 2:if(e=parseInt(i[0]),isNaN(e))return"wrong";if(a=parseInt(i[1]),isNaN(a))return"wrong"}e=Math.max(0,e),a=Math.max(0,a);var n=o.A,m=[n[0],n[1]],n=(n[0]=e,n[1]=a,e>=m[0]&&a>=m[1]?util.P.C():commands.mix.f(l),r[1]);"captain"===n&&util.pm("Captain mode not implemented yet",l.id),o.T=1;let t=r[2];t&&("ys"===(t=t.toLowerCase())||"ws"===t)?o.N=1:o.N=0;m=r[3];o.S="equal"===m}util.say(`⚙️ (${l.name}) oyun modu: ${o.A[0]}v${o.A[1]} ${0===o.T?"manual":1===o.T?"auto":"captain"} ${0===o.N?"random":"YS"} (${o.S?"eşit takımlar":"herkes oyunda"})`)},G:2,cd:5,R:!1,help:[".gm [RvB / manual] [addMode = auto / captain] [mixMode = rand / YS] [equalTeams = FFA / equal] examples:",".gm manual",".gm 4v4",".gm 4v4 auto rand FFA",".gm 4v4 auto YS equal"]},maps:{f:(e,a)=>{const t=data.v.k;let l=t.url;if(3<e.K&&a.length){if("fetch"===a[0]){if(a[1]&&a[1].length)t.url=l=a[1];else if(!l||!l.length)return util.pm("no JSON URL",e.id);fetch(t.url).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){t.data=e}).catch(e=>{console.log("no custom stadiums: "+e)}),util.H(e.name+" mapları fetchledi",4)}}else util.pm(Object.keys(t.data).join(", "),e.id)},G:1,cd:10,R:!1,help:[".maps: lists stadiums",".maps fetch or maps fetch [newUrl]: fetches map from JSON file (admin lvl. 3 only)"]},load:{f:(e,a)=>{if(!a.length)return"wrong";var t=data.v.k.data,l=a[0].toLowerCase(),r=Object.keys(t);let o,n,i=null;for(o=r.length-1;0<=o;o--){if((n=r[o].toLowerCase())===l){i=r[o];break}n.includes(l)&&(i=r[o])}if(!i)return util.pm("Böyle bir map yok",e.id);a=t[i];let u=a.hbs;"string"!=typeof u&&(u=a.hbs=JSON.stringify(u)),room.stopGame(),room.setCustomStadium(u),u=data.v._=a.m&&a.m.length?a.m:null,util.say(`🏑 ${e.name} loaded `+i),u&&util.say("ℹ️ "+u),room.startGame()},G:1,cd:10,R:!1,help:[".load [stadiumName]"]},motd:{f:(e,a)=>{var t,l=data.v;!!a.length?(t=a[0]).length&&"null"!==t&&"clear"!==t?(util.H(e.name+" set welcome message",2),util.say("ℹ️ "+(l._=a.join(" ")))):(util.H(e.name+" cleared welcome message",2),l._=null):!l._||l._.length<1?util.pm("welcome message is null",e.id):util.say("ℹ️ "+l._)},G:2,cd:5,help:[".motd: prints welcome message",".motd [msg]: sets new welcome message"]},avatar:{f:(e,a)=>{if(a.length<2)return"wrong";let t=a[0];if("all"===t)t=pa;else{var l=util.q(t);if(!l)return"noPlayer";t=[l]}let r=a[1];"clear"===r?r=null:"default"===r&&(r="🎃");let o;for(o=t.length-1;0<=o;o--)room.setPlayerAvatar(t[o].id,r);1===t.length?util.H(r?`${e.name} set ${t[0].name}'s avatar to `+r:`${e.name} cleared ${t[0].name}'s avatar`,2):util.H(r?e.name+" set all avatars to "+r:e.name+" cleared all avatars",2)},G:2,cd:10,R:!1,help:[".avatar [player]/all default/clear/[newAvatar]"]},mix:{f:(e,a)=>{data.P.F.id=0,pa.forEach(e=>{e.team<3&&0<e.team&&(e.team=0)}),util.P.C(),util.say(e.name+" takımları kardı")},G:1,cd:5,R:!1,help:null},remix:{f:(e,a)=>{room.stopGame(),commands.mix.f(e),room.startGame()},G:1,cd:5,R:!1,help:null},restart:{f:(e,a)=>{room.stopGame(),room.startGame(),util.say(e.name+" oyunu yeniden başlattı")},G:1,cd:5,R:!1,help:null},bb:{f:(e,a)=>{room.kickPlayer(e.id,"Yine bekleriz!",!1)},G:0,cd:5,R:!1,help:null},kick:{f:(e,a)=>{var t;return a.length?(t=util.q(a[0]))?t.K>e.K||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!1):"noPlayer":"wrong"},G:2,cd:5,R:!1,help:[".kick [player] [reason]"]},ban:{f:(e,a)=>{var t;return a.length?(t=util.q(a[0]))?t.K>e.K||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!0):"noPlayer":"wrong"},G:2,cd:5,R:!1,help:[".ban [player] [reason]"]},clearban:{f:(e,a)=>{if(a.length<1)return"wrong";var t=data.t.u,l=room.clearBan;let r,o=0;if("all"===a[0])for(r=t.length-1;0<=r;r--)l(t[r].id),t.splice(r,1),o++;else{var n=a[0],i=a[1];if(-1===["id","name"].indexOf(n))return"wrong";for(r=t.length-1;0<=r;r--)t[r][n].toString()===i&&(l(t[r].id),t.splice(r,1),o++)}o&&util.H(`${o} ban temizlendi (${e.name})`,3)},G:3,cd:10,R:!1,help:[".clearban all",".clearban id 123",".clearban name abc"]},security:{f:(a,e)=>{if(!e.length)return"wrong";var t,l=data.t,r=util.H,o=e[0];let n,i;switch(o){case"recentbans":n=l.u;break;case"recentplayers":if(a.K<4)return"notAllowed";n=l.i;break;case"captcha":return e.length<2?"wrong":(i=-1!==["on","1","true"].indexOf(e[1]),room.setRequireRecaptcha(i),r(`Captcha is ${i?"on":"off"} (${a.name})`,3));case"multilogin":return e.length<2?"wrong":a.K<4?"notAllowed":(i=-1!==["on","1","true"].indexOf(e[1]),r(`allowMultiLogin (from new tabs) is ${(l.h=i)?"on":"off"} (${a.name})`,3));case"password":return e.length<2?"wrong":(t=e[1],t=-1!==["off","null","clear",""].indexOf(t)?null:"random"===t?Math.floor(1e11*Math.random()).toString(16):t,room.setPassword(t),r(a.name+" "+(t?"set room password: "+t:"cleared room password"),3));default:return"wrong"}let u,m;1<e.length&&(u=e[1]),2<e.length&&(m=e[2]),i=u&&m?n.filter(e=>e[u]===m):n.slice(-(u||5)),"recentplayers"===o?i=i.map(e=>`(#${e.id}) ${e.name} @${e.conn} | `+e.auth):"recentbans"===o&&(i=i.map(e=>`(#${e.id}) ${e.name} | by: ${e.V} | reason: `+(e.reason||"null"))),m=util.pm,i.forEach(e=>{m(e,a.id)})},G:3,cd:10,R:!1,help:[".sec [recentbans/recentplayers] [maxNum / key] [value]",".sec captcha/password/multilogin [on/off/value]"]},blacklist:{f:(e,a)=>{var t=a[0],l=data.t;if(-1===["name","namepart","auth","conn"].indexOf(t))return"wrong";let r=a[1];if(!r)return util.pm("bl_"+t+": "+JSON.stringify(l["bl_"+t]),e.id);"clear"===r?(l["bl_"+t]=[],util.H(`cleared ${"bl_"+t} (${e.name})`,3)):("namepart"===t&&(r=r.toLocaleLowerCase()),l["bl_"+t].push(r),util.H(`added '${r}' to ${"bl_"+t} (${e.name})`))},G:3,cd:5,R:!1,help:[".blacklist name/namepart/auth/conn [query]/clear"]}};room.onGamePause=e=>{e&&(data.v.$=setTimeout(()=>{room.pauseGame(!1)},3e4))},room.onGameUnpause=e=>{e&&clearTimeout(data.v.$)},room.onGameStart=()=>{clearTimeout(data.v.g),clearTimeout(data.v.$)},room.onGameStop=e=>{e&&(clearTimeout(data.v.g),clearTimeout(data.v.$))},room.onTeamVictory=e=>{data.v.g=setTimeout(()=>{util.P.J(e)},3e3)},room.onStadiumChange=(e,a)=>{a&&(data.v._=null)},room.onPlayerTeamChange=(e,a)=>{var t;if(a)return 3===(t=po[e.id]).team&&0<e.team?(room.setPlayerTeam(e.id,0),util.pm(e.name+" AFK!",a.id)):void(t.team=e.team)},room.onPlayerAdminChange=(e,a)=>{try{if(a){var t=po[e.id],l=po[a.id];if(!e.admin&&t.K>l.K)return util.H(a.name+" is not authorized to demote "+e.name,l.K),room.setPlayerAdmin(e.id,!0);t.K=e.admin?Math.max(1,t.K):0,util.H(`${e.name} ${t.K<1?"adminliği alındı":"admin level "+t.K} (${a.name})`,l.K)}}catch(e){console.log("err_onAdminChange:"),console.log(e)}},room.onPlayerKicked=(a,e,t,l)=>{l=l||{id:0,name:"bot"},t&&((r=data.t.u).push({id:a.id,name:a.name,reason:e,V:l.id,W:l.name}),30<r.length)&&r.splice(0,1);var r,e=po[l.id];e&&e.K<2&&(t&&(room.clearBan(a.id),data.t.u=data.t.u.filter(e=>e.id!==a.id),util.say(a.name+" ban kaldırıldı")),room.kickPlayer(e.id,"Oyuncu kickleme yetkiniz yok",!1))},room.onPlayerJoin=e=>{try{const d=e.id,s=e.name,c=e.auth,f=e.conn;{var r,o=s.toLocaleLowerCase();let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].name.toLocaleLowerCase()===o)return room.kickPlayer(d,"Odada aynı adlı bir oyuncu var.",!1);let t=!1,l=data.t;if(!l.h)for(e=a.length-1;0<=e;e--)if((r=a[e].log).auth===c||r.conn===f)return room.kickPlayer(d,"Çoklu giriş ("+a[e].name+")",!1);for(a=l.bl_name,e=a.length-1;0<=e;e--)if(a[e]===s){t=!0;break}if(!t)for(a=l.bl_namepart,e=a.length-1;0<=e;e--)if(o.includes(a[e])){t=!0;break}if(!t)for(a=l.bl_auth,e=a.length-1;0<=e;e--)if(a[e]===c){t=!0;break}if(!t)for(a=l.bl_conn,e=a.length-1;0<=e;e--)if(a[e]===f){t=!0;break}if(t)return room.kickPlayer(d,"blacklist",!0)}var a,t=Date.now(),l={id:d,name:s,team:0,K:0,log:{D:-(t+1e4),X:0,Z:0,U:t+5e3,auth:c,conn:f}},n=(po[d]=l,pa.push(l),data.t.i),i=n.find(e=>e.conn===f||e.auth===c),u=(i&&(0<i.D&&(l.log.D=i.D),i.U>l.log.U&&(l.log.U=i.U),i.name!==s)&&util.H(s+" önceki adı: "+i.name,1),n.push({id:d,name:s,auth:c,conn:f,D:l.log.D,U:l.log.U}),30<n.length&&n.splice(0,1),data.v._),m=(u&&u.length&&util.pm("ℹ️ "+u,d),util.P.I(l),data.t.o.data[c]);if(m)return a=m.L,l.K=a,l.log.U=0,l.log.D=0,util.H(l.name+" kayıtlı admin level "+a,a)}catch(e){console.log("err_onPlayerJoin:"),console.log(e)}},room.onPlayerLeave=e=>{try{const r=e.id,o=po[r];if(o){delete po[r];{let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].id===r){a.splice(e,1);break}}var a=data.t.i,t=a.find(e=>e.id===r),l=o.log;t?(t.D=l.D,t.U=l.U):(a.push({id:r,name:o.name,auth:l.auth,conn:l.conn,D:l.D,U:l.U}),30<a.length&&a.splice(0,1)),util.P.Y(o)}}catch(e){console.log("err_onPlayerLeave:"),console.log(e)}},room.onPlayerChat=(t,l)=>{var r=(t=po[t.id]).log,o=Date.now();if(t.K<1){let e,a=r.D;if(a<0&&(-a<o?r.D=0:15<l.length&&(a=r.D=-a)),a>o)return util.pm("Şu anda yazı yazamazsınız.",t.id),!1;if(5e3<(e=o-r.X))r.Z=0;else if(e<1100&&1<++r.Z)return r.Z=0,util.mute(t,o,1,"spam"),!1;r.X=o}var e,a,n,i,u,m,d=l[0];if(("."===d||"!"===d)&&2<l.length&&"."!==l[1])try{return util.H(t.name+": "+l,5),r.U>=o?util.pm("Lütfen komutları tekrar kullanmak için biraz bekleyin",t.id):(a=(e=l.substring(1).split(" "))[0].toLowerCase(),(n=commands[a]||commands[data.v.M[a]])?n.G>t.K?util.pm("Bu komutu kullanmak için yetkiniz yok",t.id):(t.K<4&&(r.U=o+1e3*(n.cd||5)),(i=n.f(t,e.slice(1)))&&(u=util.pm,m=t.id,"wrong"===i?(u("Yanlış argüman sayısı. Doğru kullanım:",m),util.j(n,m)):"noPlayer"===i?u("Böyle bir oyuncu yok. Lütfen oyuncu adının bir kısmını ya da ID'sini #123 şeklinde girin",m):"notAllowed"===i&&u("Bu eylem için yetkiniz yok",m))):util.pm("Böyle bir komut yok: "+a,t.id)),!1}catch(e){return util.H(t.name+", ["+e.name+"] "+e.message+" @"+e.lineNumber+": "+l,t.K),!1}},commands.maps.f({name:"bot",K:4},["fetch"]),commands.admin.f({name:"bot",K:4},["trusted","fetch"])})();
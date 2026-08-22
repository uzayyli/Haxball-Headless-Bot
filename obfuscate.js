// obfuscate.js — run after esbuild.build() finishes
const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

const bundled = fs.readFileSync('dist/bot.browser.prod.js', 'utf8');

const result = JavaScriptObfuscator.obfuscate(bundled, {
    compact: true,
    identifierNamesGenerator: 'mangled',

    controlFlowFlattening: false,   // <-- the real perf cost, off
    deadCodeInjection: false,       // <-- pure waste, off

    stringArray: true,
    stringArrayThreshold: 0.75,
    stringArrayEncoding: [],        // skip base64 — decode cost is nonzero, plain array lookup is fastest
    stringArrayRotate: false,
    stringArrayShuffle: false,
    stringArrayCallsTransform: false,

    renameGlobals: false,
    renameProperties: false,
    selfDefending: false,
    target: 'browser',
});

fs.writeFileSync('bot.js', result.getObfuscatedCode());
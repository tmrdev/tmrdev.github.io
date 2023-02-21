# Ergo Pay Generator

## Introduction

dApp to ease Ergo and SigUSD payment integration using dApp connector.
Written in javascript with bootstrap v4.

Files generated from this code are moved from /dist to link below:
    - It can be tried at https://tmrdev.github.io/ergo-pay-portal-static/index.html

## Installation

> git clone https://github.com/tmrdev/add-link-to.git<br/>
> cd ergo-pay/ergo-payment-portal <br/>
> npm install <br/>
> npm start <br/>
<br/>

http://localhost:8080

npm start will launch a server at port 8080 locally for testing and a static version can be created after testing is done
    - looking into github gh-pages for running this code and a voucher monitor in node

## Build static page

This allows to deploy a static webpage for example in apache.

> npm run buildstatic

<br/>The static website is generated in the ./dist folder

<br/>In the generated bootstrap.js remove two rows to avoid error loading the wasm (for me at line 270):
```javascript
    /******/                                } else if(typeof WebAssembly.instantiateStreaming === 'function') {
    /******/                                        promise = WebAssembly.instantiateStreaming(req, importObject);
```

## Disable the fee

Uncomment the proper section in index.js
```javascript
const MIN_ERG_FEE = 0.001;
const MIN_FEE_SIGUSD = 0.01;
const FEE_PERCENT = 0.001; // 0.1%
//const MIN_ERG_FEE = 0;
//const MIN_FEE_SIGUSD = 0;
//const FEE_PERCENT = 0;
```
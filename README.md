# tmrdev.github.io
A basic foundation for accepting Ergo donations from a website.

Ergo Hackathon Project Overview

Build A Base Framework For Accepting Donations Through ERGO Smart Contracts

Who Can Use The Software
    - live streamers and anyone online through a web browser
    - allow viewers of a live stream or website to send donations (provide HTML buttons on webpage)
        - look into connecting to the users ERGO wallet in order to facilitate transfer of ERGO
        - Provide transfer of 1,2 or 3 ERGO in drop down menu

ERGO Smart Contracts:
   
   - will need to facilitate donations with ERGO
   - use Browser environment
        - https://docs.ergoplatform.com/dev/stack/browser/
            - will ERGO Pay work:
                - https://docs.ergoplatform.com/dev/wallet/payments/ergopay/ergo-pay/
                Ergo Wallet App 1.6 and above supports ErgoPay, a protocol to interchange transaction data with dApps. Using it, 
                your dApp can prepare a transaction for the user to sign inside his wallet app. The user can accept signing the transaction, or decline it.
            - Ergo Wallet App should work on Mobile and Desktop
                - see if it is possible to link the Browser with Ergo Wallet App


NOTES:

- Ergo Payment Portal Example
    - https://github.com/ThierryM1212/ergo-pay/tree/main/ergo-payment-portal

- look into deploying Node with npm gh-pages install
    - https://javascript.plainenglish.io/deploying-any-app-to-github-pages-1e8e946bf890
    - https://medium.com/@ilyailin7777/how-to-deploy-javascript-app-to-github-pages-4b37b315556f
    - GitHub Actions (stackoverflow)
        - https://stackoverflow.com/questions/15718649/how-to-publish-a-website-made-by-node-js-to-github-pages
        
- map out languages and frameworks used for ERGO smart contracts
- how will the front end be built out?
    - start with a basic Node server with API endpoints if needed
        - not seeing support in docs for creating keys and addresses for ERGO in Javascript?
            - https://docs.ergoplatform.com/dev/stack/basics/
            - Could create Node.js to Python bridge through script calls?
            
- basics for creating a new GitHub repo with website (static website)
    - https://www.codingthesmartway.com/how-to-host-a-website-on-github-for-free/
    
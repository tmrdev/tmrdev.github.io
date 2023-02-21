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
- Building Static Website From Thiery Repo
    - check all references to https://github.com/ThierryM1212 and update with my github references
        - ** finding references to C:\Users\thier\Ergo\ergo-pay\ergo-payment-portal\resources in svg files /dist directory after building static websitem 
    - go through code and find any other link references that need to be updated
    - will need to do an npm install (make sure package lock has been deleted)

    - can test the code by running npm start (after npm install is successful)
        - this will run on localhost but will everything work running on localhost?
            - see if payments can be tested while running on localhost, check references to external links
            - also what domain authorization checks for accepting payments (does something exist for this?)
    
    - will need to execute a command to build the Static Website Version for the ergo payment portal
        - npm run buildstatic
        - follow model in Thiery repo for file placement in my repo?

- Ergo Script Compiler
    - https://github.com/ThierryM1212/ergo-pay/blob/main/ergo-payment-portal/src/ergo-related/compiler.js
        - The compiler references this file : ErgoScriptCompiler-assembly-0.1.jar
            - looking into compiling this for macOS and will try setting correct local path
            - if compiling does not work will look into pre-compiled download of the jar
                - testing installing Scala first on macOS through Homebrew
                    - https://www.scala-lang.org/download/
                      - Scala install through brew was successful and I am able to launch scala and sbt
                        - So I should not need to do a separate install of SBT?
                        - Trying ergoscript compiler as paths have been added to scala, sbt, scala-cli etc...
                - https://github.com/ergoplatform/ergoscript-compiler
                - https://www.scala-sbt.org/1.x/docs/Installing-sbt-on-Mac.html

- Ergo Hackathon - ErgoDocs Home Page:
    - https://docs.ergoplatform.com
        Development Stack:
            - https://docs.ergoplatform.com/dev/start/
            Browser:
                - https://docs.ergoplatform.com/dev/stack/browser/
                Ergo Pay:
                    - https://docs.ergoplatform.com/dev/wallet/payments/ergopay/ergo-pay/
                    
        ErgoScript (Smart Contracts)
            - https://docs.ergoplatform.com/dev/scs/ergoscript/#courses        

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

- For tracking Ergo transactions by Wallet address: https://explorer.ergoplatform.com/transactions/


export async function compileErgoTree(contract, symbols) {
    const exec = require('child_process').exec;
    // compiled jar from separate codebase below
    // see if anything else is needed to get this exec to work - see compiler README
    const childProcess = exec('java -cp /Users/sonicbur/dev/node/ergo-hackathon-donations/thierym1212-ergo-pay-example/ergoscript-source-cli/ergoscript-compiler/target/scala-2.12/ErgoScriptCompiler-assembly-0.1.jar Compile '+contract+' '+symbols, function(err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        console.log(stdout)
        return stdout;
    });
    return childProcess;
}
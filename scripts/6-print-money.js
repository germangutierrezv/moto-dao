import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xb544ED115dbA3767417196Be972138973D87f92C");

(async () => {
    try {
        // What's the max supply you want to set? 1,000,000 is a nice number!
        const amount = 1_000_000;
        // const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        // Interact with your deployed ERC-20 contract and mint the tokens!
        // await token.mint(amountWith18Decimals);
        await token.mintTo("0xAb8689BDf9F5cdE907C46E97309Dc02E6CEB56AB", amount);
        const totalSupply = await token.totalSupply();

        // Print out how many of our token's are out there now!
        console.log("✅ There now is", totalSupply.displayValue, "$MOTO in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x2Fdd078b074aC517F1B918310EC06CdCF2F423Cf");

(async () => {
    try {
      await editionDrop.createBatch([
        {
          name: "Motocross Freestyle",
          description: "This NFT will give you access to MotoDAO!",
          image: readFileSync("scripts/assets/motocross.png"),
        },
      ]);
      console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
      console.error("failed to create the new NFT", error);
    }
  })();

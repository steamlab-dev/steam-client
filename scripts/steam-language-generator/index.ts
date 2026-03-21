/**
 * Fetch Steam Protos
 * Build Steam Language (enums and proto types)
 */

import fs from "node:fs/promises";
import buildSteamLanguage from "./build-language-bundles";
import downloadEResult from "./eresult-downloader";
import formatDirectory from "./format-code";
import buildServiceReqResMapping from "./gen-steam-service-maps";
import generateEMsgProtoMap from "./generate-emsg-proto-maps";
import downloadProtos from "./protos-downloader";
import generateTs from "./typescript-generator";

(async () => {
  await fs.rm("protos", { recursive: true, force: true });
  await fs.rm("src/common/steam-language", { recursive: true, force: true });

  await downloadProtos();
  await downloadEResult();
  await generateTs();
  await buildSteamLanguage();
  await generateEMsgProtoMap();
  buildServiceReqResMapping();

  formatDirectory("src/common/steam-language");

  console.log("\nDone\n");
})();

/**
 * Fetch Steam Protos
 * Build Steam Language (enums and proto types)
 */

import fs from "node:fs/promises";
import generateEMsgProtoMap from "./buildEMsgProtoMap";
import buildServiceReqResMapping from "./buildServiceReqResMapping";
import buildSteamLanguage from "./buildSteamLanguage";
import fetchEresult from "./fetchEResult";
import fetchProtos from "./fetchProtos";
import formatDirectory from "./formatCode";
import generate from "./protoTypesGenerator";

(async () => {
  await fs.rm("protos", { recursive: true, force: true });
  await fs.rm("src/common/steam-language", { recursive: true, force: true });

  await fetchProtos();
  await fetchEresult();
  await generate();
  await buildSteamLanguage();
  await generateEMsgProtoMap();
  buildServiceReqResMapping();

  formatDirectory("src/common/steam-language");

  console.log("\nDone\n");
})();

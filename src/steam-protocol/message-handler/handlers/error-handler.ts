import { EMsg } from "@/common/steam-language";
import { SteamProtocolError } from "@/steam-protocol/error";
import type { MsgHandler, ParsedMessage, SteamMessage } from "../types";

export default class ErrorResponseHandler implements MsgHandler {
  canHandle(message: ParsedMessage): boolean {
    return message.eMsg === EMsg.k_EMsgInvalid;
  }

  handle(message: ParsedMessage): undefined | SteamMessage {
    // stop executing all handlers
    throw new SteamProtocolError(
      `Invalid request made to Steam: ${JSON.stringify(message)}`,
      "handler",
    );
  }
}

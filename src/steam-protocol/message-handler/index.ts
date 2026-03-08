import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type { Connection } from "@/connection/types";
import type HeartBeatManager from "../heartbeat-manager";
import type ProtoManager from "../proto-manager";
import type ProtoMessenger from "../senders/proto-messenger";
import type ServiceCallMessenger from "../senders/service-call-messenger";
import type SessionManager from "../session-manager";
import ErrorResponseHandler from "./handlers/error-handler";
import LogOnResponseHandler from "./handlers/logon-handler";
import NonProtoResponseHandler from "./handlers/non-proto-response-handler";
import ProtoResponseHandler from "./handlers/proto-handler";
import ServiceMethodResponseHandler from "./handlers/service-call-handler";
import MessageHandler from "./message-handler";
import MessageParser from "./parser";
import type { MsgHandler } from "./types";

function MessageHandlerFactory({
  connection,
  emitter,
  protos,
  protoMessenger,
  serviceCallMessenger,
  session,
  heartBeat,
  messageParser = new MessageParser(protos),
}: {
  connection: Connection;
  emitter: TypedEventEmitter<unknown>;
  protos: ProtoManager;
  messageParser?: MessageParser;
  protoMessenger: ProtoMessenger;
  serviceCallMessenger: ServiceCallMessenger;
  session: SessionManager;
  heartBeat: HeartBeatManager;
}): MessageHandler {
  const handlers = createDefaultHandlers(
    protos,
    protoMessenger,
    serviceCallMessenger,
    session,
    heartBeat,
  );

  const messageDispatcher = new MessageHandler(connection, emitter, messageParser);
  messageDispatcher.addHandler(...handlers);
  return messageDispatcher;
}

function createDefaultHandlers(
  protos: ProtoManager,
  protoMessenger: ProtoMessenger,
  serviceCallMessenger: ServiceCallMessenger,
  session: SessionManager,
  heartBeat: HeartBeatManager,
): MsgHandler[] {
  return [
    new ErrorResponseHandler(),
    new ProtoResponseHandler(protos, protoMessenger),
    new ServiceMethodResponseHandler(protos, serviceCallMessenger),
    new NonProtoResponseHandler(),
    new LogOnResponseHandler(session, heartBeat),
  ];
}

export default MessageHandlerFactory;

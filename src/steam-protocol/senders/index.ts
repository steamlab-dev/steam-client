import type Connection from "@/connection/connection";
import type ProtoManager from "../proto-manager";
import type SessionManager from "../session-manager";
import ProtoHeaderBuilder from "./common/proto-header-builder";
import ProtoMessenger from "./proto-messenger";
import ServiceCallMessenger from "./service-call-messenger";

export default function MessengerFactory({
  connection,
  protos,
  session,
  headerBuilder = new ProtoHeaderBuilder(protos, session),
}: {
  connection: Connection;
  protos: ProtoManager;
  session: SessionManager;
  headerBuilder?: ProtoHeaderBuilder;
}) {
  return {
    protoMessenger: new ProtoMessenger(protos, connection, headerBuilder),
    serviceCallMessenger: new ServiceCallMessenger(protos, connection, session, headerBuilder),
  };
}

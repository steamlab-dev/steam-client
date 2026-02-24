import { afterEach, describe, expect, it, vi } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import ConnectorFactory from "@/connection/connectors/factory";
import DataParserFactory from "@/connection/data-parsers/factory";
import type { DataParser } from "@/connection/data-parsers/types";
import DataSenderFactory from "@/connection/data-senders/factory";
import type { DataSender } from "@/connection/data-senders/types";
import type EventManager from "@/connection/event-manager";
import ConnectionFactory from "@/connection/factory";
import ConnectionOptionsValidator from "@/connection/options-validator";
import TransportFactory from "@/connection/protocol-transports/factory";
import type { Transport } from "@/connection/protocol-transports/types";
import ConnectionStateManager from "@/connection/state-manager";
import type { ConnectionContext, ConnectionEvents, ConnectionOptions } from "@/connection/types";

const createMockConnector = (): ConnectionContext["connector"] =>
  ({ connect: vi.fn() }) as unknown as ConnectionContext["connector"];

const createMockTransport = (): Transport => ({ setupTransport: vi.fn() }) as unknown as Transport;

const createMockSender = (): DataSender =>
  ({ attach: vi.fn(), send: vi.fn(), cleanUp: vi.fn() }) as unknown as DataSender;

const createMockParser = (): DataParser =>
  ({ attach: vi.fn(), cleanUp: vi.fn(), getBufferSize: vi.fn(() => 0) }) as unknown as DataParser;

const createMockEventManager = (): EventManager =>
  ({ attachEvents: vi.fn(), cleanUp: vi.fn() }) as unknown as EventManager;

describe("ConnectionFactory", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const options: ConnectionOptions = {
    steamCM: { host: "127.0.0.1", port: 27017 },
    timeout: 5_000,
  };

  it("creates a ws-based connection context with default dependencies", () => {
    const emitter = new TypedEventEmitter<ConnectionEvents>();
    const connector = createMockConnector();
    const transport = createMockTransport();
    const sender = createMockSender();
    const parser = createMockParser();

    const connectorSpy = vi.spyOn(ConnectorFactory, "create").mockReturnValue(connector);
    const transportSpy = vi.spyOn(TransportFactory, "create").mockReturnValue(transport);
    const senderSpy = vi.spyOn(DataSenderFactory, "create").mockReturnValue(sender);
    const parserSpy = vi.spyOn(DataParserFactory, "create").mockReturnValue(parser);

    const context = ConnectionFactory.createConnection(options, { emitter });

    expect(connectorSpy).toHaveBeenCalledWith(options);
    expect(transportSpy).toHaveBeenCalledWith("ws");
    expect(senderSpy).toHaveBeenCalledWith("ws");
    expect(parserSpy).toHaveBeenCalledWith("ws", emitter);

    expect(context.options).toBe(options);
    expect(context.connectionOptionsValidator).toBe(ConnectionOptionsValidator);
    expect(context.stateManager).toBeInstanceOf(ConnectionStateManager);
    expect(context.connector).toBe(connector);
    expect(context.transport).toBe(transport);
    expect(context.sender).toBe(sender);
    expect(context.parser).toBe(parser);
    expect(context.eventManager).toBeDefined();
    expect(context.emitter).toBe(emitter);
  });

  it("uses provided implementations instead of default factories", () => {
    const emitter = new TypedEventEmitter<ConnectionEvents>();
    const connector = createMockConnector();
    const transport = createMockTransport();
    const sender = createMockSender();
    const parser = createMockParser();
    const eventManager = createMockEventManager();
    const stateManager = new ConnectionStateManager();
    const validator = {
      validate: vi.fn(),
    } as unknown as typeof ConnectionOptionsValidator;

    const connectorSpy = vi.spyOn(ConnectorFactory, "create");
    const transportSpy = vi.spyOn(TransportFactory, "create");
    const senderSpy = vi.spyOn(DataSenderFactory, "create");
    const parserSpy = vi.spyOn(DataParserFactory, "create");

    const context = ConnectionFactory.createConnection(options, {
      emitter,
      connector,
      transport,
      sender,
      parser,
      eventManager,
      stateManager,
      connectionOptionsValidator: validator,
    });

    expect(connectorSpy).not.toHaveBeenCalled();
    expect(transportSpy).not.toHaveBeenCalled();
    expect(senderSpy).not.toHaveBeenCalled();
    expect(parserSpy).not.toHaveBeenCalled();

    expect(context.connectionOptionsValidator).toBe(validator);
    expect(context.stateManager).toBe(stateManager);
    expect(context.connector).toBe(connector);
    expect(context.transport).toBe(transport);
    expect(context.sender).toBe(sender);
    expect(context.parser).toBe(parser);
    expect(context.eventManager).toBe(eventManager);
    expect(context.emitter).toBe(emitter);
  });

  it("creates the pipeline with the expected step order", () => {
    const pipeline = ConnectionFactory.createPipeline();
    const steps = (pipeline as unknown as { steps: Array<{ name: string }> }).steps;

    expect(steps.map((step) => step.name)).toEqual([
      "connection-options-validator",
      "connector-step",
      "transport-setup",
      "data-sender",
      "data-parser",
      "event-manager",
    ]);
  });
});

/**
 * Defines the structure for a session, containing the user's SteamID,
 * the client's session ID, and login status.
 */
export interface SteamProtocolSession {
  steamId: bigint;
  clientId: number;
  isLoggedIn: boolean;
}

/**
 * Manages the session state for a Steam connection, including SteamID, clientID,
 * and login status. The SteamID and clientID are designed to be "write-once"
 * per session to ensure stability after they are established.
 */
export default class SessionManager {
  private steamId: bigint = 0n;
  private clientId: number = 0;
  private isLoggedInState: boolean = false;

  /**
   * Retrieves the current user's SteamID for the session.
   */
  public getSteamId(): bigint {
    return this.steamId;
  }

  /**
   * Sets the user's SteamID for the session. This can only be done once
   * per session, when the current SteamID is the default unset value.
   */
  public setSteamId(steamId?: bigint): void {
    if (this.steamId === 0n && steamId !== undefined && steamId !== 0n) {
      this.steamId = steamId;
    }
  }

  /**
   * Retrieves the current client session ID.
   */
  public getClientId(): number {
    return this.clientId;
  }

  /**
   * Sets the client session ID. This can only be done once per session,
   * when the current client ID is the default unset value.
   */
  public setClientId(clientId?: number): void {
    if (this.clientId === 0 && clientId && clientId !== 0) {
      this.clientId = clientId;
    }
  }

  /**
   * Checks if the user is currently logged in.
   */
  public isLoggedIn(): boolean {
    return this.isLoggedInState;
  }

  /**
   * Sets the user's login status.
   */
  public setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedInState = isLoggedIn;
  }

  /**
   * Returns a snapshot of the current session state.
   */
  public getSession(): SteamProtocolSession {
    return {
      steamId: this.steamId,
      clientId: this.clientId,
      isLoggedIn: this.isLoggedInState,
    };
  }

  /**
   * Resets the session state to its initial default values, effectively
   * ending the current session.
   */
  public cleanUp(): void {
    this.steamId = 0n;
    this.clientId = 0;
    this.isLoggedInState = false;
  }
}

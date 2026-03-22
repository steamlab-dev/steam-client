/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const ELobbyStatus = {
  k_ELobbyStatusInvalid: 0,
  k_ELobbyStatusExists: 1,
  k_ELobbyStatusDoesNotExist: 2,
  k_ELobbyStatusNotAMember: 3,
} as const;

export type ELobbyStatus = (typeof ELobbyStatus)[keyof typeof ELobbyStatus];

export interface LobbyMatchmakingLegacy_GetLobbyStatus_Request {
  app_id?: number;
  steamid_lobby?: bigint;
  claim_ownership?: boolean;
  claim_membership?: boolean;
  version_num?: number;
}

export interface LobbyMatchmakingLegacy_GetLobbyStatus_Response {
  app_id?: number;
  steamid_lobby?: bigint;
  lobby_status?: ELobbyStatus;
}

export abstract class LobbyMatchmakingLegacyService {
  abstract GetLobbyStatus(
    request: LobbyMatchmakingLegacy_GetLobbyStatus_Request,
  ): Promise<LobbyMatchmakingLegacy_GetLobbyStatus_Response>;
}

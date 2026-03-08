/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CAudio_PlaySpeakerTestOnChannel_Request {
  channel_num?: number;
}

export interface CAudio_PlaySpeakerTestOnChannel_Response {
  success?: boolean;
}

export abstract class AudioService {
  abstract PlaySpeakerTestOnChannel(
    request: CAudio_PlaySpeakerTestOnChannel_Request,
  ): Promise<CAudio_PlaySpeakerTestOnChannel_Response>;
}

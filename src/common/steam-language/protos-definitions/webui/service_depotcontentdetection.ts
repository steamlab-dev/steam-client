/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CDepotContentDetection_GetAllDetectedAppContent_Request {
  detection_type?: number;
}

export interface CDepotContentDetection_GetAllDetectedAppContent_Response {
  detected_app_content?: DetectedAppContent[];
}

export interface CDepotContentDetection_GetDetectedContentSingleApp_Request {
  appid?: number;
}

export interface CDepotContentDetection_GetDetectedContentSingleApp_Response {
  detected_anticheat?: number;
  detected_gameengine?: number;
}

export interface DetectedAppContent {
  app_id?: number;
  depot_id?: number;
  detected_content?: number;
}

export abstract class DepotContentDetectionService {
  abstract GetAllDetectedAppContent(
    request: CDepotContentDetection_GetAllDetectedAppContent_Request,
  ): Promise<CDepotContentDetection_GetAllDetectedAppContent_Response>;
  abstract GetDetectedContentSingleApp(
    request: CDepotContentDetection_GetDetectedContentSingleApp_Request,
  ): Promise<CDepotContentDetection_GetDetectedContentSingleApp_Response>;
}

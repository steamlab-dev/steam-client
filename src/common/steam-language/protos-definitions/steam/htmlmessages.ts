/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EBrowserFeatureStatus, EBrowserGPUStatus } from "./enums";

export const EJSRegisterMethodType = {
  k_EJSRegisterMethodType_Invalid: 0,
  k_EJSRegisterMethodType_Function: 1,
  k_EJSRegisterMethodType_Callback: 2,
  k_EJSRegisterMethodType_Promise: 3,
} as const;

export type EJSRegisterMethodType =
  (typeof EJSRegisterMethodType)[keyof typeof EJSRegisterMethodType];

export const EAccessibilityContrastMode = {
  k_EBrowserContrastMode_NoPreference: 0,
  k_EBrowserContrastMode_More: 1,
  k_EBrowserContrastMode_Less: 2,
} as const;

export type EAccessibilityContrastMode =
  (typeof EAccessibilityContrastMode)[keyof typeof EAccessibilityContrastMode];

export interface CMsgKeyUp {
  browser_handle?: number;
  keyCode?: number;
  modifiers?: number;
  nativeKeyCode?: number;
}

export interface CMsgKeyDown {
  browser_handle?: number;
  keyCode?: number;
  modifiers?: number;
  is_system_key?: boolean;
  nativeKeyCode?: number;
}

export interface CMsgKeyChar {
  browser_handle?: number;
  unichar?: number;
  modifiers?: number;
  keyCode?: number;
  nativeKeyCode?: number;
}

export interface CMsgMouseDown {
  browser_handle?: number;
  mouse_button?: number;
  modifiers?: number;
}

export interface CMsgMouseUp {
  browser_handle?: number;
  mouse_button?: number;
  modifiers?: number;
  is_off_panel?: boolean;
  x?: number;
  y?: number;
}

export interface CMsgMouseDblClick {
  browser_handle?: number;
  mouse_button?: number;
  modifiers?: number;
}

export interface CMsgMouseWheel {
  browser_handle?: number;
  deltax?: number;
  deltay?: number;
  modifiers?: number;
}

export interface CMsgMouseMove {
  browser_handle?: number;
  x?: number;
  y?: number;
  modifiers?: number;
}

export interface CMsgMouseLeave {
  browser_handle?: number;
}

export interface CMsgBrowserCreate {
  request_id?: number;
  useragent?: string;
  user_css?: string;
  native_dropdowns?: boolean;
  dpi_scaling?: number;
  offscreen?: boolean;
  initial_width?: number;
  initial_height?: number;
  window_icon?: string;
  borderless?: boolean;
  vroverlay_key?: string;
  browser_type?: number;
  initial_top?: number;
  initial_left?: number;
  only_allow_trusted_popups?: boolean;
  initial_url?: string;
  hwnd_parent?: Long;
  creation_flags?: number;
}

export interface CMsgBrowserCreateResponse {
  browser_handle?: number;
  request_id?: number;
}

export interface CMsgBrowserRemove {
  browser_handle?: number;
}

export interface CMsgSetLocalFileRequestMapping {
  browser_handle?: number;
  request_url?: string;
  default_local_path?: string;
  routes?: CMsgSetLocalFileRequestMapping.AdditionalRoute[];
}

export namespace CMsgSetLocalFileRequestMapping {
  export interface AdditionalRoute {
    relative_url?: string;
    local_path?: string;
    allowed_extensions?: string;
    url_rewrite?: boolean;
  }
}

export interface CMsgBrowserErrorStrings {
  browser_handle?: number;
  title?: string;
  header?: string;
  cache_miss?: string;
  bad_url?: string;
  connection_problem?: string;
  proxy_problem?: string;
  unknown?: string;
}

export interface CMsgBrowserSetName {
  browser_handle?: number;
  name?: string;
}

export interface CMsgBrowserSize {
  browser_handle?: number;
  width?: number;
  height?: number;
}

export interface CMsgBrowserSetMinSize {
  browser_handle?: number;
  width?: number;
  height?: number;
}

export interface CMsgBrowserPosition {
  browser_handle?: number;
  x?: number;
  y?: number;
  x_local?: number;
  y_local?: number;
}

export interface CMsgBrowserResized {
  browser_handle?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fullscreen?: boolean;
  dpi_horizontal?: number;
  dpi_vertical?: number;
  display_name?: string;
  display_width?: number;
  display_height?: number;
}

export interface CMsgPostURL {
  browser_handle?: number;
  url?: string;
  post?: string;
  pageserial?: number;
  replace_entry?: boolean;
}

export interface CMsgAddHeader {
  browser_handle?: number;
  key?: string;
  value?: string;
  only_send_to_steam?: boolean;
  send_in_xhr?: boolean;
}

export interface CMsgStopLoad {
  browser_handle?: number;
}

export interface CMsgReload {
  browser_handle?: number;
}

export interface CMsgGoForward {
  browser_handle?: number;
}

export interface CMsgGoBack {
  browser_handle?: number;
}

export interface CMsgWasHidden {
  browser_handle?: number;
  hidden?: boolean;
}

export interface CMsgSetWindowVisibility {
  browser_handle?: number;
  visible?: boolean;
}

export interface CMsgClearHistory {
  browser_handle?: number;
}

export interface CMsgClearAllBrowsingData {
  browser_handle?: number;
}

export interface CMsgCopy {
  browser_handle?: number;
}

export interface CMsgPaste {
  browser_handle?: number;
}

export interface CMsgExecuteJavaScript {
  browser_handle?: number;
  script?: string;
}

export interface CMsgSetFocus {
  browser_handle?: number;
  focus?: boolean;
}

export interface CMsgHorizontalScrollBarSize {
  browser_handle?: number;
}

export interface CMsgHorizontalScrollBarSizeResponse {
  browser_handle?: number;
  scroll_max?: number;
  scroll?: number;
  zoom?: number;
  visible?: boolean;
  page_size?: number;
}

export interface CMsgVerticalScrollBarSize {
  browser_handle?: number;
}

export interface CMsgVerticalScrollBarSizeResponse {
  browser_handle?: number;
  scroll_max?: number;
  scroll?: number;
  zoom?: number;
  visible?: boolean;
  page_size?: number;
}

export interface CMsgFind {
  browser_handle?: number;
  find?: string;
  infind?: boolean;
  reverse?: boolean;
}

export interface CMsgStopFind {
  browser_handle?: number;
}

export interface CMsgSetHorizontalScroll {
  browser_handle?: number;
  scroll?: number;
}

export interface CMsgSetVerticalScroll {
  browser_handle?: number;
  scroll?: number;
}

export interface CMsgSetZoomLevel {
  browser_handle?: number;
  zoom?: number;
}

export interface CMsgViewSource {
  browser_handle?: number;
}

export interface CMsgBrowserReady {
  browser_handle?: number;
  vr_overlay_key?: string;
  hwnd_browser?: Long;
}

export interface CMsgURLChanged {
  browser_handle?: number;
  url?: string;
  postData?: string;
  bIsRedirect?: boolean;
  pagetitle?: string;
  bNewNavigation?: boolean;
}

export interface CHistoryEntry {
  url?: string;
}

export interface CMsgHistoryChanged {
  browser_handle?: number;
  index?: number;
  entries?: CHistoryEntry[];
}

export interface CMsgLoadError {
  browser_handle?: number;
  error_code?: number;
  url?: string;
  error_description?: string;
}

export interface CHTMLHeader {
  key?: string;
  value?: string;
}

export interface CHTMLPageSecurityInfo {
  bIsSecure?: boolean;
  bHasCertError?: boolean;
  issuerName?: string;
  certName?: string;
  certExpiry?: number;
  nCertBits?: number;
  bIsEVCert?: boolean;
}

export interface CMsgFinishedRequest {
  browser_handle?: number;
  url?: string;
  pageTitle?: string;
}

export interface CMsgLoadedRequest {
  browser_handle?: number;
  url?: string;
  pageTitle?: string;
  headers?: CHTMLHeader[];
}

export interface CMsgFavIconURLChanged {
  browser_handle?: number;
  urls?: string[];
}

export interface CMsgCtrlTabPressed {
  browser_handle?: number;
}

export interface CMsgPageSecurity {
  browser_handle?: number;
  url?: string;
  security_info?: CHTMLPageSecurityInfo;
}

export interface CMsgStartRequest {
  browser_handle?: number;
  url?: string;
  target?: string;
  postData?: string;
  bIsRedirect?: boolean;
}

export interface CMsgStartRequestResponse {
  browser_handle?: number;
  bAllow?: boolean;
}

export interface CMsgShowPopup {
  browser_handle?: number;
}

export interface CMsgHidePopup {
  browser_handle?: number;
}

export interface CMsgSizePopup {
  browser_handle?: number;
  x?: number;
  y?: number;
  wide?: number;
  tall?: number;
}

export interface CMsgOpenNewTab {
  browser_handle?: number;
  url?: string;
  bForeground?: boolean;
}

export interface CMsgPopupHTMLWindow {
  browser_handle?: number;
  url?: string;
  x?: number;
  y?: number;
  wide?: number;
  tall?: number;
  popup_index?: number;
  trusted_creator?: boolean;
  name?: string;
  hwnd?: Long;
  parent_popup_index?: number;
  creation_flags?: number;
}

export interface CMsgPopupHTMLWindowResponse {
  browser_handle?: number;
  bAllow?: boolean;
}

export interface CMsgSetHTMLTitle {
  browser_handle?: number;
  title?: string;
}

export interface CMsgLoadingResource {
  browser_handle?: number;
  url?: string;
}

export interface CMsgStatusText {
  browser_handle?: number;
  text?: string;
}

export interface CMsgSetCursor {
  browser_handle?: number;
  cursor?: number;
  custom_data?: Buffer;
  wide?: number;
  tall?: number;
  xhotspot?: number;
  yhotspot?: number;
}

export interface CMsgFileLoadDialog {
  browser_handle?: number;
  owning_browser_handle?: number;
  title?: string;
  initialFile?: string;
  accept_types?: string[];
  is_save?: boolean;
  choose_directory?: boolean;
  filters?: CMsgFileLoadDialog.Filter[];
}

export namespace CMsgFileLoadDialog {
  export interface Filter {
    name?: string;
    patterns?: string[];
    is_default?: boolean;
  }
}

export interface CMsgFileLoadDialogResponse {
  browser_handle?: number;
  owning_browser_handle?: number;
  bsuccess?: boolean;
  files?: string[];
}

export interface CMsgRequestProcessInfo {
  requestid?: Long;
}

export interface CMsgProcessInfoNotification {
  requestid?: Long;
  gpu_status?: EBrowserGPUStatus;
  canvas_2d?: EBrowserFeatureStatus;
  canvas_oop_rasterization?: EBrowserFeatureStatus;
  direct_rendering_display_compositor?: EBrowserFeatureStatus;
  gpu_compositing?: EBrowserFeatureStatus;
  multiple_raster_threads?: EBrowserFeatureStatus;
  opengl?: EBrowserFeatureStatus;
  rasterization?: EBrowserFeatureStatus;
  raw_draw?: EBrowserFeatureStatus;
  skia_graphite?: EBrowserFeatureStatus;
  video_decode?: EBrowserFeatureStatus;
  video_encode?: EBrowserFeatureStatus;
  vulkan?: EBrowserFeatureStatus;
  webgl?: EBrowserFeatureStatus;
  webgl2?: EBrowserFeatureStatus;
  webgpu?: EBrowserFeatureStatus;
  webnn?: EBrowserFeatureStatus;
}

export interface CMsgShowToolTip {
  browser_handle?: number;
  text?: string;
}

export interface CMsgUpdateToolTip {
  browser_handle?: number;
  text?: string;
}

export interface CMsgHideToolTip {
  browser_handle?: number;
}

export interface CMsgSearchResults {
  browser_handle?: number;
  activeMatch?: number;
  results?: number;
}

export interface CMsgClose {
  browser_handle?: number;
}

export interface CMsgSetSharedPaintBuffers {
  browser_handle?: number;
  wide?: number;
  tall?: number;
  source_pid?: Long;
  source_handle?: Long;
  handle?: Long;
}

export interface CMsgAckSharedPaintBuffers {
  browser_handle?: number;
}

export interface CMsgNeedsPaint {
  browser_handle?: number;
  scrollx?: number;
  scrolly?: number;
  pagescale?: number;
  pageserial?: number;
  avg_frame_ms?: number;
  stddev_sum_frame_ms?: number;
  long_frame_ms?: number;
}

export interface CMsgComboNeedsPaint {
  browser_handle?: number;
  rgba?: Long;
  combobox_wide?: number;
  combobox_tall?: number;
  shared_memory_handle?: Long;
  shared_memory_size?: Long;
}

export interface CMsgNeedsSharedTexturePaint {
  browser_handle?: number;
  share_handle?: number;
  width?: number;
  height?: number;
  scrollx?: number;
  scrolly?: number;
  pagescale?: number;
  pageserial?: number;
}

export interface CMsgGetZoom {
  browser_handle?: number;
}

export interface CMsgGetZoomResponse {
  browser_handle?: number;
  zoom?: number;
}

export interface CMsgLinkAtPosition {
  browser_handle?: number;
  x?: number;
  y?: number;
}

export interface CMsgLinkAtPositionResponse {
  browser_handle?: number;
  x?: number;
  y?: number;
  url?: string;
  blivelink?: boolean;
  binput?: boolean;
}

export interface CMsgZoomToElementAtPosition {
  browser_handle?: number;
  x?: number;
  y?: number;
}

export interface CMsgZoomToElementAtPositionResponse {
  browser_handle?: number;
  scale?: number;
  duration?: number;
}

export interface CMsgScalePageToValue {
  browser_handle?: number;
  scale?: number;
  x?: number;
  y?: number;
}

export interface CMsgForcePopupsToDirectHWND {
  browser_handle?: number;
  force_direct_hwnd_popups?: boolean;
}

export interface CMsgScalePageToValueResponse {
  browser_handle?: number;
  zoom?: number;
}

export interface CMsgSavePageToJPEG {
  browser_handle?: number;
  url?: string;
  filename?: string;
  width?: number;
  height?: number;
}

export interface CMsgSavePageToJPEGResponse {
  browser_handle?: number;
  url?: string;
  filename?: string;
}

export interface CMsgJSAlert {
  browser_handle?: number;
  message?: string;
}

export interface CMsgJSConfirm {
  browser_handle?: number;
  message?: string;
}

export interface CMsgJSDialogResponse {
  browser_handle?: number;
  result?: boolean;
}

export interface CMsgCanGoBackAndForward {
  browser_handle?: number;
  bgoback?: boolean;
  bgoforward?: boolean;
}

export interface CMsgOpenSteamURL {
  browser_handle?: number;
  url?: string;
  referrer?: string;
}

export interface CMsgSetCookie {
  key?: string;
  value?: string;
  path?: string;
  host?: string;
  expires?: number;
  secure?: boolean;
  httponly?: boolean;
  samesite?: number;
}

export interface CMsgSetTargetFrameRate {
  browser_handle?: number;
  nTargetFrameRate?: number;
}

export interface CMsgPauseRepaint {
  browser_handle?: number;
}

export interface CMsgFullRepaint {
  browser_handle?: number;
}

export interface CMsgRequestFullScreen {
  browser_handle?: number;
}

export interface CMsgExitFullScreen {
  browser_handle?: number;
}

export interface CMsgToggleFindInPageDialog {
  browser_handle?: number;
}

export interface CMsgSetPIDShuttingDown {
  browser_handle?: number;
}

export interface CMsgDisableBackgroundThrottling {
  browser_handle?: number;
}

export interface CMsgAckPIDShuttingDown {
  browser_handle?: number;
}

export interface CMsgGetCookiesForURL {
  browser_handle?: number;
  url?: string;
}

export interface CCookie {
  name?: string;
  value?: string;
  domain?: string;
  path?: string;
}

export interface CMsgGetCookiesForURLResponse {
  browser_handle?: number;
  url?: string;
  cookies?: CCookie[];
}

export interface CMsgNodeHasFocus {
  browser_handle?: number;
  bInput?: boolean;
  name?: string;
  elementtagname?: string;
  searchbuttontext?: string;
  bHasMultipleInputs?: boolean;
  input_type?: string;
  bIsMainFrame?: boolean;
}

export interface CMsgZoomToFocusedElement {
  browser_handle?: number;
}

export interface CMsgFocusedNodeText {
  browser_handle?: number;
}

export interface CMsgFocusedNodeTextResponse {
  browser_handle?: number;
  value?: string;
}

export interface CMsgBuildID {
  build_id?: Long;
}

export interface CMsgOpenDevTools {
  browser_handle?: number;
}

export interface CMsgCloseDevTools {
  browser_handle?: number;
}

export interface CMsgUnlockH264 {
  browser_handle?: number;
  unlock_code?: string;
}

export interface CMsgScreenInformationChanged {
  browser_handle?: number;
  override_width?: number;
  override_height?: number;
}

export interface CMsgClearAllCookies {
  browser_handle?: number;
}

export interface CMsgScreenDPI {
  browser_handle?: number;
  dpi_scaling?: number;
}

export interface CMsgAckScreenDPI {
  browser_handle?: number;
}

export interface CMsgAuthedSteamDomains {
  domains?: string[];
}

export interface CMsgSteamAuthNeeded {
  filler?: boolean;
}

export interface CMsgSteamAuthCookiesSet {
  success?: boolean;
}

export interface CMsgJSRegisterMethod {
  browser_handle?: number;
  name?: string;
  method_type?: EJSRegisterMethodType;
}

export interface CMsgJSValue {
  bool_value?: boolean;
  int_value?: number;
  uint_value?: number;
  double_value?: number;
  string_value?: string;
  function_handle?: Long;
  bytes_value?: Buffer;
  is_array?: boolean;
  array_values?: CMsgJSValue[];
  is_object?: boolean;
  object_properties?: CMsgJSValue.JSObjectProperty[];
}

export namespace CMsgJSValue {
  export interface JSObjectProperty {
    name?: string;
    value?: CMsgJSValue;
  }
}

export interface CMsgJSMethodCall {
  browser_handle?: number;
  owning_browser_handle?: number;
  name?: string;
  arguments?: CMsgJSValue[];
}

export interface CMsgJSExecuteCallback {
  browser_handle?: number;
  owning_browser_handle?: number;
  function_handle?: Long;
  arguments?: CMsgJSValue[];
}

export interface CMsgJSExecutePromise {
  browser_handle?: number;
  owning_browser_handle?: number;
  promise_handle?: Long;
  reject_reason?: string;
  argument?: CMsgJSValue;
}

export interface CMsgJSReleaseCallback {
  browser_handle?: number;
  owning_browser_handle?: number;
  function_handle?: Long;
}

export interface CMsgJSRaiseException {
  browser_handle?: number;
  owning_browser_handle?: number;
  exception?: string;
}

export interface CMsgLoadLocalization {
  browser_handle?: number;
  localization_path?: string;
  language?: string;
}

export interface CMsgNotifyUserActivation {
  browser_handle?: number;
}

export interface CMsgSetNetFakeLocalSystemState {
  state?: number;
}

export interface CMsgDraggableRegionsChanged {
  browser_handle?: number;
  rects?: CMsgDraggableRegionsChanged.DraggableRects[];
}

export namespace CMsgDraggableRegionsChanged {
  export interface DraggableRects {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    draggable?: boolean;
    transparent?: boolean;
  }
}

export interface CMsgResizeGripChanged {
  browser_handle?: number;
  width?: number;
  height?: number;
}

export interface CMsgSetWindowPosition {
  browser_handle?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  min_width?: number;
  min_height?: number;
  max_width?: number;
  max_height?: number;
}

export interface CMsgShowWindow {
  browser_handle?: number;
}

export interface CMsgHideWindow {
  browser_handle?: number;
}

export interface CMsgBringWindowToFront {
  browser_handle?: number;
}

export interface CMsgSetForegroundWindow {
  browser_handle?: number;
}

export interface CMsgMaximizeRestoreWindow {
  browser_handle?: number;
}

export interface CMsgMinimizeWindow {
  browser_handle?: number;
}

export interface CMsgShowBrowserContextMenu {
  browser_handle?: number;
  custom_commands?: CMsgShowBrowserContextMenu.ContextCommand[];
  type_flags?: number;
  page_url?: string;
  coord_x?: number;
  coord_y?: number;
  link_url?: string;
  unfiltered_link_url?: string;
  selection_text?: string;
  misspelled_word?: string;
  edit_state_flags?: number;
}

export namespace CMsgShowBrowserContextMenu {
  export interface ContextCommand {
    id?: number;
    label?: string;
  }
}

export interface CMsgHandleContextMenuCommand {
  browser_handle?: number;
  command_id?: number;
}

export interface CMsgTouchGesture {
  browser_handle?: number;
  id?: number;
  gesture?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  tap_count?: number;
  pinch_scale?: number;
}

export interface CMsgSetTouchGesturesToCancel {
  browser_handle?: number;
  gestures?: number[];
}

export interface CMsgImeSetComposition {
  browser_handle?: number;
  text?: string;
}

export interface CMsgImeCommitText {
  browser_handle?: number;
  text?: string;
}

export interface CMsgImeCancelComposition {
  browser_handle?: number;
}

export interface CMsgImeCompositionRangeChanged {
  browser_handle?: number;
  x?: number;
  y?: number;
}

export interface CMsgInspectElement {
  browser_handle?: number;
  x?: number;
  y?: number;
}

export interface CMsgDisableF5 {
  browser_handle?: number;
  disable?: boolean;
}

export interface CMsgStartDownload {
  browser_handle?: number;
  url?: string;
}

export interface CMsgSetWindowStackingOrder {
  browser_handle?: number;
  estackingorder?: number;
}

export interface CMsgBrowserViewPostMessageToParentRequest {
  browser_handle?: number;
  message?: string;
  args?: string;
  requesting_url?: string;
}

export interface CMsgBlockedRequest {
  browser_handle?: number;
  url?: string;
}

export interface CMsgBrowserFocusChanged {
  browser_handle?: number;
  focused?: boolean;
}

export interface CMsgRenderProcessTerminated {
  browser_handle?: number;
}

export interface CMsgSetProtocolBlockList {
  browser_handle?: number;
  list?: string;
}

export interface CMsgSetForceDeviceScaleFactors {
  dpi_scale?: number;
  browser_scale?: number;
}

export interface CMsgSetUIMode {
  ui_mode?: number;
}

export interface CMsgSetSteamBetaName {
  steam_beta_name?: string;
}

export interface CMsgSetSteamID {
  steam_id?: Long;
}

export interface CMsgPopupCreated {
  browser_handle?: number;
}

export interface CMsgSetVRKeyboardVisibility {
  browser_handle?: number;
  visible?: boolean;
}

export type CMsgRestartJSContext = Record<string, never>;

export interface CMsgSetAccessibilitySettings {
  reduced_motion_enabled?: boolean;
  preferred_contrast?: EAccessibilityContrastMode;
  minimum_font_size?: number;
}

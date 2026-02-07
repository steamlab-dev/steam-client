/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgInferenceIterateBeamSearch {
  beam_length?: number;
  beam_width?: number;
  item_decay?: number;
  next_item_count?: number;
  item_scalars?: CMsgInferenceIterateBeamSearch_CustomItemScalar[];
  item_sequence_end?: number;
  item_sequence_end_threshold?: number;
  repeat_multiplier?: number;
}

export interface CMsgInferenceIterateBeamSearch_CustomItemScalar {
  item?: number;
  scale?: number;
}

export interface CMsgSteamLearn_BatchOperation_Request {
  cache_data_requests?: CMsgSteamLearn_CacheData_Request[];
  snapshot_requests?: CMsgSteamLearn_SnapshotProject_Request[];
  inference_requests?: CMsgSteamLearn_Inference_Request[];
}

export interface CMsgSteamLearn_BatchOperation_Response {
  cache_data_responses?: CMsgSteamLearn_CacheData_Response[];
  snapshot_responses?: CMsgSteamLearn_SnapshotProject_Response[];
  inference_responses?: CMsgSteamLearn_Inference_Response[];
}

export interface CMsgSteamLearn_CacheData_Request {
  access_token?: string;
  data?: CMsgSteamLearnData;
}

export interface CMsgSteamLearn_CacheData_Response {
  cache_data_result?: number;
}

export interface CMsgSteamLearn_CreateProject_Request {
  project_name?: string;
  project_description?: string;
}

export interface CMsgSteamLearn_CreateProject_Response {
  result?: number;
  project?: CMsgSteamLearnProject;
}

export interface CMsgSteamLearn_EditProject_Request {
  project?: CMsgSteamLearnProject;
  published_version?: number;
}

export interface CMsgSteamLearn_EditProject_Response {
  result?: number;
}

export interface CMsgSteamLearn_EditProjectConfig_Request {
  project_config?: CMsgSteamLearnProjectConfig;
}

export interface CMsgSteamLearn_EditProjectConfig_Response {
  result?: number;
}

export interface CMsgSteamLearn_GetAccessTokens_Request {
  appid?: number;
}

export interface CMsgSteamLearn_GetAccessTokens_Response {
  result?: number;
  access_tokens?: CMsgSteamLearnAccessTokens;
}

export interface CMsgSteamLearn_GetBatchedStatus_Request {
  fetch_requests?: CMsgSteamLearn_GetFetchStatus_Request[];
  train_requests?: CMsgSteamLearn_GetTrainStatus_Request[];
}

export interface CMsgSteamLearn_GetBatchedStatus_Response {
  result?: number;
  fetch_responses?: CMsgSteamLearn_GetFetchStatus_Response[];
  train_responses?: CMsgSteamLearn_GetTrainStatus_Response[];
}

export interface CMsgSteamLearn_GetDataSource_Request {
  data_source_id?: number;
}

export interface CMsgSteamLearn_GetDataSource_Response {
  data_source?: CMsgSteamLearnDataSource;
}

export interface CMsgSteamLearn_GetEmbeddingValues_Request {
  project_id?: number;
  published_version?: number;
  train_id?: number;
  export_name?: string;
  numerical_values?: number[];
  fetch_id?: number;
}

export interface CMsgSteamLearn_GetEmbeddingValues_Response {
  result?: number;
  embedding_data?: CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData[];
}

export interface CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData {
  numerical_value?: number;
  embedding_values?: number[];
  found_value?: boolean;
}

export interface CMsgSteamLearn_GetFetchStatus_Request {
  project_id?: number;
  fetch_id?: number;
}

export interface CMsgSteamLearn_GetFetchStatus_Response {
  result?: number;
  fetch_id?: number;
  status?: number;
  workers?: CMsgSteamLearn_GetFetchStatus_Response_Worker[];
  total_rows_written?: number;
  total_rows?: number;
  start_time?: number;
  end_time?: number;
  total_rows_processed?: number;
  error_string?: string;
  project_id?: number;
  cancel_pending?: boolean;
  metadata?: CMsgSteamLearn_GetFetchStatus_Response_Metadata[];
}

export interface CMsgSteamLearn_GetFetchStatus_Response_Metadata {
  metadata_phase?: number;
  metadata_phase_name?: string;
  metadata_phase_value?: number;
}

export interface CMsgSteamLearn_GetFetchStatus_Response_Worker {
  rows_written?: number;
  complete?: boolean;
  rows_processed?: number;
  rows_total?: number;
}

export interface CMsgSteamLearn_GetFetchStatusVersions_Request {
  project_id?: number;
  published_version?: number;
}

export interface CMsgSteamLearn_GetFetchStatusVersions_Response {
  versions?: number[];
}

export interface CMsgSteamLearn_GetLogEvents_Request {
  start_timestamp?: number;
  end_timestamp?: number;
  project_id?: number;
  published_version?: number;
}

export interface CMsgSteamLearn_GetLogEvents_Response {
  result?: number;
  event_list?: CMsgSteamLearn_LogEvent[];
}

export interface CMsgSteamLearn_GetNearestEmbedding_Request {
  project_id?: number;
  published_version?: number;
  train_id?: number;
  export_name?: string;
  result_count?: number;
  values?: number[];
  fetch_id?: number;
  popularity_weight?: number;
  focus_weight?: number;
}

export interface CMsgSteamLearn_GetNearestEmbedding_Response {
  result?: number;
  near_embeddings?: CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding[];
}

export interface CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding {
  value?: number;
  distance?: number;
  embedding_values?: number[];
}

export interface CMsgSteamLearn_GetProject_Request {
  project_id?: number;
}

export interface CMsgSteamLearn_GetProject_Response {
  project?: CMsgSteamLearnProject;
}

export interface CMsgSteamLearn_GetProjectConfig_Request {
  project_id?: number;
  published_version?: number;
}

export interface CMsgSteamLearn_GetProjectConfig_Response {
  project_config?: CMsgSteamLearnProjectConfig;
}

export interface CMsgSteamLearn_GetSnapshotStatus_Request {
  project_id?: number;
  published_version?: number;
  snapshot_example_count?: number;
}

export interface CMsgSteamLearn_GetSnapshotStatus_Response {
  result?: number;
  project_id?: number;
  published_version?: number;
  snapshot_count?: number;
  snapshot_object_count?: number;
  snapshot_examples?: CMsgSteamLearnSnapshotStorage[];
  autosnapshot_status?: number;
  autosnapshot_time_started?: number;
  autosnapshot_time_ended?: number;
  autosnapshot_key_current?: Long;
  autosnapshot_key_max?: Long;
}

export interface CMsgSteamLearn_GetTrainLogs_Request {
  project_id?: number;
  fetch_id?: number;
  train_id?: number;
}

export interface CMsgSteamLearn_GetTrainLogs_Response {
  result?: number;
  main_log?: string;
  fetch_worker_logs?: string[];
  gpu_log?: string;
}

export interface CMsgSteamLearn_GetTrainStatus_Request {
  project_id?: number;
  train_id?: number;
}

export interface CMsgSteamLearn_GetTrainStatus_Response {
  result?: number;
  train_id?: number;
  fetch_id?: number;
  status?: number;
  epochs?: CMsgSteamLearn_GetTrainStatus_Response_Epoch[];
  total_epochs?: number;
  train_batch_count?: number;
  validate_batch_count?: number;
  test_batch_count?: number;
  test_batches?: CMsgSteamLearn_GetTrainStatus_Response_Batch[];
  test_loss?: number;
  test_accuracy?: number[];
  start_time?: number;
  end_time?: number;
  scheduled_train?: boolean;
  live?: boolean;
  active?: boolean;
  project_id?: number;
  cancel_pending?: boolean;
}

export interface CMsgSteamLearn_GetTrainStatus_Response_Batch {
  loss?: number;
  batch_id?: number;
  f1_score?: number[];
  accuracy?: number[];
}

export interface CMsgSteamLearn_GetTrainStatus_Response_Epoch {
  epoch_number?: number;
  epoch_train_loss?: number;
  epoch_train_accuracy?: number[];
  epoch_validate_loss?: number;
  epoch_validate_accuracy?: number[];
  train_batches?: CMsgSteamLearn_GetTrainStatus_Response_Batch[];
  validate_batches?: CMsgSteamLearn_GetTrainStatus_Response_Batch[];
  start_time?: number;
  end_time?: number;
  epoch_validate_f1_score?: number[];
  epoch_train_f1_score?: number[];
}

export interface CMsgSteamLearn_GetTrainStatusVersions_Request {
  project_id?: number;
  published_version?: number;
}

export interface CMsgSteamLearn_GetTrainStatusVersions_Response {
  versions?: number[];
}

export interface CMsgSteamLearn_Inference_Request {
  access_token?: string;
  project_id?: number;
  published_version?: number;
  override_train_id?: number;
  data?: CMsgSteamLearnDataList;
  additional_data?: number[];
  keys?: Long[];
  named_inference?: string;
  iterate_beam_search?: CMsgInferenceIterateBeamSearch;
  debug_spew?: number;
}

export interface CMsgSteamLearn_Inference_Response {
  inference_result?: number;
  backend_response?: CMsgSteamLearn_InferenceBackend_Response;
  keys?: Long[];
}

export interface CMsgSteamLearn_InferenceBackend_Request {
  project_id?: number;
  fetch_id?: number;
  train_id?: number;
  data?: CMsgSteamLearnRawDataElement[];
  keys?: Long[];
  additional_data?: number[];
  named_inference?: string;
  iterate_beam_search?: CMsgInferenceIterateBeamSearch;
  debug_spew?: number;
}

export interface CMsgSteamLearn_InferenceBackend_Response {
  outputs?: CMsgSteamLearn_InferenceBackend_Response_Output[];
}

export interface CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput {
  value?: number;
}

export interface CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput {
  weight?: number[];
  value?: number[];
  value_sequence?: CMsgSteamLearn_InferenceBackend_Response_Sequence[];
}

export interface CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput {
  weight?: number[];
  value?: number[];
  value_sequence?: CMsgSteamLearn_InferenceBackend_Response_Sequence[];
}

export interface CMsgSteamLearn_InferenceBackend_Response_NamedInferenceOutput {
  value?: number[];
}

export interface CMsgSteamLearn_InferenceBackend_Response_Output {
  binary_crossentropy?: CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput;
  categorical_crossentropy?: CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput;
  multi_binary_crossentropy?: CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput;
  regression?: CMsgSteamLearn_InferenceBackend_Response_RegressionOutput;
  named_inference?: CMsgSteamLearn_InferenceBackend_Response_NamedInferenceOutput;
}

export interface CMsgSteamLearn_InferenceBackend_Response_RegressionOutput {
  value?: number[];
}

export interface CMsgSteamLearn_InferenceBackend_Response_Sequence {
  value?: number[];
}

export interface CMsgSteamLearn_InferenceMetadata_Request {
  access_token?: string;
  project_id?: number;
  published_version?: number;
  override_train_id?: number;
}

export interface CMsgSteamLearn_InferenceMetadata_Response {
  inference_metadata_result?: number;
  row_range?: CMsgSteamLearn_InferenceMetadata_Response_RowRange;
  ranges?: CMsgSteamLearn_InferenceMetadata_Response_Range[];
  std_devs?: CMsgSteamLearn_InferenceMetadata_Response_StdDev[];
  compact_tables?: CMsgSteamLearn_InferenceMetadata_Response_CompactTable[];
  kmeans?: CMsgSteamLearn_InferenceMetadata_Response_KMeans[];
  snapshot_histogram?: CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram;
  app_info?: CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry[];
  sequence_tables?: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable[];
  optimal_f1_score?: number;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_AppInfo {
  country_allow?: string;
  country_deny?: string;
  platform_win?: boolean;
  platform_mac?: boolean;
  platform_linux?: boolean;
  adult_violence?: boolean;
  adult_sex?: boolean;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry {
  key?: number;
  value?: CMsgSteamLearn_InferenceMetadata_Response_AppInfo;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_CompactTable {
  name?: string;
  map_values?: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry[];
  map_mappings?: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry[];
  total_count?: Long;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry {
  value?: number;
  mapping?: number;
  count?: Long;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry {
  key?: number;
  value?: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry {
  key?: number;
  value?: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_KMeans {
  name?: string;
  clusters?: CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster[];
}

export interface CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster {
  x?: number;
  y?: number;
  radius?: number;
  radius_75pct?: number;
  radius_50pct?: number;
  radius_25pct?: number;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_Range {
  data_element_path?: string;
  min_value?: number;
  max_value?: number;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_RowRange {
  min_row?: Long;
  max_row?: Long;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_SequenceTable {
  name?: string;
  map_values?: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapValuesEntry[];
  map_mappings?: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapMappingsEntry[];
  total_count?: Long;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry {
  values?: number[];
  crc?: number;
  count?: number;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapMappingsEntry {
  key?: string;
  value?: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapValuesEntry {
  key?: number;
  value?: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry;
}

export interface CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram {
  min_value?: number;
  max_value?: number;
  num_buckets?: number;
  bucket_counts?: number[];
}

export interface CMsgSteamLearn_InferenceMetadata_Response_StdDev {
  data_element_path?: string;
  mean?: number;
  std_dev?: number;
}

export type CMsgSteamLearn_ListDataSources_Request = Record<string, never>;

export interface CMsgSteamLearn_ListDataSources_Response {
  data_sources?: CMsgSteamLearnDataSource[];
}

export type CMsgSteamLearn_ListProjectConfigs_Request = Record<string, never>;

export interface CMsgSteamLearn_ListProjectConfigs_Response {
  project_config_infos?: CMsgSteamLearn_ListProjectConfigs_Response_ProjectConfigInfo[];
}

export interface CMsgSteamLearn_ListProjectConfigs_Response_ProjectConfigInfo {
  project_id?: number;
  project_name?: string;
  project_description?: string;
  published_versions?: number[];
}

export interface CMsgSteamLearn_ListProjects_Request {
  appid?: number;
}

export interface CMsgSteamLearn_ListProjects_Response {
  projects?: CMsgSteamLearnProject[];
}

export interface CMsgSteamLearn_LogEvent {
  event_type?: number;
  timestamp?: number;
  project_id?: number;
  published_version?: number;
  train_started?: CMsgSteamLearn_LogEvent_TrainStarted;
  train_ended?: CMsgSteamLearn_LogEvent_TrainEnded;
  train_set_live?: CMsgSteamLearn_LogEvent_TrainSetLive;
  auto_snapshot?: CMsgSteamLearn_LogEvent_Autosnapshot;
}

export interface CMsgSteamLearn_LogEvent_Autosnapshot {
  status?: number;
  key_completed?: Long;
  key_end?: Long;
  num_snapshot_requests?: Long;
}

export interface CMsgSteamLearn_LogEvent_TrainEnded {
  fetch_id?: number;
  train_id?: number;
  loss?: number;
  accuracy?: number;
  f1_score?: number;
}

export interface CMsgSteamLearn_LogEvent_TrainSetLive {
  fetch_id?: number;
  train_id?: number;
  manual_set_live?: boolean;
  accuracy_difference?: number;
  accuracy_threshold?: number;
}

export interface CMsgSteamLearn_LogEvent_TrainStarted {
  fetch_id?: number;
  train_id?: number;
}

export interface CMsgSteamLearn_PublishProject_Request {
  project_id?: number;
}

export interface CMsgSteamLearn_PublishProject_Response {
  result?: number;
  new_published_version?: number;
}

export interface CMsgSteamLearn_RegisterDataSource_Request {
  access_token?: string;
  data_source?: CMsgSteamLearnDataSource;
}

export interface CMsgSteamLearn_RegisterDataSource_Response {
  result?: number;
  data_source?: CMsgSteamLearnDataSource;
}

export interface CMsgSteamLearn_SetTrainLive_Request {
  project_id?: number;
  published_version?: number;
  train_id?: number;
  from_scheduled?: boolean;
  deactivate?: boolean;
}

export interface CMsgSteamLearn_SetTrainLive_Response {
  result?: number;
}

export interface CMsgSteamLearn_SnapshotProject_Request {
  access_token?: string;
  project_id?: number;
  keys?: Long[];
  data?: CMsgSteamLearnData[];
  pending_data_limit_seconds?: number;
  published_version?: number;
}

export interface CMsgSteamLearn_SnapshotProject_Response {
  snapshot_result?: number;
}

export interface CMsgSteamLearn_Train_Request {
  project_config?: CMsgSteamLearnProjectConfig;
  fetch?: CMsgSteamLearn_Train_Request_Fetch;
  train?: CMsgSteamLearn_Train_Request_Train;
}

export interface CMsgSteamLearn_Train_Request_Fetch {
  fetch_id?: number;
  request_cancel?: boolean;
}

export interface CMsgSteamLearn_Train_Request_Train {
  train_id?: number;
  request_cancel?: boolean;
  scheduled_train?: boolean;
}

export interface CMsgSteamLearn_Train_Response {
  result?: number;
}

export interface CMsgSteamLearnAccessTokens {
  register_data_source_access_token?: string;
  cache_data_access_tokens?: CMsgSteamLearnAccessTokens_CacheDataAccessToken[];
  snapshot_project_access_tokens?: CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken[];
  inference_access_tokens?: CMsgSteamLearnAccessTokens_InferenceAccessToken[];
}

export interface CMsgSteamLearnAccessTokens_CacheDataAccessToken {
  data_source_id?: number;
  access_token?: string;
}

export interface CMsgSteamLearnAccessTokens_InferenceAccessToken {
  project_id?: number;
  access_token?: string;
}

export interface CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken {
  project_id?: number;
  access_token?: string;
}

export interface CMsgSteamLearnData {
  data_source_id?: number;
  keys?: Long[];
  data_object?: CMsgSteamLearnDataObject;
}

export interface CMsgSteamLearnDataElement {
  name?: string;
  data_int32s?: number[];
  data_floats?: number[];
  data_bools?: boolean[];
  data_strings?: string[];
  data_objects?: CMsgSteamLearnDataObject[];
}

export interface CMsgSteamLearnDataList {
  data?: CMsgSteamLearnData[];
}

export interface CMsgSteamLearnDataObject {
  elements?: CMsgSteamLearnDataElement[];
}

export interface CMsgSteamLearnDataRetentionConfig {
  snapshot_keep_duration_days?: number;
  fetch_keep_count?: number;
}

export interface CMsgSteamLearnDataSource {
  id?: number;
  name?: string;
  version?: number;
  source_description?: string;
  structure?: CMsgSteamLearnDataSourceDescObject;
  structure_crc?: number;
  cache_duration_seconds?: number;
  key_type?: number;
  supports_auto_snapshots?: boolean;
}

export interface CMsgSteamLearnDataSourceDescElement {
  name?: string;
  data_type?: number;
  object?: CMsgSteamLearnDataSourceDescObject;
  count?: number;
}

export interface CMsgSteamLearnDataSourceDescObject {
  elements?: CMsgSteamLearnDataSourceDescElement[];
}

export interface CMsgSteamLearnDataSourceElementUsage {
  data_source_id?: number;
  data_element_path?: string;
  is_string?: boolean;
  input?: number;
  sql_column?: number;
  preprocessing_type?: number;
  min_range?: number;
  max_range?: number;
  std_dev?: number;
  compact_table?: string;
  compact_table_count?: number;
  sequence_table?: string;
  sequence_table_count?: number;
  sort_sequence?: boolean;
  sequence_min_length?: number;
  table_full_sample?: boolean;
  sequence_prefix_frequency?: number;
  other_project_id?: number;
  other_fetch_id?: number;
  dropout_pct?: number;
}

export interface CMsgSteamLearnFetchInfo {
  fetch_id?: number;
}

export type CMsgSteamLearnModelNodeBatchNormalization = Record<string, never>;

export type CMsgSteamLearnModelNodeBert = Record<string, never>;

export interface CMsgSteamLearnModelNodeBertFinetune {
  bert_model?: number;
  unfrozen_layers?: number;
}

export interface CMsgSteamLearnModelNodeBertTokenizer {
  bert_model?: number;
  sequence_length?: number;
}

export type CMsgSteamLearnModelNodeCombine = Record<string, never>;

export interface CMsgSteamLearnModelNodeConcatenate {
  axis?: number;
}

export interface CMsgSteamLearnModelNodeConditionalExtract {
  extract_filter_type?: number;
  extract_weight_type?: number;
  filter_info?: CMsgSteamLearnModelNodeConditionalExtract_FilterInfo;
  weight_info?: CMsgSteamLearnModelNodeConditionalExtract_WeightInfo;
  compact_table?: string;
  extracted_compact_table?: string;
}

export interface CMsgSteamLearnModelNodeConditionalExtract_FilterInfo {
  appid_release_recency_months?: number;
  appid_publisher_id?: number;
  appid_featured_tag_id?: number;
  appid_theme_tag_id?: number;
}

export interface CMsgSteamLearnModelNodeConditionalExtract_WeightInfo {
  appid_release_recency_bias?: number;
  input_number?: number;
  input_strength?: number;
}

export type CMsgSteamLearnModelNodeConditionalSwap = Record<string, never>;

export interface CMsgSteamLearnModelNodeConv1D {
  filters?: number;
  kernel_size?: number;
  strides?: number;
  activation?: number;
}

export interface CMsgSteamLearnModelNodeDense {
  activation?: number;
  width?: number;
  regularization?: number;
}

export interface CMsgSteamLearnModelNodeDenseStack {
  activation?: number;
  width?: number[];
  dropout_pct?: number;
  regularization?: number;
}

export interface CMsgSteamLearnModelNodeDot {
  normalize?: boolean;
}

export interface CMsgSteamLearnModelNodeDropout {
  dropout_pct?: number;
}

export interface CMsgSteamLearnModelNodeEmbedding {
  max_value?: number;
  compact_table?: string;
  embedding_width?: number;
  flatten?: boolean;
  export_name?: string;
  embed_name?: string;
}

export type CMsgSteamLearnModelNodeExplode = Record<string, never>;

export interface CMsgSteamLearnModelNodeExternalEmbedding {
  project_id?: number;
  train_id?: number;
  embedding_name?: string;
  compact_table?: string;
  fetch_id?: number;
  exclude_missing?: boolean;
}

export interface CMsgSteamLearnModelNodeExternalModel {
  project_id?: number;
  train_id?: number;
  named_inference_name?: string;
  freeze_weights?: boolean;
  unfrozen_layers?: number;
}

export interface CMsgSteamLearnModelNodeExtract {
  input_type?: number;
  mode?: number;
  exclusion?: number;
  selection?: number;
  bias_start?: number;
  bias_end?: number;
  input_bias_input_number?: number;
  input_bias_strength?: number;
  positive_sample_percent?: number;
  compact_table?: string;
  extracted_compact_table?: string;
  recency_months?: number;
  fest_name?: string;
}

export type CMsgSteamLearnModelNodeFlatten = Record<string, never>;

export type CMsgSteamLearnModelNodeGlobalAvgPooling1D = Record<string, never>;

export type CMsgSteamLearnModelNodeGlobalMaxPooling1D = Record<string, never>;

export interface CMsgSteamLearnModelNodeInput {
  input_num?: number;
  inference_iterate?: boolean;
}

export interface CMsgSteamLearnModelNodeKMeansCluster {
  num_clusters?: number;
  name?: string;
  generate_clusters?: boolean;
}

export interface CMsgSteamLearnModelNodeLogic {
  logic_operator?: number;
}

export type CMsgSteamLearnModelNodeMaskedHead = Record<string, never>;

export interface CMsgSteamLearnModelNodeMaxPooling1D {
  pool_size?: number;
  strides?: number;
}

export interface CMsgSteamLearnModelNodeNamedInference {
  name?: string;
  only_inference?: boolean;
}

export type CMsgSteamLearnModelNodeNormalize = Record<string, never>;

export interface CMsgSteamLearnModelNodeOnehot {
  width?: number;
  compact_table?: string;
  multi_hot?: boolean;
}

export interface CMsgSteamLearnModelNodeReshape2D {
  dimension?: number;
}

export interface CMsgSteamLearnModelNodeRowExtract {
  row?: number;
}

export interface CMsgSteamLearnModelNodeSequenceSplit {
  head_split_chance?: number;
  mid_split_chance?: number;
  tail_split_chance?: number;
  sequence_table_name?: string;
  compact_table_name?: string;
}

export interface CMsgSteamLearnModelNodeShuffle {
  exclude_zeroes?: boolean;
}

export interface CMsgSteamLearnModelNodeSyncedShuffle {
  exclude_zeroes?: boolean;
}

export interface CMsgSteamLearnModelNodeTextVectorization {
  vocabulary_size?: number;
  standardize?: number;
  output?: number;
  sequence_length?: number;
  split?: number;
  ngrams?: number;
  other_project_id?: number;
  other_fetch_id?: number;
}

export interface CMsgSteamLearnModelNodeThreshold {
  threshold_value?: number;
  comparison?: number;
}

export interface CMsgSteamLearnModelNodeTimeDistributedDense {
  activation?: number;
  width?: number;
}

export interface CMsgSteamLearnModelNodeTokenMask {
  mask_pct?: number;
  mask_count_limit?: number;
  random_pct?: number;
  keep_pct?: number;
}

export interface CMsgSteamLearnModelNodeTokenTransformer {
  vocabulary_size?: number;
  sequence_length?: number;
  embedding_width?: number;
  transformer_layers?: number;
  transformer_dim?: number;
  transformer_heads?: number;
  transformer_dropout_pct?: number;
  compact_table?: string;
  is_causal?: boolean;
  is_set?: boolean;
}

export interface CMsgSteamLearnModelNodeTrain {
  input_count?: number;
  activation?: number;
  width?: number;
  compact_table?: string;
  loss?: number;
  learning_rate?: number;
  uses_weight_mask?: boolean;
  label_smoothing?: number;
}

export interface CMsgSteamLearnModelNodeTransformer {
  num_heads?: number;
  feedforward_size?: number;
  dropout_pct?: number;
  num_internal_blocks?: number;
  regularization?: number;
}

export interface CMsgSteamLearnModelNodeWeightedAverage {
  axis?: number;
  use_weights?: boolean;
}

export interface CMsgSteamLearnProject {
  project_id?: number;
  project_name?: string;
  project_description?: string;
  creator_account_id?: number;
  create_time?: number;
  unpublished_config?: CMsgSteamLearnProjectConfig;
  published_configs?: CMsgSteamLearnProjectConfig[];
  hidden?: boolean;
}

export interface CMsgSteamLearnProjectConfig {
  project_id?: number;
  publish_time?: number;
  published_version?: number;
  data_source_ids?: number[];
  data_source_element_usages?: CMsgSteamLearnDataSourceElementUsage[];
  project_nodes?: CMsgSteamLearnProjectNode[];
  snapshot_config?: CMsgSteamLearnProjectSnapshotConfig;
  train_config?: CMsgSteamLearnTrainConfig;
  snapshot_filter?: CMsgSteamLearnProjectSnapshotFilter;
  map_data_element_sql_column?: CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry[];
  total_sql_columns?: number;
  data_retention_config?: CMsgSteamLearnDataRetentionConfig;
  scheduled_train_config?: CMsgSteamLearnScheduledTrainConfig;
  fetch_infos?: CMsgSteamLearnFetchInfo[];
  train_infos?: CMsgSteamLearnTrainInfo[];
  hidden?: boolean;
  last_edit_time?: number;
}

export interface CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry {
  key?: string;
  value?: number;
}

export interface CMsgSteamLearnProjectNode {
  node_id?: number;
  location_x?: number;
  location_y?: number;
  comment?: string;
  type?: number;
  connectors?: CMsgSteamLearnProjectNodeConnector[];
  input?: CMsgSteamLearnModelNodeInput;
  dense?: CMsgSteamLearnModelNodeDense;
  dense_stack?: CMsgSteamLearnModelNodeDenseStack;
  dropout?: CMsgSteamLearnModelNodeDropout;
  embedding?: CMsgSteamLearnModelNodeEmbedding;
  train?: CMsgSteamLearnModelNodeTrain;
  conditional_extract?: CMsgSteamLearnModelNodeConditionalExtract;
  concatenate?: CMsgSteamLearnModelNodeConcatenate;
  shuffle?: CMsgSteamLearnModelNodeShuffle;
  synced_shuffle?: CMsgSteamLearnModelNodeSyncedShuffle;
  onehot?: CMsgSteamLearnModelNodeOnehot;
  explode?: CMsgSteamLearnModelNodeExplode;
  conditional_swap?: CMsgSteamLearnModelNodeConditionalSwap;
  kmeans?: CMsgSteamLearnModelNodeKMeansCluster;
  combine?: CMsgSteamLearnModelNodeCombine;
  text_vectorization?: CMsgSteamLearnModelNodeTextVectorization;
  batch_normalization?: CMsgSteamLearnModelNodeBatchNormalization;
  normalize?: CMsgSteamLearnModelNodeNormalize;
  named_inference?: CMsgSteamLearnModelNodeNamedInference;
  dot?: CMsgSteamLearnModelNodeDot;
  extract?: CMsgSteamLearnModelNodeExtract;
  conv_1d?: CMsgSteamLearnModelNodeConv1D;
  max_pooling_1d?: CMsgSteamLearnModelNodeMaxPooling1D;
  flatten?: CMsgSteamLearnModelNodeFlatten;
  global_max_pooling?: CMsgSteamLearnModelNodeGlobalMaxPooling1D;
  transformer?: CMsgSteamLearnModelNodeTransformer;
  external_embedding?: CMsgSteamLearnModelNodeExternalEmbedding;
  time_distributed_dense?: CMsgSteamLearnModelNodeTimeDistributedDense;
  sequence_split?: CMsgSteamLearnModelNodeSequenceSplit;
  weighted_average?: CMsgSteamLearnModelNodeWeightedAverage;
  global_avg_pooling_1d?: CMsgSteamLearnModelNodeGlobalAvgPooling1D;
  token_mask?: CMsgSteamLearnModelNodeTokenMask;
  masked_head?: CMsgSteamLearnModelNodeMaskedHead;
  token_transformer?: CMsgSteamLearnModelNodeTokenTransformer;
  external_model?: CMsgSteamLearnModelNodeExternalModel;
  reshape_2d?: CMsgSteamLearnModelNodeReshape2D;
  row_extract?: CMsgSteamLearnModelNodeRowExtract;
  bert?: CMsgSteamLearnModelNodeBert;
  bert_tokenizer?: CMsgSteamLearnModelNodeBertTokenizer;
  bert_finetune?: CMsgSteamLearnModelNodeBertFinetune;
  threshold?: CMsgSteamLearnModelNodeThreshold;
  logic?: CMsgSteamLearnModelNodeLogic;
}

export interface CMsgSteamLearnProjectNodeConnector {
  connector_id?: number;
  linked_connector_ids?: number[];
  is_input_connector?: boolean;
}

export interface CMsgSteamLearnProjectSnapshotConfig {
  snapshot_type?: number;
  config_account_ids?: CMsgSteamLearnProjectSnapshotConfigAccountIDs;
  config_app_ids?: CMsgSteamLearnProjectSnapshotConfigAppIDs;
  config_other_project?: CMsgSteamLearnProjectSnapshotConfigOtherProject;
  snapshot_schedule_type?: number;
  snapshot_schedule_day_of_week?: number;
  snapshot_schedule_day_of_month?: number;
  compress?: boolean;
  job_count?: number;
  snapshot_schedule_hour_of_day?: number;
  config_data_source?: CMsgSteamLearnProjectSnapshotConfigDataSource;
}

export interface CMsgSteamLearnProjectSnapshotConfigAccountIDs {
  percent?: number;
  activity_recency_days?: number;
  filter?: number;
}

export interface CMsgSteamLearnProjectSnapshotConfigAppIDs {
  percent?: number;
  release_recency_days?: number;
}

export interface CMsgSteamLearnProjectSnapshotConfigDataSource {
  data_source_id?: number;
}

export interface CMsgSteamLearnProjectSnapshotConfigOtherProject {
  project_id?: number;
  published_version?: number;
}

export interface CMsgSteamLearnProjectSnapshotFilter {
  sample_reduce_percent?: number;
  histogram?: CMsgSteamLearnProjectSnapshotFilterHistogram;
  filter_range?: CMsgSteamLearnProjectSnapshotFilterRange;
}

export interface CMsgSteamLearnProjectSnapshotFilterHistogram {
  data_element_path?: string;
  min_value?: number;
  max_value?: number;
  num_buckets?: number;
}

export interface CMsgSteamLearnProjectSnapshotFilterRange {
  data_element_path?: string;
  min_value?: number;
  max_value?: number;
}

export interface CMsgSteamLearnRawDataElement {
  float_value?: number;
  string_value?: string;
}

export interface CMsgSteamLearnScheduledTrainConfig {
  scheduled_type?: number;
  scheduled_minute?: number;
  scheduled_hour?: number;
  scheduled_day_of_week?: number;
  scheduled_day_of_month?: number;
  auto_activate_accuracy_threshold?: number;
  failed_auto_activate_emails?: string;
}

export interface CMsgSteamLearnSnapshotStorage {
  map_storage_elements?: CMsgSteamLearnSnapshotStorage_MapStorageElementsEntry[];
}

export interface CMsgSteamLearnSnapshotStorage_MapStorageElementsEntry {
  key?: number;
  value?: CMsgSteamLearnSnapshotStorage_StorageElement;
}

export interface CMsgSteamLearnSnapshotStorage_StorageElement {
  float_value?: number;
  string_value?: string;
}

export interface CMsgSteamLearnTrainConfig {
  fetch_workers?: number;
  fetch_chunk_size?: number;
  train_batch_size?: number;
  train_epoch_count?: number;
  train_loss_improvement_threshold?: number;
  train_no_loss_improvement_epoch_limit?: number;
  train_optimizer?: number;
  train_learning_rate?: number;
  train_gpu?: number;
  gpu_count?: number;
  mixed_precision?: boolean;
  train_weight_decay?: number;
  train_clip_norm?: number;
  use_class_weights?: boolean;
  train_warmup_steps?: number;
  train_warmup_start?: number;
  train_decay_steps?: number;
  train_decay_rate?: number;
  profile_epoch?: number;
  profile_start_batch?: number;
  profile_end_batch?: number;
}

export interface CMsgSteamLearnTrainInfo {
  fetch_id?: number;
  train_id?: number;
  scheduled_train?: boolean;
  auto_snapshot_pending?: boolean;
}

export abstract class SteamLearnService {
  abstract BatchOperation(
    request: CMsgSteamLearn_BatchOperation_Request,
  ): Promise<CMsgSteamLearn_BatchOperation_Response>;
  abstract CacheData(
    request: CMsgSteamLearn_CacheData_Request,
  ): Promise<CMsgSteamLearn_CacheData_Response>;
  abstract CreateProject(
    request: CMsgSteamLearn_CreateProject_Request,
  ): Promise<CMsgSteamLearn_CreateProject_Response>;
  abstract EditProject(
    request: CMsgSteamLearn_EditProject_Request,
  ): Promise<CMsgSteamLearn_EditProject_Response>;
  abstract EditProjectConfig(
    request: CMsgSteamLearn_EditProjectConfig_Request,
  ): Promise<CMsgSteamLearn_EditProjectConfig_Response>;
  abstract GetAccessTokensWeb(
    request: CMsgSteamLearn_GetAccessTokens_Request,
  ): Promise<CMsgSteamLearn_GetAccessTokens_Response>;
  abstract GetBatchedStatus(
    request: CMsgSteamLearn_GetBatchedStatus_Request,
  ): Promise<CMsgSteamLearn_GetBatchedStatus_Response>;
  abstract GetDataSource(
    request: CMsgSteamLearn_GetDataSource_Request,
  ): Promise<CMsgSteamLearn_GetDataSource_Response>;
  abstract GetEmbeddingValues(
    request: CMsgSteamLearn_GetEmbeddingValues_Request,
  ): Promise<CMsgSteamLearn_GetEmbeddingValues_Response>;
  abstract GetFetchStatus(
    request: CMsgSteamLearn_GetFetchStatus_Request,
  ): Promise<CMsgSteamLearn_GetFetchStatus_Response>;
  abstract GetFetchStatusVersions(
    request: CMsgSteamLearn_GetFetchStatusVersions_Request,
  ): Promise<CMsgSteamLearn_GetFetchStatusVersions_Response>;
  abstract GetLogEvents(
    request: CMsgSteamLearn_GetLogEvents_Request,
  ): Promise<CMsgSteamLearn_GetLogEvents_Response>;
  abstract GetNearestEmbedding(
    request: CMsgSteamLearn_GetNearestEmbedding_Request,
  ): Promise<CMsgSteamLearn_GetNearestEmbedding_Response>;
  abstract GetProject(
    request: CMsgSteamLearn_GetProject_Request,
  ): Promise<CMsgSteamLearn_GetProject_Response>;
  abstract GetProjectConfig(
    request: CMsgSteamLearn_GetProjectConfig_Request,
  ): Promise<CMsgSteamLearn_GetProjectConfig_Response>;
  abstract GetSnapshotStatus(
    request: CMsgSteamLearn_GetSnapshotStatus_Request,
  ): Promise<CMsgSteamLearn_GetSnapshotStatus_Response>;
  abstract GetTrainLogs(
    request: CMsgSteamLearn_GetTrainLogs_Request,
  ): Promise<CMsgSteamLearn_GetTrainLogs_Response>;
  abstract GetTrainStatus(
    request: CMsgSteamLearn_GetTrainStatus_Request,
  ): Promise<CMsgSteamLearn_GetTrainStatus_Response>;
  abstract GetTrainStatusVersions(
    request: CMsgSteamLearn_GetTrainStatusVersions_Request,
  ): Promise<CMsgSteamLearn_GetTrainStatusVersions_Response>;
  abstract Inference(
    request: CMsgSteamLearn_Inference_Request,
  ): Promise<CMsgSteamLearn_Inference_Response>;
  abstract InferenceBackend(
    request: CMsgSteamLearn_InferenceBackend_Request,
  ): Promise<CMsgSteamLearn_InferenceBackend_Response>;
  abstract InferenceMetadata(
    request: CMsgSteamLearn_InferenceMetadata_Request,
  ): Promise<CMsgSteamLearn_InferenceMetadata_Response>;
  abstract ListDataSources(
    request: CMsgSteamLearn_ListDataSources_Request,
  ): Promise<CMsgSteamLearn_ListDataSources_Response>;
  abstract ListProjectConfigs(
    request: CMsgSteamLearn_ListProjectConfigs_Request,
  ): Promise<CMsgSteamLearn_ListProjectConfigs_Response>;
  abstract ListProjects(
    request: CMsgSteamLearn_ListProjects_Request,
  ): Promise<CMsgSteamLearn_ListProjects_Response>;
  abstract PublishProject(
    request: CMsgSteamLearn_PublishProject_Request,
  ): Promise<CMsgSteamLearn_PublishProject_Response>;
  abstract RegisterDataSource(
    request: CMsgSteamLearn_RegisterDataSource_Request,
  ): Promise<CMsgSteamLearn_RegisterDataSource_Response>;
  abstract SetTrainLive(
    request: CMsgSteamLearn_SetTrainLive_Request,
  ): Promise<CMsgSteamLearn_SetTrainLive_Response>;
  abstract SnapshotProject(
    request: CMsgSteamLearn_SnapshotProject_Request,
  ): Promise<CMsgSteamLearn_SnapshotProject_Response>;
  abstract Train(request: CMsgSteamLearn_Train_Request): Promise<CMsgSteamLearn_Train_Response>;
}

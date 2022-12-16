export interface StoreRootConfig {
  directory: string;
}

export interface StoreFeatureConfig {
  filename: string;
}

export type StoreConfig = Partial<StoreRootConfig & StoreFeatureConfig>;

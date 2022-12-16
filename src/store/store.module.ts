import { DynamicModule, Module } from '@nestjs/common';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';
import { StoreService } from './store.service';

let rootStoreConfig: StoreConfig;
const DEFAULT_ROOT_STORE_CONFIG = 'data';
const DEFAULT_FEATURE_STORE_CONFIG = 'default.json';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
class RootStoreModule {}

@Module({})
export class StoreModule {
  static forRoot(config?: StoreRootConfig): any {
    rootStoreConfig = StoreModule.buildStoreOptions(config);
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: 'STORE_CONFIG_ROOT',
          useValue: rootStoreConfig,
        },
      ],
    };
  }

  static forFeature(config: StoreFeatureConfig): any {
    const token = 'STORE_FEATURE' + config.filename;
    return {
      module: RootStoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const storeOptions = StoreModule.buildStoreOptions({
              ...rootStoreConfig,
              ...config,
            });
            return new StoreService(storeOptions);
          },
        },
        StoreService,
      ],
      exports: [token],
    };
  }

  private static buildStoreOptions = (config: StoreConfig): StoreConfig => {
    const defaultConfig: StoreConfig = {
      directory: DEFAULT_ROOT_STORE_CONFIG,
      filename: DEFAULT_FEATURE_STORE_CONFIG,
    };
    return { ...defaultConfig, ...config };
  };
}

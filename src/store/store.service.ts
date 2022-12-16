import { Inject, Injectable, Optional } from '@nestjs/common';
import { StoreConfig } from './store.config';
import * as fs from 'fs';

@Injectable()
export class StoreService {
  constructor(
    @Optional()
    @Inject('STORE_CONFIG_ROOT')
    private storeConfig: StoreConfig,
  ) {
    console.log('StoreService', this.storeConfig);
    if (storeConfig && fs.existsSync(this.storeConfig.directory) === false) {
      fs.mkdirSync(this.storeConfig.directory);
    }
  }
  save(data: any): void {
    fs.appendFileSync(
      `${this.storeConfig.directory}/${this.storeConfig.filename}`,
      JSON.stringify(data),
    );
  }
}

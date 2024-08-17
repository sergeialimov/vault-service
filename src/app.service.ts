import { Injectable } from '@nestjs/common';
import { VaultService } from './vault/vault.service';

@Injectable()
export class AppService {
  constructor(private readonly vaultService: VaultService) {}

  async getSecretData(secretPath: string) {
    return await this.vaultService.getSecret(secretPath);
  }
}

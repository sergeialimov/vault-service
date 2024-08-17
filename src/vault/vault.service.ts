import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vault = require('node-vault')({
  endpoint: process.env.VAULT_ADDR || 'http://127.0.0.1:8200',
  token: process.env.VAULT_TOKEN || '',
  requestOptions: {
    strictSSL: false, // Disable strict SSL to allow HTTP
  },
});

@Injectable()
export class VaultService {
  async getSecret(secretPath: string) {
    try {
      const result = await vault.read(secretPath);
      return result.data;
    } catch (error) {
      throw new Error(`Unable to retrieve secret: ${error.message}`);
    }
  }
}

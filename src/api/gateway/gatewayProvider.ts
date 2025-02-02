import { IHttpProvider } from '@/interfaces/IHttpProvider';
import httpProvider from '@/api/providers/httpProvider';
import mockProvider from '@/api/providers/mockProvider';
import { GatewayType } from '@/types';

export class GatewayProvider {
  private static providers: Record<string, object> = {
    http: httpProvider,
    mock: mockProvider,
  };

  public static getProvider = (provider?: GatewayType): IHttpProvider => {
    if (!provider) {
      provider = GatewayType.HTTP; // Default to http provider
      console.log('using default provider:', provider);
    }
    return GatewayProvider.providers[provider] as IHttpProvider;
  };
}

import { GatewayProvider } from '../gatewayProvider';
import httpProvider from '@/api/providers/httpProvider';
import mockProvider from '@/api/providers/mockProvider';
import { GatewayType } from '@/types';

describe('GatewayProvider', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should return HTTP provider by default', () => {
    const provider = GatewayProvider.getProvider();
    expect(provider).toBe(httpProvider);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      'using default provider:',
      GatewayType.HTTP
    );
  });

  it('should return HTTP provider when explicitly requested', () => {
    const provider = GatewayProvider.getProvider(GatewayType.HTTP);
    expect(provider).toBe(httpProvider);
  });

  it('should return mock provider when requested', () => {
    const provider = GatewayProvider.getProvider(GatewayType.MOCK);
    expect(provider).toBe(mockProvider);
  });

  it('should implement IHttpProvider interface', () => {
    const provider = GatewayProvider.getProvider();
    expect(provider.get).toBeDefined();
    expect(provider.post).toBeDefined();
    expect(provider.put).toBeDefined();
    expect(provider.delete).toBeDefined();
  });
});

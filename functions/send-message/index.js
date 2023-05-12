const { CacheClient, Configurations, CredentialProvider } = require('@gomomento/sdk');
let cacheClient;

exports.handler = async (event, context, callback) => {

}

const initializeCacheClient = () => {
  if (!cacheClient) {
    cacheClient = new CacheClient({
      configuration: Configurations.Laptop.latest(),
      credentialProvider: CredentialProvider.fromEnvironmentVariable({ environmentVariableName: 'AUTH_TOKEN' }),
      defaultTtlSeconds: Number(process.env.CHATROOM_TTL)
    });
  }
};
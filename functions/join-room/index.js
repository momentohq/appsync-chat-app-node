const { CacheClient, Configurations, CredentialProvider } = require('@gomomento/sdk');
let cacheClient;

exports.handler = async (event) => {
  initializeCacheClient();

  let messages = [];
  const response = await cacheClient.listFetch('chat', room);
  if (!response.is_miss) {
    messages = response.valueListString().map(m => JSON.parse(m));
  }
  return { messages }
};

const initializeCacheClient = () => {
  if (!cacheClient) {
    cacheClient = new CacheClient({
      configuration: Configurations.Laptop.latest(),
      credentialProvider: CredentialProvider.fromEnvironmentVariable({ environmentVariableName: 'AUTH_TOKEN' }),
      defaultTtlSeconds: Number(process.env.CHATROOM_TTL)
    });
  }
};
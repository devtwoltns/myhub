function getEnv(name: string) {
  return process.env[name];
}

export const env = {
  openaiApiKey: getEnv("OPENAI_API_KEY"),
  databaseUrl: getEnv("DATABASE_URL"),
};

export async function getDatabaseStatus() {
  return {
    configured: Boolean(process.env.DATABASE_URL),
  };
}

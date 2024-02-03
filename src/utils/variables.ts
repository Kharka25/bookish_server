const { env } = process as { env: { [key: string]: string } };

export const {
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_CLIENT_SECRET,
  JWT_SECRET,
  MAILTRAP_USER,
  MAILTRAP_PASSWORD,
  PASSWORD_RESET_LINK,
  PORT,
  PGSQL_DB,
  PGSQL_PASSWORD,
  PGSQL_USER,
} = env;

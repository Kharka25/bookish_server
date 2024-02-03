import { DataSource } from 'typeorm';

import { PGSQL_DB, PGSQL_PASSWORD, PGSQL_USER } from '@utils/variables';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: PGSQL_USER,
  password: PGSQL_PASSWORD,
  database: PGSQL_DB,
  entities: [],
  synchronize: true,
});

export default AppDataSource;

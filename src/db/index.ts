import { DataSource } from 'typeorm';

import { PGSQL_DB, PGSQL_PASSWORD, PGSQL_USER } from '@utils/variables';
import { User } from '@models';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: PGSQL_USER,
  password: PGSQL_PASSWORD,
  database: PGSQL_DB,
  entities: [User],
  synchronize: true,
});

export default AppDataSource;

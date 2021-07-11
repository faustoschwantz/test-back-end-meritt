import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig = (): TypeOrmModuleOptions => {
  const base = {
    type: process.env.TYPEORM_CONNECTION as any,
    autoLoadEntities: true,
    migrations: [process.env.TYPEORM_MIGRATIONS_DIST],
    cli: {
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    },
  };

  if (process.env.DATABASE_URL)
    return {
      ...base,
      url: process.env.DATABASE_URL,
    };

  return {
    ...base,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
  };
};

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig = (): TypeOrmModuleOptions => {
  return {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.DATABASE_URL,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    autoLoadEntities: true,
    migrations: [process.env.TYPEORM_MIGRATIONS_DIST],
    cli: {
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    },
  };
};

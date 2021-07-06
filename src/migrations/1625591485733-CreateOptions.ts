import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOptions1625591485733 implements MigrationInterface {
  name = 'CreateOptions1625591485733';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "options" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" character varying NOT NULL, "value" character varying NOT NULL, "correct" boolean NOT NULL, "questionId" character varying NOT NULL, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "options"`);
  }
}

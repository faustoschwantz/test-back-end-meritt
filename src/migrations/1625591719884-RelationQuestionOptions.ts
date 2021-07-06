import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationQuestionOptions1625591719884
  implements MigrationInterface
{
  name = 'RelationQuestionOptions1625591719884';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "questionId"`);
    await queryRunner.query(
      `ALTER TABLE "options" ADD "questionId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "options" ADD CONSTRAINT "FK_46b668c49a6c4154d4643d875a5" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "options" DROP CONSTRAINT "FK_46b668c49a6c4154d4643d875a5"`,
    );
    await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "questionId"`);
    await queryRunner.query(
      `ALTER TABLE "options" ADD "questionId" character varying NOT NULL`,
    );
  }
}

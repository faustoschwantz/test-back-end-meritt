import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationExamQuestions1625591022960 implements MigrationInterface {
  name = 'RelationExamQuestions1625591022960';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "examId"`);
    await queryRunner.query(
      `ALTER TABLE "questions" ADD "examId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "questions" ADD CONSTRAINT "FK_32cd92f2cd6b9438d6425bff0b8" FOREIGN KEY ("examId") REFERENCES "exams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" DROP CONSTRAINT "FK_32cd92f2cd6b9438d6425bff0b8"`,
    );
    await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "examId"`);
    await queryRunner.query(
      `ALTER TABLE "questions" ADD "examId" character varying NOT NULL`,
    );
  }
}

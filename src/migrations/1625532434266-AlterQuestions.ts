import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterQuestions1625532434266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'questions',
      new TableColumn({
        name: 'examId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'questions',
      new TableForeignKey({
        columnNames: ['examId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exams',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('questions', 'examId');
    await queryRunner.dropColumn('questions', 'examId');
  }
}

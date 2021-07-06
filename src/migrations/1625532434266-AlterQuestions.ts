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
    const table = await queryRunner.getTable('questions');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('examId') !== -1,
    );
    await queryRunner.dropForeignKey('questions', foreignKey);
    await queryRunner.dropColumn('questions', 'examId');
  }
}

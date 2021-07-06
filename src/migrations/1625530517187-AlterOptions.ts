import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterOptions1625530517187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'options',
      new TableColumn({
        name: 'questionId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'options',
      new TableForeignKey({
        columnNames: ['questionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('options');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('questionId') !== -1,
    );
    await queryRunner.dropForeignKey('options', foreignKey);
    await queryRunner.dropColumn('options', 'questionId');
  }
}

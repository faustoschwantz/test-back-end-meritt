import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOptions1625447950020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'key',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'varchar',
          },
          {
            name: 'correct',
            type: 'bool',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('options');
  }
}

import { Column } from 'typeorm';

export class BaseEntity {
  @Column('int2')
  status: number;

  @Column('timestamptz', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamptz', { name: 'updated_at' })
  updatedAt: Date;
}

import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export class BaseEntity {
  @Column('int4', {default: 1})
  status: number;

  @Column('timestamptz', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamptz', { name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  createTimestamps() {
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
  }

  @BeforeUpdate()
  updateTimestamps() {
    this.updatedAt = new Date();
  }
}

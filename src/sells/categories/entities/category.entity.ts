import { BaseEntity } from 'src/shared/persistence/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;
  
    @Column('varchar', {
        length: 50,
        unique: true,
        name: 'name',
      })
    name: string;
  
    @Column('varchar', {length: 50})
    description: string;

}

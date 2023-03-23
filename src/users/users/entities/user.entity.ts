import { BaseEntity } from 'src/shared/persistence/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: number;
  
    @Column('varchar', {
        length: 50,
        unique: true,
        name: 'email',
      })
    name: string;
  
    @Column({ name: 'password_hash' })
    passwordHash: string;

}

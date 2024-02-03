import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  activationToken: string;

  @Column({ type: 'simple-json', nullable: true })
  avatar: {
    url: string;
    publicId: string;
  };

  @Column({ type: 'text' })
  username: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'simple-array', default: [] })
  favorites: string[];

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({ type: 'simple-array', default: [] })
  tokens: string[];
}

export default User;

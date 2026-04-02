import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import bcrypt from 'bcrypt';
import { Token } from './token.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];
  async validatePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }
}

import { IsString } from 'class-validator';

export class Register {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

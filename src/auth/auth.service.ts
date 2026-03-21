import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly JWTService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const user = this.userRepository.create(registerDto);
    return this.userRepository.save(user);
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    const tokenPayload = { userId: user.id, username: user.username };
    return {
      access_token: this.JWTService.sign(tokenPayload),
    };
  }

  private async validateUser(
    username: string,
    password: string,
  ): Promise<User> {
    const user = await this.userRepository.findOneBy({ username });
    const checkPassword = await user?.validatePassword(password);
    if (!user || !checkPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}

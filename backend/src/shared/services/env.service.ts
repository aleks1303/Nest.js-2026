import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  public readonly jwtSecret: string;
  public readonly accessTokenExpirationTime: number;
  public readonly refreshTokenExpirationTime: number;
  public readonly dbType: string;
  public readonly dbHost: string;
  public readonly dbPort: number;
  public readonly dbUsername: string;
  public readonly dbPassword: string;
  public readonly dbDatabase: string;

  constructor(private configService: ConfigService) {
    this.jwtSecret = configService.get<string>(
      'JWT_SECRET',
      '2737d42f61571c0c0cd08adef9ece8d941b7c6bc3b7f2991885dc552d3950e93dd7bba32f17c1c24',
    );
    this.accessTokenExpirationTime = configService.get<number>(
      'ACCESS_TOKEN_EXPIRATION_TIME',
      1200,
    );
    this.refreshTokenExpirationTime = configService.get<number>(
      'REFRESH_TOKEN_EXPIRATION_TIME',
      3600,
    );
    this.dbType = configService.get<string>('DB_TYPE', 'mysql');
    this.dbHost = configService.get<string>('DB_HOST', 'localhost');
    this.dbPort = configService.get<number>('DB_PORT', 3307);
    this.dbUsername = configService.get<string>('DB_USERNAME', '');
    this.dbPassword = configService.get<string>('DB_PASSWORD', '');
    this.dbDatabase = configService.get<string>('DB_DATABASE', 'nestjs_2026');
  }
}

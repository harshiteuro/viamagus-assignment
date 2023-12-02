// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  validateToken(token: string): boolean {
    const expectedToken = this.configService.get('JWT_SECRET');
    return token === expectedToken;
  }
}
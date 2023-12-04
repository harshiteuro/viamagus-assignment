import { Controller, Get, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';


@Controller('auth')
export class AuthController {
  constructor(private readonly configService: ConfigService,private readonly jwtService: JwtService) {}

  @Get('login')
  async login() {

    const username = this.configService.get('USERNAME');
    const password = this.configService.get('PASSWORD');
   
    const payload = { username: username, password: password}; // You can customize the payload as needed
    return {
        access_token: this.jwtService.sign(payload),
    }
   }
}

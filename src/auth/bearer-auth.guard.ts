import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class BearerAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService,private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeaders(request);

    const username = this.configService.get('USERNAME');
    const password = this.configService.get('PASSWORD');
    const decoded = this.jwtService.verify(token.replace(/^Bearer\s/, ''));
    return username===decoded.username && password===decoded.password;
  }

  private extractTokenFromHeaders(request: any): string | null {
    const authHeader = request.headers.authorization;
    if (authHeader) {
      return authHeader;
    }
    return null;
  }
}
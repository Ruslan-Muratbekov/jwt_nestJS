import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AppService {
  constructor(
    private jwtService: JwtService
  ) {
  }

  private async generateTokens(payload) {
    const accessToken = await this.jwtService.signAsync(
      payload,
      {
        secret: 'SECRET_KEY_ACCESS',
        expiresIn: '30m'
      }
    )
    const refreshToken = await this.jwtService.signAsync(
      payload,
      {
        secret: 'SECRET_KEY_REFRESH',
        expiresIn: '7d'
      }
    )
    return {
      accessToken,
      refreshToken
    }
  }
}
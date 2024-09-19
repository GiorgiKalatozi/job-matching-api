import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtStrategyName } from '../enums';
import { JwtPayloadRefreshToken } from '../interfaces';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  JwtStrategyName.JWT_REFRESH,
) {
  constructor(public readonly config: ConfigService) {
    super({
      // extract jwt from authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // verify jwt signature
      secretOrKey: 'rt-secret',
      //   with this one we have access request object to validate method
      passReqToCallback: true,
    });
  }

  // this methods is called after jwt is decoded and verified
  async validate(req: Request, payload: JwtPayloadRefreshToken) {
    // payload contains info about the user
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    return { ...payload, refreshToken };
  }
}

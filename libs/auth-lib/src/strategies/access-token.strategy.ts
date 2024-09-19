import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces';
import { JwtStrategyName } from '../enums';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  JwtStrategyName.JWT,
) {
  constructor(public readonly config: ConfigService) {
    super({
      // extract jw t from authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // verify jwt signature
      secretOrKey: config.get('ACCESS_TOKEN_SECRET'),
    });
  }

  // this methods is called after jwt is decoded and verified
  async validate(payload: JwtPayload) {
    // payload contains info about the user === req.user
    return payload;
  }
}

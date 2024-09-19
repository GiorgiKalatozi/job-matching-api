import { AuthGuard } from '@nestjs/passport';
import { JwtStrategyName } from '../enums';

export class RefreshTokenGuard extends AuthGuard(JwtStrategyName.JWT_REFRESH) {
  constructor() {
    super();
  }
}

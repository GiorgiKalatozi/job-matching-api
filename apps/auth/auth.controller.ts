import {
  AuthLibService,
  RefreshTokenGuard,
  SignInDto,
  SignUpDto,
  Tokens,
} from '@app/auth-lib';
import { GetCurrentUser, GetCurrentUserId } from '@app/auth-lib/decorators';
import { Public } from '@app/common';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthLibService) {}

  @Public()
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() signUpDto: SignUpDto): Promise<Tokens> {
    return this.authService.signUp(signUpDto);
  }

  @Public()
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() signInDto: SignInDto): Promise<Tokens> {
    return this.authService.signIn(signInDto);
  }

  @Post('/signout')
  @HttpCode(HttpStatus.OK)
  signOut(@GetCurrentUserId() userId: number): Promise<void> {
    return this.authService.signOut(userId);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    console.log({ refreshToken });
    return this.authService.refreshTokens(userId, refreshToken);
  }
}

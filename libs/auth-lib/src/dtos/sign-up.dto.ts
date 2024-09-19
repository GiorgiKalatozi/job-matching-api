import { IsEmail, IsString, Length } from 'class-validator';

export class SignUpDto {
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsString({ message: 'Username must be a string' })
  @Length(3, 20, {
    message: 'Username must be between 3 and 20 characters long',
  })
  username: string;

  @IsString({ message: 'Password must be a string' })
  @Length(6, 20, {
    message: 'Password must be between 6 and 20 characters long',
  })
  password: string;
}

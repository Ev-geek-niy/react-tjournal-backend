import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3)
  fullname: string;

  @IsEmail({ allow_display_name: true }, { message: 'Неверная почта' })
  email: string;

  @Length(6, 32, { message: 'Пароль должен быть не менее 6 символов' })
  password?: string;
}

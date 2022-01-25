import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3)
  fullName: string;

  @IsEmail({ allow_display_name: true }, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже есть',
  })
  email: string;

  @Length(3, 32, { message: 'Пароль должен быть не менее 6 символов' })
  password?: string;
}

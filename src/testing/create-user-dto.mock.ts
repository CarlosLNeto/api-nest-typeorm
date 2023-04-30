import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  email: 'teste@gmail.com',
  name: 'Teste Unitario',
  password: 'senha123',
  role: Role.User,
};

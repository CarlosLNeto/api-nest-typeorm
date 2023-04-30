import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '2000-01-01',
  email: 'teste@gmail.com',
  name: 'Teste Unitario',
  password: '123456',
  role: Role.User,
};

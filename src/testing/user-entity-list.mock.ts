import { Role } from "../enums/role.enum";
import { UserEntity } from "../user/entity/user.entity";

export const userEntityList: UserEntity[] = [{
    name: 'Teste Unitario',
    email: 'teste@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$Yu/sVkHMWVCVqLeJOSMssOkslfjEh5iIEOAkzjyPnJ2KWq0QEC4py',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    name: 'Carlos Neto',
    email: 'teste@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$Yu/sVkHMWVCVqLeJOSMssOkslfjEh5iIEOAkzjyPnJ2KWq0QEC4py',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date()
},
{
    name: 'Kaue Franca',
    email: 'teste@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$Yu/sVkHMWVCVqLeJOSMssOkslfjEh5iIEOAkzjyPnJ2KWq0QEC4py',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date()
}]
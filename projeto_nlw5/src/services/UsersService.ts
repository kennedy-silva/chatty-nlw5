import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        //Verificar se o usario existe

        const userExists = await usersRepository.findOne({
            email,
        });

        if(userExists) {
            return userExists;
        }

        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        //Se não existir, salvar no banco de dados
        return user;
        //Se existir, retornar user
    }
}

export { UsersService };
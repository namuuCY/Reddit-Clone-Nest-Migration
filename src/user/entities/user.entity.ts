import { CustomBaseEntity } from '@/common/CustomBaseEntity.entity';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends CustomBaseEntity {
	@Column()
	username: string;

	@Column()
	password: string;

	@Column()
	nickname: string;

	// public static from(request: CreateUserDto): User {
	//     return new User(
	//         request.get
	//     )
	// }
}

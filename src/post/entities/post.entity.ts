import { CustomBaseEntity } from '@/common/CustomBaseEntity.entity';
import { User } from '@/user/entities/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@Entity()
export class Post extends CustomBaseEntity {
	@ManyToOne(() => User, { nullable: false })
	user: User;

	@RelationId((post: Post) => post.user)
	userId: number;

	@Column()
	postTitle: string;

	@Column('text')
	postContent: string;

	@Column()
	postVoteCount: number;

	@Column()
	postCommentCount: number;

	@Column()
	isDraft: boolean;
}

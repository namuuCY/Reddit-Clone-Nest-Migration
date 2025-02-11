import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@/database/database.module';
import { CommonModule } from '@/common/common.module';
import { UserModule } from '@/user/user.module';
import { PostModule } from './post/post.module';

@Module({
	imports: [DatabaseModule, CommonModule, UserModule, PostModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [StudentModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

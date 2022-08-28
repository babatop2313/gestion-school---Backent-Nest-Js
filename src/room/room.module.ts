import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { StudentService } from 'src/student/student.service';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports : [StudentModule],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}

import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { StudentService } from 'src/student/student.service';
@Injectable()
export class RoomService {

  rooms = [];
  r1 = new CreateRoomDto(1, "Terminale S1");
  r2 = new CreateRoomDto(2, "Terminale L2");
  constructor(private readonly studentService: StudentService){
    this.rooms.push(this.r1);
    this.rooms.push(this.r2);
  }
 
  create(createRoomDto: CreateRoomDto) {
    const last = this.rooms.length;
    createRoomDto.id = last + 1;
    return this.rooms.push(createRoomDto);
  }

  findAll() {
    return this.rooms;
  }
  findStudents(id: number){
     return this.studentService.findAllInRoom(id);
  }
  findOne(id: number) {
    const index = this.rooms.findIndex((room) =>room.id == id);
    return this.rooms[index];
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    const index = this.rooms.findIndex((room) =>room.id == id);
    this.rooms[index] = {...this.rooms[index], ...updateRoomDto};
    return this.rooms[index];
  }

  remove(id: number) {
    const index = this.rooms.findIndex((room) =>room.id == id);
    this.rooms.splice(index, 1);
    return true;
  }
}

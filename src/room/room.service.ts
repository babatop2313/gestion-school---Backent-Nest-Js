import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {

  rooms = [];
  r1 = new CreateRoomDto(1, "Terminale S1");
  r2 = new CreateRoomDto(2, "Terminale L2");
  constructor(){
    this.rooms.push(this.r1);
    this.rooms.push(this.r2);
  }
 
  create(createRoomDto: CreateRoomDto) {
    return this.rooms.push(createRoomDto);
  }

  findAll() {
    return this.rooms;
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

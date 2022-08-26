import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

  students = [];
  s1= new CreateStudentDto(1, "Modou", "Ndiaye","12/2/2000", "jaxaye", 1);
  s2 = new CreateStudentDto(2, "Tapha", "Diop","12/2/2005", "Guediawaye",1);
  s3 = new CreateStudentDto(3, "Ousseynou", "Gueye","12/2/1998", "Pikine", 2)
  s4 = new CreateStudentDto(4, "Cheikh", "Lo","12/2/2000", "jaxaye", 2);
constructor(){
  this.students.push(this.s1);
  this.students.push(this.s2);
  this.students.push(this.s3);
  this.students.push(this.s4);
}
  

  create(createStudentDto: CreateStudentDto) {
    const last = this.students.length;
    createStudentDto.id = last + 1;
    return this.students.push(createStudentDto);
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const index = this.students.findIndex((student) =>student.id == id);
    const result = this.students[index];
    return result;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const index = this.students.findIndex((student) =>student.id == id);
    this.students[index] = {...this.students[index], ...updateStudentDto};
    return this.students[index];
  }

  remove(id: number) {
     const index = this.students.findIndex((student) =>student.id == id);
     this.students.splice(index, 1);
     return true;
  }
}

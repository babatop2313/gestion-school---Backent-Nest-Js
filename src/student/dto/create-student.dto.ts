export class CreateStudentDto {
        id: number ;
		Fname : string;
        Lname : string;
        birthday : Date;
        address : string;
        idRoom : number;

    constructor(id , Fname, Lname, birthday, address, idRoom) {
      
		this.id = id;
		this.Fname = Fname;
        this.Lname = Lname;
        this.birthday = birthday;
        this.address = address;
        this.idRoom = idRoom;

	}
}

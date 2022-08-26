export class CreateRoomDto {

    id:  number;
    name: string;
    list_stud : [number];
    constructor(id , name) {
		this.id = id;
		this.name = name;
	}
}

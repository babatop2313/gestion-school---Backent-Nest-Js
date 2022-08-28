export class CreateRoomDto {

    id:  number;
    name: string;
    constructor(id , name) {
		this.id = id;
		this.name = name;
	}
}

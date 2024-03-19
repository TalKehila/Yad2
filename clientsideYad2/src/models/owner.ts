class Owner
{
    id:number;
    name:string;
    phoneNumber:string;
    city:string;

    constructor(id:number=0, name:string="" ,phone:string="" ,city:string="")
    {
          this.id = id;
          this.name = name;
          this.phoneNumber = phone;
          this.city = city;
    }

}
export default Owner
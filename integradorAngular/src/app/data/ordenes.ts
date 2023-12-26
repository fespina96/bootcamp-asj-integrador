import { Orden } from "../interfaces/orden";

export const ordenesData:Array<Orden> = [
    {order_num:1,emision:new Date("2012-12-12"),entrega_estimada:new Date("2013-12-19"),address:"Calle 123",prov_id:1,products:["Remera Juancito","Remera Juancito"],total:20000,estado:true},
    {order_num:2,emision:new Date("2017-01-21"),entrega_estimada:new Date("2017-10-09"),address:"Calle 123",prov_id:2,products:["Control Remoto Universal","Joystick Gamer"],total:54000,estado:true},
    {order_num:3,emision:new Date("2016-02-29"),entrega_estimada:new Date("2016-03-01"),address:"Calle 123",prov_id:2,products:["Control Remoto Universal"],total:4000,estado:true},
];
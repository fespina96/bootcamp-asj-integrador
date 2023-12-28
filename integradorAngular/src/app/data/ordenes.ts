import { Orden } from "../interfaces/orden";

export const ordenesData:Array<Orden> = [
    {order_num:1,emision:"2012-12-12",entrega_estimada:"2013-12-19",address:"Calle 123",prov_id:"A000",products:[{prod_id:"A001",qty:2}],total:20000,estado:true},
    {order_num:2,emision:"2017-01-21",entrega_estimada:"2017-10-09",address:"Calle 123",prov_id:"B000",products:[{prod_id:"B001",qty:1},{prod_id:"B002",qty:1}],total:54000,estado:true},
    {order_num:3,emision:"2016-02-29",entrega_estimada:"2016-03-01",address:"Calle 123",prov_id:"B000",products:[{prod_id:"B002",qty:2}],total:4000,estado:true},
];
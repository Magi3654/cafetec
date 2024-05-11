import { prisma } from "../../../../config/db.js";

export default async function handler(req, res){
    switch(req.method){
        case "GET":
            return await getCard(req, res);
        case "POST":
            return await addCard(req, res);
    }
}

const getCard = async(req, res)=> {

    try{
            
        const result = await prisma.payment.findMany();
        console.log(result);
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addCard = async(req, res)=>{
    try{

        const {cardNumber,valid, cvv} = req.body
        const data ={
              
            cardNumber :  cardNumber, 
            valid      : valid, 
            cvv        : cvv,
     }
        const result = await prisma.payment.create({
            data  : data,
            select:{
                id: true,
                type : true,

            }
        })
        return res.status(200).json(result); 
    }catch(error){
        return res.status(500).json(error);
    }
}
import { prisma } from "../../../../config/db.js";

export default async function handler(req, res){
    switch(req.method){
        case "GET":
            return await getProduct(req, res);
        case "POST":
            return await addProduct(req, res);
    }
}

const getProduct = async(req, res)=> {

    try{
            
        const result = await prisma.product.findMany();
        console.log(result);
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addProduct = async(req, res)=>{
    try{
        const data ={
            
            nameproduct :"Cafe",
            description  :"12 Oz",
            price  :10.00, 
            categories :"Bebidas calientes",

            nameproduct :"Licuado de Fresa",
            description  :"12 Oz",
            price  :25.00, 
            categories :"Bebidas frias",

            nameproduct :"Coca-Cola",
            description  :"Botella de 600ml",
            price  :10.00, 
            categories :"Bebidas frias",

            nameproduct :"Cappuchino",
            description  :"12 Oz",
            price  :15.00, 
            categories :"Bebidas calientes",

        }
        const result = await prisma.product.create({
            data : data
        })
        return res.status(200).json(result); 
    }catch(error){
        return res.status(500).json(error);
    }
}
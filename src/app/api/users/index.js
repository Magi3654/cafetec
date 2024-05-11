import { prisma } from "../../../config/db.js";

export default async function handler(req, res){
    switch(req.method){
        case "GET":
            return await getUser(req, res);
        case "POST":
            return await addUser(req, res);
    }
}

const getUser = async(req, res)=> {

    try{
            
        const result = await prisma.user.findMany();
        console.log(result);
        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error);
    }
}

const addUser = async(req, res)=>{
    try{
        const data ={
            username: "IlseM",
            email : "al21760550@ite.edu.mx",
            password: "suga9608"
        }
        const result = await prisma.user.create({
            data : data
        })
        return res.status(200).json({success : true}); 
    }catch(error){
        return res.status(500).json(error);
    }
}
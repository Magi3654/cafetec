import { prisma } from "../../../../config/db.js";

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
        
        const {username, userlastname, email, password} = req.body
        const data ={
              
            username   :username,
            userlastname :userlastname,
            email        :email,
            password   :password

        }
        const result = await prisma.user.create({
            data : data,
            select:{
                id:true,
            }
        })
        return res.status(200).json(result); 
    }catch(error){
        return res.status(500).json(error);
    }
}


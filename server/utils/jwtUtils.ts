import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET!, {
        expiresIn: '3d'
    });
}


const decodeToken = (token: string) => {
    return jwt.verify(token,process.env.JWT_SECRET!, (err,decoded) =>{
        if(err){
            return undefined
        }
        return decoded
    })
}

export {generateToken, decodeToken}
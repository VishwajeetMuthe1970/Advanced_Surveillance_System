const prisma = require('../prisma/index')

const jwt = require('jsonwebtoken')

const isloggedin = async(req, res, next)=>{
    try{
        // Get token from header
        const token = req.cookie.token
        if(!token){
            res.send('please login')
            throw new Error('You are not logged in ')
        }
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await prisma.user.findUnique({
            where: {
                id: decoded.userId
            }
        })

        // you can do more check
        next()

    }catch(error){
        throw new Error(error)
    }
}
export default (req,res,next)=> {
    try {
        return res.status(200).json({
            succes:true,
            message: "user logged out",
            response: null
        })
    } catch (error) {
        next(error)
    }
}
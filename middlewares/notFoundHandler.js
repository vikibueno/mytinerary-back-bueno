export default function(req, res, next) {
    console.log(req.url);
    console.log(req.method);
  //  next(createError(404));
    return res.status(404).json({
      succes: false,
      message: 'not found'+req.method+' '+req.url,
      response: null
    })
  }
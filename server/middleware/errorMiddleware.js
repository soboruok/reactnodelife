//next is for futher middlware
//500: servier error
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  //pass message, stack.
  res.json({
    message: err.message,
    //when it is production, don't show error which is null.
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};

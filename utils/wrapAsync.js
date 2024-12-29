function wrapAsync(fn) {
  return function (req, res, next) {
    //fn(req, res, next).catch((err) => next(err));
    //or
    fn(req, res, next).catch(next);
  };
}

module.exports = wrapAsync;

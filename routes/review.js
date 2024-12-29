const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

//Reviews
//post route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.add));

//Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.remove)
);

module.exports = router;

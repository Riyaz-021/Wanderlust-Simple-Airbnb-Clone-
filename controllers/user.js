const express = require("express");
const User = require("../models/user.js");

module.exports.signup = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.postSignUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = await User({ email, username });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User was registered successfully!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.login = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.postLogin = async (req, res) => {
  req.flash("success", "Welcome to Wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You have logged out");
    res.redirect("/listings");
  });
};

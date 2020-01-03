const Users = require('./auth-model');

// I migth try this:
// const Joi = require('joi');
//   const loginSchema = Joi.object().keys({
//     username: Joi.string()
//       .min(3)
//       .max(10)
//       .required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
//   });
  
//   app.post('/login', function(req, res) {
//     const valid = Joi.validate(req.body, loginSchema).error === null;
//     if (!valid) {
//       res.status(422).json({
//         status: 'error',
//         message: 'Invalid request data',
//         data: req.body
//       });
//     } else {
//       // happy days - login user
//       res.send(`ok`);
//     }
//   });

module.exports = async (req, res, next) => {
  const errors = [];

  function validateNewUser(user) {
    !user.username && errors.push({ username: 'required' });
    !user.password && errors.push({ password: 'required' });
    !user.email && errors.push({ email: 'required' });

    //Validate Char Length
    Object.keys(user).map(x => {
      if (
        x === "password" ||
        x === "username" ||
        x === "email"
      ) {
        const key = user[x].length;

        //Verify Length Min
        if (key < 4 && x) {
          errors.push({ [x]: "Must be a minimum of 5 chars" });
        }

        //Verify Length Max
        if (key > 50 && x) {
          errors.push({ [x]: "Must be a maximum of 50 chars" });
        }

        //Validate Email Pattern
        if (x === "email") {
          //Cats got your keyboard... When in doubt, Reg it out
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user[x]) &&
            errors.push({ error: "Unexpected Email Address" });
        }
      } 
    });
  }

  validateNewUser(req.body);

  // Does user exist?
  if (!errors.length) {
    await Users.findByName(req.body.username)
      .then(user => user && errors.push({ username: 'Username Already Exists!' }));
    await Users.findByEmail(req.body.email)
      .then(email => email && errors.push({ email: 'Email Already Exist!' }));
  }

  // OK we are probably safe to move on send conflict error
  errors.length < 1 ? next() : res.status(409).json({ errors: errors });
}
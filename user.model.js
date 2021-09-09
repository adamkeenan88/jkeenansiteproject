const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      // here we create validation in the mongoose model
      validate: {
        // this function must return true or false
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        // define error message if above is false
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },
    // This is embedding with mongodb
    posts: [{ post_id: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

// mongoose virtuals allow you to use post data without having to add an extra field to your model
// notice how there is NO confirmPassword field in the model above
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// This will run BEFORE the validations in the model
// mongoose "pre" allow you to run code before certain steps in mongoose process
UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Pasword must match confirm password");
  }
  next();
});

// runs before save
UserSchema.pre("save", function (next) {
  bcrypt
    // hash password sent in postData with a salt of 10
    .hash(this.password, 10)
    .then((hash) => {
      // setpassword before doc saves to db
      this.password = hash;
      // next just means go to the NEXT process... i.e. ok we are done here move on
      next();
    })
    .catch((err) => console.log(err));
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

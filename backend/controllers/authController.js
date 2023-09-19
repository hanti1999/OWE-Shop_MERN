import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: 'Tạo tài khoản thành công!' });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Không thể tạo tài khoản', error: err });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'tai khoan khong ton tai' });
    }

    // if user is exist then check the password
    const checkCorrectPassowrd = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if passowrd is incorrect
    if (!checkCorrectPassowrd) {
      return res
        .status(401)
        .json({ success: false, message: 'sai email hoac mat khau' });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Khong the dang nhap' });
  }
};

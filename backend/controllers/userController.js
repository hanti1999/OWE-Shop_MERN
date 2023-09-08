import User from '../models/User.js';

// create new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: 'Da tao thanh cong!',
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Loi!', error: err });
  }
};

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Da thay doi thanh cong!',
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Loi, khong the thay doi!',
      error: err,
    });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Da xoa thanh cong!',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Loi, khong the xoa!',
      error: err,
    });
  }
};

// get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: 'Da tim thay sp!',
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

// get all user
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      count: users.length,
      message: 'Da tim thay sp!',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Loi, khong tim thay!',
      error: err,
    });
  }
};

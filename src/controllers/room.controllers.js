const Room = require("../models/Room.model");

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    return res.render("rooms", { rooms });
  } catch (error) {
    console.error(error);
    return res.render("rooms", { error });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById({ _id: roomId });
    return res.render("room", { room });
  } catch (error) {
    console.error(error);
    return res.render("room", { error });
  }
};


module.exports.hello = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Welcome to the Video Compression.",
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: "Something went wrong",
    });
  }
};
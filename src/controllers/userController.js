const loginUser = (req, res) => {
  return res.json({ messsage: "Hello from Login APi" });
};

const registerUser = (req, res) => {
  return res.json({ messsage: "Hello from Login APi" });
};
const helloUser = (req, res) => {
  return res.json({ messsage: "Hello By Shivam" });
};
module.exports = {
  loginUser,
  registerUser,
  helloUser,
};

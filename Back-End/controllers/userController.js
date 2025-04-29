const { client } = require('../database'); // Import MongoDB client 


async function getAllUsers(req, res) {
  try {
    const users = await client.db("sample_mflix").collection("users").find().toArray();
    console.log(users); // Log users to the console
    res.status(200).json(users); // Send back users in JSON format
  } catch (error) {


    res.status(500).json({ message: "Error fetching users", error });
  }
}


async function createUser(req, res) {
  try {
    const newUser = req.body; 
    const result = await client.db("sample_mflix").collection("users").insertOne(newUser);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
}

// // GET a user by ID (from MongoDB)
// async function getUserById(req, res) {
//   try {
//     const userId = req.params.id;
//     const user = await client.db("CourseDashboard").collection("users").findOne({ _id: userId });
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user", error });
//   }
// }

// // PUT (update) a user by ID
// async function updateUser(req, res) {
//   try {
//     const userId = req.params.id;
//     const updatedData = req.body; 
//     const result = await client.db("CourseDashboard").collection("users").updateOne({ _id: userId }, { $set: updatedData });
//     if (result.matchedCount > 0) {
//       res.status(200).json({ message: "User updated successfully" });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// }

// // delete a user by ID
// async function deleteUser(req, res) {
//   try {
//     const userId = req.params.id;
//     const result = await client.db("CourseDashboard").collection("users").deleteOne({ _id: userId });
//     if (result.deletedCount > 0) {
//       res.status(200).json({ message: "User deleted successfully" });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// }

module.exports = { getAllUsers };
// , createUser, getUserById, updateUser, deleteUser
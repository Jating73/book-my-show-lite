const mongoose = require('mongoose');

// Function to keep the MongoDB connection alive
async function keepDbAlive() {
    try {
        // Perform a simple query to keep the connection alive
        await mongoose.connection.db.admin().ping();
        console.log("Mongoose: Pinged MongoDB to keep the connection alive!");
    } catch (error) {
        console.error("Mongoose: Error pinging MongoDB:", error);
    }
}

// Schedule the ping function to run every 10 minutes
setInterval(keepDbAlive, 10 * 60 * 1000); // 10 minutes in milliseconds

module.exports = keepDbAlive;

const mongoose = require('mongoose');

const connectToDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI, {
            
        });

        console.log("DB Connected ")

    } catch (error) {
        console.error('DB Connection Failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectToDB
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected Successfully');
        });

        connection.on('error', (err) => {
            console.log('MongoDB connection failed', err);
            process.exit();
        });
        
    } catch (error) {
        console.log('something went wrong while connecting to the database', error);
    }
};
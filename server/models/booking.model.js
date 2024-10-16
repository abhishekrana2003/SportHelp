import {model, Schema} from 'mongoose';
const BookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    court: {
        type: Schema.Types.ObjectId,
        ref: 'Court',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
},{
    timestamps: true
})
export default model('Booking', BookingSchema);

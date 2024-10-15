import Booking from "../models/booking.model";
import Court from "../models/court.model";
import Sport from "../models/sport.model";
import Center from "../models/center.model";
import {
  response_200,
  response_201,
  response_400,
  response_401,
  response_500,
} from "../utils/responseCodes.js";
export async function viewBookings(req, res) {
  const { date, sport, center } = req.query;
  try {
    const foundSport = await Sport.findById(sport);
    if (!foundSport) {
      return response_400(res, "Sport not found");
    }
    const foundCenter = await Center.findById(center);
    if (!foundCenter) {
      return response_400(res, "Center not found");
    }
    const courts = await Court.find({
      sportId: sport,
      centerId: center,
    }).select("_id");
    const courtIds = courts.map((court) => court._id);
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);
    const bookings = await Booking.find({
      startTime: {
        $gte: startDate,
        $lt: endDate,
      },
      court: { $in: courtIds },
    });
    const responseData = {
      bookings: bookings,
      courts: courts,
    };
    return response_200(res, "Bookings fetched successfully", responseData);
  } catch (err) {
    return response_500(res, "Server Error", err);
  }
}

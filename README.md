Sports Technology Company Booking App(Game Theory)
College ID: IEC2021003
Project Overview
This project is a booking management system for a sports technology company, built to manage operations across multiple centres, each offering various sports with multiple courts/resources. The app allows customers to book 60-minute slots for their preferred sports and provides centre managers with the ability to view and manage all bookings.

Prerequisites
Node.js (v14.x or higher)
MongoDB (Local or MongoDB Atlas)
React.js (v17.x or higher)
npm (v6.x or higher)
dotenv (For managing environment variables)
cors, body-parser, express (for the backend)

Deployed Links
Frontend:”https://sport-help.vercel.app/”
Backend: “https://github.com/abhishekrana2003/SportHelp/tree/main/server”

Assumptions & Limitations
Only authorised users (centre managers) can manage bookings and access sensitive data.
The app assumes that the user has an active internet connection and MongoDB instance running.
Each booking slot is precisely 60 minutes long.
Currently, no payment gateway is implemented (future improvement).

Special Instructions
Ensure that MongoDB is running locally or connected via MongoDB Atlas before starting the backend.
For integration of frontend with the backend, ensure the environment variables point to the correct backend URL after deployment.




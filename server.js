import express from "express";
const listings = [
 { id: 1, title: "Nile View Apartment", pricePerNight: 85 },
 { id: 2, title: "Beach House", pricePerNight: 140 },
 { id: 3, title: "Desert Eco-Lodge", pricePerNight: 60 },
];


const app = express();
app.get("/api/listings", (req, res) => {
 res.json(listings);
});
app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});

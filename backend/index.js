
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("AI-Trip-Planner Backend is Running!");
});

// Explore route - Get all destinations
app.get("/api/destinations", (req, res) => {
    const destinations = [
        {
            name: "Puri",
            location: "Odisha, India",
            category: "beaches",
            description: "Explore golden beaches, the Jagannath Temple, and beautiful coastal views.",
            image: "/image/images.jpg",
        },
        {
            name: "Manali",
            location: "Himachal Pradesh, India",
            category: "mountains",
            description: "Discover mountain landscapes, peaceful valleys, and unforgettable adventures.",
            image: "/image/himalaya.jpg",
        },
        {
            name: "Jaipur",
            location: "Rajasthan, India",
            category: "heritage",
            description: "Experience royal palaces, historic forts, and colorful local markets.",
            image: "/image/Detail-Blog-30.jpg",
        },
        {
            name: "Goa",
            location: "India",
            category: "beaches",
            description: "Enjoy beautiful beaches, coastal sunsets, and relaxing holidays.",
            image: "/image/images.jpg",
        },
    ];

    res.json(destinations);
});

// Trip planner route - Generate trip plan
app.post("/api/plan-trip", (req, res) => {
    const { destination, duration, budget, travelType } = req.body;

    console.log("Trip request received:");
    console.log({
        destination,
        duration,
        budget,
        travelType,
    });

    res.json({
        message: "Trip plan generated successfully!",
        destination,
        duration,
        budget,
        travelType,
        plan: [
            "Explore local attractions",
            "Try local food",
            "Visit popular tourist places",
            "Enjoy your trip",
        ],
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

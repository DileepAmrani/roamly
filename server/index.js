import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API });

// Setup server
const app = express();
app.use(bodyParser.json());
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigin = [
            "http://localhost:3000",
            "https://roamly-one.vercel.app"
        ];
        const isAllowed = allowedOrigin.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};
app.use(cors(corsOptions));

// Endpoint for ChatGPT
app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `${prompt} max 12 words` }],
            model: 'gpt-3.5-turbo',
        });
        res.send(completion.choices[0].message);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

if (process.env.NODE_ENV === "production") {
    const buildPath = path.join(process.cwd(), "client", "build");
    app.use(express.static(buildPath));
    app.get("*", (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

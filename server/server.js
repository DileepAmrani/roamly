const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API });

// Setup server
const app = express();
app.use(bodyParser.json());
const corsOptions = {
    origin: (origin, callbak) => {
        const allowedOrigin = [
            "http://localhost:3000",
            "https://roamly-one.vercel.app"
        ]
        const isAlloed = allowedOrigin.includes(origin);
        callbak(null, isAlloed ? origin : false)
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions));

// Endpoint for ChatGPT
app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt + "max 15 words" }],
        model: 'gpt-3.5-turbo',
    });
    res.send(completion.choices[0].message);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

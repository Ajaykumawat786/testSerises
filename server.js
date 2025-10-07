// filename: server.js
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Rate limiter: 30 req/min
const limiter = rateLimit({ windowMs: 60 * 1000, max: 30 });
app.use("/api/", limiter);

// 🧠 यह तुम्हारा खुद का डेटा है (तुम चाहो तो इसे अलग JSON फाइल में रख सकते हो)
const quizData = {
  "rscit": [
    {
      question: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
      options: ["CPU", "Mouse", "Keyboard", "Monitor"],
      answer: "CPU",
      difficulty: "easy"
    },
    {
      question: "MS Word किस प्रकार का सॉफ्टवेयर है?",
      options: ["System Software", "Application Software", "Utility Software", "Language Software"],
      answer: "Application Software",
      difficulty: "easy"
    }
  ],
  "tally": [
    {
      question: "Tally में वाउचर का उपयोग किसलिए किया जाता है?",
      options: ["डेटा एंट्री", "रिपोर्ट बनाने", "अकाउंटिंग एंट्री करने", "चार्ट बनाने"],
      answer: "अकाउंटिंग एंट्री करने",
      difficulty: "medium"
    },
    {
      question: "Tally में ‘Gateway of Tally’ क्या दर्शाता है?",
      options: ["मुख्य मेनू", "रिपोर्ट विंडो", "डेटा एंट्री स्क्रीन", "सॉफ्टवेयर सेटिंग्स"],
      answer: "मुख्य मेनू",
      difficulty: "easy"
    }
  ]
};

// 🎯 API route
app.post("/api/generate", async (req, res) => {
  try {
    const { topic, difficulty = "easy", qty = 5 } = req.body;

    if (!topic) {
      return res.status(400).json({ error: "topic required" });
    }

    // अपने डेटा में से topic मैच करो
    const allQuestions = quizData[topic.toLowerCase()];
    if (!allQuestions) {
      return res.status(404).json({ error: "No data found for given topic" });
    }

    // difficulty फ़िल्टर करो
    const filtered = allQuestions.filter(q => q.difficulty === difficulty);

    // qty के हिसाब से slice करो
    const selected = filtered.slice(0, qty);

    return res.json({ questions: selected });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// 🔥 Server start
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

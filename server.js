import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// System prompt for the chatbot
const systemPrompt = `You are a friendly and engaging portfolio assistant for a web developer's portfolio website. Your role is to:
1. Answer frequently asked questions about the developer's services, skills, and projects
2. Help collect visitor information (name, email, interest areas) in a conversational way
3. Provide entertainment through interesting conversations
4. Be helpful, professional, and engaging

Portfolio Information:
- The developer is skilled in React, JavaScript, Web Development, UI/UX design
- They work with modern tech stack: React, Tailwind CSS, Vite
- Available for freelance projects and consultations
- Services include: Web Development, UI Component Design, Frontend Architecture

When collecting information, do it naturally in conversation, not like a form. Be conversational and friendly. Keep responses concise (2-3 sentences max) and engaging.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'OpenAI API key is not configured' });
    }

    // Format messages for OpenAI API
    const formattedMessages = [
      {
        role: 'system',
        content: systemPrompt,
      },
      ...messages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      })),
    ];

    // Call OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;

    res.json({
      success: true,
      message: botMessage,
    });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid OpenAI API key' });
    }

    res.status(500).json({
      error: error.response?.data?.error?.message || 'Error processing chat message',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 Chatbot API server running on http://localhost:${PORT}`);
  console.log(`📝 Chat endpoint: POST http://localhost:${PORT}/api/chat`);
});

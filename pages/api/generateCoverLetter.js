// pages/api/generateCoverLetter.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Only POST allowed' });
    }
  
    const { prompt } = req.body;
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );
  
      const data = await response.json();
      const result = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ error: 'Gemini API call failed', details: error.message });
    }
  }
  
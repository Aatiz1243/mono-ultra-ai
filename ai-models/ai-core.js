require('dotenv').config();  // Load environment variables
const apiKey = process.env.OPENAI_API_KEY; // Use the secure API key
console.log("API Key loaded securely");

async function getAIResponse(prompt) {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({ model: "gpt-4", prompt: prompt, max_tokens: 100 })
    });
    const data = await response.json();
    return data.choices[0].text;
}

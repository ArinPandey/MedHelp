const { GoogleGenerativeAI } = require('@google/generative-ai');
// require('dotenv').config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateMedicineData = async (medicineName) => {

  if(!medicineName || typeof medicineName !== 'string' || medicineName.trim().length === 0) {
    throw new Error('Invalid medicine name provided');
  }

  try{
    const model = ai.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
      Provide comprehensive, easy-to-understand medical information for the medicine: "${medicineName}".
      You must respond strictly in the following JSON format. Do not include markdown formatting or backticks.

      {
        "genericName": "string",
        "uses": "string",
        "howItWorks": "string",
        "dosage": "string",
        "commonSideEffects": "string",
        "seriousSideEffects": "string",
        "whoShouldAvoid": "string",
        "interactions": "string",
        "pregnancySafety": "string",
        "storage": "string",
        "precautions": "string"
      }
      
      Requirements:
      Ensure the language is clear, accurate, and accessible to a layperson.
      If the medicine name is not recognized, return "Information not available" for each field.
      Important: Include a disclaimer that this is AI-generated information and not medical advice.
    `;

    const result = await model.generateContent(prompt);
    if(!result || !result.response) {
      throw new Error('Received an empty response from the AI model.');
    }

    const responseText = result.response.text();
    
    return JSON.parse(responseText);
  }catch (error) {
    console.error('Medicine data generation error:', error.message);
    
    throw new Error(`Failed to generate medicine data: ${error.message}`);
  } 
};

module.exports = { generateMedicineData };

import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history, language } = await req.json();
    
    if (!process.env.API_KEY) {
      return NextResponse.json({ error: "API Key non configurée" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Instruction système ultra-précise pour le concierge de l'événement
    const systemInstruction = `Tu es "APP-Bot", l'assistant intelligent officiel de l'Africa Power Platform 2026.
    ÉVÉNEMENT : 20-21 Juin 2026 à Cotonou, Bénin (Palais des Congrès).
    TON : Chaleureux, technophile, professionnel et concis.
    EXPERTISE : Microsoft Power Platform (Power Apps, BI, Automate, Copilot, Pages).
    OBJECTIFS : 
    1. Aider à l'inscription (Pass Conférence, Full Access, Bootcamp).
    2. Informer sur le programme (Keynotes, Ateliers, Networking).
    3. Présenter les Speakers (Adama Traoré, Sarah Kouamé, etc.).
    LANGUE : Tu réponds en ${language === 'fr' ? 'français' : 'anglais'}.
    RÈGLES : Ne jamais inventer de dates. Si tu ne sais pas, invite à contacter contact@africapowerplatform.org. 
    FORMATTAGE : Utilise du texte clair, des listes à puces si nécessaire.`;

    // Préparation de l'historique pour le modèle
    // On transforme l'historique du frontend au format attendu par Gemini
    const contents = [
      ...(history || []).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });

    // Création d'un flux de streaming pour le frontend
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of response) {
            const content = chunk.text;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Erreur de communication avec l'IA" }, { status: 500 });
  }
}

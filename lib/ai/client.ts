export type AiRequest = {
  input: string;
};

export async function runAiRequest(request: AiRequest) {
  void request;
  throw new Error("AI client is not configured yet. Add OpenAI wiring before calling this.");
}

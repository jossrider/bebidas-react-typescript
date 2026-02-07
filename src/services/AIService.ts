import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
  async generateRecipe(promt: string) {
    const result = streamText({
      model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
      prompt: promt,
      system: 'eres un bartender de 40 años de experiencia que atendio al james bond',
      temperature: 0,
    })
    return result.textStream
  },
}

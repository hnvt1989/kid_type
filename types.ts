
export enum GameStatus {
  IDLE = 'IDLE',
  API_KEY_CHECK = 'API_KEY_CHECK',
  API_KEY_MISSING = 'API_KEY_MISSING',
  LOADING_WORDS = 'LOADING_WORDS',
  PLAYING = 'PLAYING',
  WORD_COMPLETED = 'WORD_COMPLETED',
  GAME_OVER = 'GAME_OVER',
  ERROR = 'ERROR',
}

export interface ApiKeyInfo {
  key: string | null;
  checked: boolean;
}

export interface GeminiWordResponse {
  words: string[];
}

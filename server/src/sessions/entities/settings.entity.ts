import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface SettingsEntity {
  roundTime: number;
  useTimer: boolean;
  scoreType: string;
  autoRevealingCards: boolean;
  scoreTypeShort: string;
  cardSet: number[];
}
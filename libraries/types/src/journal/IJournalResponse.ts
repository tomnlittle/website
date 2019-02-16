import { IJournal } from './IJournal';

export interface IJournalResponse {
  [year: string]: IJournal[];
}

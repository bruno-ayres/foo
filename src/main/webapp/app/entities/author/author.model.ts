import * as dayjs from 'dayjs';
import { IBook } from 'app/entities/book/book.model';

export interface IAuthor {
  id?: number;
  name?: string | null;
  birthDate?: dayjs.Dayjs | null;
  bookLists?: IBook[] | null;
}

export class Author implements IAuthor {
  constructor(public id?: number, public name?: string | null, public birthDate?: dayjs.Dayjs | null, public bookLists?: IBook[] | null) {}
}

export function getAuthorIdentifier(author: IAuthor): number | undefined {
  return author.id;
}

import * as dayjs from 'dayjs';
import { IAuthor } from 'app/entities/author/author.model';

export interface IBook {
  id?: number;
  title?: string | null;
  publicationDate?: dayjs.Dayjs | null;
  price?: number | null;
  author?: IAuthor | null;
}

export class Book implements IBook {
  constructor(
    public id?: number,
    public title?: string | null,
    public publicationDate?: dayjs.Dayjs | null,
    public price?: number | null,
    public author?: IAuthor | null
  ) {}
}

export function getBookIdentifier(book: IBook): number | undefined {
  return book.id;
}

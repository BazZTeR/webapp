import { User } from '../entities/user';

export class Comment {
    text: string;
    id: number;
    user: User;
}
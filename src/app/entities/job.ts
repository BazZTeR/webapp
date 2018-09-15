import { User } from "./user";

export class Job {
    id : number;
    creator : User;
    applicants : User[];
    Title: string
    skills : string[];
    text : string;
}

import { User } from "./user";

export class Job {
    id : number;
    creator : User;
    applicants : User[];
    skills : string[];
    text : string;
}

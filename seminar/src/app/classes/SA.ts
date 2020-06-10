import { Teacher } from 'src/app/classes/Teacher';
import { Class } from 'src/app/classes/class';
import { subject } from 'src/app/classes/subject'


export class SA {
    constructor(
        // public Code_schedule:number=0, 
        public Hour_in_dey: number = 1,
        public Clss: number,
        public Day: number = 1,
        public SubjectIn: number,
        public Teacher: number,
        public sub: boolean = false
    ) { }
}


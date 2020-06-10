import { Teacher } from 'src/app/classes/Teacher';
import { Class } from 'src/app/classes/class';
import { subject } from 'src/app/classes/subject';


export class Schedule {
    constructor(
        // public Code_schedule:number=0,
        public Hour_in_dey: number = 0,
        public Clss: Class = new Class(),
        public Day: number = 0,
        public SubjectIn: subject = new subject(),
        public teacher: Teacher = new Teacher()
    ) { }
}


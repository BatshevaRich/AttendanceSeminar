import { Teacher } from 'src/app/classes/Teacher';
// import { Day } from 'src/app/classes/Day';
import { Stutus } from 'src/app/classes/Stutus';
export class Presence {
    constructor(
        public DateDay: Date = new Date(),
        public Mis_Hour: number = 0,
        public StatusToDay: Stutus = Stutus.present,
        public CodeTeacher: Teacher = new Teacher(1234),
        public Day: number = 0
        //    =Day.ראשון
    ) { }
}


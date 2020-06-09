import { Teacher } from 'src/app/classes/Techer';
// import { Day } from 'src/app/classes/Day';
import { Stutus } from 'src/app/classes/Stutus';
export class Presence {
    constructor(
        public DateDay:Date=new Date(),
        public Mis_Hour:number=0,
        public StatusToDay:Stutus=Stutus.present,
        public CodeTecher:Teacher=new Teacher(1234),
       public Day:number=0
    //    =Day.ראשון
    ){}
}


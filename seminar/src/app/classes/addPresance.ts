import { Teacher } from 'src/app/classes/Techer';
// import { Day } from 'src/app/classes/Day';
import { Stutus } from 'src/app/classes/Stutus';
export class addPresence {
    constructor(
        public DateDay:Date=new Date(),
        public Mis_Hour:number=0,
        public StatusToDay:Stutus=Stutus.present,
        public CodeTecher:number,
       public Day:number=0
       ){}
}


import { Teacher } from 'src/app/classes/Techer';
import { Class } from './class';

export class presenceMat
{
    constructor(
        public teacher1:Teacher,
        public teacher2:Teacher,
        public bool:boolean,
        public hour:number,
        public day:number,
        public c:Class,
    ){}
 } 
//  public teacherName :string="",
//         public teacherTeken:boolean=false,
//         public className:string="",
//         public subjectName:string="",
//         public groups:boolean=false,
//         public group1:string="",
//         public group2:string=""
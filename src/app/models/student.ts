import { Generic } from "./generic";
import { ScoreFromCourse } from './score-from-course';

export class Student implements Generic {

    code: number = 0; 
    name: string = "";
    lastName: string = "";
    listOfScoresByCourse: ScoreFromCourse[] = [];
}

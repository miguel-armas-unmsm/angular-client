import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CommonService<Student> {

  override baseUrl = 'http://34.66.47.189/demo/business/v1/students';
  constructor(http: HttpClient) {
    super(http);
   }

}

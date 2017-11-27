import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 

  }

  // get questins from local storage
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }


  // add q to local storage
    addQuestion(question:Question){
      this.questions.unshift(question);
      // init local var
      let questions;

      if(localStorage.getItem('questions') === null){
        questions = [];
        // push new question
        questions.unshift(question);

        // set new array ti local storage
        localStorage.setItem('questions', JSON.stringify(questions));

      } else{
        questions = JSON.parse(localStorage.getItem('questions'));

        // add new q
        questions.unshift(question);

        // reset local storage
        localStorage.setItem('questions', JSON.stringify(questions));

       
      }
    }


      // remove q to local storage
      removeQuestion(question: Question){
        for(let i=0; i< this.questions.length; i++){
          if(question == this.questions[i]){
            this.questions.splice(i, 1);
            localStorage.setItem('questions', JSON.stringify(this.questions));
          }
        }
      }

}

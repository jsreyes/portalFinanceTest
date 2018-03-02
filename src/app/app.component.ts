declare var require: any

import { Component, OnInit,Pipe } from '@angular/core';
import { CurrentQuestion } from './filter/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // Definición variables
  title = 'app';
  public data = require('../assets/data/questions.json');
  public mapData;
  public currentValue = 0;
  public totalQuestions = 19;
  public scorePage = false;
  public questionsPage = true;
  public reviewPage = false;
  public score = 0;

  ngOnInit(){
    //from object to array
    this.mapData = this.data['data'];
    this.mapData = this.mapData.map((d,key)=>{
    return {
            key:key,
            statement: d.statement,
            options:d.options,
            answer:null,
            right_answer:d.right_answer
          }
    })
  }

  processQuestions(item){
    if(item === 'Next'){
      this.currentValue = this.currentValue + 1;
    } else if (item === 'First'){
      this.currentValue = 0;
    } else if (item === 'Last'){
      this.currentValue = this.totalQuestions;
    } else if (item === 'Preview'){
      this.currentValue = this.currentValue - 1;
    }
  }

  setAnswer(index,question){
    this.mapData[question].answer = index;
  }

  resetAnswers(){
    for(let data of this.mapData){
      data.answer = null;
    }
    this.processQuestions('First')
    this.questionsPage = true;
    this.scorePage = false;
    this.reviewPage = false;
  }

  submitQuiz(){
    this.totalScore();
    this.questionsPage = false;
    this.scorePage = true;
  }

  validateAnswer(answer,rightAnswer){
    if(answer){
      if (answer == rightAnswer) {
          return 1;
      }
      else{
        return 2;
      }
    }else {
      return 3;
    }
  }

  reviewQuiz(){
    this.scorePage = false;
    this.questionsPage = false;
    this.reviewPage = true;
  }


  totalScore(){
    this.score = 0;
    for(let data of this.mapData){
      if(data.answer == data.right_answer)
      {
        this.score = this.score + 1;
      }
    }

    if(this.score >=14){
      this.message = "Good!! You pass";
    }else if(this.score === 20){
      this.message = "Excellent!! You are very smart";
    } else{
      this.message = "You failed!!!";
    }
}

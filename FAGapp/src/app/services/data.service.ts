import { Injectable } from "@angular/core";
import { Question } from "../Models/Question";

@Injectable({
  providedIn: "root",
})
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        text: "what is your name ?",
        answer: "my name is brad",
        hide: true,
      },
      {
        text: "what is your faviorate Color ?",
        answer: "my faviorate Color is red",
        hide: true,
      },
      {
        text: "what is your faviorate Language ?",
        answer: "my faviorate Language is JS",
        hide: true,
      },
    ];
    localStorage.setItem("questions", JSON.stringify(this.questions));
  }

  getQuestions() {
    if (localStorage.getItem("questions") == null) {
      this.questions = [];
    } else {
      console.log(JSON.parse(localStorage.getItem("questions")));
      this.questions = JSON.parse(localStorage.getItem("questions"));
      console.log(typeof this.questions);
    }

    return this.questions;
  }
  AddQuestion(question: Question) {
    console.log(question);
    // this.questions.unshift(question);
    let questions: Question[];
    if (localStorage.getItem("questions") === null) {
      questions = [];
      questions.unshift(question);
      localStorage.setItem("questions", JSON.stringify(questions));
    } else {
      this.questions = JSON.parse(localStorage.getItem("questions"));
      console.log(this.questions);
      this.questions.unshift(question);
      localStorage.setItem("questions", JSON.stringify(this.questions));
    }
  }
  Removequestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem("questions", JSON.stringify(this.questions));
      }
    }
  }
}

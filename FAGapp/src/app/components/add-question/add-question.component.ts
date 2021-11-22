import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/Models/Question";

@Component({
  selector: "AddQuestionComponent",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"],
})
export class AddQuestionComponent implements OnInit {
  @Output() questionadded = new EventEmitter<Question>();

  text: string;
  answer: string;
  question: Question;
  constructor() {}

  ngOnInit() {}
  addQuestion() {
    this.questionadded.emit({
      text: this.text,
      answer: this.answer,
      hide: true,
    });
  }
}

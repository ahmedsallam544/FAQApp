import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/Models/Question";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "QuestionlistComponent",
  templateUrl: "./questionlist.component.html",
  styleUrls: ["./questionlist.component.css"],
})
export class QuestionlistComponent implements OnInit {
  questions: Question[] = [];
  constructor(private dataService: DataService) {
    this.questions = this.dataService.getQuestions();
  }
  ngOnInit() {}
  addQuestion(question: Question) {
    this.dataService.AddQuestion(question);
    this.questions = this.dataService.getQuestions();
  }
}

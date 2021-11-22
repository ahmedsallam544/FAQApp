import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/Models/Question";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "QuestionComponent",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  @Input("question") question: Question;

  constructor(private dataService: DataService) {}

  ngOnInit() {}
  removequestion(question) {
    this.dataService.Removequestion(question);
  }
}

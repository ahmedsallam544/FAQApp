// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QuestionlistComponent } from "./components/questionlist/questionlist.component";
// Services
import { DataService } from "./services/data.service";
import { QuestionComponent } from "./components/question/question.component";
import { AddQuestionComponent } from "./components/add-question/add-question.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionlistComponent,
    QuestionComponent,
    AddQuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

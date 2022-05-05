import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'characters', component: CharactersComponent },
  { path: 'quiz', component: QuizComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  CharactersComponent,
  QuizComponent
]

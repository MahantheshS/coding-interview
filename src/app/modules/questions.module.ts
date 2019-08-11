import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionsRoute } from './questions-routing.module';

import { QuestionBaseComponent } from './question-base/question-base.component';
import { LetThisComponent } from './let-this/let-this.cmponent';
import { FrequencyCharacterComponent } from './frequency-character/frequency-character.component';
import { ObjectDeepKeysComponent } from './object-deep-keys/object-deep-keys.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { DuplicateStringComponent } from './duplicate-string/duplicate-string.component';

@NgModule({
  declarations: [
    QuestionBaseComponent,
    LetThisComponent,
    FrequencyCharacterComponent,
    ObjectDeepKeysComponent,
    ReverseStringComponent,
    DuplicateStringComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuestionsRoute
  ]
})
export class QuestionsModule { }

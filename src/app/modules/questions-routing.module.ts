

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { QuestionBaseComponent } from './question-base/question-base.component';
import { LetThisComponent } from './let-this/let-this.cmponent';
import { FrequencyCharacterComponent } from './frequency-character/frequency-character.component';
import { ObjectDeepKeysComponent } from './object-deep-keys/object-deep-keys.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { DuplicateStringComponent } from './duplicate-string/duplicate-string.component';

const coreRoutes: Routes = [
    {
        path: '', component:QuestionBaseComponent,children: [
            { path: '', component: LetThisComponent},
            { path: 'let-this', component: LetThisComponent },
            { path: 'frequency-character', component: FrequencyCharacterComponent },
            { path: 'object-deep-keys', component: ObjectDeepKeysComponent },
            { path: 'reverse-string', component: ReverseStringComponent },
            { path: 'duplicate-string', component: DuplicateStringComponent }
        ]
    }
];

export const QuestionsRoute = RouterModule.forChild(coreRoutes);

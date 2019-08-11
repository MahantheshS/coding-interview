
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

const appRoutes : Routes = [
     {path : '',loadChildren : '././modules/questions.module#QuestionsModule'}
];

export const AppRoute = RouterModule.forRoot(appRoutes);

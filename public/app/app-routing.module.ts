// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';

const routes: Routes = [
    { path: 'card1', component: Card1Component },
    { path: 'card2', component: Card2Component }
];

@NgModule({
    imports: [
        // NG2
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        // NG2
        RouterModule
    ],
    declarations: [
        Card1Component,
        Card2Component
    ]
})
export class AppRoutingModule { }

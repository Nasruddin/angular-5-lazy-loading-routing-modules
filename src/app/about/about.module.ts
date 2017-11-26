import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: AboutComponent
            }
        ])
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }

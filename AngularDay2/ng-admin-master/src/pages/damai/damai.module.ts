import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { DamaiListComponent } from './damai-list/damai-list.component';
import { DamaiItemComponent } from './damai-item/damai-item.component';
import { DamaiEditComponent } from './damai-edit/damai-edit.component';

// Import Shared Module
import { PipesModule } from '../../pipes/pipes.module'
import { DirectivesModule } from '../../directives/directives.module'

// Providers
import { DamaiService } from './damai.service'

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    // Import Custom Shared Module
    PipesModule,
    DirectivesModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: DamaiListComponent, pathMatch: 'full' },
      { path: 'damai/edit/:sid', component: DamaiEditComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   DamaiListComponent,
   DamaiItemComponent, 
   DamaiEditComponent
   ],
   providers:[DamaiService]
})
export class DamaiModule { }

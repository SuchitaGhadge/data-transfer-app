import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path: 'parent', component : ParentComponent
  },
  {
    path: 'child', component : ChildComponent
  },
  {
    path: '', redirectTo: 'parent', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

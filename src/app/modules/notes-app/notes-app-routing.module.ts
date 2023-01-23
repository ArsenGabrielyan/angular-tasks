import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { NotesAppComponent } from './notes-app.component';

const routes: Routes = [{path: "",component: NotesAppComponent,canActivate: [AdminGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
export class NotesAppRoutingModule { }
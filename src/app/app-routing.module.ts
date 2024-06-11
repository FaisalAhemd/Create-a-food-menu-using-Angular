import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "home", component: HomeComponentComponent },
  { path: "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

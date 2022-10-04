import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FivethComponent } from './fiveth/fiveth.component';
import { FourthComponent } from './fourth/fourth.component';
import { IndexComponent } from './index/index.component';
import { SecondComponent } from './second/second.component';
import { SeventhComponent } from './seventh/seventh.component';
import { SixthComponent } from './sixth/sixth.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {
    path:'index',
  component:IndexComponent
},
{
path:'second',
component:SecondComponent
},
{
path:'third',
component:ThirdComponent
},
{
  path:'fourth',
  component:FourthComponent
},
{
  path:'fiveth',
  component:FivethComponent
},
{
  path:'sixth',
  component:SixthComponent
},
{
  path:'seventh',
  component:SeventhComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

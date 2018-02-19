import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot([
		{
			path:'first-component',
			component:MyComponentComponent
			
		},
		{
			path:'second-component',
			component:MyComponentComponent
			
		}		
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

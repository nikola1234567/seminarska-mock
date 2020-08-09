import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule } from './modules/product/product.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { StarComponentComponent } from './components/star-component/star-component.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

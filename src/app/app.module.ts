import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { ListeComponent } from './components/liste/liste.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';
import { RainbowDirective } from './rainbow.directive';
import { TestingImageComponent } from './components/testing-image/testing-image.component';
import { DefaultImagePipe } from './components/default-image.pipe';
import { MiniwordComponent } from './components/miniword/miniword.component'; 
@NgModule({
  declarations: [
    DefaultImagePipe ,
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    RainbowDirective,
    TestingImageComponent,
    MiniwordComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, QuestionComponent } from '@components';
import { HomeComponent } from '@pages';
import { TriviaService } from '@services';
import { RamdomSortPipe } from '@pipes';
import { ResultComponent } from './pages/result/result.component';
import { ShowResultDirective } from './directives/show-result.directive';
import { ResultCounterComponent } from './components/result-counter/result-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    HomeComponent,
    RamdomSortPipe,
    ResultComponent,
    ShowResultDirective,
    ResultCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TriviaService, RamdomSortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

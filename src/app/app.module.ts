import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule,FormsModule],
//   bootstrap: [AppComponent],
  providers: [provideHttpClient()]
})
export class AppModule {}
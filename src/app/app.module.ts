import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeadersInterceptor } from './core/interceptors/headers.interceptor';



@NgModule({
  imports: [BrowserModule,FormsModule],
//   bootstrap: [AppComponent],
  providers: [BrowserModule, provideHttpClient(),{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true,
  },]
})
export class AppModule {}
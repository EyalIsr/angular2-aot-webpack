import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/hello-world.component';
import { HttpModule } from '@angular/http';

export { HelloWorldComponent };

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [BrowserModule, HttpModule],
  providers: []
})
export class MainModule {}

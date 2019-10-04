import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListbutngxComponent } from './listbutngx/listbutngx.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        ListbutngxComponent
    ],
    imports: [
        BrowserModule,
        ScrollingModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        VirtualScrollerModule,
        HttpClientModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }

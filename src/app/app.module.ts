import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app.routing.module";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { TextHighlightPipe } from "./pipes/text-highlight.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TextHighlightPipe,
    FilterPipe,
    ...AppRoutingModule.components,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzInputModule,
        NzGridModule,
        NzIconModule,
        AppRoutingModule,
        NzAvatarModule,
        NzCardModule,
        NzDividerModule,
        ReactiveFormsModule,
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

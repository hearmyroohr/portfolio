import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DynamicTileComponent } from './dynamic-tile/dynamic-tile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SummarySectionComponent } from './summary-section/summary-section.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTileComponent,
    ToolbarComponent,
    JumbotronComponent,
    SummarySectionComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

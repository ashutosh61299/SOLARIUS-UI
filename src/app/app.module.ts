import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavButtonComponent } from './shared/sidebar/nav-button/nav-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MultipleAvatarsComponent } from './pages/dashboard/multiple-avatars/multiple-avatars.component';
import { PinnedListComponent } from './pages/dashboard/pinned-list/pinned-list.component';
import { PinnedListItemComponent } from './pages/dashboard/pinned-list/pinned-list-item/pinned-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavButtonComponent,
    MultipleAvatarsComponent,
    PinnedListComponent,
    PinnedListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

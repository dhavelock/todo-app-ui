import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { TodoApiService } from './services/todo-api.service';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

const routes: Route[] = [
  { path: '', component: ListViewComponent },
  { path: 'addlist', component: AddListComponent },
  { path: 'additem', component: AddItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    AddListComponent,
    AddItemComponent,
    ListViewComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HighlightDirective } from './highlight.directive';
import { MycustomModule } from './mycustom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskserviceComponent } from './taskservice/taskservice.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogmodalComponent } from './dialogmodal/dialogmodal.component';
import { EditdialogmodalComponent } from './editdialogmodal/editdialogmodal.component';
import { MatSortModule } from '@angular/material/sort';
import {CustomDatePipe} from '../custom.datepipe';
import {MatIconModule} from '@angular/material/icon';
import { ViewdialogComponent } from './viewdialog/viewdialog.component';
import { LoginComponent } from './login/login.component';
import { TaskdataserviceService } from './taskdataservice.service';
import { AuthGuard } from './auth.guard';
import { CustomHttpInterceptor } from './custom-http-interceptor';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TaskserviceComponent,
    DialogmodalComponent,
    EditdialogmodalComponent,
    CustomDatePipe,
    ViewdialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MycustomModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FontAwesomeModule,
    MatTableModule,
    // NgxPaginationModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    NgbModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [DataService, TaskdataserviceService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

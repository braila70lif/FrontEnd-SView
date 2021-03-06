import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransportDocComponent } from './components/transportDoc/transportDoc.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RetragereDocComponent } from './components/retragereDoc/retragereDoc.component';
import { IntrerupereDocComponent } from './components/intrerupereDoc/intrerupereDoc.component';
import { SituatieDocComponent } from './components/situatieDoc/situatieDoc.component';
import { DiplomaDocComponent } from './components/diplomaDoc/diplomaDoc.component';
import { LicentaDocComponent } from './components/licentaDoc/licentaDoc.component';
import { AccordionModule, DialogModule, InputTextModule } from 'primeng/primeng';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { TransportDocService } from './services/transportDoc.service';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  /** aici add in momnetul cand iti faci o noua componenta **/
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TransportDocComponent,
    RetragereDocComponent,
    IntrerupereDocComponent,
    SituatieDocComponent,
    DiplomaDocComponent,
    LicentaDocComponent,
    PdfViewerComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
    InputTextModule,
    AccordionModule,
    DialogModule,
    MdButtonModule
  ],
  providers: [TransportDocService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

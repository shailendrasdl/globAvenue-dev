import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { TestComponent } from './test/test.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosService } from './photos.service';
import { TestregisterComponent } from './testregister/testregister.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { BoatsComponent } from './boats/boats.component';
import { TestloginComponent } from './testlogin/testlogin.component';
import { UserService } from './services/user.service';
import { AutomobileService } from './services/automobile.service';
import { BoatService } from './services/boat.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component'

import { MyprofileService } from './myprofile.service';
import { AutomobileComponent } from './automobile/automobile.component';
import { GlobtechComponent } from './globtech/globtech.component';
import { GlobpageComponent } from './globpage/globpage.component';
import { MatVideoModule } from 'mat-video';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { RealestateDetailsComponent } from './realestate-details/realestate-details.component';
import { AutomobileDetailComponent } from './automobile-detail/automobile-detail.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { BoatDetailComponent } from './boat-detail/boat-detail.component';
import { GlobtechDetailComponent } from './globtech-detail/globtech-detail.component';
import { MypostComponent } from './mypost/mypost.component';
import { ViewRealestateComponent } from './view-realestate/view-realestate.component';
import { ViewAutomobileComponent } from './view-automobile/view-automobile.component';
import { ViewBoatComponent } from './view-boat/view-boat.component';
import { ViewGlobtechComponent } from './view-globtech/view-globtech.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AccountComponent } from './account/account.component';
import { BillingComponent } from './billing/billing.component';
import { DomainComponent } from './domain/domain.component';
import { AdvancedSettingComponent } from './advanced-setting/advanced-setting.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { ProfileComponent } from './profile/profile.component';
import { VendordarkComponent } from './vendordark/vendordark.component';
import { VendorlightComponent } from './vendorlight/vendorlight.component';
import { AutomobileVendComponent } from './automobile-vend/automobile-vend.component';
import { RealestateVendComponent } from './realestate-vend/realestate-vend.component';
import { SearchedPropertyComponent } from './searched-property/searched-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { AutomobileListingComponent } from './automobile-listing/automobile-listing.component';
import { DetailautomobileComponent } from './detailautomobile/detailautomobile.component';
import { BoatvendComponent } from './boatvend/boatvend.component';
import { BoatlistingComponent } from './boatlisting/boatlisting.component';
import { DetailboatComponent } from './detailboat/detailboat.component';
import { GlobtechvendComponent } from './globtechvend/globtechvend.component';
import { GlobtechlistingComponent } from './globtechlisting/globtechlisting.component';
import { DetailglobtechComponent } from './detailglobtech/detailglobtech.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    InnerHeaderComponent,
    TestComponent,
    AlbumsComponent,
    PhotosComponent,
    TestregisterComponent,
    RealEstateComponent,
    BoatsComponent,
    TestloginComponent,
    DashboardComponent,
    MyprofileComponent,
    LogoutComponent,
    AutomobileComponent,
    GlobtechComponent,
    GlobpageComponent,
    SingleprofileComponent,
    ModalContainerComponent,
    ModalContentComponent,
    RealestateDetailsComponent,
    AutomobileDetailComponent,
    PlanComponent,
    BoatDetailComponent,
    GlobtechDetailComponent,
    MypostComponent,
    ViewRealestateComponent,
    ViewAutomobileComponent,
    ViewBoatComponent,
    ViewGlobtechComponent,
    ClientListComponent,
    CustomerDetailsComponent,
    AccountComponent,
    BillingComponent,
    DomainComponent,
    AdvancedSettingComponent,
    ReferFriendComponent,
    ProfileComponent,
    VendordarkComponent,
    VendorlightComponent,
    AutomobileVendComponent,
    RealestateVendComponent,
    SearchedPropertyComponent,
    PropertyDetailComponent,
    AutomobileListingComponent,
    DetailautomobileComponent,
    BoatvendComponent,
    BoatlistingComponent,
    DetailboatComponent,
    GlobtechvendComponent,
    GlobtechlistingComponent,
    DetailglobtechComponent
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OwlModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatVideoModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [PhotosService,UserService,AutomobileService,BoatService,MyprofileService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
              {provide: LocationStrategy, useClass: HashLocationStrategy}
            ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }

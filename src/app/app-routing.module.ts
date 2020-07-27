import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { TestComponent } from './test/test.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { BoatsComponent } from './boats/boats.component';
import { TestloginComponent } from './testlogin/testlogin.component';
import { TestregisterComponent } from './testregister/testregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { GlobtechComponent } from './globtech/globtech.component';
import { GlobpageComponent } from './globpage/globpage.component';
import { SingleprofileComponent } from './singleprofile/singleprofile.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { RealestateDetailsComponent } from './realestate-details/realestate-details.component';
import { AutomobileDetailComponent } from './automobile-detail/automobile-detail.component';
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



const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'landing', component: LandingComponent},
  { path: 'realestatedetails/:_id', component: RealestateDetailsComponent},
  { path: 'automobiledetail/:_id', component: AutomobileDetailComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'home', component: HomeComponent},
  { path: 'innerheader', component: InnerHeaderComponent},
  { path: 'test', component: TestComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'realestate', component: RealEstateComponent},
  { path: 'boats', component: BoatsComponent},
  { path: 'testlogin', component: TestloginComponent},
  { path: 'testregister', component: TestregisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'automobile', component: AutomobileComponent},
  { path: 'globtech', component: GlobtechComponent},
  { path: 'globpage', component: GlobpageComponent},
  { path: 'singleprofile', component: SingleprofileComponent},
  { path: 'modalcontainer', component: ModalContainerComponent},
  { path: 'plan', component: PlanComponent },
  { path: 'boatdetail/:_id', component: BoatDetailComponent },
  { path: 'globtechdetail/:_id', component: GlobtechDetailComponent },
  { path: 'mypost', component: MypostComponent },
  { path: 'viewrealestate/:_id', component: ViewRealestateComponent},
  { path: 'viewautomobile/:_id', component: ViewAutomobileComponent },
  { path: 'viewboat/:_id', component: ViewBoatComponent },
  { path: 'viewglobtech/:_id', component: ViewGlobtechComponent },
  { path: 'clientlist', component:ClientListComponent},
  { path: 'customerdetails', component: CustomerDetailsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'advancedsetting', component: AdvancedSettingComponent },
  { path: 'referfriend', component: ReferFriendComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'vendordark', component:VendordarkComponent },
  { path: 'vendorlight',component: VendorlightComponent },
  { path: 'automobilevend', component: AutomobileVendComponent },
  { path: 'realestatevend', component: RealestateVendComponent },
  { path: 'searchedproperty', component: SearchedPropertyComponent },
  { path: 'propertydetail', component: PropertyDetailComponent },
  { path: 'automobilelisting', component: AutomobileListingComponent },
  { path: 'detailautomobile', component: DetailautomobileComponent },
  { path: 'boatvend', component: BoatvendComponent },
  { path: 'boatlisting', component: BoatlistingComponent },
  { path: 'detailboat', component: DetailboatComponent },
  { path: 'globtechvend', component: GlobtechvendComponent },
  { path: 'globtechlisting', component: GlobtechlistingComponent },
  { path: 'detailglobtech', component: DetailglobtechComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
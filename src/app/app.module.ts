import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeIndustryInsightsComponent } from './home-industry-insights/home-industry-insights.component';
import { HomeOurSolutionComponent } from './home-our-solution/home-our-solution.component';
import { HomeTmtFactoryComponent } from './home-tmt-factory/home-tmt-factory.component';
import { InsightsComponent } from './insights/insights.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VPopComponent } from './v-pop/v-pop.component';
import { ApiComponent } from './api/api.component';
import { BotDnaComponent } from './bot-dna/bot-dna.component';
import { OmniChannelEcosystemComponent } from './omni-channel-ecosystem/omni-channel-ecosystem.component';
import { SmartCapexComponent } from './smart-capex/smart-capex.component';
import { AonaComponent } from './aona/aona.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { SmartContactCentresComponent } from './smart-contact-centres/smart-contact-centres.component';
import { CentralisedAnalyticsPlatformComponent } from './centralised-analytics-platfom/centralised-analytics-platform.component';
import { ModelGuardianComponent } from './model-guardian/model-guardian.component';
import { MasterMediaComponent } from './master-media/master-media.component';
import { ModalComponent } from './modal/modal.component';
import { MobiBookingFormComponent } from './mobi-booking-form/mobi-booking-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CarouselComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HomeIndustryInsightsComponent,
    HomeOurSolutionComponent,
    HomeTmtFactoryComponent,
    InsightsComponent,
    SignInComponent,
    SolutionsComponent,
    WelcomeComponent,
    VPopComponent,
    ApiComponent,
    BotDnaComponent,
    OmniChannelEcosystemComponent,
    SmartCapexComponent,
    AonaComponent,
    CyberSecurityComponent,
    SmartContactCentresComponent,
    CentralisedAnalyticsPlatformComponent,
    ModelGuardianComponent,
    MasterMediaComponent,
    ModalComponent,
    MobiBookingFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

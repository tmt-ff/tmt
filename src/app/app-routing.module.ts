import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { VPopComponent } from './v-pop/v-pop.component';
import { SmartCapexComponent } from './smart-capex/smart-capex.component';
import { OmniChannelEcosystemComponent } from './omni-channel-ecosystem/omni-channel-ecosystem.component';
import { CyperSecurityComponent } from './cyper-security/cyper-security.component';
import { BotDnaComponent } from './bot-dna/bot-dna.component';
import { ApiComponent } from './api/api.component';
import { AonaComponent } from './aona/aona.component';
import { MobiBookingFormComponent } from './mobi-booking-form/mobi-booking-form.component';
// For MDB Angular Pro
// import { CarouselModule, WavesModule } from 'ng-uikit-pro-standard'

const routes: Routes = [
  { path: 'about_us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'booking', component: MobiBookingFormComponent },
  {
    path: 'solutions',
    component: SolutionsComponent,
    children: [
      {
        path: 'vpop',
        component: VPopComponent,
      },
      {
        path: 'smartcapex',
        component: SmartCapexComponent,
      },
      {
        path: 'channel',
        component: OmniChannelEcosystemComponent,
      },
      {
        path: 'cyper_security',
        component: CyperSecurityComponent,
      },
      {
        path: 'botdna',
        component: BotDnaComponent,
      },
      {
        path: 'api',
        component: ApiComponent,
      },
      {
        path: 'aona',
        component: AonaComponent,
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

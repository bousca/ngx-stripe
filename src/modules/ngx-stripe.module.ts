import { NgModule, ModuleWithProviders } from '@angular/core';

import { LazyStripeAPILoader } from '../services/api-loader.service';
import { StripeService } from '../services/stripe.service';
import { StripeFactoryService } from '../services/stripe-factory.service';

import { WindowRef } from '../services/window-ref.service';
import { DocumentRef } from '../services/document-ref.service';

import {
  Options,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_OPTIONS
} from '../interfaces/stripe';
import { StripeCardComponent } from '../components/stripe-card.component';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import {StripeIbanComponent} from "../components/stripe-iban.component";

@NgModule({
  declarations: [StripeCardComponent, StripeIbanComponent],
  exports: [StripeCardComponent, StripeIbanComponent]
})
export class NgxStripeModule {
  public static forRoot(
    publishableKey?: string,
    options?: Options
  ): ModuleWithProviders {
    return {
      ngModule: NgxStripeModule,
      providers: [
        LazyStripeAPILoader,
        StripeService,
        StripeFactoryService,
        WindowRef,
        DocumentRef,
        {
          provide: STRIPE_PUBLISHABLE_KEY,
          useValue: publishableKey
        },
        {
          provide: STRIPE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from './componentes/forms/forms.module';
import { MenuModule } from './componentes/menu/menu.module';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import AWSAppSyncClient from 'aws-appsync';
Amplify.configure(awsconfig);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: 'API_KEY',
        apiKey: awsconfig.aws_appsync_apiKey,
      },
      cacheOptions: {
        dataIdFromObject: (obj) => `${obj.__typename}:${obj.id}`,
      },
    });
  }
}

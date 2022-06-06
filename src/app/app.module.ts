import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import AWSAppSyncClient from 'aws-appsync';
import awsconfig from '../aws-exports';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoModule } from './componentes/forms/apresentacao/apresentacao.module';
import { FormsModule } from './componentes/forms/forms.module';
import { LoginModule } from './componentes/login/login.module';
import { MenuModule } from './componentes/menu/menu.module';
import { SidebarModule } from './componentes/sidebar/sidebar.module';

Amplify.configure(awsconfig);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MenuModule,
    SidebarModule,
    ApresentacaoModule,
    HttpClientModule,
    AmplifyAuthenticatorModule,
    LoginModule,
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

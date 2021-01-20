import * as userRules from './rules/user-rules';
import {MetaConfig, MetaUIRulesModule} from '@ngx-metaui/rules';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RequisitionFormComponent} from './components/requisition-form/requisition-form.component';
import {MetaObjectService} from './services/meta-object.service';
import {RouterModule, Routes} from '@angular/router';
import {RequisitionService} from './services/requisition.service';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    RequisitionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    RouterModule.forRoot(routes),
    MetaUIRulesModule.forRoot()
  ],
  providers: [MetaObjectService, RequisitionService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private config: MetaConfig) {

    // mandatory - you need to register app defined rules and types since there is no
    // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);

  }
}

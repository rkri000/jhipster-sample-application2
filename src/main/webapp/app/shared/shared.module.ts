import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhipsterSampleApplication2SharedLibsModule, JhipsterSampleApplication2SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhipsterSampleApplication2SharedLibsModule, JhipsterSampleApplication2SharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhipsterSampleApplication2SharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplication2SharedModule {}

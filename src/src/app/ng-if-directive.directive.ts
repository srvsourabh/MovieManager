import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgIfDirective]'
})
export class NgIfDirectiveDirective {
  @Input('appNgIfDirective') set appNgIfDirective(status: boolean) {
    if(status) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }
  
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }
}


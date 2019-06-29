import { Injectable, Component, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Component({
  selector: 'app-popup-component',
  template: `<div class="popup show" [class.success]='isSuccess' [class.error]='isError' id="popup-div" >
    <div class="title"> <span> {{title}} </span> </div>
    <div class="desc"> <span>{{desc}}</span> </div>
  </div>`,
})
export class SweetPopupComponent {
  title: string ;
  desc: string ;
  isSuccess = false;
  isError = false;
}

@Injectable({
  providedIn: 'root'
})
export class SweetPopupService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  showSuccessPopup(message: any) {
    // Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(SweetPopupComponent)
      .create(this.injector);
    componentRef.instance.title = message.title;
    componentRef.instance.desc = message.desc;
    componentRef.instance.isSuccess = true;

    this.appendComponentToBody(componentRef);
  }

  showErrorPopup(message: any) {
    // Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(SweetPopupComponent)
      .create(this.injector);
    componentRef.instance.title = message.title;
    componentRef.instance.desc = message.desc;
    componentRef.instance.isError = true;

    this.appendComponentToBody(componentRef);
  }

  appendComponentToBody(componentRef: any) {

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);

    // Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }, 2000);
  }

}

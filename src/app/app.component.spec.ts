import { AppComponent } from './app.component';
import { Router } from '@angular/router';
fdescribe('AccordionComponent', () => {
  let component: AppComponent;
  let router = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(() => {
    component = new AppComponent(router);
  });

  it('should create app component', () => {
    expect(component).toBeTruthy();
  });

  describe('#logout', () => {
    it('logout method', () => {
      component.logout();
      expect(localStorage.getItem('user')).toBe(null);
      expect(router.navigate).toHaveBeenCalledWith(['login']);
    });
  });

});




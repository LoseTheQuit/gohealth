import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UninavComponent } from './uninav.component';

describe('UninavComponent', () => {
  let component: UninavComponent;
  let fixture: ComponentFixture<UninavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UninavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UninavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

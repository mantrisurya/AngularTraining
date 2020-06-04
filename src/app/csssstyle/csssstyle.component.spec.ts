import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsssstyleComponent } from './csssstyle.component';

describe('CsssstyleComponent', () => {
  let component: CsssstyleComponent;
  let fixture: ComponentFixture<CsssstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsssstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsssstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

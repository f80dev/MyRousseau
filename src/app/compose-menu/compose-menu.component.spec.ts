import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMenuComponent } from './compose-menu.component';

describe('ComposeMenuComponent', () => {
  let component: ComposeMenuComponent;
  let fixture: ComponentFixture<ComposeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

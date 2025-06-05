import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConmmunityComponent } from './conmmunity.component';

describe('ConmmunityComponent', () => {
  let component: ConmmunityComponent;
  let fixture: ComponentFixture<ConmmunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConmmunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConmmunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

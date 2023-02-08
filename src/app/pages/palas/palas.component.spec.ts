import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalasComponent } from './palas.component';

describe('PalasComponent', () => {
  let component: PalasComponent;
  let fixture: ComponentFixture<PalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

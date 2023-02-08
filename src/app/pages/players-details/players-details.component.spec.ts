import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDetailsComponent } from './players-details.component';

describe('PlayersDetailsComponent', () => {
  let component: PlayersDetailsComponent;
  let fixture: ComponentFixture<PlayersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

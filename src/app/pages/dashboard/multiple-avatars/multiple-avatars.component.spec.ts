import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAvatarsComponent } from './multiple-avatars.component';

describe('MultipleAvatarsComponent', () => {
  let component: MultipleAvatarsComponent;
  let fixture: ComponentFixture<MultipleAvatarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleAvatarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

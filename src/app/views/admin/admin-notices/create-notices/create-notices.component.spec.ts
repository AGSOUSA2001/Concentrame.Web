import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoticesComponent } from './create-notices.component';

describe('CreateNoticesComponent', () => {
  let component: CreateNoticesComponent;
  let fixture: ComponentFixture<CreateNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

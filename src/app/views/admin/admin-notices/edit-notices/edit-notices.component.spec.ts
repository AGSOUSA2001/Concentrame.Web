import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoticesComponent } from './edit-notices.component';

describe('EditNoticesComponent', () => {
  let component: EditNoticesComponent;
  let fixture: ComponentFixture<EditNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

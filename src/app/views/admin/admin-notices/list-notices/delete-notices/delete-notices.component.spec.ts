import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNoticesComponent } from './delete-notices.component';

describe('DeleteNoticesComponent', () => {
  let component: DeleteNoticesComponent;
  let fixture: ComponentFixture<DeleteNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

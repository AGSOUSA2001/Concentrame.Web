import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzleComponent } from './puzle.component';

describe('PuzleComponent', () => {
  let component: PuzleComponent;
  let fixture: ComponentFixture<PuzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditHotelsComponent } from './admin-edit-hotels.component';

describe('AdminEditHotelsComponent', () => {
  let component: AdminEditHotelsComponent;
  let fixture: ComponentFixture<AdminEditHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

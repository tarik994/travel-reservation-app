import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlacesComponent } from './admin-edit-places.component';

describe('AdminEditPlacesComponent', () => {
  let component: AdminEditPlacesComponent;
  let fixture: ComponentFixture<AdminEditPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

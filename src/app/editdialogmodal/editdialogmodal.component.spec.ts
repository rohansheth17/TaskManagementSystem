import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdialogmodalComponent } from './editdialogmodal.component';

describe('EditdialogmodalComponent', () => {
  let component: EditdialogmodalComponent;
  let fixture: ComponentFixture<EditdialogmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdialogmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdialogmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

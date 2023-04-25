import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTermineComponent } from './toolbar-termine.component';

describe('ToolbarTermineComponent', () => {
  let component: ToolbarTermineComponent;
  let fixture: ComponentFixture<ToolbarTermineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTermineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarTermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

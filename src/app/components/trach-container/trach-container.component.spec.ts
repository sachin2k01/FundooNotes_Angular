import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrachContainerComponent } from './trach-container.component';

describe('TrachContainerComponent', () => {
  let component: TrachContainerComponent;
  let fixture: ComponentFixture<TrachContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrachContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrachContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

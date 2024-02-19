import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoHeaderComponent } from './fundo-header.component';

describe('FundoHeaderComponent', () => {
  let component: FundoHeaderComponent;
  let fixture: ComponentFixture<FundoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

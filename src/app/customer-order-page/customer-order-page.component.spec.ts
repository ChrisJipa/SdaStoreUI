import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderPageComponent } from './customer-order-page.component';

describe('CustomerOrderPageComponent', () => {
  let component: CustomerOrderPageComponent;
  let fixture: ComponentFixture<CustomerOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

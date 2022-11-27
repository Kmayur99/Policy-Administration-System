import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBusinessComponent } from './consumer-business.component';

describe('ConsumerBusinessComponent', () => {
  let component: ConsumerBusinessComponent;
  let fixture: ComponentFixture<ConsumerBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListURLComponent } from './list-url.component';

describe('ListURLComponent', () => {
  let component: ListURLComponent;
  let fixture: ComponentFixture<ListURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListURLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

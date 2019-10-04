import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbutngxComponent } from './listbutngx.component';

describe('ListbutngxComponent', () => {
  let component: ListbutngxComponent;
  let fixture: ComponentFixture<ListbutngxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbutngxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbutngxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

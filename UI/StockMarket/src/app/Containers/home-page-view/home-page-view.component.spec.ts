import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageViewComponent } from './home-page-view.component';

describe('HomePageViewComponent', () => {
  let component: HomePageViewComponent;
  let fixture: ComponentFixture<HomePageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesSidebarComponent } from './jokes-sidebar.component';

describe('JokesSidebarComponent', () => {
  let component: JokesSidebarComponent;
  let fixture: ComponentFixture<JokesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

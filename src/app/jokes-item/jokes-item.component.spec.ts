import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesItemComponent } from './jokes-item.component';

describe('JokesItemComponent', () => {
  let component: JokesItemComponent;
  let fixture: ComponentFixture<JokesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

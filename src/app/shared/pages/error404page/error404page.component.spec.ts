import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404pageComponent } from './error404page.component';

describe('Error404pageComponent', () => {
  let component: Error404pageComponent;
  let fixture: ComponentFixture<Error404pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error404pageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

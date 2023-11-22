import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingImageComponent } from './testing-image.component';

describe('TestingImageComponent', () => {
  let component: TestingImageComponent;
  let fixture: ComponentFixture<TestingImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingImageComponent]
    });
    fixture = TestBed.createComponent(TestingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

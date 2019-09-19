import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgjsContentComponent } from './ngjs-content.component';

describe('NgjsContentComponent', () => {
  let component: NgjsContentComponent;
  let fixture: ComponentFixture<NgjsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgjsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgjsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

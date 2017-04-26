import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatColumnComponent } from './chat-column.component';

describe('ChatColumnComponent', () => {
  let component: ChatColumnComponent;
  let fixture: ComponentFixture<ChatColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

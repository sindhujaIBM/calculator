import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorViewComponent } from './calculator-view.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

const oldData = [
  {
    "id": "abc",
    "data": "1+2=3" + "\n" + "5/3=1.66666667" + "\n"
  },
  {
    "id": "xyz",
    "data": "1+2=3" + "\n" + "5/3=1.66666667" + "\n" + "1-9=-8'" + "\n"
  }
];

const loggedUser = "abc";

describe('CalculatorViewComponent', () => {
  let component: CalculatorViewComponent;
  let fixture: ComponentFixture<CalculatorViewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorViewComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CalculatorViewComponent);
    component = fixture.componentInstance;
    component.oldData = oldData;
    component.curentUser = loggedUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check First Button and Textarea', () => {
    let currentBtn = fixture.debugElement.query(By.css('button'));
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "1" } });
    fixture.detectChanges();
    let txtArea = fixture.debugElement.query(By.css('textarea'));
    let txtEl = txtArea.nativeElement;
    expect(txtEl.textContent).toContain("1");
  });

  it('check operator', () => {
    let currentBtn = fixture.debugElement.queryAll(By.css('button'));
    let BtnEl1 = currentBtn[0];
    let BtnEl2 = currentBtn[3];
    let BtnEl3 = currentBtn[1];
    BtnEl1.triggerEventHandler('click', { "target": { "innerHTML": "1" } });
    BtnEl2.triggerEventHandler('click', { "target": { "innerHTML": "+" } });
    BtnEl3.triggerEventHandler('click', { "target": { "innerHTML": "2" } });
    fixture.detectChanges();
    let txtArea = fixture.debugElement.query(By.css('textarea'));
    let txtEl = txtArea.nativeElement;
    expect(txtEl.textContent).toContain("1+2");
  });
  
  it('check expression eval', () => {
    let currentBtn = fixture.debugElement.query(By.css('button'));
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "1" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "+" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "2" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "=" } });


    fixture.detectChanges();
    let txtArea = fixture.debugElement.query(By.css('textarea'));
    let txtEl = txtArea.nativeElement;
    expect(txtEl.textContent).toContain("1+2=3");
  });

  it('check cancel', () => {
    let currentBtn = fixture.debugElement.query(By.css('button'));
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "1" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "+" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "2" } });
    currentBtn.triggerEventHandler('click', { "target": { "innerHTML": "C" } });


    fixture.detectChanges();
    let txtArea = fixture.debugElement.query(By.css('textarea'));
    let txtEl = txtArea.nativeElement;
    expect(txtEl.textContent).toContain("1+");
  });
});

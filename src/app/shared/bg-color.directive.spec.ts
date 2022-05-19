import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BgColorDirective } from './bg-color.directive';


@Component({
  template: `
    <button appBgColor [isCorrect]="true" color="primary"
            mat-stroked-button style="background-color: red">
            correct answer
          </button>
    <button appBgColor [isCorrect]="false" color="primary"
      mat-stroked-button style="background-color: green">
      correct answer
    </button>
    <button [isCorrect]="false" color="primary"
      mat-stroked-button style="background-color: green">
      correct answer
    </button>`
})
class TestComponent { }

describe('BgColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: any;
  let bareButton: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BgColorDirective, TestComponent]
    })
      .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached BgColorDirective
    des = fixture.debugElement.queryAll(By.directive(BgColorDirective));

    // the button without the BgColorDirective
    bareButton = fixture.debugElement.query(By.css('button:not([highlight])'));

  });

  // color tests
  it('should have two appBgColor elements', () => {
    expect(des.length).toBe(2);
  });

  it('should color 1st <button> background "red"', () => {

    fixture.detectChanges(); // initial binding
    const bgColor = des[0].nativeElement.style.backgroundColor;
    console.log('>>>>>', bgColor);
    expect(bgColor).toBe('red');
  });

  it('should color 1st <button> background "green"', () => {

    fixture.detectChanges(); // initial binding
    const bgColor = des[1].nativeElement.style.backgroundColor;
    console.log('>>>>>', bgColor);
    expect(bgColor).toBe('green');
  });

  it('should create an instance', () => {
    const directive = BgColorDirective;
    expect(directive).toBeTruthy();
  });
});

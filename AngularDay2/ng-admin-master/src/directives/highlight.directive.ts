import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
    // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
    // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'rgba(0,0,255,0.5)';
       el.nativeElement.style.color = 'white';
       el.nativeElement.style.borderRadius = "5px"
    }
}
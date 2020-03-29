import { Directive, ElementRef, Renderer2, AfterContentInit, Input } from '@angular/core';

@Directive({
	selector: '[appRedBorder]'
})
export class RedBorderDirective implements AfterContentInit {
	@Input('appRedBorder') damage: number;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	public ngAfterContentInit(): void {
		if (this.damage > 50) {
			this.renderer.setStyle(this.elementRef.nativeElement, 'border', '3px solid red');
		}
	}
}

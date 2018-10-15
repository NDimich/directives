import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('first') parent: ElementRef;
  @ViewChild('input') input: ElementRef;


  constructor(private renderer: Renderer2) {}

  color: string;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Push Me');
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(this.parent.nativeElement, button);
  }


}


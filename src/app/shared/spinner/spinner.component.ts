import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  constructor() {}

  @Input() color = '#38ad48';
  @Input() enabled = true;
  @Input() size: number | string = 50;
  @Input() speed = 100;
  @Input() still = false;
  @Input() styles = {};
  @Input() thickness = 100;
  @Input() secondaryColor = 'rgba(0,0,0,0.44)';

  get svgStyle() {
    return {
      color: this.color,
      overflow: 'visible',
      width: this.normalizeSize(this.size),
      height: this.normalizeSize(this.size),
      ...(typeof this.styles === 'string'
        ? JSON.parse(this.styles)
        : this.styles),
    };
  }

  coords = [
    { x: 22, y: -20 },
    { x: 29, y: 0 },
    { x: 22, y: 20 },
    { x: 0, y: 30 },
    { x: -23, y: 20 },
    { x: -30, y: 0 },
    { x: -23, y: -20 },
    { x: 0, y: -30 },
  ];

  get duration() {
    return 200 / this.speed;
  }

  get centerStyle() {
    return !this.still
      ? {
          animation: `spinners-angular-dotted-center ${this.duration}s ease-out infinite`,
          transformOrigin: 'center',
        }
      : { display: 'none' };
  }

  circleStyle(i: number) {
    return {
      transform: `translate(${this.coords[i].x}px, ${this.coords[i].y}px)`,
      ...(!this.still
        ? {
            animation: `spinners-angular-dotted-shrink ${
              this.duration
            }s cubic-bezier(0, 0.9, 0, 0.9) ${
              (this.duration / 20) * i
            }s infinite`,
          }
        : {}),
    };
  }
  normalizeSize = (size: number | string) =>
    parseFloat(size.toString()).toString() === size.toString()
      ? `${size}px`
      : size.toString();
}

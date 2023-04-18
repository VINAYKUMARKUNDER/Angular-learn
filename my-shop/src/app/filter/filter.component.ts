import { Component, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all: number = 0;
  @Input() electronics: number=0;
  @Input() jewelery: number=0;
  @Input() mens_clothing: number=0;
  @Input() womens_clothing: number=0;

  selectedRadioButton: string = 'All';

  @Output()
  selectedAccordingRadioButton: EventEmitter<string> = new EventEmitter<string>();

  onSelectedRadioButton(){
    this.selectedAccordingRadioButton.emit(this.selectedRadioButton);
    // console.log(this.selectedRadioButton)
  }

}

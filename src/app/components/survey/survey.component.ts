import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent {
  fileSelected: boolean = false;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileSelected = true;
    // baaki logic yaha
    }
  }
}

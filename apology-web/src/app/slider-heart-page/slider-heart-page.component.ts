import { Component } from '@angular/core';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-heart-page',
  standalone: false,
  
  templateUrl: './slider-heart-page.component.html',
  styleUrl: './slider-heart-page.component.scss'
})
export class SliderHeartPageComponent {
  heartSize: number = 0; // Initial size
  isSliderDisabled: boolean = false; // Track whether the slider should be disabled
  private resetInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ensure heartSize starts at 0 when the component is initialized
    this.heartSize = 0;
  }

  updateHeartSize(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.heartSize = parseInt(inputElement.value, 10);

    // Clear any ongoing gradual reset to avoid conflict
    if (this.resetInterval) {
      clearInterval(this.resetInterval);
      this.resetInterval = null;
    }

    // Check if the slider has reached its maximum value
    if (this.heartSize === 500) {
      this.triggerCelebration(); // Trigger the celebration process
    }
  }

  triggerCelebration(): void {
    // Disable the slider after reaching the maximum
    this.isSliderDisabled = true;

    // Play the yayyyy sound
    const audio = new Audio('assets/kids-yay.mp3'); // Ensure you have this sound file in your assets folder
    audio.play();

    // Show confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Trigger SweetAlert after some time (to allow confetti and sound to play)
    setTimeout(() => {
      Swal.fire({
        title: 'THANK YOU SAYANG!!!',
        text: 'You filled my heart again! I love you so much!!!',
        icon: 'success',
        confirmButtonText: 'I love you too!!!',
        allowOutsideClick: false,  // Prevent closing when clicking outside
        allowEscapeKey: false,     // Prevent closing when pressing ESC
      }).then ((result) => {
        if (result.isConfirmed) {
          // Redirect to 'slider-heart' page after clicking the button
          this.router.navigate(['/final-speech']);
        }
      })
    }, 2000); // SweetAlert appears after 2 seconds
  }

  startGradualReset(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const maxValue = parseInt(inputElement.max, 10);
    let currentValue = parseInt(inputElement.value, 10);

    // Start a gradual reset if the slider was not fully moved to max
    if (currentValue < maxValue) {
      this.resetInterval = setInterval(() => {
        if (currentValue > 0) {
          currentValue -= 5; // Decrease step by step
          inputElement.value = currentValue.toString();
          this.heartSize = currentValue;
        } else {
          clearInterval(this.resetInterval); // Stop when it reaches zero
        }
      }, 50); // Adjust speed as needed
    }
  }
}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgive-button-page',
  standalone: false,
  
  templateUrl: './forgive-button-page.component.html',
  styleUrl: './forgive-button-page.component.scss'
})
export class ForgiveButtonPageComponent {
  clickCount = 0;
  top: string = '70%';  
  left: string = '44%'; 

  constructor(private router: Router) {}

  moveButton() {
    if(this.clickCount === 0) {
      this.top = '50%';  // Initially at 50% vertically
      this.left = '50%'; // Initially at 50% horizontally
    }

    this.clickCount++;

    if (this.clickCount < 5) {
      // Button stays at the center initially
      this.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
      this.left = `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;
    }
    // After 5 clicks, show the Swal
    if (this.clickCount === 5) {
      Swal.fire({
        title: "I know it's hard to forgive...",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        allowOutsideClick: false,  // Prevent closing when clicking outside
        allowEscapeKey: false,     // Prevent closing when pressing ESC
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
          left top
          no-repeat
        `,
        confirmButtonText: "But I hope you will"
      }).then ((result) => {
        if (result.isConfirmed) {
          // Redirect to 'slider-heart' page after clicking the button
          this.router.navigate(['/slider-heart']);
        }
      });
    }
  }
}

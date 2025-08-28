import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() mobileMenuOpen = false;
  @Output() toggleMobileMenu = new EventEmitter<void>();
  @Output() closeMobileMenu = new EventEmitter<void>();

  onToggleMobileMenu() {
    this.toggleMobileMenu.emit();
  }

  onCloseMobileMenu() {
    this.closeMobileMenu.emit();
  }
}
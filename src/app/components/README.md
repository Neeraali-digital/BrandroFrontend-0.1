# Components Structure

This directory contains all the Angular components for The Brandro application, organized into manageable sub-components.

## Component Architecture

The main app HTML has been divided into the following standalone components:

### 1. NavigationComponent (`navigation/`)
- **Purpose**: Top navigation bar with mobile menu functionality
- **Features**: 
  - Desktop and mobile navigation
  - Mobile menu toggle
  - Smooth scroll navigation links
- **Inputs**: `mobileMenuOpen` (boolean)
- **Outputs**: `toggleMobileMenu()`, `closeMobileMenu()`

### 2. HeroComponent (`hero/`)
- **Purpose**: Main hero section with call-to-action
- **Features**:
  - Large heading with brand message
  - Call-to-action buttons
  - Responsive design

### 3. StoryComponent (`story/`)
- **Purpose**: "Who We Are" section
- **Features**:
  - Company story and mission
  - Embedded YouTube video
  - Two-column layout

### 4. PromisesComponent (`promises/`)
- **Purpose**: "What We Do" services section
- **Features**:
  - Grid layout with service cards
  - Various card sizes (large, medium, small, wide, tall)
  - Service descriptions and features

### 5. ApproachComponent (`approach/`)
- **Purpose**: "Our Approach" process section
- **Features**:
  - 5-step process visualization
  - Numbered circles with hover effects
  - Responsive grid layout

### 6. PortfolioComponent (`portfolio/`)
- **Purpose**: Portfolio showcase section
- **Features**:
  - Client logo grid
  - Placeholder for actual logos
  - Hover effects

### 7. YoutubeComponent (`youtube/`)
- **Purpose**: YouTube content section
- **Features**:
  - Video thumbnail grid
  - Link to YouTube channel
  - Placeholder video cards

### 8. ContactComponent (`contact/`)
- **Purpose**: Contact form and information
- **Features**:
  - Contact form with validation
  - Contact information display
  - Dark theme styling

### 9. FooterComponent (`footer/`)
- **Purpose**: Site footer with links and social media
- **Features**:
  - Company information
  - Service and company links
  - Social media links
  - Copyright information

## File Structure

```
components/
├── README.md
├── index.ts                    # Component exports
├── navigation/
│   ├── navigation.component.ts
│   ├── navigation.component.html
│   └── navigation.component.scss
├── hero/
│   ├── hero.component.ts
│   ├── hero.component.html
│   └── hero.component.scss
├── story/
│   ├── story.component.ts
│   ├── story.component.html
│   └── story.component.scss
├── promises/
│   ├── promises.component.ts
│   ├── promises.component.html
│   └── promises.component.scss
├── approach/
│   ├── approach.component.ts
│   ├── approach.component.html
│   └── approach.component.scss
├── portfolio/
│   ├── portfolio.component.ts
│   ├── portfolio.component.html
│   └── portfolio.component.scss
├── youtube/
│   ├── youtube.component.ts
│   ├── youtube.component.html
│   └── youtube.component.scss
├── contact/
│   ├── contact.component.ts
│   ├── contact.component.html
│   └── contact.component.scss
└── footer/
    ├── footer.component.ts
    ├── footer.component.html
    └── footer.component.scss
```

## Usage

All components are standalone Angular components that can be imported and used independently. They are imported in the main `app.ts` file and used in `app.html`.

## Benefits of This Structure

1. **Maintainability**: Each section is isolated and easier to maintain
2. **Reusability**: Components can be reused across different pages
3. **Testing**: Each component can be tested independently
4. **Performance**: Components can be lazy-loaded if needed
5. **Team Development**: Different team members can work on different components
6. **Code Organization**: Clear separation of concerns

## Future Enhancements

- Add TypeScript interfaces for component data
- Implement reactive forms for the contact component
- Add animation and transition effects
- Create shared services for data management
- Add unit tests for each component
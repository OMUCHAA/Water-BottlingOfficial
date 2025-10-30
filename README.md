# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Project Setup
src/
 ┣ components/
 ┃ ┣ Navbar.vue
 ┃ ┣ Footer.vue
 ┃ ┣ HeroSection.vue
 ┃ ┣ AboutSection.vue
 ┃ ┣ ProductsSection.vue
 ┃ ┣ GallerySection.vue
 ┃ ┣ ContactSection.vue
 ┃ ┗ TestimonialsSection.vue (optional)
 ┣ pages/
 ┃ ┣ Home.vue
 ┃ ┣ About.vue
 ┃ ┣ Products.vue
 ┃ ┣ Gallery.vue
 ┃ ┗ Contact.vue
 ┣ router/
 ┃ ┗ index.js
 ┣ assets/
 ┃ ┣ images/
 ┃ ┗ css/
 ┣ App.vue
 ┗ main.js


# WireFrame Layout of the project.
---------------------------------------------------------
| Navbar (component)                                    |
| Logo (placeholder) | Home | About | Products | Gallery | Contact |
---------------------------------------------------------
| HERO SECTION                                          |
|  - Background image of water/waves                    |
|  - Headline: "Pure. Refreshing. Hydrating."           |
|  - Subtext: "Clean water for a healthier life."       |
|  - CTA button: [Explore Products]                     |
---------------------------------------------------------
| ABOUT PREVIEW SECTION                                 |
|  - Short intro about the company                      |
|  - 2-column layout: image on left, text on right      |
|  - Button: [Learn More →] (links to /about)           |
---------------------------------------------------------
| PRODUCTS PREVIEW SECTION                              |
|  - Heading: “Our Products”                            |
|  - 3 cards: 500ml Bottle | 1L Bottle | 5L Bottle      |
|  - Each card: image + title + short description       |
|  - Button: [View All Products] (links to /products)   |
---------------------------------------------------------
| GALLERY PREVIEW SECTION                               |
|  - Heading: “Inside Our Plant”                        |
|  - Grid of 4–6 images (use placeholder photos)        |
|  - Button: [View Gallery] (links to /gallery)         |
---------------------------------------------------------
| CONTACT CTA SECTION                                   |
|  - Simple banner: “Order Pure Water Today!”           |
|  - Button: [Contact Us]                               |
---------------------------------------------------------
| Footer (component)                                   |
|  - © 2025 Omucha Water. All rights reserved.          |
|  - Contact info + social media icons                  |
---------------------------------------------------------

# Products Page
---------------------------------------------------------
| Navbar                                                |
---------------------------------------------------------
| HERO SECTION                                          |
|  - Heading: “Our Products”                            |
|  - Subtext: “Choose the perfect size for your needs.” |
---------------------------------------------------------
| PRODUCT GRID                                          |
|  - Tailwind responsive grid (2 or 3 columns)          |
|  - Each product card:                                |
|      [Image of bottle]                               |
|      [Product Name: e.g., 500ml Pure Water]           |
|      [Short Description]                             |
|      [Button: Enquire / Contact Us]                  |
---------------------------------------------------------
| Footer                                                |
---------------------------------------------------------

# Gallery Page
---------------------------------------------------------
| Navbar                                                |
---------------------------------------------------------
| HERO SECTION                                          |
|  - Heading: “Our Gallery”                             |
|  - Subtext: “Take a look at our production process.”  |
---------------------------------------------------------
| GALLERY GRID                                          |
|  - Tailwind grid (3 or 4 columns)                     |
|  - Images open in modal/lightbox when clicked         |
---------------------------------------------------------
| Footer                                                |
---------------------------------------------------------

# Contact Page
---------------------------------------------------------
| Navbar                                                |
---------------------------------------------------------
| HERO SECTION                                          |
|  - Heading: “Contact Us”                              |
|  - Subtext: “We’d love to hear from you.”             |
---------------------------------------------------------
| CONTACT FORM SECTION                                  |
|  - Inputs: Name, Email, Message                       |
|  - Submit button: [Send Message]                      |
|  - Use Tailwind form styling                          |
---------------------------------------------------------
| CONTACT INFO + MAP                                    |
|  - Left: Company address, email, phone, social links  |
|  - Right: Embedded Google Map iframe (placeholder)    |
---------------------------------------------------------
| Footer                                                |
---------------------------------------------------------


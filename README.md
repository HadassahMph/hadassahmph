# Hadassah's Digital Haven

Build a modern, minimalist, fully responsive personal portfolio website for Hadassah Mphohoni.

### Global Design & Style Guide
- **Aesthetic**: Minimal, clean, warm, modern editorial.
- **Color Palette**:
- Background Primary: Pure White (#FFFFFF) and Warm Ivory/Beige (#F9F8F6)
- Secondary/Card Surface: Soft Cream Beige (#F3EFEA)
- Borders/Lines: Subtle Sand/Muted Taupe (#E7E1D8)
- Text Primary: Deep Charcoal (#1A1A1A)
- Text Muted: Warm Gray (#5E5A55)
- Accents/Buttons: Rich warm taupe/espresso (#2C2825) with soft hover states.
- **Typography**: Clean sans-serif (Inter, Plus Jakarta Sans, or Geist).
- **Navigation & Scrolling**: Smooth scrolling (`scroll-behavior: smooth`) across all section anchors. Fully responsive for mobile (collapsible drawer/sheet menu), tablet, and desktop.

---

### 1. Sticky Navigation Bar
- **Placement**: Fixed at top, semi-transparent frosted background (`backdrop-blur-md` with `rgba(249, 248, 246, 0.8)`).
- **Brand/Logo**: "Hadassah M." (bold, clean serif or sans-serif).
- **Desktop Links**: Home, About, Skills, Projects, Tasks, Education, Experience, Contact.
- **Mobile Navigation**: Minimalist hamburger toggle opening a smooth overlay menu.

---

### 2. Hero Section (`#home`)
- **Layout**: Two-column layout on desktop; single-column stacked on mobile.
- **Left Column**:
- Greeting badge: "👋 Welcome to my portfolio."
- Main Headline: "Hi, I'm Hadassah Mphohoni"
- Subtitle: "Data Analyst & Professional Foundation Specialist dedicated to turning insights into actionable results with precision and clarity."
- Call to Action:
- Primary Button: "Download CV" (with download icon)
- Secondary Button: "Get in Touch" (scrolls to `#contact`)
- **Right Column**:
- High-resolution circular/soft-rounded framed portrait using the user's uploaded photo with a soft beige outline/glow.

---

### 3. About Me Section (`#about`)
- **Container**: Beige background card or section container.
- **Content**:
- Subheading: "About Me"
- Paragraph: "I am a determined, detail-oriented, and open-minded professional seeking to contribute significantly to organizational growth. With a strong background in data analytics and digital-age professional development, I excel both as an independent problem-solver and within collaborative teams to drive impactful solutions."

---

### 4. Interactive Task & Project Organizer (`#tasks`)
- **Purpose**: A functional, interactive personal productivity tool embedded directly into the portfolio.
- **Features**:
- **Add Task**: Input field for task title + dropdown to select category ("Data Project," "Learning," "Productivity," "General") + "Add Task" button.
- **Category Tabs / Filters**: Filter list by "All," "Data Project," "Learning," "Productivity," or "General."
- **Task Item Component**:
- Checkbox to toggle completion (crosses out text and dims the item).
- Category tag badge.
- Delete button (trash icon).
- **State**: Persist state locally via `localStorage` so tasks remain on refresh.

---

### 5. Skills Grid Section (`#skills`)
- Display skills organized into visual, rounded-card grids:
- **Data & Technical**: Data Analytics, Problem Solving, Data Interpretation, Reporting.
- **Productivity Tools**: Microsoft Excel (Advanced), Google Workspace (Docs, Sheets).
- **Collaboration Apps**: Microsoft Teams, Zoom, Slack.
- **Core Strengths**: Time Management (100%), Teamwork (100%), Leadership & Execution (100%).

---

### 6. Featured Projects Section (`#projects`)
- Grid of 3 responsive cards with subtle shadows, hover lift effect, and beige pill badges:
- **Card 1: Customer Data Analytics & Insights Dashboard**
- Description: End-to-end data analysis identifying operational bottlenecks and performance KPIs with actionable recommendations.
- Tech Badges: `Excel`, `Data Analytics`, `Google Sheets`
- Action: "View Code" button linking to GitHub.
- **Card 2: Operational Productivity & Task Workflow System**
- Description: Interactive workflow system designed to streamline team communication, task tracking, and milestone delivery.
- Tech Badges: `Productivity`, `Process Automation`, `Teams`
- Action: "View Code" button linking to GitHub.
- **Card 3: Digital Foundations & Team Collaboration Hub**
- Description: Integrated collaboration portal structuring remote team workflows and documentation protocols.
- Tech Badges: `Google Workspace`, `Zoom`, `Documentation`
- Action: "View Code" button linking to GitHub.

---

### 7. Education & Certifications Section (`#education`)
- **Format**: Clean vertical timeline with nodes and credential links.
- **Item 1: Data Analytics Program**
- Issuer: ALX Africa (Certificate ID: `9H3s62pmyG`)
- Completion: September 2025
- Focus: 6-Month Intensive Programme in Data Analytics with Professional Development Skills for the Digital Age.
- **Item 2: Professional Foundations**
- Issuer: ALX Africa (Certificate ID: `2nyXE96ZH7`)
- Completion: June 2025
- Focus: Professional Development Skills for the Digital Age.
- **Item 3: High School Matric**
- Institution: Lethulwazi Comprehensive School
- Year: 2020

---

### 8. Work Experience Section (`#experience`)
- **Format**: Clean structured card or timeline layout.
- Role: Data Analyst & Project Specialist (Professional Training & Projects)
- Dates: 2025 – Present
- Highlights:
- Executed analytics workflows and data-driven reporting pipelines.
- Led cross-functional peer team reviews and collaborative workshops.
- Maintained 100% adherence to deadlines and detail-focused deliverables.

---

### 9. Contact & Footer Section (`#contact`)
- **Background**: Soft ivory with a fine sand dividing border.
- **Details**:
- Heading: "Let's Connect"
- Email: `hadassahmphohoni06@gmail.com` (clickable `mailto:`)
- Phone: `+27 68 490 3907`
- Location: Gauteng, South Africa
- Social Links with minimal SVG icons:
- GitHub (`https://github.com`)
- LinkedIn (`https://linkedin.com`)
- **Footer line**: "© 2026 Hadassah Mphohoni. All rights reserved."

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://hadassahs-digital-canvas.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6ea10a07-abcd-4ee5-ac68-a2dfc830a956).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

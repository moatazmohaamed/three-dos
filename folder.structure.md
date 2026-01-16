threedos-website/
│
├── public/
│ ├── images/
│ │ ├── logo/
│ │ ├── councils/
│ │ └── heroes/
│ ├── fonts/
│ └── icons/
│
├── src/
│
├── app/ # Next/React Router entry
│ ├── layout.tsx
│ ├── page.tsx # Homepage
│ ├── councils/page.tsx
│ ├── about/page.tsx
│ └── contact/page.tsx
│
├── components/
│ │
│ ├── layout/
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ └── PlasmaLayout.tsx
│ │
│ ├── home/
│ │ ├── HeroSection.tsx
│ │ ├── DimensionsBento.tsx
│ │ ├── VisionMission.tsx
│ │ ├── ImpactCounters.tsx
│ │ ├── Activities.tsx
│ │ └── JoinCTA.tsx
│ │
│ ├── ui/ # Reusable atoms
│ │ ├── Button.tsx # magnetic button
│ │ ├── Card.tsx # glass card
│ │ ├── Container.tsx
│ │ ├── SectionTitle.tsx
│ │ └── PlasmaBackground.tsx # React Bits
│ │
│ └── shared/
│ ├── Loader.tsx
│ ├── ThemeToggle.tsx
│ └── LanguageSwitch.tsx
│
├── styles/
│ ├── globals.css
│ ├── plasma.css
│ └── animations.css
│
├── data/
│ ├── dimensions.ts
│ ├── vision.ts
│ ├── stats.ts
│ └── activities.ts
│
├── hooks/
│ ├── usePlasma.ts
│ ├── useCounter.ts
│ └── useScroll.ts
│
├── lib/
│ ├── react-bits.ts # config for components
│ ├── constants.ts
│ └── utils.ts
│
├── types/
│ └── index.ts
│
├── config/
│ ├── tsheme.ts # indigo palette
│ └── site.ts
│
├── assets/
│ ├── icons/
│ └── illustrations/
│
├── tailwind.config.js
├── tsconfig.json
└── package.json

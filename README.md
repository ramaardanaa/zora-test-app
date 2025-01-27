## Zora Health Frontend Test

### Tech Stack
- NextJs with Typescript
- TailwindCss
- SwiperJS (for Slider)
- ReactIcons

### Deployment URL
```
https://zora-test-app.vercel.app
```

#### How to run
```
    $ npm install
    $ npm run dev
    $ or
    $ yarn
    $ yarn dev
```

#### Folder Structure
```
├── components
    Contains re-usable components
├── app
    Contains Layout & Page that implements ISR and SSR
├── pages
    Contains Page component
  ├── CourseDetailPage
  ├── CoursesPage
├── Constants
    Contains Dummy data
└── utils
    Reusable helper functions
```

#### Notes
- Implement ISR on CourseDetail Page every 1 hours (faster page load and caching)
- Implement Lazy load on Courses Page (increase full load speed time)
- Mobile Friendly
- Total time spent on the project: 8-10 hours

#### Difficulties Found
- Figma file doesnt contain the figma assets but only screenshot

#### Improvement Notes
- create our own component and standarize icons for less dependency installed (like SwiperJS and React-Icons)
# Money Moves with T

A modern, high-impact website for Theoren Thorn - MMA fighter turned life insurance advisor.

## 🚀 Tech Stack

- Next.js 14
- TypeScript
- React 18
- Tailwind CSS
- Vercel (Deployment)

## 🛠️ Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd money-moves-with-t
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                 # Next.js 14 app directory
│   ├── (routes)/       # Page routes
│   ├── components/     # Shared components
│   └── styles/         # Global styles
├── public/             # Static assets
├── lib/               # Utility functions
└── types/             # TypeScript types
```

## 🎨 Design System

- **Colors**: Black, Steel Gray, Electric Blue
- **Fonts**: Montserrat (body), Anton (headlines)
- **Components**: Mobile-first, responsive design

## 📝 Content Management

Content can be updated in the following locations:
- Page content: `app/(routes)/[page]/page.tsx`
- Components: `app/components/`
- Images: `public/images/`
- Styles: `app/styles/`

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment configuration

## 📱 Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security & Performance

- SSL enabled via Vercel
- SEO optimized with metadata
- Analytics ready
- Form validation and secure submission

## 📈 Analytics & Tracking

Google Analytics integration is prepared in `lib/analytics.ts`. Update the tracking ID in the environment variables.

## 🚀 Deployment

The site is configured for automatic deployment on Vercel. Push to main branch to trigger deployment.

## 📚 Documentation

For detailed documentation on updating content and managing the site, refer to the `docs/` directory.

## 📄 License

All rights reserved. This project is proprietary and confidential.

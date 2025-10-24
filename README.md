# 🚀 Next.js Learning Journey

A comprehensive collection of Next.js projects demonstrating modern web development patterns, from basics to advanced concepts including routing, data fetching, and authentication.

## 📋 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [1. Basics](#1-basics)
  - [2. Data Fetching](#2-data-fetching)
  - [3. Authentication](#3-authentication)
- [Tech Stack](#tech-stack)
- [Key Concepts Learned](#key-concepts-learned)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## 🎯 Overview

This repository contains three distinct Next.js applications built to explore and master core Next.js 15/16 features and the App Router paradigm. Each project focuses on specific concepts and progressively builds upon the previous knowledge.

## 📁 Projects

### 1. Basics

**Location:** `./Basics`

A foundational Next.js project exploring routing patterns and navigation.

**Key Features:**
- ✅ App Router architecture
- ✅ File-based routing system
- ✅ Dynamic routes with parameters (`[username]`)
- ✅ Nested routes (`users/[username]/settings`)
- ✅ Client-side navigation with `useRouter` and `useParams`
- ✅ Turbopack for faster development builds

**Concepts Demonstrated:**
```
/blog          → Static routes
/users         → Dynamic listing
/users/[username]     → Dynamic route params
/users/[username]/settings → Nested dynamic routes
```

**Technologies:**
- Next.js 15.5.6
- React 19.1.0
- Tailwind CSS 4
- Turbopack

---

### 2. Data Fetching

**Location:** `./Data-Fetching`

Explores various data fetching strategies in Next.js, including server-side, static, and client-side rendering.

**Key Features:**
- ✅ Server Components for server-side data fetching
- ✅ Static Site Generation (SSG)
- ✅ Client-side data fetching with SWR
- ✅ Dynamic route parameters with API integration
- ✅ Image optimization with `next/image`
- ✅ Real-time data updates and caching strategies

**Data Fetching Patterns:**
- **Server Components** (`/server`) - RSC with async/await
- **Static Pages** (`/static`) - Pre-rendered at build time
- **Client Components** (`/users/[id]`) - SWR for client-side fetching with caching

**Technologies:**
- Next.js 16.0.0
- React 19.2.0
- SWR 2.3.6
- Tailwind CSS 4

**API Integration:**
- DummyJSON API for user data

---

### 3. Authentication

**Location:** `./authentication`

A complete authentication implementation using NextAuth.js with GitHub OAuth.

**Key Features:**
- ✅ NextAuth.js v4 integration
- ✅ GitHub OAuth provider
- ✅ Protected routes and session management
- ✅ Client-side authentication state with `useSession`
- ✅ Sign in/Sign out functionality
- ✅ Session persistence across page reloads
- ✅ API Routes for authentication handlers

**Authentication Flow:**
```javascript
// Protected user page with session check
const { data: session, status } = useSession();

if (status === "authenticated") {
  // Show user dashboard
}
```

**Technologies:**
- Next.js 16.0.0
- React 19.2.0
- NextAuth.js 4.24.11
- Tailwind CSS 4

**Configuration:**
- GitHub OAuth setup
- Session management
- Custom consent flow

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.6 - 16.0.0 | React framework with App Router |
| **React** | 19.1.0 - 19.2.0 | UI library |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **NextAuth.js** | 4.24.11 | Authentication solution |
| **SWR** | 2.3.6 | Data fetching and caching |
| **Turbopack** | Built-in | Fast bundler for development |

## 🎓 Key Concepts Learned

### App Router (Next.js 13+)
- File-based routing with `page.js` conventions
- Server and Client Components distinction
- Layout and nested layouts
- Route groups and parallel routes

### Routing & Navigation
- **Static Routes:** `/blog`, `/users`
- **Dynamic Routes:** `/users/[username]`, `/users/[id]`
- **Nested Routes:** `/users/[username]/settings`
- **API Routes:** `/api/auth/[...nextauth]`
- **Catch-all Routes:** `[...nextauth]` for flexible routing

### Data Fetching Strategies
1. **Server Components** (Default)
   - Async/await in components
   - Automatic request deduplication
   - Zero client-side JavaScript for data fetching

2. **Static Generation (SSG)**
   - Pre-rendered at build time
   - Ideal for content that doesn't change often

3. **Client-Side Fetching**
   - SWR for smart caching and revalidation
   - Optimistic updates
   - Real-time data synchronization

### Authentication Patterns
- OAuth 2.0 with GitHub
- Session-based authentication
- Protected routes with middleware
- Client and server-side session access
- SessionProvider context pattern

### Performance Optimizations
- **Image Optimization:** `next/image` with automatic optimization
- **Code Splitting:** Automatic with App Router
- **Turbopack:** Faster builds in development
- **SWR Caching:** Intelligent client-side caching

### React Patterns
- Server vs Client Components (`'use client'` directive)
- React 19 hooks: `useRouter`, `useParams`, `useSession`
- Context providers for global state
- Async Server Components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

Each project can be run independently:

```bash
# Navigate to any project
cd Basics  # or Data-Fetching or authentication

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The applications will be available at:
- **Development:** http://localhost:3000
- **Production:** After build, run with `npm start`

### Environment Variables

For the **authentication** project, create a `.env.local` file:

```env
GITHUB_ID=your_github_oauth_app_id
GITHUB_SECRET=your_github_oauth_app_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string
```

> ⚠️ **Note:** The current code contains hardcoded credentials which should be moved to environment variables in production.

## 📂 Project Structure

```
NextJS/
├── Basics/
│   ├── src/
│   │   └── app/
│   │       ├── page.js              # Home page
│   │       ├── layout.js            # Root layout
│   │       ├── blog/
│   │       │   └── page.js          # Blog route
│   │       └── users/
│   │           ├── page.js          # Users list
│   │           └── [username]/
│   │               ├── page.js      # Dynamic user page
│   │               └── settings/
│   │                   └── page.js  # User settings
│   ├── package.json
│   └── next.config.mjs
│
├── Data-Fetching/
│   ├── src/
│   │   └── app/
│   │       ├── page.js              # Image optimization demo
│   │       ├── server/
│   │       │   └── page.js          # Server component example
│   │       ├── static/
│   │       │   └── page.js          # SSG example
│   │       └── users/
│   │           └── [id]/
│   │               └── page.js      # Client-side fetching with SWR
│   └── package.json
│
└── authentication/
    ├── src/
    │   └── app/
    │       ├── page.js              # Home page
    │       ├── provider.js          # SessionProvider wrapper
    │       ├── api/
    │       │   └── auth/
    │       │       └── [...nextauth]/
    │       │           └── route.js # NextAuth API route
    │       └── users/
    │           └── page.js          # Protected user page
    └── package.json
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [SWR Documentation](https://swr.vercel.app/)
- [React 19 Documentation](https://react.dev/)

## 🎯 Next Steps

- [ ] Add TypeScript for type safety
- [ ] Implement server actions for form handling
- [ ] Add database integration (Prisma + PostgreSQL)
- [ ] Implement middleware for route protection
- [ ] Add error boundaries and loading states
- [ ] Deploy to Vercel/Netlify
- [ ] Add unit and integration tests
- [ ] Implement incremental static regeneration (ISR)

## 📝 Notes

This is a learning project created to understand Next.js fundamentals. The code includes comments and examples that demonstrate various patterns and best practices for building modern web applications with Next.js.

---

**Built with ❤️ while learning Next.js**

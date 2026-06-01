# Learning Dashboard (Next.js + Supabase)

## 📌 Overview

This project is a Learning Dashboard built using Next.js App Router and Supabase.

Built as part of a frontend internship assignment to demonstrate:

* modern frontend architecture
* responsive UI design
* server/client component usage
* backend integration with Supabase

---

## 🚀 Features

* Server Components using Next.js App Router
* Supabase backend integration
* Responsive Bento Grid dashboard layout
* Animated UI with Framer Motion
* Reusable component architecture
* Skeleton loading states
* Mobile responsive navigation

---

## 🛠 Tech Stack

* Next.js 14+
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React Icons

---

## 🧩 Architectural Choices

* Used Next.js App Router for better routing and server rendering support.
* Reusable UI components were separated into the `components` directory.
* Supabase was used as the backend service for easy database integration.
* Tailwind CSS was chosen for fast and responsive UI development.

---

## ⚙ Server / Client Component Split

### Server Components

Used for:

* page structure
* layout rendering
* optimized initial loading

### Client Components

Used where interactivity was required:

* animations
* mobile navigation
* dynamic UI interactions

Client components use:

```tsx
"use client"
```

---

## ⚠ Challenges Faced

* Managing responsive Bento Grid layouts across screen sizes
* Handling loading states smoothly
* Structuring reusable components cleanly
* Integrating Supabase environment variables securely

---

## 📦 Setup Instructions

Clone the repository:

```bash
git clone https://github.com/vivek059project/learning-dashboard.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A sample `.env.example` file is included in the repository.

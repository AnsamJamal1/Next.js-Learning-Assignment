# Mini Task Management Dashboard

A small task dashboard built with Next.js App Router and TypeScript for the Next.js Fundamentals assignment. It uses local in-memory mock data; tasks added during a server process are not stored permanently.

## Requirements

- Node.js 20 or later
- npm

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the production build, run `npm run build` and then `npm run start`.

## Features

- Dashboard overview at `/dashboard`.
- Search and status filters at `/dashboard/tasks`.
- Dynamic task details at `/dashboard/tasks/[id]`.
- Add-task form handled by a Server Action.
- Route loading UI and task-route error boundary.
- Page metadata and TypeScript task types.

## Next.js Concepts Demonstrated

- App Router file-based routes, nested layouts, and a dynamic `[id]` route.
- Server Components for dashboard and task data; a Client Component for search and filtering.
- Server Action form submission with path revalidation.
- `loading.tsx` and `error.tsx` route conventions.
- Static and generated metadata.

## What I Learned

1. **Server Components vs. Client Components:** Server Components render on the server and can load server-side data without sending their component code to the browser. Client Components are sent to the browser and support state and event handlers.
2. **Why this project uses a Client Component:** The task list needs React state and input event handlers to search tasks and filter them by status as the user interacts.
3. **How the dynamic route works:** The `[id]` folder matches a task ID in the URL. Its page reads `params.id`, finds the matching task, and calls `notFound()` if there is no match.
4. **What a Server Action is and why it is used:** A Server Action is an asynchronous function that runs on the server. The add-task form submits to one so the new task is created on the server and the task route is revalidated.
5. **Most difficult part:** The most challenging part of this implementation was coordinating the server-side form submission with the client-side task list, while keeping the task types shared and correctly refreshed.

## Deployment

Deployment URL: **https://next-js-learning-assignment.vercel.app/**


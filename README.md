#  Shopping Cart

A React e-commerce UI that fetches a product catalogue from a public API, lets users browse items, manage a cart with quantity controls, and view a mock user profile.

##  Features
- **Product grid** — fetches and displays all products from Fake Store API.
- **Cart** — add, remove, and adjust item quantities; shows a running total; accessible via a popover.
- **User profile** — loads a random mock user (name, email, address) from JSONPlaceholder via a popover.

##  Tech Stack
- **Framework:** React 19 (with the React Compiler enabled)
- **Build Tool:** Vite 7 for bundling and dev server
- **State Management:** Zustand 5 + Immer for cart state management
- **Data Fetching:** TanStack Query 5 for data fetching and caching
- **UI Components:** `shadcn/ui` (Radix UI + Tailwind CSS)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React

# Koda Admin Dashboard

A React + Vite admin dashboard organized for team collaboration,
reusable UI, and feature-based development.

**Repository:** https://github.com/jaff0040/clone-koda-dashboard\
**Project folder shown in VS Code:** `SEF-admin-dashboard`

## Table of Contents

-   [Project Overview](#project-overview)
-   [Technology Stack](#technology-stack)
-   [Getting Started](#getting-started)
-   [Recommended Folder Structure](#recommended-folder-structure)
-   [Folder Responsibilities](#folder-responsibilities)
-   [Team Responsibilities](#team-responsibilities)
-   [Git Workflow](#git-branch-and-commit-conventions)
-   [Development Guidelines](#development-guidelines)

## Project Overview

The dashboard is intended to support: - Admin authentication and
protected routes - Responsive sidebar and navbar - Dashboard summary
cards and recent orders - Revenue analytics and top products - Product
listing, creation, editing, and image management - Order listing,
details, and status updates - User management - Cart views and
integration quality assurance

## Technology Stack

-   **React** --- user interface
-   **Vite** --- development server and build tooling
-   **JavaScript / JSX** --- application code
-   **CSS** --- styling
-   **npm** --- dependency management
-   **Git and GitHub** --- version control and collaboration

Use additional libraries only when they are already included in the
project or agreed upon by the team.

## Getting Started

### Prerequisites

Install Git, Node.js LTS (includes npm), and a code editor such as VS
Code. Verify:

``` bash
git --version
node --version
npm --version
```

### 1. Clone the repository

``` bash
git clone https://github.com/jaff0040/clone-koda-dashboard.git
```

### 2. Enter the project directory

``` bash
cd clone-koda-dashboard
```

If your local folder has a different name, use the name shown by your
terminal.

### 3. Check branches

``` bash
git fetch origin
git branch -a
```

Confirm the team's shared base branch (`main`, `develop`, or another
branch) before creating your feature branch.

### 4. Create your feature branch

Example for Member 1, assuming the base branch is `main`:

``` bash
git switch main
git pull origin main
git switch -c feature/member-01/authentication
```

Use your assigned branch from the table below. If the remote branch
already exists, fetch and track it instead of creating it again.

### 5. Install dependencies

Run this from the project root, where `package.json` is located:

``` bash
npm install
```

### 6. Start the development server

``` bash
npm run dev
```

Open the local URL printed in the terminal. Vite commonly uses
`http://localhost:5173/`, but use the exact URL shown in your terminal.
Keep the terminal open while developing; press `Ctrl + C` to stop the
server.

> `npm install` and `npm run dev` are local commands. Every teammate
> runs them on their own computer. Do not upload `node_modules` to
> GitHub.

## Recommended Folder Structure

This is the **target structure**. Create files gradually as features are
implemented; not every file must exist immediately.

``` text
SEF-admin-dashboard/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   ├── client.js
│   │   ├── auth.api.js
│   │   ├── products.api.js
│   │   ├── orders.api.js
│   │   ├── users.api.js
│   │   ├── carts.api.js
│   │   └── analytics.api.js
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── ConfirmDialog.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── Toast.jsx
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── AdminLayout.jsx
│   │   │   └── PageHeader.jsx
│   │   ├── dashboard/
│   │   │   ├── SummaryCard.jsx
│   │   │   ├── RecentOrders.jsx
│   │   │   └── TopProducts.jsx
│   │   ├── products/
│   │   │   ├── ProductTable.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   └── ProductImageUpload.jsx
│   │   ├── orders/
│   │   │   ├── OrdersTable.jsx
│   │   │   ├── OrderStatusBadge.jsx
│   │   │   └── OrderFilters.jsx
│   │   └── users/
│   │       ├── UsersTable.jsx
│   │       └── UserDetails.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useDebounce.js
│   ├── pages/
│   │   ├── auth/LoginPage.jsx
│   │   ├── dashboard/DashboardPage.jsx
│   │   ├── analytics/AnalyticsPage.jsx
│   │   ├── products/ProductsPage.jsx
│   │   ├── products/AddProductPage.jsx
│   │   ├── products/EditProductPage.jsx
│   │   ├── orders/OrdersPage.jsx
│   │   ├── orders/OrderDetailsPage.jsx
│   │   ├── users/UsersPage.jsx
│   │   ├── users/UserDetailsPage.jsx
│   │   ├── carts/CartsPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   └── validators.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Folder Responsibilities

  -----------------------------------------------------------------------
  Folder                              Purpose
  ----------------------------------- -----------------------------------
  `src/api/`                          Centralize backend requests for
                                      authentication, products, orders,
                                      users, carts, and analytics.

  `src/assets/`                       Store images, icons, and fonts
                                      imported by React components.

  `src/components/common/`            Reusable buttons, inputs, modals,
                                      loaders, error/empty states,
                                      pagination, and toast
                                      notifications.

  `src/components/layout/`            Shared admin shell: sidebar,
                                      navbar, page header, and responsive
                                      layout.

  `src/components/dashboard/`         Dashboard widgets such as summary
                                      cards, recent orders, and top
                                      products.

  `src/components/products/`          Product tables, forms, filters, and
                                      image-upload controls.

  `src/components/orders/`            Order tables, filters, and order
                                      status indicators.

  `src/components/users/`             Reusable user tables and
                                      user-detail components.

  `src/context/`                      Shared state, especially
                                      authentication state and the admin
                                      session.

  `src/hooks/`                        Reusable custom React hooks, such
                                      as authentication access or
                                      debounced search.

  `src/pages/`                        Full screens rendered by the
                                      router; pages compose components
                                      and call APIs.

  `src/routes/`                       Route definitions and
                                      protected-route logic.

  `src/utils/`                        Shared helpers, constants,
                                      formatters, and validation
                                      functions.

  `public/`                           Static files served directly, such
                                      as favicons and public images.

  `src/main.jsx`                      Entry point that bootstraps and
                                      renders the React application.

  `src/App.jsx`                       Main app component or route entry
                                      point, depending on the project
                                      setup.

  `src/App.css`                       Styles specific to the main app
                                      component.

  `src/index.css`                     Global styles, resets, typography,
                                      and design tokens.
  -----------------------------------------------------------------------

### Root-level files

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `package.json`                      Project metadata, dependencies, and
                                      npm scripts.

  `package-lock.json`                 Locks dependency versions for
                                      consistent installs.

  `vite.config.js`                    Vite configuration.

  `index.html`                        HTML entry point used by Vite.

  `eslint.config.js`                  Linting and code-quality rules.

  `.gitignore`                        Files and folders Git should not
                                      track.

  `.env.example`                      Example environment-variable names
                                      without real secrets.

  `README.md`                         Project documentation and setup
                                      instructions.
  -----------------------------------------------------------------------

Keep `package.json` and `package-lock.json` at the project root. Do not
create duplicate copies inside `src/`. `node_modules/` is generated by
`npm install` and should not be committed.

### Page vs. component vs. API

For example: - **Page:** `pages/products/ProductsPage.jsx` --- the full
products screen. - **Component:** `components/products/ProductTable.jsx`
--- the table shown on that screen. - **API:** `api/products.api.js` ---
functions that fetch, create, update, or delete products.

This separation keeps code easier to review, test, and maintain.

## Team Responsibilities

Assignments follow the supplied team plan. Names are included where
readable from the assignment image; confirm spellings and fill the two
unassigned names with the team.

  ---------------------------------------------------------------------------------------------------------------
                 \# Team Member   Responsibility   Feature Branch                          Short Description
  ----------------- ------------- ---------------- --------------------------------------- ----------------------
                  1 Shahd Ali     Authentication   `feature/member-01/authentication`      Build the admin login
                                                                                           page, authentication
                                                                                           context, session
                                                                                           handling, logout, and
                                                                                           protected routes using
                                                                                           the backend's
                                                                                           supported
                                                                                           authentication flow.

                  2 Mahmoud       Admin Layout     `feature/member-02/admin-layout`        Create the responsive
                    Hammad                                                                 sidebar and navbar,
                                                                                           navigation links,
                                                                                           active-page styling,
                                                                                           mobile menu behavior,
                                                                                           and logout-button
                                                                                           placement.

                  3 Amal Yasser   Shared UI        `feature/member-03/shared-ui`           Create reusable
                                                                                           buttons, inputs,
                                                                                           selects, modals,
                                                                                           status badges,
                                                                                           pagination, loaders,
                                                                                           error/empty states,
                                                                                           and toast
                                                                                           notifications.
                                                                                           Coordinate component
                                                                                           props with other
                                                                                           members.

                  4 Basel Amr     Dashboard        `feature/member-04/dashboard-summary`   Build the main
                                  Summary                                                  dashboard with summary
                                                                                           cards, supported
                                                                                           sales/order/customer
                                                                                           totals, and a
                                                                                           recent-orders section
                                                                                           connected to API data
                                                                                           when available.

                  5 Mohamed Askar Analytics        `feature/member-05/analytics`           Build revenue charts
                                                                                           and top-product
                                                                                           analytics, including
                                                                                           loading, empty, error,
                                                                                           date-formatting, and
                                                                                           number-formatting
                                                                                           states.

                  6 To be         List and Add     `feature/member-06/products-list-add`   Build the product
                    confirmed     Products                                                 table, search,
                                                                                           filters, pagination,
                                                                                           add-product form,
                                                                                           validation, and
                                                                                           product-creation API
                                                                                           integration.

                  7 To be         Edit Products    `feature/member-07/edit-products`       Load existing product
                    confirmed                                                              data, reuse the shared
                                                                                           product form, support
                                                                                           product updates and
                                                                                           image management, and
                                                                                           show success/error
                                                                                           feedback. Coordinate
                                                                                           `ProductForm` with
                                                                                           Member 6.

                  8 Soheila       Orders List      `feature/member-08/orders-list`         Build the orders table
                    Mohamed                                                                with customer, status,
                                                                                           date, and total
                                                                                           fields, plus search,
                                                                                           filtering, pagination,
                                                                                           and status badges.

                  9 Fares Khaled  Order Details    `feature/member-09/order-details`       Display order items,
                                  and Status                                               customer information,
                                                                                           totals, and status
                                                                                           updates through
                                                                                           supported API
                                                                                           operations. Include
                                                                                           confirmation and error
                                                                                           feedback.

                 10 Malak Nasser  Users Management `feature/member-10/users-management`    Build the users list
                                                                                           and detail view, and
                                                                                           implement only the
                                                                                           management actions
                                                                                           supported by the
                                                                                           backend API.

                 11 Zeina Ahmed   Carts and        `feature/member-11/carts-qa`            Implement cart views
                                  Integration QA                                           if required, test
                                                                                           page/API integration
                                                                                           and common workflows,
                                                                                           document bugs, and
                                                                                           retest fixes.
  ---------------------------------------------------------------------------------------------------------------

### Team coordination rules

-   Each member works on their assigned feature branch.
-   Agree on shared component names, props, and behavior before other
    members depend on them.
-   Members 6 and 7 coordinate product form and image-upload work.
-   Members 8 and 9 coordinate order data and status handling.
-   Member 11 tests integrated features after they are available for
    review.
-   Communicate changes to shared routing, global CSS, API client
    configuration, and package dependencies.

## Git Branch and Commit Conventions

### Branch naming

Use this pattern:

``` text
feature/member-XX/short-task-name
```

Examples:

``` text
feature/member-01/authentication
feature/member-02/admin-layout
feature/member-06/products-list-add
```

### Commit message format

Use:

``` text
type(scope): describe the change
```

Examples:

``` bash
git commit -m "feat(auth): implement admin login and protected routes"
git commit -m "feat(layout): add responsive sidebar and navbar"
git commit -m "feat(ui): add reusable form and feedback components"
git commit -m "feat(products): add product listing and creation"
git commit -m "test(integration): verify cart and dashboard workflows"
```

Common commit types: - `feat` --- new feature - `fix` --- bug fix -
`refactor` --- restructure code without changing intended behavior -
`style` --- styling or formatting-only changes - `test` --- tests and
QA - `docs` --- documentation - `chore` --- maintenance tasks

### Daily workflow

``` bash
git status
git branch --show-current
git diff
git diff --check
git add <specific-files>
git diff --cached
git commit -m "feat(scope): describe the change"
git push -u origin feature/member-XX/your-task
```

Open a Pull Request on GitHub targeting the agreed integration branch.
Request review and merge after checks pass.

> Never commit API keys, passwords, private tokens, or a real `.env`
> file. Keep secrets out of Git and provide only a safe `.env.example`.

## Development Guidelines

1.  **Follow existing conventions.** Inspect the current code and
    `package.json` before adding libraries or changing configuration.
2.  **Reuse shared UI.** Prefer components from `components/common/`
    rather than creating duplicate buttons, inputs, modals, or loaders.
3.  **Separate API logic.** Put backend request functions in the
    appropriate `src/api/*.api.js` module where practical.
4.  **Handle request states.** Data-driven pages should support loading,
    success, empty, and error states.
5.  **Validate forms.** Provide clear validation and useful error
    messages.
6.  **Make layouts responsive.** Support desktop, tablet, and mobile
    widths.
7.  **Use consistent naming.** Follow the project's established naming
    style.
8.  **Test before a PR.** Run the app, test your feature, inspect the
    browser console, and run available lint/test scripts.
9.  **Coordinate shared-file changes.** Avoid uncoordinated simultaneous
    edits to routing, global styles, API clients, shared forms, and
    package files.
10. **Document setup changes.** Update this README or `.env.example`
    when new setup requirements are introduced.

## Important Notes

-   This is a recommended target structure, not a claim that every
    listed file already exists.
-   Confirm API endpoints and request/response formats in the project's
    API documentation before implementing integrations.
-   Do not assume every admin action is supported by the API; implement
    only exposed operations.
-   Every teammate clones the repository and installs dependencies
    locally. `node_modules/` is not uploaded to GitHub.
-   Agree on the shared base branch (`main`, `develop`, or another
    branch) before starting team development.
-   Confirm member-name spellings and the two unassigned names with the
    team.

------------------------------------------------------------------------

**Project:** Koda Admin Dashboard\
**Repository:** https://github.com/jaff0040/clone-koda-dashboard\
**Documentation language:** English

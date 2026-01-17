This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Multi-Tenant Sales Dashboard (Frontend)

 This project is a frontend-only implementation of a multi-tenant sales dashboard built as part of a frontend assignment. The application simulates a SaaS platform used by multiple organizations, where each organization (tenant) has its own isolated data and users with specific roles. The primary focus of this project is application structure, modularity, role-based access control, and frontend architecture rather than feature completeness or visual design.

 ## Overview

 The application supports multiple tenants using the same codebase while ensuring strict data isolation at the UI level. Users belong to a single tenant at a time and are assigned a role that determines their permissions within that tenant. Switching between tenants dynamically updates all visible data across the application.
Authentication is mocked, as no backend implementation is required.

## Tenancy Model

Two tenants are supported:
Organization A
Organization B
Each tenant has its own:
Leads
Call logs
Tenant-specific data is simulated using mock data, and switching the active tenant updates the dashboard instantly without requiring a page reload.

## Roles and Access Control
The application supports two user roles:
Admin
Full access within the tenant
Can edit lead status
Can view all data
Agent
View-only access
Cannot edit lead status or access restricted actions
Role-based access is enforced at the UI and component level to ensure permissions apply only within the selected tenant.

## Core Modules

## Leads Module
The Leads module displays a list of leads for the active tenant, including name, phone number, and current status. Leads can be filtered by status using a simple dropdown. Editing actions are visible only to Admin users, while Agents have read-only access.
## Call Logs Module
The Call Logs module displays call history for the active tenant, showing the related lead, call duration, and outcome. Empty states are handled gracefully when no call data is available.

## Application Structure

The codebase is organized with a clear separation of concerns to ensure reusability and scalability. Feature-specific logic is grouped into modules, shared UI elements are reusable, and global tenant and role state is managed centrally. This structure allows new tenants, roles, or modules to be added with minimal changes.

## State Management

Global state such as the active tenant and user role is managed using Zustand to avoid unnecessary re-renders and simplify state access across the application. Local UI-specific state, such as lead status filters, is handled within individual components to keep concerns isolated.

## Frontend Optimization Considerations

While the application is intentionally lightweight, optimization awareness is demonstrated through:
Minimal global state usage
Localized component state for UI concerns
Modular architecture suitable for lazy loading and code splitting if the application scales further

## UI Approach

The UI is intentionally kept simple and functional to emphasize clarity and architecture. The active tenant and role are always visible, and loading or empty states are handled appropriately. The focus remains on usability and correctness rather than visual complexity.

## Running the Project Locally
Clone the repository and install dependencies:
```bash
npm install
npm run dev
```
## Summary

This project demonstrates a clean and scalable frontend architecture for a multi-tenant SaaS application. It highlights tenant isolation, role-based access control, modular design, and thoughtful state management, aligning closely with real-world frontend development practices.
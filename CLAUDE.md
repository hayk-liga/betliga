# Claude Code Instructions

## Project Overview
This is a Next.js application built with TypeScript and Tailwind CSS.

## Development Guidelines

### 1. Framework Usage
- Always use Next.js features and conventions
- Leverage Next.js routing, data fetching, and optimization features
- Use TypeScript for type safety
- Use Tailwind CSS for styling

### 2. Code Style
- **Never add comments in code**
- **CRITICAL: Never use `any` type under any circumstances** - This is a strict rule with no exceptions
  - Always define proper types or interfaces
  - Use `unknown` if the type is truly unknown and needs runtime checking
  - Use generics (`<T extends ...>`) for reusable components/functions
  - Use `FieldValues` and type parameters from libraries when working with forms
  - When editing existing files, replace ALL `any` types with proper types
  - Examples of proper alternatives:
    - ❌ `control: Control<any>` → ✅ `control: Control<TFieldValues>`
    - ❌ `data: any` → ✅ `data: User` or `data: unknown`
    - ❌ `params: any` → ✅ `params: Record<string, string>`
- **Always use arrow functions for components** - When creating or editing components, use arrow function syntax (e.g., `const Component = () => {}` instead of `function Component() {}`)

### 3. TypeScript
- **Replace `any` types in edited files** - When editing existing files, replace all `any` types with proper types
- Use strict TypeScript features for type safety
- **Never prefix interfaces with "I"** - Use descriptive names without prefixes (e.g., `User` not `IUser`, `BlacklistApi` not `IBlacklistApi`)

### 4. Imports
- **Always use alias in imports** (e.g., `@/components`, `@/lib`, etc.)

### 5. Best Practices
- Follow React.js and Next.js best practices
- Use hooks appropriately
- Implement proper error handling
- Optimize performance

### 6. Import Convention
Organize imports in the following order with blank lines between each group:

```typescript
// 1. External libraries (React first, then others)
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

// 2. Internal files (components, functions, hooks, constants)
// Group by directory names
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/hooks/useAuth'
import { API_ENDPOINTS } from '@/constants/api'

// 3. Assets
import logo from '@/assets/images/logo.png'
import styles from '@/styles/component.module.css'
```

**Structure:**
- **Group 1:** External libraries (React components/variables first, then other dependencies)
- **Group 2:** Internal files (components, functions, hooks, constants) grouped by directory
- **Group 3:** Assets (images, styles, etc.)

### 7. Form Handling
- **Always use react-hook-form for form management** - Use react-hook-form library for all forms
- Use `Controller` component from react-hook-form to wrap custom form inputs and controlled components
- Use `@hookform/resolvers/yup` for validation schema with Yup
- Use `useForm` hook for form state management
- Use `register` for simple form inputs
- Use `formState.errors` for error display
- Implement proper error handling and validation feedback

**Example:**
```typescript
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const { register, control, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(validationSchema),
});

// Simple input
<input {...register('email')} />

// Custom/controlled component
<Controller
  name="customField"
  control={control}
  render={({ field }) => <CustomInput {...field} />}
/>
```

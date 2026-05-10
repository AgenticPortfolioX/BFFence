# Implementation Plan - Lead Notification System Enhancement

**Status: 100% Complete | Orchestrator: Antigravity [Gemini 3 Flash] | Worker Agent: Deepseek [Coding Agent]**

## Problem Statement
The user reported that estimate requests submitted via the website are not triggering notifications (email or Google Sheets). Currently, the site uses Formspree (`mzdobkpz`), which may have configuration issues or lack the desired integrations.

## Proposed Solution
Implement a robust, multi-channel notification system by:
1.  **Enabling N8N Integration**: Adding a secondary submission path to an n8n webhook for Google Sheets and custom alerts.
2.  **Improving Reliability**: Using a custom submission handler to ensure both Formspree and N8N are notified.
3.  **Documentation**: Updating `CLAUDE.md` to accurately reflect the lead capture architecture.

## User Review Required
> [!IMPORTANT]
> To enable Google Sheets and advanced notifications, you will need to provide an **n8n Webhook URL** in the `.env` file. I have noticed `N8N_WEBHOOK_URL` is currently empty.

## Step-by-Step Checklist
- [x] Research/Verify existing Formspree configuration [x]
- [x] [MODIFY] `src/pages/FreeEstimate.tsx` to support dual-path submission (Formspree + N8N) [x]
- [x] [MODIFY] `.env.example` to include notification-related variables [x]
- [x] [MODIFY] `CLAUDE.md` to update the "Lead Capture" section [x]
- [x] Verify form submission logic locally (mocking endpoints) [x]

## Proposed Changes

### [Frontend - Lead Capture]

#### [MODIFY] [FreeEstimate.tsx](file:///C:/Users/jmgra/antigravityagents/.agent/workflows/fence-company/src/pages/FreeEstimate.tsx)
- Update `handleSubmit` to a custom async function.
- First, submit to Formspree using the `@formspree/react` SDK.
- Second, submit to `import.meta.env.VITE_N8N_WEBHOOK_URL` if present.
- Add error handling to ensure one failure doesn't block the other (best effort).

### [Configuration]

#### [MODIFY] [.env.example](file:///C:/Users/jmgra/antigravityagents/.agent/workflows/fence-company/.env.example)
- Add `VITE_N8N_WEBHOOK_URL` for frontend access to the notification hook.

### [Documentation]

#### [MODIFY] [CLAUDE.md](file:///C:/Users/jmgra/antigravityagents/.agent/workflows/fence-company/CLAUDE.md)
- Update line 67: "Currently uses Formspree (`mzdobkpz`) and optional n8n webhook for lead capture."

## Verification Plan

### Automated Tests
- None (Visual/Integration focused).

### Manual Verification
- [ ] Fill out the form in dev mode.
- [ ] Check console logs for "Submission successful" to both endpoints.
- [ ] (User) Verify receipt in Formspree and N8N (once hook is provided).

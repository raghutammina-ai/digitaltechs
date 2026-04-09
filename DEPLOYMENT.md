# Digital Tech Prosperity — Deployment & Branching Strategy

## Table of Contents
1. [Overview](#overview)
2. [Branch Structure](#branch-structure)
3. [Full Workflow](#full-workflow)
4. [Developer Guide](#developer-guide)
5. [GitHub Configuration](#github-configuration)
6. [Render Deployment](#render-deployment)
7. [CI/CD Pipelines](#cicd-pipelines)
8. [Rules & Restrictions](#rules--restrictions)
9. [Troubleshooting](#troubleshooting)

---

## Overview

We follow a **3-tier branching strategy** with automated CI checks and controlled deployments:

```
Developer Machine → feature branch → test branch → main branch
                                          ↓               ↓
                                    Render TEST    Render PRODUCTION
```

| Environment | Branch | URL | Deployment |
|-------------|--------|-----|------------|
| Test        | `test` | digitaltechs-test.onrender.com | Auto (on merge) |
| Production  | `main` | digitaltechs-production.onrender.com | Auto (on merge) |

---

## Branch Structure

### `main` — Production Branch
- Represents live production code
- **Nobody pushes directly to this branch**
- Only accepts merges via Pull Request from `test`
- Requires **1 human approval** before merge
- CI must pass before merge is allowed

### `test` — Staging/Test Branch
- Represents the test environment
- **Nobody pushes directly to this branch**
- Only accepts merges via Pull Request from feature branches
- CI must pass — **no manual approval needed** (auto-merge handles it)
- Automatically deployed to Render Test environment

### `feature/*` `fix/*` `dev/*` — Developer Branches
- Created by developers for individual work
- Naming conventions:
  - New feature → `feature/your-feature-name`
  - Bug fix → `fix/issue-description`
  - Developer work → `dev/your-name/what-you-are-doing`
- Pushed to GitHub and a PR is opened targeting `test`
- Deleted after merge

---

## Full Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     DEVELOPER                                   │
│  1. Pull latest test branch                                     │
│  2. Create feature branch                                       │
│  3. Write code & commit                                         │
│  4. Push feature branch to GitHub                               │
│  5. Open Pull Request → target: test                            │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     GITHUB CI (Automated)                       │
│  6. CI workflow triggers (build + lint check)                   │
│     ✅ Passes → Auto-merge PR into test branch                  │
│     ❌ Fails  → PR stays open, developer fixes and re-pushes    │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     RENDER TEST (Automated)                     │
│  7. Render detects new commit on test branch                    │
│  8. Automatically builds and deploys to Test environment        │
│  9. Team reviews the live test URL                              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     HUMAN APPROVAL (Manual)                     │
│  10. Reviewer opens Pull Request: test → main                   │
│  11. Another team member reviews and approves                   │
│  12. Reviewer clicks Merge (single click to production)         │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     RENDER PRODUCTION (Automated)               │
│  13. Render detects new commit on main branch                   │
│  14. Automatically builds and deploys to Production             │
│  15. Live site updated ✅                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Developer Guide

### First-time setup

```bash
# Clone the repository
git clone https://github.com/raghutammina-ai/digitaltechs.git
cd digitaltechs

# Install dependencies
npm install
```

### Starting a new task

```bash
# Step 1: Always start from the latest test branch
git checkout test
git pull origin test

# Step 2: Create your feature branch
git checkout -b feature/your-feature-name

# Examples:
# git checkout -b feature/add-blog-page
# git checkout -b fix/contact-form-validation
# git checkout -b dev/raghu/update-hero-text
```

### During development

```bash
# Run the site locally
npm run dev
# Open http://localhost:3000

# Check for lint errors before pushing
npm run lint

# Verify the build works
npm run build
```

### Pushing your work

```bash
# Stage and commit your changes
git add .
git commit -m "descriptive message about what you changed"

# Push your feature branch to GitHub
git push origin feature/your-feature-name
```

### Opening a Pull Request

1. Go to [github.com/raghutammina-ai/digitaltechs](https://github.com/raghutammina-ai/digitaltechs)
2. You will see a banner: **"Compare & pull request"** — click it
3. Make sure the base branch is set to **`test`** (not main)
4. Add a clear title and description of what you changed
5. Click **"Create pull request"**

### What happens next (automatic)

- CI runs your build and lint check
- If CI **passes** → your PR is **automatically merged** into `test`
- If CI **fails** → fix the errors, push again — CI will re-run

### Checking CI status

On your PR page, scroll down to see the checks section:
- 🟡 Yellow circle = CI is running
- ✅ Green tick = CI passed, auto-merge will happen
- ❌ Red cross = CI failed, check the logs and fix

---

## GitHub Configuration

### Branch Protection Rules

#### `test` branch
| Rule | Setting |
|------|---------|
| Require PR before merging | ✅ Enabled |
| Required approvals | ❌ None (auto-merge handles this) |
| Require CI to pass | ✅ Build & Lint Check |
| Allow force push | ❌ Blocked |
| Allow deletions | ❌ Blocked |

#### `main` branch
| Rule | Setting |
|------|---------|
| Require PR before merging | ✅ Enabled |
| Required approvals | ✅ 1 approval required |
| Dismiss stale reviews | ✅ Enabled |
| Require CI to pass | ✅ Build & Lint Check |
| Allow force push | ❌ Blocked |
| Allow deletions | ❌ Blocked |

### Repository Settings
- **Visibility**: Public
- **Default branch**: `main`

---

## Render Deployment

### Services

We have two separate Web Services on [Render](https://render.com):

#### digitaltechs-test
| Setting | Value |
|---------|-------|
| Service type | Web Service |
| Repository | raghutammina-ai/digitaltechs |
| Branch | `test` |
| Build command | `npm install && npm run build` |
| Start command | `npm start` |
| Auto-deploy | Yes |
| Node version | 20 |

#### digitaltechs-production
| Setting | Value |
|---------|-------|
| Service type | Web Service |
| Repository | raghutammina-ai/digitaltechs |
| Branch | `main` |
| Build command | `npm install && npm run build` |
| Start command | `npm start` |
| Auto-deploy | Yes |
| Node version | 20 |

### How Render deploys

- Render watches the connected branch for new commits
- When a commit lands on `test` → test service builds and deploys automatically
- When a commit lands on `main` → production service builds and deploys automatically
- No manual action needed on Render — it is fully automatic

### Checking a deployment on Render

1. Log in to [dashboard.render.com](https://dashboard.render.com)
2. Click on the service (test or production)
3. Go to the **Logs** tab to watch the build in real time
4. Status indicators:
   - 🟡 **In Progress** = building
   - ✅ **Live** = deployed successfully
   - ❌ **Failed** = build error, check logs

---

## CI/CD Pipelines

### Files location
```
.github/
└── workflows/
    ├── ci.yml                   ← Runs build + lint checks
    └── auto-merge-to-test.yml  ← Auto-merges to test when CI passes
```

### ci.yml — Build & Lint Check

**Triggers on:**
- Push to `test`, `feature/**`, `fix/**`, `dev/**` branches
- Pull Request targeting `test` or `main`

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Run lint (`npm run lint`)
5. Run build (`npm run build`)

If any step fails, the whole check fails and the PR cannot be merged.

### auto-merge-to-test.yml — Auto Merge

**Triggers on:** CI workflow completion

**Logic:**
- Only runs when CI **passes**
- Only runs on feature/fix/dev branches (not test or main)
- Finds open PRs from the branch targeting `test`
- Automatically merges them using squash merge

---

## Rules & Restrictions

### What developers CAN do
- ✅ Push to their own feature/fix/dev branches
- ✅ Open Pull Requests targeting `test`
- ✅ Review and approve PRs from `test` to `main`
- ✅ Run the site locally

### What developers CANNOT do
- ❌ Push directly to `test` branch
- ❌ Push directly to `main` branch
- ❌ Merge to `main` without 1 approval
- ❌ Merge to `main` without CI passing
- ❌ Force push to `test` or `main`

### Production deployment checklist
Before merging `test → main`:
- [ ] Feature works correctly on the test environment URL
- [ ] No console errors in the browser
- [ ] Tested on mobile (responsive)
- [ ] Another team member has reviewed the PR
- [ ] CI is passing (green tick on the PR)

---

## Troubleshooting

### CI failed — what do I do?

1. Click **Details** next to the failed check on your PR
2. Expand the failed step to see the error message
3. Fix the issue locally:
   ```bash
   npm run lint    # fix lint errors
   npm run build   # fix build errors
   ```
4. Commit and push — CI will automatically re-run

### My PR was not auto-merged after CI passed

- Wait 1–2 minutes after CI passes — the auto-merge workflow runs shortly after
- Check the **Actions** tab on GitHub to see if the auto-merge workflow ran
- If it failed, check the logs for the reason

### Render build failed

1. Go to Render Dashboard → click the failed service
2. Click the failed deploy → **Logs**
3. Look for the error in the build output
4. Common causes:
   - Missing environment variable
   - Node version mismatch
   - Build command error

### I accidentally pushed to the wrong branch

- You cannot push directly to `test` or `main` — GitHub will reject it
- If you pushed to the wrong feature branch, create a new branch from `test` and cherry-pick your commits

### How do I update my feature branch with latest test changes?

```bash
git checkout feature/your-feature-name
git fetch origin
git rebase origin/test
# resolve any conflicts, then:
git push origin feature/your-feature-name --force-with-lease
```

---

## Quick Reference Card

```
START NEW TASK
──────────────
git checkout test && git pull origin test
git checkout -b feature/your-feature-name

DAILY WORK
──────────
npm run dev          → run locally
npm run lint         → check for errors
npm run build        → verify build

SUBMIT WORK
───────────
git add .
git commit -m "your message"
git push origin feature/your-feature-name
→ Open PR on GitHub targeting test branch
→ CI runs automatically
→ Auto-merges if CI passes
→ Render test deploys automatically

RELEASE TO PRODUCTION
──────────────────────
→ Review test environment URL
→ Open PR: test → main on GitHub
→ Get 1 approval from team member
→ Click Merge
→ Render production deploys automatically
```

---

*Document maintained by Digital Tech Prosperity Engineering Team*
*Last updated: April 2026*

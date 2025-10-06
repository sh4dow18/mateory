# Contributing to the Project

Thank you for wanting to contribute!
This document summarizes the recommended workflow to collaborate in an organized way.

---

## 1. Getting Started

1. Fork the repository.
2. Clone your fork:

```
git clone https://github.com/yourusername/mateory.git
cd mateory
```

3. Create a new branch from `develop`:

```
git checkout -b feature/descriptive-name
```

---

## 2. Branching Conventions

Recommended branch names:

- `feature/<description>` — new features
- `fix/<description>` — bug fixes
- `chore/<description>` — maintenance tasks
- `docs/<description>` — documentation changes
- `test/<description>` — adding/modifying tests

---

## 3. Conventional Commits

We use Conventional Commits for consistent messages and automatic changelog generation.

Format:

```
<type>(<scope>): <short description>
```

Common types:

- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation
- `style` — formatting (no logic changes)
- `refactor` — refactoring without functional changes
- `test` — tests
- `chore` — maintenance tasks
- `ci` — CI/CD changes

Examples:

```
feat(inventory): add calculation with safety factor
fix(player): fix pause when switching tab
docs(readme): update installation section
```

---

## 4. Code Style

- Use **TypeScript** (`.ts` / `.tsx`)
- Format with **Prettier** and fix lint with **ESLint**:

```
npm run format
npm run lint
```

- Naming:
  - Files: `kebab-case` (`inventory`)
  - Components: `PascalCase` (`InventoryCard.tsx`)
  - Hooks: `camelCase` prefixed with `use` (`useInventory.ts`)
  - Services: `PascalCase` (`CalculateInventory`)

---

## 5. Tests

- Add tests for any significant logic (services, hooks).
- Before opening PR, run:

```
npm run test
```

- If you add new functions, try to cover them with unit tests.

---

## 6. Storybook

- If you modify visual components, add/update their `.stories.tsx`.
- Run Storybook locally to visually check:

```
npm run storybook
```

---

## 7. Build Verification

It's recommended to ensure the project builds correctly:

```
npm run build
```

- This ensures no compilation errors or configuration issues are present.

---

---

## 8. Optional: Code Quality Checks with SonarQube

You can optionally run SonarQube locally to check code quality.

1. Make sure SonarQube is running locally (default: [http://localhost:9000](http://localhost:9000)).
2. Set your environment variable with your SonarQube token:

**For bash/zsh:**

```bash
export SONAR_TOKEN=<your_token>
```

**For fish:**

```fish
set -x SONAR_TOKEN <your_token>
```

3. Run the analysis:

```
npm run sonar
```

- This will send your project to the local SonarQube instance and allow you to inspect issues in the SonarQube GUI.
- This step is optional but recommended to check code quality before creating a PR.

---

## 9. Pull Request (PR)

1. Keep your branch updated with `develop`:

```
git fetch origin
git rebase origin/develop
```

or use `merge` if you prefer:

```
git merge origin/develop
```

2. Push to your fork:

```
git push origin feature/descriptive-name
```

3. Open PR on the original repo, target `develop`

4. Describe:
   - What changes you are introducing.
   - Why.
   - Screenshots / demos if applicable.

5. Wait for review and make changes if requested.

---

## 10. Contact

If you need help, open an issue or contact **sh4dow18** via GitHub.

Thank you for helping improve this project!

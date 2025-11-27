# Mateory

[![Version](https://img.shields.io/badge/version-0.5.0-00AA00?style=for-the-badge&logo=github&labelColor=gray)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-0066AA?style=for-the-badge&labelColor=gray)](LICENSE)
[![CI-CD](https://img.shields.io/github/actions/workflow/status/sh4dow18/mateory-fsd/ci-cd.yml?style=for-the-badge&label=CI-CD&labelColor=gray&logo=vercel&labelColor=white)](https://github.com/sh4dow18/mateory-fsd/actions)
[![Storybook](https://img.shields.io/badge/docs-Storybook-ff4785?style=for-the-badge&labelColor=gray&logo=storybook)](https://ramses-solano.vercel.app/mateory)
![Issues](https://img.shields.io/badge/open%20issues-0-0c5db5?style=for-the-badge&labelColor=gray&logo=sonar)
![Coverage](https://img.shields.io/badge/test%20coverage-89.6%25-0c5db5?style=for-the-badge&labelColor=gray&logo=sonar)
![Duplications](https://img.shields.io/badge/duplications-0%25-0c5db5?style=for-the-badge&labelColor=gray&logo=sonar)
![Hostposts](https://img.shields.io/badge/hostposts-0-0c5db5?style=for-the-badge&labelColor=gray&logo=sonar)

**Mateory** is a web tool that helps solve easy problems of math theories, such as **Inventory Theories** and
**Queuing Theories**, with a few clicks, taking pre-existing mathematical models, such as the **EOQ with deficit**
model for inventories or the **M/M/1:FIFO/∞/∞** for queues

---

## Project Status

**Version 0.5.0**. See [`CHANGELOG.md`](CHANGELOG.md) for version history.

---

## Installation

Clone the repository:

```
git clone https://github.com/sh4dow18/mateory.git
cd mateory
```

Install dependencies:

```
npm install
# or
yarn install
```

Run in development:

```
npm run dev
# or
yarn dev
```

---

## Technologies

| Tech                            | Used as/for                 |
| ------------------------------- | --------------------------- |
| Next.js                         | Main framework              |
| TypeScript                      | Static typing               |
| TailwindCSS                     | Styles                      |
| Storybook                       | Component documentation     |
| Vitest / Jest + Testing Library | Testing                     |
| ESLint + Prettier               | Code quality and formatting |

---

## Usage / Quick Examples

**Init Project**

```
npm run init
```

Runs `npm install`, `npm audit fix` and `npx husky install`

**Run dev server**

```
npm run dev
```

**Open Storybook locally**

```
npm run storybook
# Visit http://localhost:6006
```

**Build Storybook (for deploy)**

```
npm run build-storybook
# Generates "storybook-static/"
```

**Run tests**

```
npm run test
```

**Run Tests with Watch**

```
npm run test:watch
```

**Create a new release**

```
npm run release
```

- Automatically bumps version based on Conventional Commits.
- Updates CHANGELOG.md.
- Creates a new git tag for the release.

**Check lint**

```
npm run lint
```

**Run Prettier**

```
npm run format
```

**Vitest creates Coverage Report**

```
npm run coverage
```

**Run SonarQube**

```
npm run sonar
```

---

## Recommended Repository Structure

Frontend: [**Feature-Sliced Design Architecture**](https://feature-sliced.design)

```
src/
 ├─ app/
 ├─ features/
 │   └─ inventories/
 │       ├─ config/             -> Settings
 │       ├─ lib/                -> utils, services, helpers
 │       ├─ model/              -> States, hooks, business layer
 │       ├─ ui/                 -> UI Components
 │       └─ InventoryPage.tsx   -> Main Feature Page
 ├─ shared/                     -> Generic and reusable Stuff
 |    ├─ ui/
 |    ...
 └─ widgets/                    -> Functional fragments from a specific domain
     ├─ navigation/
     |  ├─ ui/
     |  ...
     ...
```

Backend: [**Layered Architecture**](https://dev.to/yasmine_ddec94f4d4/understanding-the-layered-architecture-pattern-a-comprehensive-guide-1e2j)

```
src/
 ├─ app/
 │   └─ api/
 │      ├─ emails
 │      |   ├─ report-bug
 |      |   |  └─ route.ts      -> Controller
 |      |   ...
 |      ...
 ├─ emails/                     -> React Email Templates
 ├─ modules/
 │   ├─ emails/
 │   |  └─ services
 |   ...
```

---

## Roadmap

| Estado | Tarea                              |
| ------ | ---------------------------------- |
| ✅     | Initialize project                 |
| ✅     | Migrate to feature-based structure |
| X      | Add Storybook and first stories    |
| X      | Add Formulas Information Page      |

---

## How to Contribute

Thank you for contributing! Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for exact steps on forks, branches, commit conventions, and PRs.

---

## Issues

Use the templates in `.github/ISSUE_TEMPLATE/` to report bugs or suggest features. Provide reproduction steps and context (OS, browser, version).

---

## License

This project uses the **MIT** license. See the [`LICENSE`](LICENSE) file for details.

---

## Author

**Ramsés Solano**

- GitHub: [@sh4dow18](https://github.com/sh4dow18)
- Portfolio: [https://ramses-solano.vercel.app](https://ramses-solano.vercel.app)

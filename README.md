<div align="center">

[![author - @aiko-kami](https://img.shields.io/badge/author-%40aiko--kami-blue)](https://www.github.com/aiko-kami)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/aiko-kami/panda-server)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/aiko-kami/panda-server/master)
![GitHub repo size](https://img.shields.io/github/repo-size/aiko-kami/panda-server)

![Static Badge](https://img.shields.io/badge/-Next.js-black?logo=next.js&labelColor=gray)
![Static Badge](https://img.shields.io/badge/-TailwindCSS-blue?logo=tailwindcss&labelColor=gray&color=%2306B6D4)

</div>

## 🐣 Presentation

Sheepy is a collaborative platform for projects creation and tracking.

![Logo](https://github.com/aiko-kami/sheepy/blob/master/public/logo%20Sheepy_blue.png?raw=true)

Our mission in Sheepy: Help you bring your projects to life!

You have brilliant project ideas but don't know where to find the right talents to bring it to life? Or perhaps you're a skilled individual eager to contribute to exciting projects but struggle to find the right opportunities?

Sheepy is designed to connect passionate skilled individuals with groundbreaking project ideas. Whether you're a creative artist, a tech wizard, a culinary enthusiast, an aspiring entrepreneur, or a seasoned professional in any field, Sheepy provides you with the community and tools you need to turn your vision into reality.

**What is a project?**

You have an idea and a goal? You want to accomplish something meaningful? You have your project! It can be anything from making a short film about marine wildlife, creating a podcast about local history to forming a music band or developing an original video game...

**Main Features:**

- **<ins>Project Proposals:</ins>** You have an inspiring project idea but need specific talents to make it happen? Post your project proposal on Sheepy! Describe your project's goal and the skills you're seeking. Watch your idea come to life as talented individuals from around the world express their interest in joining your project.

- **<ins>Talent Showcase:</ins>** Are you a designer, developer, musician, writer, or have any other amazing talent to share? Sheepy enables you to create a stunning talent profile showcasing your expertise and experience. Share your portfolio and talents, making it easy for project creators to find and invite you to collaborate.

<br>

```
 Materialize your ideas            ➡ Let us help you build up your next idea
 Put your skills into practice     ➡ Help people looking for your talent and improve your skills by joining a project
 Work as a team                    ➡ You cannot achieve it alone? Find help from our community
 Have fun                          ➡ The most important thing is to do what you like!
```

<br>

Don't let your ideas and talents go to waste – join Sheepy now!

## Table of Contents

- [Presentation](#-presentation)
- [Features](#-features)
- [Installation](#-installation)
- [Code Structure](#-code-structure)
- [Application routes](#-application-routes)
- [Environment Variables](#-environment-variables)
- [Author](#-author)
- [Contributing](#-contributing)
- [Demo](#-demo)
- [Status](#️-status)

## 🧰 Features

### Pages

- [x] User profile public page
- [x] User profile update page
- [x] Project description public page
- [x] Search projects page
- [x] Search talents page
- [x] Project creation page
- [x] Projects by categories and sub-categories page
- [x] Projects by locations page
- [x] Projects by tags page
- [x] forgot password modal

- [x] Discover

  - [x] The projects
  - [x] The talents
  - [x] The categories

- [x] View my project page

  - [x] Projects I created
  - [x] Projects I work on
  - [x] Projects I like
  - [x] Projects invitations
    - [x] Modal View
    - [x] Modal Accept/Decline
    - [x] Modal Report
    - [x] Modal Send message
    - [x] invitations as cards
  - [x] Projects requests
    - [x] Modal View
    - [x] Modal Cancel
    - [x] Modal Send message
    - [x] requests as cards

- [x] My settings page

  - [x] Privacy
  - [x] Appearance
  - [x] Try to put privacy into a table
  - [x] Languages
  - [x] Notifications

- [] Project edition page (dashboards with different projects?)
- [] Project description private page
- [] View my profile page
- [] My messages page
- [] Footer pages

- [] How it works

  - [] Take a tour
  - [] Initiate a project
  - [] Join a project
  - [] Why us
  - [] Pricing and fees

### Components

- [x] Tabs
- [x] Modal
- [x] Talent card
- [x] Project card for search
- [x] Talent card for search
- [x] List of categories (buttons)
- [x] Notification
- [x] Tables (list vs table)
- [x] Status
- [x] Navbar for user profile private
- [x] Add status in joinProject card
- [x] Project table for search
- [x] Talent table for search

- [x] Location table for search
- [] Search sub-categories
- [] Search tags
- [] Other mosaic
- [] Carousel with profiles or projects
- [] Video presentation

### Other

- [x] Add button "See more" on the home page
- [x] Add project details (category) in project horizontal card
- [x] Add status on project cards and table for My Projects
- [x] Add filters for My Projects page

---

### Project types organisation

Groups:

- Projects I Own (Projects I Created, drafts, submitted - can be active, on hold, completed, archived, cancelled, rejected)
- Projects I work on ( - can be active, on hold, completed, archived, cancelled)
- Projects I like ( - can be active, on hold, completed, archived, cancelled)

Projects Invitations
Projects requests

Possible status: drafts, submitted, active, on hold, completed, archived, cancelled, rejected

---

### Project creation form organisation

**Step 1️⃣**

|               |                     |                          |       |                 |
| ------------- | ------------------- | ------------------------ | ----- | --------------- |
| Project title | Mandatory for draft | Mandatory for submission | 4-100 | Input text      |
| Category      | Mandatory for draft | Mandatory for submission | /     | Dropdown select |
| Sub-category  | Optional for draft  | Mandatory for submission | /     | Dropdown select |

**Step 2️⃣**

|         |                    |                          |        |           |
| ------- | ------------------ | ------------------------ | ------ | --------- |
| Summary | Optional for draft | Mandatory for submission | 10-300 | Text area |
| Goal    | Optional for draft | Mandatory for submission | 10-500 | Text area |

**Step 3️⃣**

|             |                    |                          |         |           |
| ----------- | ------------------ | ------------------------ | ------- | --------- |
| Description | Optional for draft | Mandatory for submission | 20-2000 | Text area |

**Step 4️⃣**

|                     |                    |                         |     |           |
| ------------------- | ------------------ | ----------------------- | --- | --------- |
| Creator motivations | Optional for draft | Optional for submission | /   | Text area |
| Objectives          | Optional for draft | Optional for submission | /   | Text area |

**Step 5️⃣**

|            |                    |                          |       |                            |
| ---------- | ------------------ | ------------------------ | ----- | -------------------------- |
| Location   | Optional for draft | Mandatory for submission | 4-100 | Input text                 |
| Visibility | Optional for draft | Mandatory for submission | /     | Toggle select              |
| Start date | Optional for draft | Optional for submission  | /     | Calendar                   |
| Tags       | Optional for draft | Optional for submission  | /     | Input text with add button |

**Step 6️⃣**

|                |                    |                          |       |                            |
| -------------- | ------------------ | ------------------------ | ----- | -------------------------- |
| Talents needed | Optional for draft | Mandatory for submission | 4-100 | Input text with add button |

---

### ❤ Last required improvements

- [] xxxxxxxx

---

### 💛&💚 Complementary features

- [] xxxxxxxx

Order of priorities: ❤ > 💛 > 💚

## 📦 Installation

Sheppy requires [Node.js](https://nodejs.org/) to run.

Install the dependencies with npm:

```bash
  cd sheepy
  npm install
```

Start the application in development mode:

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗂 Code Structure

```
src
├───.next                 # next built
├───public                # public files assets
├───src
│   ├───app              # Route controllers
│   │   └───not-found.jsx
│   ├───components
│   │   └───Navbar
│
```

## 🧭 Application routes

List of available routes:

- **Main route**:

| URI | Action |
| --- | ------ |
| `/` | Home   |

- **Auth routes**:

| URI                                      | Action                    |
| ---------------------------------------- | ------------------------- |
| `/sign-up`                               | Sign-up                   |
| `/sign-up/:emailValidationId`            | Verify the email address  |
| `/login`                                 | Login                     |
| `/logout`                                | Logout                    |
| `/forgotPassword`                        | Send reset password email |
| `/forgotPassword/reset/:resetPasswordId` | Reset password            |

- **User routes**:

| URI                           | Action                      |
| ----------------------------- | --------------------------- |
| `/users/lastUsersOverview`    | Retrieve new users          |
| `/users/userOverview/:userId` | Retrieve user's overview    |
| `/users/userPublic/:userId`   | Retrieve user public data   |
| `/users/me`                   | Retrieve user personal data |
| `/users/me`                   | Update user personal data   |
| `/users/me/changePassword`    | Change user's password      |
| `/users/me/talent/add`        | Add talent                  |
| `/users/me/talent/update`     | Update talent               |
| `/users/me/talent/remove`     | Remove talent               |

- **Project core routes**:

| URI                                       | Action                          |
| ----------------------------------------- | ------------------------------- |
| `/projects/createProjectDraft`            | Create new project draft        |
| `/projects/updateProjectDraft/:projectId` | Update project draft            |
| `/projects/removeProjectDraft/:projectId` | Remove project draft            |
| `/projects/submitProject`                 | Submit project                  |
| `/projects/updateProject/:projectId`      | Update project                  |
| `/projects/saveProjectDraft/:projectId`   | Save draft of project update    |
| `/projects/projectData/:projectId`        | Retrieve project data           |
| `/projects/projectOverview/:projectId`    | Retrieve project overview       |
| `/projects/projectPublic/:projectId`      | Retrieve project public data    |
| `/projects/lastProjectsOverview`          | Retrieve last project overview  |
| `/projects/nbProjects`                    | Retrieve nb of projects         |
| `/projects/nbProjectsPerCategory`         | Retrieve nb of projects per cat |

- **Project extended features routes**:

| URI                                 | Action                            |
| ----------------------------------- | --------------------------------- |
| `/crushProjects`                    | Retrieve projects with crush      |
| `/likeProject`                      | Like a project                    |
| `/unlikeProject`                    | Unlike a project                  |
| `/projectsUserLikes`                | Retrieve projects liked by a user |
| `/projectLikes`                     | Retrieve project likes            |
| `/addProjectSteps`                  | Add steps to a project            |
| `/editProjectSteps`                 | Edit steps of a project           |
| `/publishProjectStep`               | Publish a project step            |
| `/unpublishProjectStep`             | Unpublish a project step          |
| `/removeProjectStep`                | Remove a project step             |
| `/projectStepsPublished`            | Retrieve published project steps  |
| `/projectStepsAll`                  | Retrieve all project steps        |
| `/addProjectQAs`                    | Add Q&As to a project             |
| `/editProjectQAs`                   | Edit Q&As of a project            |
| `/publishProjectQA`                 | Publish a project QA              |
| `/unpublishProjectQA`               | Unpublish a project QA            |
| `/removeProjectQA`                  | Remove a project QA               |
| `/projectQAsPublished`              | Retrieve published project Q&As   |
| `/projectQAsAll`                    | Retrieve all project Q&As         |
| `/addProjectComment`                | Add a comment to a project        |
| `/answerProjectComment`             | Answer a project comment          |
| `/editProjectComment`               | Edit a project comment            |
| `/reportProjectComment`             | Report a project comment          |
| `/unreportProjectComment`           | Unreport a project comment        |
| `/removeProjectComment`             | Remove a project comment          |
| `/projectComments`                  | Retrieve project comments         |
| `/projectUserRights/:projectId`     | Update user rights for a project  |
| `/projectMembers/update/:projectId` | Update project member             |
| `/projectMembers/remove/:projectId` | Remove project member             |
| `/projectStatus/:projectId`         | Update project status             |
| `/projectAttachments/:projectId`    | Update project attachments        |

- **Join project invitation routes**:

| URI                           | Action                              |
| ----------------------------- | ----------------------------------- |
| `/saveDraft`                  | Save draft invitation               |
| `/updateDraft`                | Update draft invitation             |
| `/removeDraft`                | Remove draft invitation             |
| `/send`                       | Send project invitation             |
| `/cancel`                     | Cancel project invitation           |
| `/accept`                     | Accept project invitation           |
| `/refuse`                     | Refuse project invitation           |
| `/myDrafts`                   | Retrieve user's draft invitations   |
| `/myInvitations`              | Retrieve user's invitations         |
| `/myInvitation/:invitationId` | Retrieve user's specific invitation |

- **Join project request routes**:

| URI                     | Action                           |
| ----------------------- | -------------------------------- |
| `/saveDraft`            | Save draft request               |
| `/updateDraft`          | Update draft request             |
| `/removeDraft`          | Remove draft request             |
| `/send`                 | Send project request             |
| `/cancel`               | Cancel project request           |
| `/accept`               | Accept project request           |
| `/refuse`               | Refuse project request           |
| `/myDrafts`             | Retrieve user's draft requests   |
| `/myRequests`           | Retrieve user's requests         |
| `/myRequest/:requestId` | Retrieve user's specific request |

## 🛠 Environment Variables

## 🐱‍💻 Author

- [@aiko-kami](https://www.github.com/aiko-kami)

## 🍻 Contributing

Contributions are welcome!

Please contact neutroneer100@gmail.com

## 🌮 Demo

[Sheepy](https://sheepy.vercel.app/)

## 🧗‍♂️ Status

I am currently working on... **Category page**

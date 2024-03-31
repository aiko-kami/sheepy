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

- [] Project description page
- [] Project creation page
- [] User profile update page
- [] User profile public page
- [] View my profile page

  - [] xxxxxxxx

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

| Method | URI | Action |
| ------ | --- | ------ |
| `GET`  | `/` | Home   |

- **Auth routes**:

| Method | URI                                           | Action                    |
| ------ | --------------------------------------------- | ------------------------- |
| `POST` | `/auth/sign-up`                               | Sign-up                   |
| `GET`  | `/auth/sign-up/:emailValidationId`            | Verify the email address  |
| `POST` | `/auth/login`                                 | Login                     |
| `POST` | `/auth/logout`                                | Logout                    |
| `POST` | `/auth/forgotPassword`                        | Send reset password email |
| `POST` | `/auth/forgotPassword/reset/:resetPasswordId` | Reset password            |

- **User routes**:

| Method   | URI                           | Action                      |
| -------- | ----------------------------- | --------------------------- |
| `GET`    | `/users/lastUsersOverview`    | Retrieve new users          |
| `GET`    | `/users/userOverview/:userId` | Retrieve user's overview    |
| `GET`    | `/users/userPublic/:userId`   | Retrieve user public data   |
| `GET`    | `/users/me`                   | Retrieve user personal data |
| `PATCH`  | `/users/me`                   | Update user personal data   |
| `PATCH`  | `/users/me/changePassword`    | Change user's password      |
| `POST`   | `/users/me/talent/add`        | Add talent                  |
| `PATCH`  | `/users/me/talent/update`     | Update talent               |
| `DELETE` | `/users/me/talent/remove`     | Remove talent               |

- **Project core routes**:

| Method   | URI                                       | Action                          |
| -------- | ----------------------------------------- | ------------------------------- |
| `POST`   | `/projects/createProjectDraft`            | Create new project draft        |
| `PATCH`  | `/projects/updateProjectDraft/:projectId` | Update project draft            |
| `DELETE` | `/projects/removeProjectDraft/:projectId` | Remove project draft            |
| `POST`   | `/projects/submitProject`                 | Submit project                  |
| `PATCH`  | `/projects/updateProject/:projectId`      | Update project                  |
| `PATCH`  | `/projects/saveProjectDraft/:projectId`   | Save draft of project update    |
| `GET`    | `/projects/projectData/:projectId`        | Retrieve project data           |
| `GET`    | `/projects/projectOverview/:projectId`    | Retrieve project overview       |
| `GET`    | `/projects/projectPublic/:projectId`      | Retrieve project public data    |
| `GET`    | `/projects/lastProjectsOverview`          | Retrieve last project overview  |
| `GET`    | `/projects/nbProjects`                    | Retrieve nb of projects         |
| `GET`    | `/projects/nbProjectsPerCategory`         | Retrieve nb of projects per cat |

- **Categories and sub-categories routes**:

| Method   | URI            | Action                               |
| -------- | -------------- | ------------------------------------ |
| `GET`    | `/category`    | Retrieve a specific category         |
| `GET`    | `/categories`  | Retrieve all categories              |
| `POST`   | `/category`    | Create a new category                |
| `PATCH`  | `/category`    | Update a category                    |
| `DELETE` | `/category`    | Remove a category                    |
| `POST`   | `/subCategory` | Add a new sub-category to a category |
| `PATCH`  | `/subCategory` | Update a sub-category                |
| `DELETE` | `/subCategory` | Remove a sub-category                |

- **Project extended features routes**:

| Method   | URI                                 | Action                            |
| -------- | ----------------------------------- | --------------------------------- |
| `PATCH`  | `/addProjectCrush`                  | Add crush to a project            |
| `PATCH`  | `/removeProjectCrush`               | Remove crush from a project       |
| `GET`    | `/crushProjects`                    | Retrieve projects with crush      |
| `PATCH`  | `/likeProject`                      | Like a project                    |
| `PATCH`  | `/unlikeProject`                    | Unlike a project                  |
| `GET`    | `/projectsUserLikes`                | Retrieve projects liked by a user |
| `GET`    | `/projectLikes`                     | Retrieve project likes            |
| `PATCH`  | `/addProjectSteps`                  | Add steps to a project            |
| `PATCH`  | `/editProjectSteps`                 | Edit steps of a project           |
| `PATCH`  | `/publishProjectStep`               | Publish a project step            |
| `PATCH`  | `/unpublishProjectStep`             | Unpublish a project step          |
| `DELETE` | `/removeProjectStep`                | Remove a project step             |
| `GET`    | `/projectStepsPublished`            | Retrieve published project steps  |
| `GET`    | `/projectStepsAll`                  | Retrieve all project steps        |
| `PATCH`  | `/addProjectQAs`                    | Add Q&As to a project             |
| `PATCH`  | `/editProjectQAs`                   | Edit Q&As of a project            |
| `PATCH`  | `/publishProjectQA`                 | Publish a project QA              |
| `PATCH`  | `/unpublishProjectQA`               | Unpublish a project QA            |
| `DELETE` | `/removeProjectQA`                  | Remove a project QA               |
| `GET`    | `/projectQAsPublished`              | Retrieve published project Q&As   |
| `GET`    | `/projectQAsAll`                    | Retrieve all project Q&As         |
| `POST`   | `/addProjectComment`                | Add a comment to a project        |
| `POST`   | `/answerProjectComment`             | Answer a project comment          |
| `PATCH`  | `/editProjectComment`               | Edit a project comment            |
| `PATCH`  | `/reportProjectComment`             | Report a project comment          |
| `PATCH`  | `/unreportProjectComment`           | Unreport a project comment        |
| `DELETE` | `/removeProjectComment`             | Remove a project comment          |
| `GET`    | `/projectComments`                  | Retrieve project comments         |
| `PATCH`  | `/projectUserRights/:projectId`     | Update user rights for a project  |
| `PATCH`  | `/projectMembers/update/:projectId` | Update project member             |
| `DELETE` | `/projectMembers/remove/:projectId` | Remove project member             |
| `PATCH`  | `/projectStatus/:projectId`         | Update project status             |
| `PATCH`  | `/projectAttachments/:projectId`    | Update project attachments        |

- **Join project invitation routes**:

| Method   | URI                           | Action                              |
| -------- | ----------------------------- | ----------------------------------- |
| `POST`   | `/saveDraft`                  | Save draft invitation               |
| `PATCH`  | `/updateDraft`                | Update draft invitation             |
| `DELETE` | `/removeDraft`                | Remove draft invitation             |
| `POST`   | `/send`                       | Send project invitation             |
| `PATCH`  | `/cancel`                     | Cancel project invitation           |
| `POST`   | `/accept`                     | Accept project invitation           |
| `POST`   | `/refuse`                     | Refuse project invitation           |
| `GET`    | `/myDrafts`                   | Retrieve user's draft invitations   |
| `GET`    | `/myInvitations`              | Retrieve user's invitations         |
| `GET`    | `/myInvitation/:invitationId` | Retrieve user's specific invitation |

- **Join project request routes**:

| Method   | URI                     | Action                           |
| -------- | ----------------------- | -------------------------------- |
| `POST`   | `/saveDraft`            | Save draft request               |
| `PATCH`  | `/updateDraft`          | Update draft request             |
| `DELETE` | `/removeDraft`          | Remove draft request             |
| `POST`   | `/send`                 | Send project request             |
| `PATCH`  | `/cancel`               | Cancel project request           |
| `POST`   | `/accept`               | Accept project request           |
| `POST`   | `/refuse`               | Refuse project request           |
| `GET`    | `/myDrafts`             | Retrieve user's draft requests   |
| `GET`    | `/myRequests`           | Retrieve user's requests         |
| `GET`    | `/myRequest/:requestId` | Retrieve user's specific request |

## 🛠 Environment Variables

To run this project, you will need the following environment variables in your .env file:

`PORT`

## 🐱‍💻 Author

- [@aiko-kami](https://www.github.com/aiko-kami)

## 🍻 Contributing

Contributions are welcome!

Please contact neutroneer100@gmail.com

## 🌮 Demo

[Sheepy](https://sheepy.vercel.app/)

## 🧗‍♂️ Status

I am currently working on... **Frontend**

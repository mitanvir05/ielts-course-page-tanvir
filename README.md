# IELTS Course Page Clone

This project is a high-fidelity clone of the 10 Minute School's IELTS Course product page, built as a frontend engineering assessment. It fetches live data from the official 10 Minute School API and renders the page using Server-Side Rendering (SSR) with Next.js.

---

### ## Live Demo

**You can view the live deployed version here:** [https://ielts-course-page-tanvir-lvnf.vercel.app](https://ielts-course-page-tanvir-lvnf.vercel.app)

---

### ## Screenshot



![Project Screenshot](/public/pro-img.png)

---

### ## Features

- **Server-Side Rendering (SSR):** The page is rendered on the server for fast initial load times and better SEO.
- **Live API Integration:** All course content (titles, descriptions, instructor info, media, etc.) is fetched from the live 10 Minute School API.
- **Component-Based Architecture:** The UI is built with reusable React components for maintainability.
- **Responsive Design:** The layout is fully responsive and adapts to various screen sizes.
- **Dynamic SEO:** Page metadata (title and description) is dynamically generated based on data from the API.
- **Robust Error Handling:** The application is resilient to incomplete or missing data from the API, preventing runtime crashes.

---

### ## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [React](https://reactjs.org/)

---

### ## Running the Project Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/mitanvir05/ielts-course-page-tanvir.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd ielts-course-page-tanvir
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
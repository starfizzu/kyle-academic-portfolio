# React Routing and Forms Lab

## 📌 Overview

This project demonstrates how to build a dynamic multi-page React application using **React Router** and **form handling techniques**. It includes navigation between pages, controlled form inputs, and validation to ensure correct user input.

---

## 🎯 Objectives

* Implement client-side routing using React Router
* Create multiple pages (Home, About, Contact, Form)
* Build a controlled form using React state
* Validate user input and display error messages
* Handle form submission and update UI dynamically

---

## 🛠️ Technologies Used

* React
* React Router DOM
* JavaScript (ES6)
* HTML & CSS

---

## 📁 Project Structure

```
react-routing-forms/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Form.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── package.json
```

---

## ⚙️ Installation & Setup

1. Clone or download the project
2. Open terminal inside the project folder
3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open browser and go to:

```
http://localhost:3000
```

---

## 🚀 Features

### 🔗 Routing

* Navigation between pages using React Router
* Pages:

  * Home
  * About
  * Contact
  * Form

### 📝 Form Handling

* Controlled inputs using `useState`
* Real-time updates while typing

### ✅ Validation

* Required fields:

  * Name
  * Email
  * Message
* Email format validation
* Error messages displayed dynamically

### 📤 Form Submission

* Prevents default form reload
* Displays success alert
* Logs form data in console

---

## 🧪 Expected Output

* Navigation works without page reload
* Form shows validation errors when fields are empty
* Valid submission logs:

```
Form submitted {name: 'Your Name', email: 'your@email.com', message: 'Your message'}
```

---

## ⚠️ Challenges Encountered

During development, I encountered issues with:

* Incorrect routing setup (fixed by properly using `BrowserRouter`, `Routes`, and `Route`)
* Form state not updating (resolved by correctly using `useState`)
* Validation errors not displaying (fixed by managing an `errors` state object)
* Navigation links not working (resolved by using `Link` instead of `<a>` tags)

---

## ✅ Conclusion

This lab helped me understand how to:

* Build multi-page React applications
* Handle user input effectively
* Validate and manage form data
* Organize components for better maintainability

---

## 📦 Submission

Project is submitted as:

```
react-routing-forms.zip
```

---

# StudyNotion Edtech Project

StudyNotion is a comprehensive ed-tech platform that allows users to create, consume, and rate educational content. It is built on the MERN stack, utilizing ReactJS for the frontend, NodeJS and ExpressJS for the backend, and MongoDB for data storage.

![Screenshot (700)](https://github.com/user-attachments/assets/b4fc4c84-e100-403e-975d-99f1c2ac3770)


# Project Description

StudyNotion aims to provide:


 - An immersive and engaging learning journey for students, designed to make education more accessible and interactive.
 - A space for instructors to share their knowledge and reach learners worldwide. In the upcoming sections, we'll explore the platform's technical features, covering details such as:

1. **System Architecture**: An overview of the platform's key components, along with diagrams outlining its architectural structure.

2. **Front-end**: A detailed look at the front-end design, user interface, features, and the frameworks, libraries, and tools that power the user experience.

3. **Back-end**: An in-depth explanation of the back-end architecture, core functionalities, data models, and the frameworks, libraries, and tools used, along with the database schema.

4. **API Design**: An outline of the API structure, including available endpoints, their functions, and example requests and responses.

5. **Deployment**: A description of the deployment process, covering the hosting environment, infrastructure setup, and configuration scripts.

6. **Testing**: A breakdown of the testing strategies employed, covering different testing types, frameworks, and tools.

7. **Future Enhancements**: A roadmap of potential platform improvements, explaining how each enhancement could benefit the platform, along with timelines and priorities for their implementation.


In conclusion, **StudyNotion** is a dynamic, user-friendly ed-tech platform that offers a rich learning experience for students and a space for instructors to share their expertise. The following sections will provide a deep dive into the platform's technical elements, offering a clear understanding of its functionality and features.


# System Architecture

- **The StudyNotion ed-tech platform** consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

- **Front-end**: The front end is built using ReactJS, a popular JavaScript library for creating dynamic and responsive user interfaces. This helps deliver an engaging learning experience for students. The front end communicates with the back end through RESTful API calls.

- **Back-end**: The back end uses NodeJS and ExpressJS, which are well-known frameworks for building scalable server-side applications. It provides APIs for features like user authentication, course creation, and course consumption. Additionally, it handles logic for processing and storing course content and user data.

- **Database**: MongoDB is used as the platform's database. As a NoSQL solution, it offers flexibility and scalability, making it suitable for storing various types of course content, such as videos, images, and PDFs, as well as user data and other relevant platform information.

- **Architecture Diagram**: Below is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform:

![image](https://github.com/user-attachments/assets/44ebac86-a436-451a-83ce-c34acf217e5e)

# Front-end
The front end is the part of the platform that users directly interact with. It's essentially the "face" of the platform, providing users with the visual interface and interactive elements they engage with. The front end of **StudyNotion** has been thoughtfully designed using **Figma**, a widely-used tool known for its ability to create clean and minimalistic user interfaces. You can view the Figma design for the StudyNotion front-end by following this link:

[StudyNotion Figma Design](https://www.figma.com/file/Mikd0FjHKAofUlWQSi70nf/StudyNotion_shared)

StudyNotion's front end includes all the key pages that are essential for any ed-tech platform. Some of these important pages are:

## For Students

- **Homepage**: This page provides a brief introduction to the platform, along with links to the course list and user details.
- **Course List**: This page displays a list of all available courses on the platform, complete with descriptions and ratings.
- **Wishlist**: This page shows all the courses that a student has added to their wishlist.
- **Cart Checkout**: This page allows the user to complete the course purchase.
- **Course Content**: This page provides access to the content of a specific course, including videos and other related materials.
- **User Details**: This page contains the student's account details, such as their name, email, and other relevant information.
- **User Edit Details**: This page allows students to edit their account information.


### For Instructors

- **Dashboard**: This page provides an overview of the instructor's courses, including ratings and feedback for each course.
- **Insights**: This page offers detailed insights into the instructor's courses, such as the number of views, clicks, and other relevant metrics.
- **Course Management Pages**: These pages allow the instructor to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details**: These pages enable the instructor to view and edit their account details.

### For Admin (Future Scope)

- **Dashboard**: This page provides an overview of the platform's courses, instructors, and students.
- **Insights**: This page gives detailed insights into the platform's metrics, including the number of registered users, courses, and revenue.
- **Instructor Management**: This page allows the admin to manage the platform's instructors, including their account details, courses, and ratings.
- **Other Relevant Pages**: The admin will also have access to other essential pages, such as user management and course management.

# Back-end
**Description of the Back-end Architecture:** StudyNotion uses a monolithic architecture, with the backend built using Node.js and Express.js, and MongoDB as the primary database.

Monolithic architecture refers to a design approach where all the modules of the application are combined into a single large program, with a single codebase, to enable better control, security, and performance.

Node.js is a popular JavaScript runtime that allows us to run JavaScript code outside of the browser. Express.js is a web application framework that simplifies the process of building web applications in Node.js.

MongoDB is a popular NoSQL database that allows for flexible data storage and retrieval, making it a suitable choice for complex applications like StudyNotion.

Features and Functionalities of the Back-end: The back end of StudyNotion provides a range of features and functionalities, including:


1. **User Authentication and Authorization**: Students and instructors can sign up and log in to the platform using their email addresses and password. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
2. **Course Management**:  Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.

3. **Payment Integration**: Students will purchase and enrol on courses by completing the checkout flow that is followed by Razorpay integration for payment handling.

4. **Cloud-based Media Management**:  StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.

5. **Markdown Formatting**: Course content in document format is stored in Markdown format, which allows for easier display and rendering on the front end. Frameworks, Libraries, and Tools used: The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:

- **Node.js**: Node.js is used as the primary framework for the back end.
- **MongoDB**: MongoDB is used as the primary database, providing a flexible and scalable data storage solution.
- **Express.js**: Express.js is used as a web application framework, providing a range of features and tools for building web applications.
- **JWT**: JWT (JSON Web Tokens) are used for authentication and authorization, providing a secure and reliable way to manage user credentials.
- **Bcrypt**: Bcrypt is used for password hashing, adding an extra layer of security to user data.
- **Mongoose**: Mongoose is used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.
- **Data Models and Database Schema**: The back end of StudyNotion uses a range of data models and database schemas to manage data.


1. **Student Schema**: Includes fields such as name, email, password, and course details for each student.
2. **Instructor Schema**: Includes fields such as name, email, password, and course details for each instructor.
3. **Course Schema**: Includes fields such as course name, description, instructor details, and media content.

.

Overall, the back end of StudyNotion is designed to provide a robust and scalable solution for an ed-tech platform, with a focus on security, reliability, and ease of use. By using the right frameworks, libraries, and tools, we can ensure that the platform functions smoothly and provides an optimal user experience for all its users.


![Screenshot (703)](https://github.com/user-attachments/assets/33da730e-463e-4f6a-a319-07bda0672d77)

   



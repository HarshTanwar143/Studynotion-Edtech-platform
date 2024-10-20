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


## API Design

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

### Sample list of API endpoints and their functionalities:


1. **POST** `/api/auth/signup` - Create a new user (student or instructor) account.
2. **POST** `/api/auth/login` – Log in using existing credentials and generate a JWT token.
3. **POST** `/api/auth/verify-otp` - Verify the OTP sent to the user's registered email.
4. **POST** `/api/auth/forgot-password` - Send an email with a password reset link to the registered email.
5. **GET** `/api/courses` - Get a list of all available courses.
6. **GET** `/api/courses/:id` - Get details of a specific course by ID.
7. **POST** `/api/courses` - Create a new course.
8. **PUT** `/api/courses/:id` - Update an existing course by ID.
9. **DELETE** `/api/courses/:id` - Delete a course by ID.
10. **POST** `/api/courses/:id/rate` - Add a rating (out of 5) to a course.

### Sample API requests and responses:

### API Endpoints

1. **GET** `/api/courses` - Get all courses  
   • **Response**: A list of all courses in the database

2. **GET** `/api/courses/:id` - Get a single course by ID  
   • **Response**: The course with the specified ID

3. **POST** `/api/courses` - Create a new course  
   • **Request**: The course details in the request body

4. **PUT** `/api/courses/:id` - Update an existing course by ID • **Request**: The updated course details in the request body
● Response: The updated course

5. **DELETE** `/api/courses/:id`- Delete a course by ID
 • **Response**: A success message indicating that the course has been deleted.

 In conclusion, the REST API design for the StudyNotion ed-tech platform is a crucial part of the project. The API endpoints and their functionalities are designed to ensure seamless communication between the front-end and back-end of the application. By following RESTful principles, the API will be scalable, maintainable, and reliable. The sample API requests and responses provided above illustrate how each endpoint will function and what kind of data it will accept or return. With this API design, StudyNotion will be able to provide a smooth user experience while ensuring security and stability.

## Deployment
The deployment process for the StudyNotion ed-tech platform will involve hosting the application on various cloud-based services.

The front end will be deployed using Vercel, a popular hosting service for static sites built with React. The back-end will be hosted on Render or Railway, two cloud-based hosting services for applications built with Node.js and MongoDB.

Media files will be hosted on Cloudinary, a cloud-based media management platform, and the database will be hosted on MongoDB Atlas, a fully managed cloud database service.

The hosting environment and infrastructure for the StudyNotion platform will ensure scalability, security, and reliability.

Vercel provides a fast and scalable hosting environment for the front end, while Render or Railway provide a scalable and reliable infrastructure for the back end.

Cloudinary provides reliable storage for media files with features like automatic image optimization and transformation, while MongoDB Atlas provides a highly available and secure database environment with features like automatic scaling and disaster recovery.

Overall, the deployment process for StudyNotion will ensure a stable and scalable hosting environment for the application, allowing users to access the platform seamlessly from anywhere in the world.

## Future Enhancements
This section discusses potential future improvements to the StudyNotion platform. These enhancements are listed along with an explanation of how they would improve the platform and priority for implementation.


- **Gamification features**: Adding gamification features such as badges, points, and leaderboards can increase user engagement and motivation. This would be a medium-priority enhancement.
- **Personalized learning paths**: Creating personalized learning paths for each student based on their interests and learning style can increase student satisfaction and success. This would be a high-priority enhancement.
- **Social learning features**: Adding social learning features such as group discussions, peer-to-peer feedback, and collaborative projects can increase student engagement and interaction. This would be a medium-priority enhancement.
- **Mobile app**: Creating a mobile app for the platform would allow for more convenient access to course content and features, and would increase the platform's reach. This would be a high-priority enhancement.
- **Machine learning-powered recommendations**: Using machine learning algorithms to provide personalized course recommendations can improve student engagement and satisfaction. This would be a medium to high-priority enhancement.
- **Virtual reality/augmented reality integration**: Adding virtual reality or augmented reality components to certain courses can enhance the learning experience and make it more immersive. This would be a low to medium-priority enhancement.


Overall, these enhancements would significantly improve the StudyNotion platform and its offerings to students, instructors, and administrators. The implementation timeline and priority would depend on various factors such as the resources available and the specific needs and goals of the platform.

## Conclusion
In conclusion, this document outlines the architecture, features, and functionalities of the StudyNotion ed-tech platform. It highlights the use of MERN stack technologies and REST API design and outlines the deployment process using free hosting services, Vercel for the front-end, Render.com or Railway.app for the backend, and MongoDB Atlas for the database. Additionally, it lists potential future enhancements that could be implemented to improve the platform, along with their estimated timelines and priorities.

Throughout the development of the project, various achievements will be made in terms of implementing the desired functionalities and creating a user-friendly interface. However, there will be challenges to be faced during the development process, such as integrating different technologies and debugging errors.
















![Screenshot (703)](https://github.com/user-attachments/assets/33da730e-463e-4f6a-a319-07bda0672d77)

   



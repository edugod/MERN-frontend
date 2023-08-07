<h1>Eduardo Lange Repairs - MERN Stack Project</h1>

<div style="display: inline_block"><br>
  <img align="center" alt="edugod-Mongo" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg">
  <img align="center" alt="edugod-Express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">
  <img align="center" alt="edugod-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="edugod-NodeJS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
</div>

<p>This project is an MERN (MongoDB, ExpressJS, React, NodeJS) stack application for managing a repair workshop. It provides features for user authentication, note management, and user management with different roles.</p>

<h2>Technologies Used</h2>

<ul>
    <li>MongoDB: A NoSQL database used to store and manage data for the application.</li>
    <li>ExpressJS: A backend web application framework used to handle server-side logic and API routes.</li>
    <li>React: A frontend library used to build the user interface and components for the application.</li>
    <li>NodeJS: A JavaScript runtime used to run the server and backend code.</li>
</ul>

<h2>Features</h2>

<ul>
    <li>User Authentication: Provides login functionality for users to access protected routes and manage their data. Implemented using JWT (JSON Web Tokens) for secure authentication.</li>
    <li>Note Management: Allows users to create, edit, and delete notes related to repairs. Data is stored in MongoDB and accessed via RESTful API endpoints.</li>
    <li>User Management: Provides admin and manager roles to manage user information, including adding, editing, and removing users. User passwords are encrypted using bcrypt for added security.</li>
    <li>Redux: Utilizes Redux for state management to efficiently manage application state and data flow.</li>
</ul>

<h2>Getting Started</h2>

<p>To run the project locally on your machine, follow these steps:</p>

<ol>
    <li>Clone this repository to your local machine using <code>git clone https://github.com/your-username/MERN-frontend.git</code>.</li>
    <li>Navigate to the project directory: <code>cd eduardo-lange-repairs</code>.</li>
    <li>Install the dependencies for the backend and frontend:</li>
</ol>

<pre><code>
cd server
npm install
cd ../client
npm install
</code></pre>

<p>Set up your MongoDB database and configure the connection in the server's <code>.env</code> file.</p>

<pre><code>
DATABASE_URL=mongodb://your-mongodb-connection-string
</code></pre>

<p>Start the development server for both the backend and frontend:</p>

<pre><code>
cd server
npm start
cd ../client
npm start
</code></pre>

<p>Open your web browser and go to <a href="http://localhost:3000">http://localhost:3000</a> to access the application.</p>

<h2>Demo</h2>

<p>You can check out the live demo of the Eduardo Lange Repairs frontend on the following website:</p>

<p><a href="https://technotes-7lz9.onrender.com/">DEMO</a></p>

<h2>Screenshot</h2>

<img src="/src/img/screenshot.png" alt="Eduardo Lange Repairs Frontend Screenshot">

<h2>Project Structure</h2>

<p>The project's code is organized as follows:</p>

<ul>
    <li><strong>server</strong>: Contains the backend code, including API routes, authentication, and data handling logic.</li>
    <li><strong>client</strong>: Contains the frontend code, built with React, including components, pages, and UI elements.</li>
    <li><strong>config</strong>: Holds configuration files, including roles for user access control.</li>
    <li><strong>components</strong>: Contains shared components used throughout the application.</li>
    <li><strong>features</strong>: Includes feature-specific components and logic, such as user management and note management.</li>
</ul>

<h2>Usage</h2>

<p>The application includes the following routes:</p>

<ul>
    <li><code>/login</code>: Login page for user authentication.</li>
    <li><code>/dash</code>: Dashboard page after successful login, showing welcome messages and notes.</li>
    <li><code>/users</code>: User management page for administrators and managers to view, edit, and add users.</li>
</ul>

<h2>License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<p>Feel free to explore and enhance the Eduardo Lange Repairs MERN stack project! 🛠️</p>

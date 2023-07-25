# Vrygrond Community Project Documentation

#### BAP Group

##### Priscilla Jordan, Ethan Fan, Bailey Ballard, Yijia Zhao

#### CIS4930

#### Vrygrond Community Trust Development / Butterfly Arts Project

#### Dr. Sanethia Thomas 













## Table of Contents
1. [Abstract](#abstract)
2. [Introduction](#introduction)
    - [Problem Statement](#problem-statement)
    - [Contribution](#contribution)
3. [Project Solution](#project-solution)
    - [Functional Requirements](#functional-requirements)
    - [Non-functional Requirements](#non-functional-requirements)
    - [High-level Architecture](#high-level-architecture)
    - [Database Design](#database-design)
    - [Hosting and Location](#hosting-and-location)
    - [Technologies Used](#technologies-used)
4. [Implementation](#implementation)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [MongoDB Compass](#mongodb-compass)
5. [Future Work](#future-work)
6. [Biography](#biography)
7. [Appendix: User Guide for The Vrygrond Community Map](#appendix)

## Abstract <a name="abstract"></a>

The **Vrygrond Community Map** is a web application featuring a **search** function and **interactive map** for finding organizations and services. This documentation provides a concise overview of the project, addressing its problem statement, user benefits, implementation details, and backend management instructions. The website addresses the challenge of efficiently locating organizations amid the vast online services and uses low data and low power for the benefit of the community members. It offers an intuitive interface by combining search functionality and map visualization. The solution includes frontend development using **TypeScript** and **React.js** for development, featuring **Leaflet** for utilizing **OpenStreetMap's** geodata and **Material UI** for interface design. Backend components, powered by **Node.js**, **Express.js**, and **MongoDB Atlas**, enable efficient organization data storage. The user guide explains map interaction, organization location, and viewing details. It also highlights mobile responsiveness and data optimization for a seamless mobile user experience. For administrators, it provides easy changes and additions for backend management using MongoDB Atlas and MongoDB Compass. This website aims to help the Vrygrond Community and its members.

## Introduction <a name="introduction"></a>

### Problem Statement <a name="problem-statement"></a>

The community of Vrygrond has many resources available for residents. However, not all community members are aware of all the help out there or how to access it. Parents of children from the Butterfly Arts Project will often ask staff for help and knowledge about resources. These interactions led to the idea of an interactive map.

### Contribution <a name="contribution"></a>

The most efficient way to get information about resources out there is a website. If there was one centralized location with all NGO’s, ECD’s, volunteer opportunities, and resources, it would save a lot of time when answering parents. It would also benefit the community at large. An interactive map with a search function would be the best way to meet everyone’s needs. It would be a helpful and efficient tool that Butterfly Arts Project members could refer parents to.

## Project Solution <a name="project-solution"></a>

### Functional Requirements: <a name="functional-requirements"></a>

- Search by Category:
  - The website shall provide users with a search bar to enter a category (e.g., school, restaurant, hospital).
  - Upon entering a category and clicking the search button, the website shall display a list of organizations that offer services related to the entered category.
  - The list of organizations shall include the organization's name and a pin icon next to each entry.

- Search by Service Offered:
  - The website shall provide users with a separate search bar to search for places by the services they offer (e.g., typing "school" to find all organizations providing schooling services).
  - After entering a service term and clicking the search button, the website shall display a list of organizations that offer the specified service.
  - The list of organizations shall include the organization's name and a pin icon next to each entry.

- Organization Details Display:
  - When a user clicks on an organization's name from the search results, the website shall display detailed information about the selected organization.
  - The displayed information shall include the organization's address, phone number, contact person, email address, and website (if available).

- Map Interaction:
  - When a user clicks on the pin icon next to an organization's address, the website shall drop a corresponding big pin on the map.
  - The map shall be displayed on the right side of the screen, and it shall visually show the exact location of the selected organization.

### Non-functional requirements: <a name="non-functional-requirements"></a>

- Performance:
  - The website shall provide a responsive and smooth user experience, with quick loading times for search results and map interactions.
  - The search functionality shall be efficient, even with a large dataset of organizations.

- Security:
  - The website shall implement necessary security measures to protect user data and prevent unauthorized access to the backend database (MongoDB Atlas).

- Usability:
  - The user interface shall be intuitive and user-friendly, making it easy for users to perform searches and interact with the map.
  - The website shall be designed to work well with low-power devices and low data connectivity, prioritizing efficiency and minimizing data usage.

- Technology Compatibility:
  - The website shall be compatible with modern web browsers and accessible from various devices, including desktops, tablets, and mobile phones.

- Scalability:
  - The backend infrastructure shall be designed to handle potential future growth in the number of organizations and users.

### High-level Architecture: <a name="high-level-architecture"></a>

The website follows a client-server architecture, where the client (web browser) interacts with the server to request and receive data. The main components of the system are as follows:

#### Client-side (Frontend):

The frontend is built using TypeScript with React.js for user interface development. Users interact with the website through a web browser, which sends requests to the server for data and displays the response to the user.

#### Server-side (Backend):

The backend is implemented using Node.js with Express.js, providing RESTful APIs to handle incoming requests from the frontend. The server interacts with the database to retrieve and store organization information. CORS (Cross-Origin Resource Sharing) is utilized to enable secure cross-origin communication between the frontend and backend.

#### Database:

The data is stored in a MongoDB database hosted on the free Amazon Web Services (AWS) cloud through MongoDB Atlas. The database contains collections to store organization details, such as names, addresses, contact information, and services offered.

#### Map Integration:

The map integration is achieved using Leaflet as a React.js component to display the organizations' locations on OpenStreetMap . When a user selects an organization, the backend provides the necessary data to plot a corresponding pin on the map.

### Database Design: <a name="database-design"></a>

The website's data is stored in a MongoDB database hosted on MongoDB Atlas, which allows for easy management and scalability. The data is initially uploaded into the database using a CSV file with the following labeled columns:

- Name: The name of the organization (string).
- Address 1: The primary address of the organization (string).
- Address 2: An optional secondary address of the organization (string).
- Contact Number 1: The primary contact phone number of the organization (mixed).
- Contact Number 2: An optional secondary contact phone number of the organization (mixed).
- Contact Persons: The names of contact persons at the organization (array of strings).
- Email Address 1: The primary contact email address of the organization (string).

- Email Address 2: An optional secondary contact email address of the organization (string).
- Website: The website URL of the organization (string).
- Services: A list of services offered by the organization (array of strings).
- Latitude: The latitude coordinate of the organization's location (double).
- Longitude: The longitude coordinate of the organization's location (double).
- Image: The image associated with the organization (string - URL or file path).

The database schema accommodates multiple contact persons and services, allowing for flexibility in recording organization details.

### Hosting and Location: <a name="hosting-and-location"></a>

The MongoDB database is hosted on MongoDB Atlas, providing secure and reliable cloud-based storage for the website's data. The database is hosted on an Amazon Web Service (AWS) Cloud located in Cape Town, South Africa. This choice of hosting location ensures lower latency and faster access to the data for users located in the region.

The combination of MongoDB Atlas and AWS in Cape Town provides a robust and efficient infrastructure to handle data storage and retrieval for the website.

### Technologies Used: <a name="technologies-used"></a>

#### Programming Languages:

- TypeScript: Used for writing type-safe code and enhancing JavaScript with static types.
- JavaScript: Used for adding interactivity and functionality to the website.

#### Frameworks and Libraries:

- React.js: A JavaScript library used for building the frontend user interface and managing the application's state. It enables the creation of reusable UI components.
- Node.js: A JavaScript runtime used on the server-side to handle backend operations and provide RESTful APIs to the frontend.
- Express.js: A lightweight Node.js framework used for building RESTful APIs and handling server-side routing and middleware.

#### Database:

- MongoDB Atlas: A cloud-based database service used for storing the organization information. MongoDB is a NoSQL database that provides flexibility in schema design and efficient querying of large datasets.

#### Map Integration:

- Leaflet: A popular open-source JavaScript library used for displaying interactive maps. Leaflet provides features for displaying markers, popups, and handling user interactions with the map.

#### Tools:

- Visual Studio Code: A popular code editor used for writing and editing the website's frontend and backend code.
- MongoDB Compass: A graphical user interface (GUI) tool used for interacting with the MongoDB database, viewing data, and managing collections.
- Git: A version control system used to track changes in the codebase and collaborate with team members during development.
- GitHub: A web-based hosting service for version control using Git. GitHub is used for hosting the project's code repository and facilitating collaboration.
- MongoDB Atlas Cloud: The cloud-based hosting service for the MongoDB database, used for data storage and management.

The technologies mentioned above form the core stack for the website's development and enable the functionalities described in the project description.

## Implementation <a name="implementation"></a>

### Prerequisites <a name="prerequisites"></a>

Before running the application, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation <a name="installation"></a>

1. Clone this repository to your local machine:

```bash
git clone https://github.com/bballardUF/BAP.git
```

2. Change into the project directory:

```bash
cd BAP
```

3. Install backend dependencies:

```bash
cd backend
npm install
```

4. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

### Backend <a name="backend"></a>

The `backend` folder contains the server-side code of the BAP web app. It is built using Express.js, providing the API endpoints to interact with the database and process client requests.

To start the backend server, run the following command:

```bash
cd backend
node server
```

The backend server will be running at `http://localhost:8000`.

### Frontend <a name="frontend"></a>

The `frontend` folder contains the client-side code of the BAP web app. It is built using React.js, providing an interactive and dynamic user interface.

To start the frontend development server, run the following command:

```bash
cd frontend
npm start
```

The development server will be running at `http://localhost:3000`.

### MongoDB Compass <a name="mongodb-compass"></a>

[MongoDB Compass](https://www.mongodb.com/try/download/compass) is a graphical user interface (GUI) tool used for interacting with the MongoDB database, viewing data, and managing collections. In the case of the Vrygrond Community Map project, the data is stored in the "OrganizationList" collection, and each document follows a specific format, as described below:

```json
{
  "_id": {
    "$oid": "*******"
  },
  //info above is auto-generated on creation
  "Name": "Caring Center",
  "Address 1": "No. 123, Example St.",
  "Address 2": "Muizenberg 123",
  "Contact Number 1": 1234567,
  "Contact Number 2": 7654321,
  "Contact Persons": "John Doe",
  "Email Address 1": "one@example.com",
  "Email Address 2": "two@example.com",
  "Website": "https://example.com",
  "Services": "medicine, health, clinic, care",//be short and informative
  "Hours": "Mo-Fri 9am-6pm",
  "Longitude": 18.4815307,
  "Latitude": -34.08754684,
  "Image": "https://example.com/img.png"
}
```

1. Launch MongoDB Compass and connect to mongodb+srv://***.mongodb.net/.

2. Once connected, select the OrganizationList collection.

3. You will see a list of documents in the collection, each representing an organization. MongoDB Compass provides a user-friendly way to manage the data stored in the "OrganizationList" collection, making it easy to edit, copy, clone and delete organizations' information as needed.

4. To make changes to an organization's details, you can edit the values directly in the JSON representation or switch and edit in table views. Once you make the necessary changes, click the "UPDATE" button to update the document in the database.

5. To add a new organization, click on the "ADD DATA" button at the top left corner of the collection view. A new empty document will be created, and you can fill in the organization's details in the JSON format. You can import JSON or CSV files.

Remember to exercise caution when making changes to the data, as any modifications will directly affect the information displayed on the Vrygrond Community Map website. It is also essential to ensure the data remains consistent and accurate for the benefit of the Vrygrond community members. For larger scale edit and database management, use a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account obtained from the site administrator.

## Future Work <a name="future-work"></a>

While The Vrygrond Community Map provides a robust solution for searching organizations, there are several potential areas for future improvement:

- Implementing advanced search filters and sorting options.
- Cleaning up the database and providing better service keywords.
- Enhancing the map functionality to support navigation (if possible).
- Improving website responsiveness for various devices.

There are no known issues with the code at this time, but there are potential bugs on the backend and database that are difficult to manage. The database is a huge component of this project since the website relies on it. Outdated addresses, limited keywords, and missing contact information are something that our team could not fully tackle on this trip.

## Biography <a name="biography"></a>

This project was sponsored by EDU Africa in partnership with the University of Florida. Four students were responsible for starting and completing this project: Bailey Ballard, Ethan Fan, Priscilla Jordan, and Yijia Zhao. The professor in charge of the study abroad was Dr. Sanethia Thomas, and the TA for the course was Ekin Atay.

- Sanethia Thomas, PhD, University of Florida, Computer & Information Science & Engineering, [sanethiat@ufl.edu](mailto:sanethiat@ufl.edu)
- Bailey Ballard (bballard1@ufl.edu) is a graduate student at the University of Florida studying Computer and Electrical Engineering. She recently completed her bachelor’s in Electrical Engineering at UF and graduates in August. This is her first study abroad and hopes to travel more in the future. Her main focus on the project was the database in MongoDB and the connection with Node.js. 
- Yijia Zhao ([zhao.yijia@ufl.edu](mailto:zhao.yijia@ufl.edu)) is an incoming junior majoring in Computer Science / Digital Arts and Sciences. He is an international student born in Shanghai, China, and is interested in software engineering, multimedia development, UI/UX and art. He interned under Dr. Thomas’s supervision earlier in 2023. In this project, he serves as the scrum master and project manager, managing the whole tech stack while also building frontend components, and connecting frontend to backend.
- Ethan Fan ([efan@ufl.edu](mailto:efan@ufl.edu)) is an incoming junior majoring in Computer Science with a minor in Mathematics through the College of Engineering. He is passionate about traveling and helping people and hopes that his software solutions will make a change in the world. In this project, he served as the lead frontend engineer, designing and developing the features of the website. He also connected frontend and backend components to make the search and map functionalities work.
- Priscilla Jordan ([priscillajordan@ufl.edu](mailto:priscillajordan@ufl.edu)) is a 4th year undergraduate student at the University of Florida. She is majoring in Computer Science through the College of Liberal Arts and Science. She completed her Associates Degree at Broward College in 2020. Priscilla was born in Rio de Janeiro, Brazil. She is passionate about travel, educational technology, and artificial intelligence. Her responsibilities during this project include front-end paired programming with Ethan Fan, communication with the client and interested parties, backend database organization, local community research, and facilitation of group communication.

## Appendix: User Guide for The Vrygrond Community Map <a name="appendix"></a>

### Table of Contents

1. Introduction
2. Getting Started
   2.1 Accessing the Website
   2.2 Supported Devices and Browsers
3. Searching for Organizations
   3.1 Searching by Organization Name
   3.2 Searching by Services Offered
4. Viewing Organization Details
5. Interacting with the Map
   5.1 Locating Organizations on the Map
   5.2 Viewing Organization Details on the Map
6. Mobile User Experience
   6.1 Responsive Design for Mobile Devices
   6.2 Touch Interactions

### 1. Introduction

Welcome to the User Guide for The Vrygrond Community Map! This guide is designed to help you navigate and utilize the features of our website efficiently. Whether you're accessing the website on your computer or mobile phone, we aim to provide a seamless and user-friendly experience. The Vrygrond Community Map is a free-to-use platform that allows you to search for organizations based on various categories and services offered. The website also features an interactive map that helps you visualize the locations of these organizations.

### 2. Getting Started

#### 2.1 Accessing the Website

To access The Vrygrond Community Map, simply open your web browser and enter the website's URL in the address bar. It can also be accessed through the Butterfly Arts Project website (https://www.butterflyartproject.org/).

#### 2.2 Supported Devices and Browsers

The Vrygrond Community Map is compatible with most modern web browsers on both computers and mobile devices. We recommend using the latest versions of browsers like Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge for the best experience.

### 3. Searching for Organizations

#### 3.1 Searching by Organization Name

If you know the name of the organization you are looking for, type it into the "Organization Name" search bar. The autocomplete feature will provide relevant suggestions as you type, helping you find the desired organization quickly.

#### 3.2 Searching by Services Offered

For more specific searches, you can use the "Service" search bar to find organizations based on the services they offer. Type in the service name, and autocomplete will assist you in finding matching services.

### 4. Viewing Organization Details

After performing a search, you will see a list of organization names. Click on the name of an organization to view more details about it. Once you click on an organization, a drop-down menu will display its details, including address, contact numbers, contact persons, email addresses, and website.

### 5. Interacting with the Map

#### 5.1 Locating Organizations on the Map

On the left side of the screen, use the search bars to enter a category or service you're interested in. After entering your search query, a list of organizations that match the criteria will appear below the search bars. Click on the name of the organization you want to locate on the map. The map will display a pin icon at the exact location of the selected organization.

#### 5.2 Viewing Organization Details on the Map

Upon selecting an organization from the list, detailed information, including address, phone number, contact person, email address, and website, will be displayed below the search bars. The selected organization's information will also be available in a drop-down menu fashion below its name. To view the organization's location on the map, click on the pin icon next to the address. The map will zoom in and show the pinned location.

### 6. Mobile User Experience

#### 6.1 Responsive Design for Mobile Devices

The website automatically adapts to different screen sizes and resolutions, ensuring optimal display on various mobile devices. The search bars, organization details, and map are arranged in a user-friendly layout suitable for smaller screens.

#### 6.2 Touch Interactions

The first thing that will appear on the screen is the instructions on how to use the website. Once the user understands how to navigate the website, they can click the “x” button in the upper right-hand corner. Once the instructions are removed, the two search bars are the only things that appear on the screen. Tapping on an organization's name in the search results will display its details, while tapping on the pin icon will show its location on the map. Once a pin icon is clicked, the two search bars disappear, and the map is displayed with the large pin. To get back to the search bars, the user will need to hit the back button on their phone.

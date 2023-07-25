# Easier MongoDB Compass Instructions

[MongoDB Compass](https://www.mongodb.com/try/download/compass) is a graphical user interface (GUI) tool used for interacting with the MongoDB database, viewing data, and managing collections.


1. Launch MongoDB Compass and connect to mongodb+srv://VrygrondTrust:ButterflyArtsProject@vrygrondcommunity.donyn
   7r.mongodb.net/.

   <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/1.png?raw=true" style="zoom: 50%;" />

2. Once connected, select the **OrganizationList**. <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/2.png?raw=true" style="zoom: 33%;" />

3. You will see a list of documents in the collection, each representing an organization. MongoDB Compass provides a user-friendly way to manage the data stored in the "**OrganizationList**", making it easy to edit, copy, clone and delete <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/3.png?raw=true" style="zoom:33%;" /> organizations' information as needed.

4. To add a new organization, click on the "**ADD DATA**" button at the top left corner of the collection view. A new empty document will be created, and you can fill in the organization's details in the JSON format. You can import JSON or CSV files.


   - **Insert single JSON**: 

     Copy and edit the following, and delete the lines with no information:

     ```json
     {
       "_id": {
         "$oid": "*******"
       },
       //info above is auto-generated on creation, paste the lines below
       "Name": "Caring Center",
       "Address 1": "No. 123, Example St.",
       "Address 2": "Muizenberg 123",
       "Contact Number 1": 1234567,
       "Contact Number 2": 7654321,
       "Contact Persons": "John Doe",
       "Email Address 1": "one@example.com",
       "Email Address 2": "two@example.com",
       "Website": "https://example.com,
       "Services": "medicine, health, clinic, care",
       "Hours": "Mo-Fri 9am-6pm",
       "Longitude": 18.4815307,
       "Latitude": -34.08754684,
       "Image": "https://example.com/img.png"
     }
     ```

     Click on "**ADD DATA**", then "**Insert Document**". <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/8.png" alt="image-20230725224151487" style="zoom:33%;" />

   - **Import CSV table file**:

     Open and edit the **New_Organizations_Template.csv** file in **ATTACHMENTS** folder. This can be edited in various software such as Microsoft Excel or Apple Numbers. Leave blank for empty information.

     In MongoDB Compass. Click on "**ADD DATA**", then "**Import JSON or CSV file**". Select the csv file as "**Import file**", then click "**Import**".

     <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/7.png" style="zoom: 50%;" />

5. To make changes to an organization's details, you can edit in **list**<img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/4.png" style="zoom:33%;" />,  **JSON** <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/5.png" style="zoom:33%;" /> or **table** views <img src="https://github.com/VrygrondCommunityGitHub/BAP/blob/main/ATTACHMENTS/6.png?raw=true" style="zoom:33%;" />. Once you make the necessary changes, click the "**UPDATE**" button to update the document in the database.

Remember to exercise caution when making changes to the data, as any modifications will directly affect the information displayed on the Vrygrond Community Map website. It is also essential to ensure the data remains consistent and accurate for the benefit of the Vrygrond community members. For larger scale edit and database management, use a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account obtained from the site administrator.

Users can email admin@vrygrond.co.za for updates or changes that need to be made for the website. 

### Login credentials (ONLY ADMINS):

#### Github Login:

Email: [kayemba29@gmail.com](mailto:kayemba29@gmail.com)

Password: VrygrondTrust23

Username: VrygrondCommunityGitHub

#### MongoDB Atlas:

Email: [kayemba29@gmail.com](mailto:kayemba29@gmail.com)

Password: VrygrondTrust23

Cluster Name: Cluster0

Username: kayemba29

Password: VrygrondTrust29
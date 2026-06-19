# Dummy-data-generator

## Employee Data Generator Using Express & Mongoose

### Objective

Build a web application using **Express.js** and **Mongoose** that generates dummy employee data and stores it in a MongoDB database.

### Requirements

1. Create a MongoDB database named **`company`**.
2. Create a collection named **`employees`**.
3. Each employee document should follow the structure below:

```javascript
{
  name: "Harry",
  salary: 45000000,
  language: "Python",
  city: "New York",
  isManager: true
}
```

4. Design a simple user interface containing a **"Generate Data"** button.
5. When the button is clicked:

   * Remove all existing documents from the `employees` collection.
   * Generate and insert **10 new employee records** with dummy data.
   * Save the generated records in the MongoDB database.

### Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

### Expected Outcome

Clicking the **Generate Data** button should refresh the `employees` collection by deleting old records and populating it with 10 newly generated employee documents.

## How to Run the Project

```bash
# Clone the repository
git clone https://github.com/<username>/<repository-name>.git

# Go to the project folder
cd <repository-name>

# Install dependencies
npm install

# Start the application
npm start
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.


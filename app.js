const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require("./models/Employee")
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000;

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * (arr.length -1));
  return arr[rno]
}

app.get('/generate', async (req, res) => {

  await Employee.deleteMany({})

  let randomNames = ["Madhav","Rahul","Sita","Geeta","Rimi","Simran","Rohit","Varun","Vipin","Vikas","Aakash","Yash","Amit","Ajay","Udit","Mahesh","Pari","Hari","Om","Ganga","Shiv","Lucky","Madhurika"]
  let randomLang = ["C++","C#","CSS","Dart","Python","Java","JSON","Ruby","Rust","PHP","Typescript","SQL","Swift","Go","R","Rust","Powershell","T-SQL"]
  let randomCities = ["Aligarh","Pune","Meerut","Mumbai","Delhi","Faridabad","Gurgaon","Bulandshahr","Noida","Bangalore","Hyderbad","London","Paris","Bhopal","Indore"]

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random()*20000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: (Math.random()>0.5) ? true:false
    })
    console.log(e)
  }

  res.render('index', { foo: 'FOO' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const { nanoid } = require("nanoid");
const app = express();

const PORT = 2000;

app.use(express.json());

const employeeDb = [
  {
    id: 1,
    full_name: "bambang santoso",
    occupation: "Web Developer",
    gender: "Male",
  },
  {
    id: 2,
    full_name: "aulia ayo",
    occupation: "UI UX Designer",
    gender: "Female",
  },
  {
    id: 3,
    full_name: "Mark yoti",
    occupation: "Data Scientist",
    gender: "female",
  },
  {
    id: 4,
    full_name: "Bang toip",
    occupation: "Digital MarketerS",
    gender: "female",
  },
  {
    id: 5,
    full_name: "tiup upi",
    occupation: "Software Enginner",
    gender: "Male",
  },
];

app.get("/employees", (req, res) => {
  if(!employeeDb.length){
      res.status(404).json({
          message: "Employee not found"
      })
      return
  }  
  if (employeeDb.length) {
    res.status(200).json({
      message: "Employee fetched successfully",
      result: employeeDb,
    });
  } else {
    res.status(404).send("No users found");
  }
});

app.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;

  const findIndex = employeeDb.findIndex((val) => {
    return val.id == employeeId;
  });

  if (findIndex == -1) {
    res.status(404).json({
      message: `Employee with ID ${employeeId} not found`,
    });
    return
  }

  res.status(200).json({
    message: `Successfull ! yeayy`,
    result: employeeDb[findIndex],
  });
});

app.post("/employees", (req, res) => {
    const EmployeeData = req.body

    if(!EmployeeData){
        res.status(400).json({
            message:"Employee data required"
        })
        return
    }
    if(!EmployeeData.full_name){
        res.status(400).json({
            message:"Employee fullName is required"
        })
        return
    }
    if(!EmployeeData.occupation){
        res.status(400).json({
            message:"Employee occupation is required"
        })
        return
    }
    if(!EmployeeData.gender){
        res.status(400).json({
            message:"Employee gender is required"
        })
        return
    }

    EmployeeData.id = nanoid()
    employeeDb.push(EmployeeData)

    res.status(201).json({
        message: "Employee created",
        result: EmployeeData
    })


})

app.patch("/employees/:id", (req, res) => {
    const employeeId = req.params.id
    const editEmployeeData = req.body
    
    const findIndex = employeeDb.findIndex((val) => {
        return val.id == employeeId;
      });

      if (findIndex == -1) {
          res.status(404).json({
            message: `Employee with ID ${employeeId} not found`,
          });
          return
    }
    
    employeeDb[findIndex] ={
        ...employeeDb[findIndex],
        ...editEmployeeData
    }
    
    
    res.status(200).json({
        message: "Succesfull ! uraaa uraaaaaaa"
    })
})

app.delete("/employees/:id", (req, res) => {
    const employeeId = req.params.id;

  const findIndex = employeeDb.findIndex((val) => {
    return val.id == employeeId;
  });

  if (findIndex == -1) {
    res.status(404).json({
      message: `User with ID ${employeeId} not found`,
    });
  }

  employeeDb.splice(findIndex, 1)
  
  res.status(200).json({
      message: "Employee Deleted whaahahahah(evil laugh)"
  })
});

app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});

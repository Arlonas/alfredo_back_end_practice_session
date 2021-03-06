const express = require("express");
const app = express();
const PORT = 2000;
const cors = require("cors")

app.use(cors())

const contentCard = [
    {
      "username": "bambang",
      "location": "BSD",
      "image_url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "likes": 213424,
      "caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!",
      "id": 1
    },
    {
      "username": "masuk pak eko",
      "location": "Jakarta",
      "image_url": "https://images.unsplash.com/photo-1644982648600-4583461837f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80",
      "likes": 53451,
      "caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!",
      "id": 2
    },
    {
      "username": "santoso",
      "location": "Bandung",
      "image_url": "https://images.unsplash.com/photo-1646194840487-e8d3586533a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
      "likes": 123534,
      "caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore enim praesentium inventore asperiores sunt corporis unde dicta ipsa dolorum voluptatibus dolor, odio nobis est consequuntur labore!",
      "id": 3
    }
  
]

app.get("/posts", (req, res) => {
  res.status(200).json({
    message: "content card rendered",
    result: contentCard
  })
})

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});

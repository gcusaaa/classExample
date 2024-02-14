import express from 'express'
import { Person } from '../Person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)
router.get('^/$|/class', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'Youre home'
    })
})
// Get all persons
router.get('/person1', (req, res) => {
    let person1 = new Person()
    person1.FirstName = "Shaun"
    person1.LastName = "Louw"
    person1.Age = 18
    person1.display()
    res.end('Please check the console');
});
router.get('/person2', (req, res) => {
    let person2 = new Person()
    person2.FirstName = "Qaqambile"
    person2.LastName = "Mnqika"
    person1.Age = 20
    person2.display()
    res.end('Please check the console');
});



// // Create a new person
// router.post('/person', function (req, res) {
//     try {
//         const body = req.body;
//         if (!body.name || !body.number) {
//             return res.send("Missing parameters").status(400);
//         }
//         // Add to existing list of persons
//         const id = Person.addPerson(body).id;
//         res.json({
//             message: `Person with ID ${id} created`,
//             id: id
//         });
//     } catch (e) {
//         console.error(`Error trying to add person: ${e}`);
//         res.status(500).send("Server error");
//     }
// });

// // Update an existing person by ID
// router.put('/person/:id', function (req, res) {
//     const { id } = req.params;
//     const body = req.body;

//     const person = Person.findByIdAndUpdate(id, body);

//     if (!person) {
//         return res.status(404).send('The person with the given ID was not found');
//     } else {
//         res.json(person);
//     }
// });

// Delete a person by ID
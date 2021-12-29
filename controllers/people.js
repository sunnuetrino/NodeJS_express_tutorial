let { people } = require('../data')

const getPeople = (req, res) => {

    res.status(200).json({ success: true, 'data': people })

}

const createPerson = (req, res) => {

    const { name } = req.body
    console.log(name)

    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name' })
    }
    else

        res.status(201).json({ success: true, person: name })

}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(401)
            .json({ success: true, msg: 'provide name' })
    }

    res.status(201).json({ success: true, person: [...people, name] })

}

const updatePerson = (req, res) => {

    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `cannot find the person ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name

        }
        return person
    })

    res.status(200).json({ success: true, data: [...people] })

    console.log(id)
    console.log(name)

}

const deletePerson = (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `cannot find the person ${id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number(id))

    console.log(newPeople)

    res.status(200).json({ success: true, data: newPeople })

}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    deletePerson,
    updatePerson
}
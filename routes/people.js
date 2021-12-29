const express = require('express');
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    deletePerson,
    updatePerson
} = require('../controllers/people')


/* router.get('/', getPeople)

router.post('/', createPerson)

router.post('/postman', createPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson) */

// chaining of multiple functionality for a route
router
    .route('/')
    .get(getPeople)
    .post(createPerson)

router
    .route('/postman')
    .post(createPersonPostman)

router
    .route('/:id')
    .put(updatePerson)
    .delete(deletePerson)


module.exports = router
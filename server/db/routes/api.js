const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    let cardId = req.params.id;

    return new Card()
    .where({id: cardId})
    .fetchAll()
    .then(card => {
      return res.json(card);
    })
    .catch(err => {
      message: err.message
    })
  })
  .put((req, res) => {
    let cardId = req.params.id;

    let data = {
      title, priority, status, created_by, assigned_to
    } = req.body

    return new Card()
      .where({id: cardId})
      .save(data, {
        patch: true,
      })
      .then(card => {
        return res.json(card)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
    })
  .delete((req, res) => {
    let cardId = req.params.id;
      return new Card()
        .where({id: cardId})
        .destroy()
        .then(card => {
          return res.json({success: true})
        })
        .catch(err => {
          return res.json({message: err.message})
        })
  })

router.route('/')
  .get((req, res) => {
    return new Card()
    .fetchAll()
    .then(cards => {
      return res.json(cards.models)
    })
    .catch(err => {
      return res.json({message: err.message})
    })
  })
  .post((req, res) => {
    let data = {
      title, priority, status, created_by, assigned_to
    } = req.body
    return new Card(data)
      .save()
      .then(card => {
        return res.json(card)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })



module.exports = router;
const { Card: CardModel } = require("../models/Card")

const cardController = {
  
  create: async(req, res) => {
    try {
      const card = {
        name: req.body.name,
        bank: req.body.bank,
        type: req.body.type,
        flag: req.body.flag,
        expiration: req.body.expiration,
        number_card: req.body.number_card,
        code: req.body.code
      }

      const response = await CardModel.create(card)

      res.status(201).json({ response, msg: "Cartão criado com sucesso!" })

    } catch(e) {
      console.log(e);
    }
  },

  getAll: async (req, res) => {
    try {
      const cards = await CardModel.find();

      res.json(cards)

    } catch(e) {
      console.log(e);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const cards = await CardModel.findById(id);

      if (!cards) {
        res.status(404).json({ msg: "Cartão não encontrado." })
        return
      }
      res.json(cards)

    } catch(e) {
      console.log(e);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const cards = await CardModel.findById(id);

      if (!cards) {
        res.status(404).json({ msg: "Cartão não encontrado." })
        return
      }
      
      const deleteService = await CardModel.findByIdAndDelete(id)

      res.status(200).json({deleteService, msg: "Cartão excluido com sucesso!"})

    } catch(e) {
      console.log(e);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const card = {
        name: req.body.name,
        bank: req.body.bank,
        type: req.body.type,
        flag: req.body.flag,
        expiration: req.body.expiration,
        number_card: req.body.number_card,
        code: req.body.code
      }

      const updateCard = await CardModel.findByIdAndUpdate(id, card)

      if(!updateCard) {
        res.status(404).json({ msg: "Cartão não encontrado." })
        return
      }

      res.status(200).json({service, msg: "Cartão atualizado com sucesso!"})

    } catch (e) {

    }

  }

}

module.exports = cardController
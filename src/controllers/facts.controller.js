const Fact = require('#models/fact');
const mockFacts = require('../mock.json')

module.exports = {
   seed: async (req, res) => {
      try {
         await Fact.deleteMany();
         const data = mockFacts;
         await Fact.insertMany([...data]);
         res.status(201).json({ ok: true });
      } catch (error) {
         res.status(500).json({ error });
      }
   },

   get: async (req, res) => {
      try {
         const facts = await Fact.find().sort({updatedAt: -1});
         res.status(200).json(facts);
      } catch (error) {
         res.status(500).json({ error });
      }
   },

   add: async (req, res) => {
      try {
         const newFact = new Fact(req.body);
         const fact = await newFact.save();

         res.status(200).json({
            fact,
            ok: true,
         });
      } catch (error) {
         console.log(error.message);
         res.status(500).json({ error: error.message });
      }
   },

   update: async (req, res) => {
      try {
         const _id = req.params.id;
         const fact = await Fact.findByIdAndUpdate(
            _id,
            {
               ...req.body,
            },
            { new: true }
         );
         res.status(200).json({ ok: true, fact });
      } catch (error) {
         res.status(500).json({ error: "couldn't update" });
      }
   },

   delete: async (req, res) => {
      try {
         const id = req.params.id;
         await Fact.deleteOne({
            _id: id,
         });
         res.status(200).json({ ok: true });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

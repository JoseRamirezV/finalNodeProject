const Fact = require('#models/fact');

module.exports = {
   get: async (req, res) => {
      try {
         const userEmail = req.params.email;
         const tasks = await Fact.find({ userEmail });
         res.status(200).json(tasks);
      } catch (error) {
         res.status(500).json({ error });
      }
   },

   add: async (req, res) => {
      try {
         const newFact = new Fact(req.body);
         const data = await newFact.save();

         res.status(200).json({
            fact: { ...data._doc },
            message: 'Added',
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

         res.status(200).json({ task: fact });
      } catch (error) {
         res.status(500).json({ error: "couldn't update" });
      }
   },

   delete: async (req, res) => {
      try {
         const id = req.params.id;
         await Fact.delete({
            _id: id,
         });
         res.status(200).json({ message: 'Deleted' });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },

   // delete: async (req, res) => {
   //    try {
   //       const data = req.body;
   //       const ids = data.map((id) => {
   //          if (scheduledJobs[id]) scheduledJobs[id].cancel();
   //          return new Types.ObjectId(`${id}`);
   //       });
   //       await Fact.deleteMany({
   //          _id: {
   //             $in: ids,
   //          },
   //       });
   //       res.status(200).json({ message: 'Deleted' });
   //    } catch (error) {
   //       res.status(500).json({ error: error.message });
   //    }
   // },
};

const notifyToday = ({
   _id,
   notificationDate,
   limitDate,
   userEmail,
   title,
   description,
}) => {
   const date = new Date(notificationDate);

   scheduleJob(`${_id}`, date, async () => {
      await sendEmail(userEmail, title, 'Notification', {
         description,
         limitDate: moment(limitDate).format('DD [de] MMMM [del] YYYY'),
      });
      await Fact.updateOne({ _id }, { notified: true });
   });
};

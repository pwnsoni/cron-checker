const mongoose = require('mongoose');
const Cron = require('./../modals/cron');
const connUri = process.env.MONGO_CONNECTION_URI;

const add = async (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, (err) => {
        let result = {};
        let status = 201;
        if (!err) {
          const payload = req.body;
          console.log('here 1')
          const { name, creater, cronStatement, description } = req.body.form;
          const createdAt = new Date();
          const updatedAt = new Date();
  
          const cron = new Cron({ name, creater, cronStatement, createdAt, updatedAt, description }); // document = instance of a model
          // TODO: We can hash the password here as well before we insert
          console.log(cron, 'before saving');
          cron.save((err, cron) => {
            if (!err) {
              result.status = status;
              result.result = cron;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
              console.log(err )
              console.log('88')
            }
  
            console.log(result)
            console.log('88')
            res.status(status).send(result);
            // Close the connection after saving
            mongoose.connection.close();
          });
        } else {
          status = 500;
          result.status = status;
          result.error = err;
          res.status(status).send(result);
  
          mongoose.connection.close();
        }
      });

}

const getThisCron = async (req, res) => {

}

const updateThisCron = async (req, res) => {

}

const deleteThisCron = async (req, res) => {

}

const getAll = async (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
        let result = {};
        console.log('in getAllCron')
        let status = 201;

        if (!err){
           try{
            const crons = await Cron.find({});
            result.status = status;
            result.error = err;
            result.result = crons;
           } catch(e){
               result.status = 500;
               result.error = e;
           }
           res.status(status).send(result);
           mongoose.connection.close();

        } else{
          console.log(err)
        }
    });
}

module.exports = {add, getAll, getThisCron, updateThisCron, deleteThisCron};
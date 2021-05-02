const mongoose = require('mongoose');
const SnsGroup = require('./../modals/snsGroup');
const connUri = process.env.MONGO_CONNECTION_URI;

const add = async (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, (err) => {
        let result = {};
        let status = 201;
        if (!err) {
          console.log('here 1')
          let { name, cron_id, recipients } = req.body.form;
          const createdAt = new Date();
          const updatedAt = new Date();
          recipients = recipients.split(' ');
          let cronName = name;
          const snsGroup = new SnsGroup({ cronName, cron_id, recipients, createdAt, updatedAt }); // document = instance of a model
          // TODO: We can hash the password here as well before we insert
          console.log(snsGroup, 'before saving');
          snsGroup.save((err, snsGroup) => {
            if (!err) {
              result.status = status;
              result.result = snsGroup;
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

const getThisSnsGroup = async (req, res) => {

}

const updateThisSnsGroup = async (req, res) => {

}

const deleteThisSnsGroup = async (req, res) => {

}

const getAll = async (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
        let result = {};
        let status = 201;

        if (!err){
           try{
            const snsGroups = await SnsGroup.find({});
            result.status = status;
            result.error = err;
            result.result = snsGroups;
           } catch(e){
               result.status = 500;
               result.error = e;
           }
           res.status(status).send(result);
           mongoose.connection.close();

        }
    });
}

module.exports = {add, getAll, updateThisSnsGroup, deleteThisSnsGroup, getThisSnsGroup};
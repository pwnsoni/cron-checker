const mongoose = require('mongoose');
const SnsGroup = require('./../modals/snsGroup');
const Cron = require('./../modals/cron');
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
          snsGroup.save(async (err, snsGroup) => {
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

          await mapSnsWithCron(cron_id, result.result._id);
          console.log(cron_id, result.result._id)
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
  console.log(`In get this SNS Group, _id of the snsGroup -> ${JSON.stringify(req.params)}`);
  const {_id} = req.params;

  mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
    let result = {};
    let status = 201;

    if (!err){
       try{
        const snsGroup = await SnsGroup.findById({_id});
        result.status = status;
        result.error = err;
        result.result = snsGroup;
       } catch(e){
           result.status = 500;
           result.error = e;
       }

       mongoose.connection.close();
       res.status(status).send(result);

    } else{
      console.log(err)
    }
  });


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

const mapSnsWithCron = async (cron_id, sns_id) => {
  console.log('started mapping', cron_id, sns_id)
  let result = {};
    let status = 201;
      try{
        const crons = await Cron.findByIdAndUpdate(cron_id, {snsGroup: sns_id, updatedAt: new Date()});
       result.status = status;
       result.result = crons;
      } catch(e){
          result.status = 500;
          result.error = e;
      }
      console.log('done mapping', result)
}

module.exports = {add, getAll, updateThisSnsGroup, deleteThisSnsGroup, getThisSnsGroup};
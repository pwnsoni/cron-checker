const mongoose = require('mongoose');
const LastHit = require('./../modals/lastHits.js');

const Cron = require('./../modals/cron');
const connUri = process.env.MONGO_CONNECTION_URI;

const hit = async (req, res) => {

    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
        let result = {};
        let status = 201;
        if (!err) {
          console.log('here 1')
          const { cron_id, cronName } = req.body.form;
          const createdAt = new Date();
          const updatedAt = new Date();
          const lastHits = [];
  
          const lastHit = new LastHit({ cron_id, cronName, createdAt, updatedAt, lastHits }); // document = instance of a model
          // TODO: We can hash the password here as well before we insert
          console.log(lastHit, 'before saving');
          lastHit.save(async (err, lastHit) => {
            if (!err) {
              result.status = status;
              result.result = lastHit;
            } else {
              status = 500;
              result.status = status;
              result.error = err;
              console.log(err )
              console.log('88')
            }
            await mapHitWithCron(cron_id, result.result._id);
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

const mapHitWithCron = async (cron_id, hit_id) => {
  console.log('started mapping', cron_id, hit_id)
  let result = {};
    let status = 201;
      try{
        const crons = await Cron.findByIdAndUpdate(cron_id, {lastHits: hit_id, updatedAt: new Date()});
       result.status = status;
       result.result = crons;
      } catch(e){
          result.status = 500;
          result.error = e;
      }
      console.log('done mapping', result)
}

const recordHit = async (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
        let result = {};
        let status = 201;
        const {cron_id, testing} = req.body;
        
        if (testing){
            result.status = status;
            result.error = err;
            result.result = 'You hit successfully';

            console.log(result)
            res.status(status).send(result);
            mongoose.connection.close();
        } else {
            if (!err){
            try{
                const updatedAt = new Date();
                const lastHits = await LastHit.findOneAndUpdate({cron_id}, {updatedAt, $push: {lastHits: updatedAt}}, {new: true});
                result.status = status;
                result.error = err;
                result.result = lastHits;
            } catch(e){
                result.status = 500;
                result.error = e;
            }
            console.log(result)
            res.status(status).send(result);
            mongoose.connection.close();
        
            } else{
            console.log(err)
            }
        }
      });
}

const getThisHit = async (req, res) => {
    console.log(`In get this Hit, _id of the lastHit -> ${JSON.stringify(req.params)}`);
    const {_id} = req.params;
  
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true }, async (err) => {
      let result = {};
      let status = 201;
  
      if (!err){
         try{
          const lastHit = await LastHit.findById({_id});
          result.status = status;
          result.error = err;
          result.result = lastHit;
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

const create = async () => {

}


module.exports = {hit, getThisHit, recordHit};
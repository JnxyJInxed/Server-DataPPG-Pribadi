const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    dataPPGOriginal : { 
        type : [Number]
    }
    // type : {  //ini diganti sama maksud 8 dkk
    //     type : 
    // },
    //nati dipake sebagai id yang punyadata kalau udah gabung sama login
    // user_id : { 
    //     type : String
    // }
})



module.exports = mongoose.model('SavedDataPPG_Original', dataSchema);
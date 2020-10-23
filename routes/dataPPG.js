const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
//Deklarasi Model
const dataRekonstruksi = require('../models/PPGRekonstruksi_Model');
const dataOriginal = require('../models/PPGOriginal_Model');

//DATA REKONSTRUKSI  
    //get lastest
    router.get('/get_DataPPGRekonstruksi_Lastest', async (req,res) => {
        try{
            const dataLast = await dataRekonstruksi.find().limit(1).sort({$natural:-1}); //ngasih semua data yang udah kesimpan
            res.json(dataLast); 
        }catch(err){
            console.log(err);
            res.json({message: 'err GET LAST'});
        }
    });

    //get all
    router.get('/get_DataPPGRekonstruksi_All', async (req,res) => {
        try{
            const dataAll = await dataRekonstruksi.find(); //ngasih semua data yang udah kesimpan
            res.json(dataAll);
        }catch(err){
            console.log(err);
            res.json({message: 'err GET ALL'});
        }
    });

    router.post('/save_DataPPGRekontruksi', async (req,res) => { //pake async kalau save CARA 2
        console.log(req.body) //cek Body
        const newData = new dataRekonstruksi({ //masukin info dari body ke salam model database Post
                dataPPGRekonstruksi : req.body.dataPPGRekonstruksi
        });
        // Save and validate
        newData.save()
        .then(newData=> {
            return res.status(200).json({
            message :'Data (Rekonstruksi) Berhasil Disimpan'
        })
    })
    .catch (err => {
        console.log(err);
        res.status(500).json({error:err.message});
    });

    });

//DATA Original  
    //get lastest
    router.get('/get_DataPPGOriginal_Lastest', async (req,res) => {
        try{
            const dataLast = await dataOriginal.find().limit(1).sort({$natural:-1}); //ngasih semua data yang udah kesimpan
            res.json(dataLast); 
        }catch(err){
            console.log(err);
            res.json({message: 'err GET LAST'});
        }
    });

    //get all
    router.get('/get_DataPPGOriginal_All', async (req,res) => {
        try{
            const dataAll = await dataOriginal.find(); //ngasih semua data yang udah kesimpan
            res.json(dataAll);
        }catch(err){
            console.log(err);
            res.json({message: 'err GET ALL'});
        }
    });

    router.post('/save_DataPPGoriginal', async (req,res) => { //pake async kalau save CARA 2
        console.log(req.body) //cek Body
        const newData = new dataOriginal({ //masukin info dari body ke salam model database Post
                dataPPGOriginal : req.body.dataPPGOriginal
        });
        // Save and validate
        newData.save()
        .then(newData=> {
            return res.status(200).json({
            message :'Data (Original) Berhasil Disimpan'
        })
    })
    .catch (err => {
        console.log(err);
        res.status(500).json({error:err.message});
    });

    });

module.exports = router;
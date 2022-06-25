var express = require('express');
var router = express.Router();

var Case = require('../model/Cases.model');

router.route('/').get((req, res) => {
    Case.find()
        .then(cases => res.status(200).json(cases))
        .catch(err => res.status(500).send({ error: err }));
})

router.route('/add').post((req, res) => {
    var newCase = new Case();

    newCase.defendantName = req.body.defendantName;
    newCase.defendantAddr = req.body.defendantAddr;
    newCase.crimeType = req.body.crimeType;
    newCase.crimeDate = req.body.crimeDate;
    newCase.crimeLoc = req.body.crimeLoc;
    newCase.officerName = req.body.officerName;
    newCase.arrestDate = req.body.arrestDate;
    newCase.judgeName = req.body.judgeName;
    newCase.lawyerName = req.body.lawyerName;
    newCase.startDate = req.body.startDate;
    newCase.endDate = req.body.endDate;
    newCase.status = req.body.status;
    newCase.summary = req.body.summary;

    newCase.save((err, savedCase) => {
        if (err) {
            res.status(500).send({ error: err });
        }
        else {
            res.status(200).send(savedCase);
        }
    })
});

router.route('/:id').get((req, res) => {
    Case.findById(req.params.id)
        .then(foundCase => res.status(200).json(foundCase))
        .catch(err => res.send({ error: err }));
})

router.route('/:id').delete((req, res) => {
    Case.findByIdAndDelete(req.params.id)
        .then(foundCase => res.status(200).json(foundCase))
        .catch(err => res.send({ error: err }));
})

router.route('/update/:id').post((req, res) => {
    Case.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedCase => {
            updatedCase.defendantName = req.body.defendantName;
            updatedCase.defendantAddr = req.body.defendantAddr;
            updatedCase.crimeType = req.body.crimeType;
            updatedCase.crimeDate = req.body.crimeDate;
            updatedCase.crimeLoc = req.body.crimeLoc;
            updatedCase.officerName = req.body.officerName;
            updatedCase.arrestDate = req.body.arrestDate;
            updatedCase.judgeName = req.body.judgeName;
            updatedCase.lawyerName = req.body.lawyerName;
            updatedCase.startDate = req.body.startDate;
            updatedCase.endDate = req.body.endDate;
            updatedCase.status = req.body.status;
            updatedCase.summary = req.body.summary;

            updatedCase.save((err, savedCase) => {
                if (err) {
                    res.status(500).send({ error: err })
                }
                else {
                    res.status(200).send(savedCase);
                }
            })
        })
        .catch(err => res.status(500).send({ error: err }));
});

module.exports = router;
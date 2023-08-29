const postDogsValidate = (req, res, next) => {
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span} = req.body;
    if(!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !life_span)
       return res.status(400).send('Todos los campos son obligatorios');

    next();
};

module.exports = postDogsValidate;
const express = require('express');
const router = express.Router();
//@Item Model
const Item = require('../../Models/Item');
//@route GET api/api
//@desc Get all items
//@access public
router.get('/',(req, res)=> {Item.find()
    .sort({date:-1})
    .then(api =>res.json(api));
});
//@route POST api/api
//@desc post items
//@access public
router.post('/',(req, res)=> {Item.find()
    const newitem = new Item({
        name: req.body.name
    });
    newitem.save().then(item=>res.json(item));
});
//@route DELETE api/api
//@desc Delete an items
//@access public
router.delete('/:id',(req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=>res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});
module.exports = router;

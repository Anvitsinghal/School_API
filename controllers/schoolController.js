const db=require('../db');
const addschool=async(req,res)=>{
  const {name,address,latitude,longitude}=req.body;
  if(!name || !address || !latitude || !longitude){
    return res.status(400).json({message:"All fields are require"});
  }
  try{
    await db.execute(
        'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: "School added successfully." });
    
  }catch(err){
    res.status(500).json({error:err.message});
  }
};

const listschool=async (req,res)=>{
    const userLat = parseFloat(req.query.latitude);
  const userLong = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLong)) {
    return res.status(400).json({ message: "Invalid coordinates." });
  }

  try {
    const [schools] = await db.execute('SELECT * FROM schools');
    const result = schools.map(s => {
      const distance = Math.sqrt(
        Math.pow(userLat - s.latitude, 2) +
        Math.pow(userLong - s.longitude, 2)
      );
      return { ...s, distance };
    });

    result.sort((a, b) => a.distance - b.distance);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAllSchools = async (req, res) => {
  try {
    const [schools] = await db.execute('SELECT * FROM schools');
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports={addschool,listschool,getAllSchools}
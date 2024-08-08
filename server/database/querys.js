const pool = require('./db');


const select = async (query)=>{
    const client = await pool.connect();
    try{
        const res = await client.query(query);
        client.release();
        return res.rows;
    }
    catch(err){
        console.error(err);
        return 1;
    }
}

const create = async (query)=>{

}

module.exports = { select, create };
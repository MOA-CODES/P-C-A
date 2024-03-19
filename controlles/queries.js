const pool = require('../db/conn')
const {StatusCodes} = require('http-status-codes')

const displayHome = async (req, res) => {

}

const getUsers = async (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results)=>{
        if(error){
            throw new error
        }
        res.status(StatusCodes.OK).json(results.rows)
    })
    
}

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
    
}

const createUser = async (req, res) => {

    const{ name, email} = req.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',[name, email] ,(error, results)=>{
        if(error){
            throw new error
        }
        res.status(StatusCodes.CREATED).json(`User added with ID: ${results.rows[0].id}`)
    })
    
}

const updateUser = async (req, res) => {
    const id = parseInt (req.params.id)
    const {name, email} = req.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results)=>{
            if(error){
                throw error
            }
            res.status(StatusCodes.OK).send(`User modified with ID: ${id}`)
        }
    )
    
}

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results)=>{
        if(error){
            throw error
        }
        res.status(StatusCodes.OK).send(`User deleted with ID: ${id}`)
    })
    
}


module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser}
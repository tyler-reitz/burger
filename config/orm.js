const connection = require('./connection')

const orm = {

  selectAll(cb) {
    connection.query('SELECT * FROM burgers', (err, res) => {
      if (err) throw err
      cb('all', res)
    })
  },
  
  insertOne(name, cb) {
    connection.query('INSERT INTO burgers SET ?', {burger_name: name}, (err, res) => {
      if (err) throw err
      cb('insert', res)
    })
  },
  
  updateOne(name, cb) {
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: 1}, {burger_name: name}], (err, res) => {
      if (err) throw err
      cb('update', res)
    })
  }
  
}

orm.updateOne('test', console.log)
orm.selectAll(console.log)

module.exports = orm
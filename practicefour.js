// MongoDB Cheat Sheet
// https://cheatography.com/isaeus/cheat-sheets/mongodb/

// Basic = Mongo DB

// db = Show name of current database
// mongod = Start database
// mongo = Connect to database
// show dbs = Show databases
// use db = Switch to database db
// show collec­tions = Display current database collec­tions


// Create

// insert­(data) = insert document(s) returns write result
// insertOne (data, options) = insert one document
// insert­Man­y(data, options) = insert many documents
// insert­Man­y([­{},­{},{}]) = needs square brackets


// Read

// db.co­­lle­­ct­i­o­n.f­­ind() = Display documents from collection
// find(f­ilter, options) = find all matching documents
// findOn­e(f­ilter, options) = find first matching document


// Update

// update­One­(fi­lter, data, options) = Change one document
// update­Man­y(f­ilter, data, options) = Change many documents
// replac­eOn­e(f­ilter, data, options) = Replace document entirely


// Delete

// delete­One­(fi­lter, options) => Delete one document
// delete­Man­y(f­ilter, options) => Delete many documents


// Functions

// .count() = Counts how many results
// .sort(­filter) = Sort ascend:1 descend: -1

	
// Filters

// {"ke­y": "­val­ue"} = Used for filter arguments to filter collection
// {key: {$oper­ator: value} } = Operators for querying data
// {key: {$exists: true}} = Matches all documents containing subdoc­ument key
// // $eq = Matches values that are equal to a specified value.
// $gt = Matches values that are greater than a specified value.
// $gte = Matches values that are greater than or equal to a specified value.
// $in = Matches any of the values specified in an array
// syntax: = {key:{$in: [array of values] } }
// $lt = Matches values that are less than a specified value.
// $lte = Matches values that are less than or equal to a specified value.
// $ne = Matches all values that are not equal to a specified value.
// $nin = Matches none of the values specified in an array.
// $and = Performs AND operation
// find({­doc.su­bdo­c:v­alue}) = Filter sub documents
// {key: {$op: filter}, {filter}} = $and operator is necessary when the same field or operator has to be specified in multiple expres­sions

// more mongo db cheatsheets
// https://cheatography.com/tag/mongodb/

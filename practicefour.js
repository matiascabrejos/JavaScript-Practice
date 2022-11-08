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

Update
update­One­(fi­lter, data, options)
Change one document
update­Man­y(f­ilter, data, options)
Change many documents
replac­eOn­e(f­ilter, data, options)
Replace document entirely

Delete
delete­One­(fi­lter, options)
Delete one document
delete­Man­y(f­ilter, options)
Delete many documents

Functions
.count()
Counts how many results
.sort(­filter)
Sort ascend:1 descend: -1
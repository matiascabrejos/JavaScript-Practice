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
// syntax: = {$and: [{}, {}];}

// more mongo db cheatsheets:

// Mongodb
// https://cheatography.com/tag/mongodb/
// https://cheatography.com/nerv/cheat-sheets/mongodb-shell/
// https://cheatography.com/djackson405/cheat-sheets/mongodb/
// https://cheatography.com/sanjay44/cheat-sheets/extension/
// https://cheatography.com/gelicia/cheat-sheets/mongodb-to-sql/
// https://cheatography.com/wooandoo/cheat-sheets/mongoose/
// https://cheatography.com/ovi-mihai/cheat-sheets/mongodb/
// https://cheatography.com/amicheletti/cheat-sheets/mongoengine/
// https://cheatography.com/slohja/cheat-sheets/mongodb-community-for-macos-intel/
// https://cheatography.com/sumanth111999/cheat-sheets/mongodb/
// https://cheatography.com/istvan/cheat-sheets/mongodb/
// https://cheatography.com/elpluto/cheat-sheets/mongodb-shell/

// Sql
// https://cheatography.com/davechild/cheat-sheets/sql-server/
// https://cheatography.com/huda127/cheat-sheets/sql-server-chairul-huda-5212100127/
// https://cheatography.com/guslong/cheat-sheets/essential-mysql/
// https://cheatography.com/garisnk/cheat-sheets/garis133-sql-cheat-sheet/

// Nosql
// https://cheatography.com/xplendit/cheat-sheets/nosql/

// Postgresql
// https://cheatography.com/tme520/cheat-sheets/postgresql/
// https://cheatography.com/manebanane/cheat-sheets/postgresql/
// https://cheatography.com/bligoubloups/cheat-sheets/heroku-nodejs-postgres/

// Angular
// https://cheatography.com/proloser/cheat-sheets/angularjs/
// https://cheatography.com/spegusess/cheat-sheets/angular/

// Angular => Forms
// https://cheatography.com/nathane2005/cheat-sheets/angular-2-forms/
// https://cheatography.com/nathane2005/cheat-sheets/angular-2-router/

// Node
// https://cheatography.com/raffi001/cheat-sheets/nodejs/

// Typescript
// https://cheatography.com/gregfinzer/cheat-sheets/typescript/

// Javascript
// https://cheatography.com/pyro19d/cheat-sheets/javascript/

// Vue
// https://cheatography.com/peanuts-83/cheat-sheets/vue-js/
// https://cheatography.com/fortyseven/cheat-sheets/basic-vuex/

// React
// https://cheatography.com/jaredcobb/cheat-sheets/es7-react-vscode-shortcuts/
// https://cheatography.com/frankieali4/cheat-sheets/vscode-es7-react-redux-snippets/
// https://cheatography.com/kitallis/cheat-sheets/reactjs/
// https://cheatography.com/evidanary/cheat-sheets/react/
// https://cheatography.com/cashm/cheat-sheets/react-and-material-ui-project-startup/
// https://cheatography.com/hackingbeauty/cheat-sheets/react-reusability/
// https://cheatography.com/irvincnt93/cheat-sheets/hooks-react/

// Nuxt
// https://www.vuemastery.com/nuxt-cheat-sheet/
// https://medium.com/js-dojo/the-ultimate-nuxt-js-cheat-sheet-96125109d8b8
// https://harlanzw.com/blog/nuxt-3-migration-cheatsheet
// https://a.storyblok.com/f/88751/x/f08e494225/cs-nuxt3.pdf

// Tailwind
// https://nerdcave.com/tailwind-cheat-sheet
// https://tailwindcomponents.com/cheatsheet/


// Supabase
// https://supabase.com/docs/guides/getting-started/quickstarts/vue
// https://supabase-cheatsheet.vercel.app/guide/basic/database-connection.html

// Vue Script Setup
// https://fadamakis.com/vue-3-script-setup-cheat-sheet-36572c042128
// https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf
// https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf
// https://vuedose.tips/the-101-guide-to-script-setup-in-vue-3

// Express
// https://devhints.io/express
// https://dev.to/alexmercedcoder/2022-expressjs-cheatsheet-160o
// https://overapi.com/express
// https://quickref.me/express
// https://www.codecademy.com/learn/bapi-learn-express/modules/introduction-to-node-js/cheatsheet

// AWS
// https://digitalcloud.training/aws-cheat-sheets/
// https://www.interviewbit.com/aws-cheat-sheet/

// Other Techs
// https://xata.io/
// https://chat.openai.com/chat
// https://render.com/
// https://sveltesociety.dev/cheatsheet
// https://www.solidjs.com/
// https://remix.run/
// https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-deep-learning
// https://www.mit.edu/~amidi/teaching/data-science-tools/
https://education.github.com/git-cheat-sheet-education.pdf



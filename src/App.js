import React, { useState } from 'react';
import './App.css';
import './index.css';
import { highlight } from 'sql-highlight'
import './queries.json';

let queries =  require('./queries.json')

const sqlTrainAirlineString = queries.Train.MySQL.Airline
const highlightedsqlTrainAirlineString = highlight(sqlTrainAirlineString, {
  html: true
})

const sqlString = `SELECT satisfaction AS predicted satisfaction_ confidence AS confidence, satisfaction_explain AS info FROM mindsdb.airline_survey_model WHERE ‘Custom Type’ = ‘Loyal Customer’	AND age=52 AND ‘Type of Travel’=‘Business travel’ AND ‘Class’=‘Eco’;`
const highlighted = highlight(sqlString, {
  html: true
})

const pstgressString = `SELECT lol FROM postgress;`
const highlightedPostgress = highlight(pstgressString, {
  html: true
})

const mongoDB = `SELECT lol FROM Mongo;`
const highlightedMongoDB = highlight(mongoDB, {
  html: true
})

const MariaDB = `SELECT lol FROM MariaDB;`
const highlightedMariaDB = highlight(MariaDB, {
  html: true
})

const ClickHosue = `SELECT lol FROM ClickHouse;`
const highlightedClickHouse = highlight(ClickHosue, {
  html: true
})

const SQLserver = `SELECT lol FROM SQLserver;`
const highlightedSQLserver = highlight(SQLserver, {
  html: true
})

/*
Todo: create all the possible combinations.  
*/


function App() {
  const [database, setDataBase] = useState(0);
  const [method, setMethod] = useState(0);
  const [dataset, setDataset] = useState(0);



  return (
    <div className="w-screen h-screen subpixel-antialiased ">
      <div className="container mx-20 mt-20 justify-self-center">
        <div className="grid grid-cols-6 gap-6 self-center">
          <div className="col-span-1 text-center">

            <button className={database === 'Mysql' ? "btn-sel" : "btn"} onClick={() => setDataBase('Mysql')}>MySql</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={database === 'Postgress' ? "btn-sel" : "btn"} onClick={() => setDataBase('Postgress')} >Postgres</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={database === 'MongoDB' ? "btn-sel" : "btn"} onClick={() => setDataBase('MongoDB')} >MongoDB</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={database === 'MariaDB' ? "btn-sel" : "btn"} onClick={() => setDataBase('MariaDB')} >MariaDB</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={database === 'ClickHouse' ? "btn-sel" : "btn"} onClick={() => setDataBase('ClickHouse')} >ClickHouse</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={database === 'SQLserver' ? "btn-sel" : "btn"} onClick={() => setDataBase('SQLserver')} >SQLserver</button>
          </div>
          <div className="col-span-3 text-center">
            <button className={method === 'Train' ? "btn-sel" : "btn"} onClick={() => setMethod('Train')} >Train</button>
          </div>
          <div className="col-span-3 text-center">
            <button className={method === 'Predict' ? "btn-sel" : "btn"} onClick={() => setMethod('Predict')} >Predict</button>

          </div>
          <div className="col-span-6 justify-self-center">
            <div className="bg-black bg-opacity-75 p-8 rounded-2xl max-w-xl h-80">

              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1 grid grid-cols-6 gap-5">
                  <div className="w-3 h-3 rounded-full bg-white bg-opacity-20 flex col-span-1 self-center"></div>
                  <div className="w-3 h-3 rounded-full bg-white bg-opacity-20 flex col-span-1 self-center"></div>
                  <div className="w-3 h-3 rounded-full bg-white bg-opacity-20 flex col-span-1 self-center"></div>
                </div>
                <div className=" text-center col-span-4 text-white opacity-20 self-center">
                  Untitled-1
                </div>
              </div>
              <div className="grid-cols-6 py-10 text-white">
                {database === 'Mysql' && method === 'Train' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainAirlineString }}>
                </code>}
                {database === 'Postgress' && 
                <code  dangerouslySetInnerHTML={{ __html: highlightedPostgress }}>
                </code>}
                {database === 'MongoDB' && 
                <code  dangerouslySetInnerHTML={{ __html: highlightedMongoDB }}>
                </code>}
                {database === 'MariaDB' && 
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDB }}>
                </code>}
                {database === 'ClickHouse' && 
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouse }}>
                </code>}
                {database === 'SQLserver' && 
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLserver }}>
                </code>}
              </div>
            </div>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Airline' ? "btn-sel" : "btn"} onClick={() => setDataset('Airline')} >Airline</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Default' ? "btn-sel" : "btn"} onClick={() => setDataset('Default')} >Default</button>

          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'TimeSeries' ? "btn-sel" : "btn"} onClick={() => setDataset('TimeSeries')} >Time Series</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Sales' ? "btn-sel" : "btn"} onClick={() => setDataset('Sales')} >Sales</button>

          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'CreditCard' ? "btn-sel" : "btn"} onClick={() => setDataset('CreditCard')} >Credit Card</button>

          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Housing' ? "btn-sel" : "btn"} onClick={() => setDataset('Housing')} >Housing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

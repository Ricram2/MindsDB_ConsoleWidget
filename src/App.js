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

const sqlTrainCarString = queries.Train.MySQL.Car
const highlightedsqlTrainCarString = highlight(sqlTrainCarString, {
  html: true
})

const sqlTrainTimeseriesString = queries.Train.MySQL.Timeseries
const highlightedsqlTrainTimeseriesString = highlight(sqlTrainTimeseriesString, {
  html: true
})

const sqlTrainSalesString = queries.Train.MySQL.Sales
const highlightedsqlTrainSalesString = highlight(sqlTrainSalesString, {
  html: true
})

const sqlTrainBankString = queries.Train.MySQL.Bank
const highlightedsqlTrainBankString = highlight(sqlTrainBankString, {
  html: true
})

const sqlTrainHousingString = queries.Train.MySQL.Housing
const highlightedsqlTrainHousingString = highlight(sqlTrainHousingString, {
  html: true
})


const sqlPredictAirlineString = queries.Predict.MySQL.Airline
const highlightedsqlPredictAirlineString = highlight(sqlPredictAirlineString, {
  html: true
})

const sqlPredictCarString = queries.Predict.MySQL.Car
const highlightedsqlPredictCarString = highlight(sqlPredictCarString, {
  html: true
})

const sqlPredictTimeseriesString = queries.Predict.MySQL.Timeseries
const highlightedsqlPredictTimeseriesString = highlight(sqlPredictTimeseriesString, {
  html: true
})

const sqlPredictSalesString = queries.Predict.MySQL.Sales
const highlightedsqlPredictSalesString = highlight(sqlPredictSalesString, {
  html: true
})

const sqlPredictBankString = queries.Predict.MySQL.Bank
const highlightedsqlPredictBankString = highlight(sqlPredictBankString, {
  html: true
})

const sqlPredictHousingString = queries.Predict.MySQL.Housing
const highlightedsqlPredictHousingString = highlight(sqlPredictHousingString, {
  html: true
})




const postgressTrainAirlineString = queries.Train.Postgress.Airline
const highlightedpostgressTrainAirlineString = highlight(postgressTrainAirlineString, {
  html: true
})

const postgressTrainCarString = queries.Train.Postgress.Car
const highlightedpostgressTrainCarString = highlight(postgressTrainCarString, {
  html: true
})

const postgressTrainTimeseriesString = queries.Train.Postgress.Timeseries
const highlightedpostgressTrainTimeseriesString = highlight(postgressTrainTimeseriesString, {
  html: true
})

const postgressTrainSalesString = queries.Train.Postgress.Sales
const highlightedpostgressTrainSalesString = highlight(postgressTrainSalesString, {
  html: true
})

const postgressTrainBankString = queries.Train.Postgress.Bank
const highlightedpostgressTrainBankString = highlight(postgressTrainBankString, {
  html: true
})

const postgressTrainHousingString = queries.Train.Postgress.Housing
const highlightedpostgressTrainHousingString = highlight(postgressTrainHousingString, {
  html: true
})


const postgressPredictAirlineString = queries.Predict.Postgress.Airline
const highlightedpostgressPredictAirlineString = highlight(postgressPredictAirlineString, {
  html: true
})

const postgressPredictCarString = queries.Predict.Postgress.Car
const highlightedpostgressPredictCarString = highlight(postgressPredictCarString, {
  html: true
})

const postgressPredictTimeseriesString = queries.Predict.Postgress.Timeseries
const highlightedpostgressPredictTimeseriesString = highlight(postgressPredictTimeseriesString, {
  html: true
})

const postgressPredictSalesString = queries.Predict.Postgress.Sales
const highlightedpostgressPredictSalesString = highlight(postgressPredictSalesString, {
  html: true
})

const postgressPredictBankString = queries.Predict.Postgress.Bank
const highlightedpostgressPredictBankString = highlight(postgressPredictBankString, {
  html: true
})

const postgressPredictHousingString = queries.Predict.Postgress.Housing
const highlightedpostgressPredictHousingString = highlight(postgressPredictHousingString, {
  html: true
})


const MariaDBTrainAirlineString = queries.Train.MariaDB.Airline
const highlightedMariaDBTrainAirlineString = highlight(MariaDBTrainAirlineString, {
  html: true
})

const MariaDBTrainCarString = queries.Train.MariaDB.Car
const highlightedMariaDBTrainCarString = highlight(MariaDBTrainCarString, {
  html: true
})

const MariaDBTrainTimeseriesString = queries.Train.MariaDB.Timeseries
const highlightedMariaDBTrainTimeseriesString = highlight(MariaDBTrainTimeseriesString, {
  html: true
})

const MariaDBTrainSalesString = queries.Train.MariaDB.Sales
const highlightedMariaDBTrainSalesString = highlight(MariaDBTrainSalesString, {
  html: true
})

const MariaDBTrainBankString = queries.Train.MariaDB.Bank
const highlightedMariaDBTrainBankString = highlight(MariaDBTrainBankString, {
  html: true
})

const MariaDBTrainHousingString = queries.Train.MariaDB.Housing
const highlightedMariaDBTrainHousingString = highlight(MariaDBTrainHousingString, {
  html: true
})


const MariaDBPredictAirlineString = queries.Predict.MariaDB.Airline
const highlightedMariaDBPredictAirlineString = highlight(MariaDBPredictAirlineString, {
  html: true
})

const MariaDBPredictCarString = queries.Predict.MariaDB.Car
const highlightedMariaDBPredictCarString = highlight(MariaDBPredictCarString, {
  html: true
})

const MariaDBPredictTimeseriesString = queries.Predict.MariaDB.Timeseries
const highlightedMariaDBPredictTimeseriesString = highlight(MariaDBPredictTimeseriesString, {
  html: true
})

const MariaDBPredictSalesString = queries.Predict.MariaDB.Sales
const highlightedMariaDBPredictSalesString = highlight(MariaDBPredictSalesString, {
  html: true
})

const MariaDBPredictBankString = queries.Predict.MariaDB.Bank
const highlightedMariaDBPredictBankString = highlight(MariaDBPredictBankString, {
  html: true
})

const MariaDBPredictHousingString = queries.Predict.MariaDB.Housing
const highlightedMariaDBPredictHousingString = highlight(MariaDBPredictHousingString, {
  html: true
})


const ClickHouseTrainAirlineString = queries.Train.ClickHouse.Airline
const highlightedClickHouseTrainAirlineString = highlight(ClickHouseTrainAirlineString, {
  html: true
})

const ClickHouseTrainCarString = queries.Train.ClickHouse.Car
const highlightedClickHouseTrainCarString = highlight(ClickHouseTrainCarString, {
  html: true
})

const ClickHouseTrainTimeseriesString = queries.Train.ClickHouse.Timeseries
const highlightedClickHouseTrainTimeseriesString = highlight(ClickHouseTrainTimeseriesString, {
  html: true
})

const ClickHouseTrainSalesString = queries.Train.ClickHouse.Sales
const highlightedClickHouseTrainSalesString = highlight(ClickHouseTrainSalesString, {
  html: true
})

const ClickHouseTrainBankString = queries.Train.ClickHouse.Bank
const highlightedClickHouseTrainBankString = highlight(ClickHouseTrainBankString, {
  html: true
})

const ClickHouseTrainHousingString = queries.Train.ClickHouse.Housing
const highlightedClickHouseTrainHousingString = highlight(ClickHouseTrainHousingString, {
  html: true
})


const ClickHousePredictAirlineString = queries.Predict.ClickHouse.Airline
const highlightedClickHousePredictAirlineString = highlight(ClickHousePredictAirlineString, {
  html: true
})

const ClickHousePredictCarString = queries.Predict.ClickHouse.Car
const highlightedClickHousePredictCarString = highlight(ClickHousePredictCarString, {
  html: true
})

const ClickHousePredictTimeseriesString = queries.Predict.ClickHouse.Timeseries
const highlightedClickHousePredictTimeseriesString = highlight(ClickHousePredictTimeseriesString, {
  html: true
})

const ClickHousePredictSalesString = queries.Predict.ClickHouse.Sales
const highlightedClickHousePredictSalesString = highlight(ClickHousePredictSalesString, {
  html: true
})

const ClickHousePredictBankString = queries.Predict.ClickHouse.Bank
const highlightedClickHousePredictBankString = highlight(ClickHousePredictBankString, {
  html: true
})

const ClickHousePredictHousingString = queries.Predict.ClickHouse.Housing
const highlightedClickHousePredictHousingString = highlight(ClickHousePredictHousingString, {
  html: true
})



const SQLServerTrainAirlineString = queries.Train.SQLServer.Airline
const highlightedSQLServerTrainAirlineString = highlight(SQLServerTrainAirlineString, {
  html: true
})

const SQLServerTrainCarString = queries.Train.SQLServer.Car
const highlightedSQLServerTrainCarString = highlight(SQLServerTrainCarString, {
  html: true
})

const SQLServerTrainTimeseriesString = queries.Train.SQLServer.Timeseries
const highlightedSQLServerTrainTimeseriesString = highlight(SQLServerTrainTimeseriesString, {
  html: true
})

const SQLServerTrainSalesString = queries.Train.SQLServer.Sales
const highlightedSQLServerTrainSalesString = highlight(SQLServerTrainSalesString, {
  html: true
})

const SQLServerTrainBankString = queries.Train.SQLServer.Bank
const highlightedSQLServerTrainBankString = highlight(SQLServerTrainBankString, {
  html: true
})

const SQLServerTrainHousingString = queries.Train.SQLServer.Housing
const highlightedSQLServerTrainHousingString = highlight(SQLServerTrainHousingString, {
  html: true
})


const SQLServerPredictAirlineString = queries.Predict.SQLServer.Airline
const highlightedSQLServerPredictAirlineString = highlight(SQLServerPredictAirlineString, {
  html: true
})

const SQLServerPredictCarString = queries.Predict.SQLServer.Car
const highlightedSQLServerPredictCarString = highlight(SQLServerPredictCarString, {
  html: true
})

const SQLServerPredictTimeseriesString = queries.Predict.SQLServer.Timeseries
const highlightedSQLServerPredictTimeseriesString = highlight(SQLServerPredictTimeseriesString, {
  html: true
})

const SQLServerPredictSalesString = queries.Predict.SQLServer.Sales
const highlightedSQLServerPredictSalesString = highlight(SQLServerPredictSalesString, {
  html: true
})

const SQLServerPredictBankString = queries.Predict.SQLServer.Bank
const highlightedSQLServerPredictBankString = highlight(SQLServerPredictBankString, {
  html: true
})

const SQLServerPredictHousingString = queries.Predict.SQLServer.Housing
const highlightedSQLServerPredictHousingString = highlight(SQLServerPredictHousingString, {
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
            <button className={database === 'SQLServer' ? "btn-sel" : "btn"} onClick={() => setDataBase('SQLServer')} >SQL Server</button>
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

                {database === 'Mysql' && method === 'Train' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainCarString }}>
                </code>}

                {database === 'Mysql' && method === 'Train' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainTimeseriesString }}>
                </code>}

                {database === 'Mysql' && method === 'Train' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainSalesString }}>
                </code>}

                {database === 'Mysql' && method === 'Train' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainBankString }}>
                </code>}

                {database === 'Mysql' && method === 'Train' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlTrainHousingString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictAirlineString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictCarString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictTimeseriesString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictSalesString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictBankString }}>
                </code>}

                {database === 'Mysql' && method === 'Predict' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedsqlPredictHousingString }}>
                </code>}




                {database === 'Postgress' && method === 'Train' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainAirlineString }}>
                </code>}

                {database === 'Postgress' && method === 'Train' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainCarString }}>
                </code>}

                {database === 'Postgress' && method === 'Train' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainTimeseriesString }}>
                </code>}

                {database === 'Postgress' && method === 'Train' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainSalesString }}>
                </code>}

                {database === 'Postgress' && method === 'Train' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainBankString }}>
                </code>}

                {database === 'Postgress' && method === 'Train' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressTrainHousingString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictAirlineString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictCarString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictTimeseriesString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictSalesString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictBankString }}>
                </code>}

                {database === 'Postgress' && method === 'Predict' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedpostgressPredictHousingString }}>
                </code>}



                {database === 'MariaDB' && method === 'Train' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainAirlineString }}>
                </code>}

                {database === 'MariaDB' && method === 'Train' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainCarString }}>
                </code>}

                {database === 'MariaDB' && method === 'Train' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainTimeseriesString }}>
                </code>}

                {database === 'MariaDB' && method === 'Train' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainSalesString }}>
                </code>}

                {database === 'MariaDB' && method === 'Train' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainBankString }}>
                </code>}

                {database === 'MariaDB' && method === 'Train' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBTrainHousingString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictAirlineString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictCarString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictTimeseriesString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictSalesString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictBankString }}>
                </code>}

                {database === 'MariaDB' && method === 'Predict' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedMariaDBPredictHousingString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainAirlineString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainCarString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainTimeseriesString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainSalesString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainBankString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Train' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHouseTrainHousingString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictAirlineString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictCarString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictTimeseriesString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictSalesString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictBankString }}>
                </code>}

                {database === 'ClickHouse' && method === 'Predict' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedClickHousePredictHousingString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainAirlineString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainCarString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainTimeseriesString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainSalesString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainBankString }}>
                </code>}

                {database === 'SQLServer' && method === 'Train' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerTrainHousingString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Airline' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictAirlineString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Car' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictCarString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Timeseries' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictTimeseriesString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Sales' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictSalesString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Bank' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictBankString }}>
                </code>}

                {database === 'SQLServer' && method === 'Predict' && dataset === 'Housing' &&
                <code  dangerouslySetInnerHTML={{ __html: highlightedSQLServerPredictHousingString }}>
                </code>}



              </div>
            </div>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Airline' ? "btn-sel" : "btn"} onClick={() => setDataset('Airline')} >Airline</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Car' ? "btn-sel" : "btn"} onClick={() => setDataset('Car')} >Car</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Timeseries' ? "btn-sel" : "btn"} onClick={() => setDataset('Timeseries')} >Timeseries</button>
          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Sales' ? "btn-sel" : "btn"} onClick={() => setDataset('Sales')} >Sales</button>

          </div>
          <div className="col-span-1 text-center">
            <button className={dataset === 'Bank' ? "btn-sel" : "btn"} onClick={() => setDataset('Bank')} >Bank</button>

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

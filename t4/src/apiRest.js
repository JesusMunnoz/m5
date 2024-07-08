const app = require('./app');


app.listen(app.get("port"), function () {
  console.log("server listen on port " + app.get("port"))
})


/*
{
    "first_name": "Juan",
    "last_name": "Perez",
    "grupo_id": 1,
    "annoIngreso": 2022
}
*/
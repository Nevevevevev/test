
setInterval(function(){
    document.title = $("#title").text()
}, 10);
initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${f}` }).then(async SQL => {
  const res = await fetch('app.db');
  const buf = await res.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));

  const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table'");
  console.log("Tables:", tables[0]?.values.flat());

  // Optional: query first table
  if (tables[0]?.values[0]) {
    const tableName = tables[0].values[0][0];
    const rows = db.exec(`SELECT * FROM ${tableName}`);
    console.log(`Data from ${tableName}:`, rows[0]);
  }
});

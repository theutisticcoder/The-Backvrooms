const { exec } = require("child_process");
exec("./The-Backvrooms", (error, stdout, stderr) => console.log(stdout));
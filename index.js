let hltb = require("howlongtobeat");
let hltbService = new hltb.HowLongToBeatService();

hltbService.search("Nioh").then((result) => console.log(result));

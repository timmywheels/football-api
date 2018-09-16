// import keys from '../../../config/keys';

// Player News
// var url = "https://api.fantasydata.net/v3/nfl/scores/JSON/NewsByPlayerID/4314";

// Season Standings
// var url = "https://api.fantasydata.net/v3/nfl/scores/JSON/Standings/2018";

// Team Stats by Season
// var url = "https://api.fantasydata.net/v3/nfl/scores/JSON/TeamSeasonStats/2018";

// Scores By Week
// var url = "https://api.fantasydata.net/v3/nfl/scores/JSON/ScoresByWeek/2018/1";

// Player Details By Player
// var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/Player/4314";

// Player Details By Team
// var url = "https://api.fantasydata.net/v3/nfl/stats/JSON/Players/NE";

// Player Game Stats by Player
// var url = "https://api.fantasydata.net/v3/nfl/projections/JSON/DfsSlatesByDate/2018-SEP-16";
//
// // Projected Player Game Stats by Week
var url = "https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByWeek/2018/2";









var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.setRequestHeader("X-Host-Override", "api.fantasydata.net");
xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "7aa1d4b6fb0848ad95638467095217f3");

xhr.onload = function() {
    var data = JSON.parse(this.response);

    console.log(data);

    // console.log(data.players)
    var QB = [], RB = [], WR = [], TE = [], K = [];


    var nfl = {

        team: {

            ARI: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {},
            },

            ATL: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            BAL:  {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            BUF: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            CAR: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            CHI: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            CIN:{
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            CLE: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            DAL: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            DEN: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            DET: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            GB: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            HOU: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            IND: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K:{}
            },

            JAX: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            KC: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            LAC: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            LAR: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            MIA: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            MIN: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            NE: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            NO: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            NYG: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            NYJ: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            OAK: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            PHI: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            PIT: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            SEA: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            SF: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            TB: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            TEN: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            },

            WAS: {
                QB: {},
                RB: {},
                WR: {},
                TE: {},
                K: {}
            }

        }
    };

    for (var i in nfl) {
        console.log('nfl:', nfl.team[i]);
        console.log('nfl.team[i]', nfl.team[i])
    }
    const { players } = data;


    for (var j in data) {



    }
    // console.log('NFL:', nfl);


    // for (var i in data.players) {
    //
    // 	if (data.players.teamAbbr === nfl.team[i])
    // 	{
    // 		console.log('data.players.teamAbbr', data.players.teamAbbr)
    // 		console.log('nfl.team[i]', nfl.team[i]);
    // 		// data.players.name
    // 	}
    //
    //
    // 	if (data.players[i].position === "QB") {
    // 		QB.push(data.players[i].name)
    //        // console.log("QB: ", data.players[i].name);
    // 	}
    // 	if (data.players[i].position === "RB") {
    // 		RB.push(data.players[i].name)
    //        // console.log("RB: ", data.players[i].name);
    // 	}
    // 	if (data.players[i].position === "WR") {
    // 		WR.push(data.players[i].name)
    //        // console.log("WR: ", data.players[i].name);
    // 	}
    // 	if (data.players[i].position === "TE") {
    // 		TE.push(data.players[i].name)
    //        // console.log("TE: ", data.players[i].name);
    // 	}
    // 	if (data.players[i].position === "K") {
    // 		K.push(data.players[i].name)
    //        // console.log("K: ", data.players[i].name);
    // 	}
    // }
    // 	console.log('QB:', QB);
    // 	console.log('RB:', RB);
    // 	console.log('WR:', WR);
    // 	console.log('TE:', TE);
    // 	console.log('K:', K);
};
xhr.send();

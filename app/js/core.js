var teams = {
    sk: {
        rank: 1,
        power: 968,
        players: ['fnx', 'FalleN', 'fer', 'coldzera', 'TACO'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    'virtus.pro': {
        rank: 2,
        power: 687,
        players: ['TaZ', 'NEO', 'pashaBiceps', 'Snax', 'byali'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    }
    g2: {
        rank: 3,
        power: 471,
        players: ['shox', 'RpK', 'SmithZz', 'ScreaM', 'bodyy'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    }
    navi: {
    	rank: 4,
    	power: 381,
    	players: ['Edward', 'GuardiaN', 'seized', 'flamie', 's1mple'],
    	totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    godsent: {
        rank: 5,
        power: 381,
        players: ['pronax', 'flusha', 'znajder', 'JW', 'KRIMZ'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    nip: {
        rank: 6,
        power: 315,
        players: ['f0rest', 'GeT_RiGhT', 'Xizt', 'friberg', 'pyth'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    liquid: {
        rank: 7,
        power: 312,
        players: ['Hiko', 'Pimp', 'nitr0', 'jdm64', 'EliGe'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    mousesports: {
        rank: 8,
        power: 296,
        players: ['chrisJ', 'NiKo', 'nex', 'Spiidi', 'denis'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    astralis: {
        rank: 9,
        power: 284,
        players: ['karrigan', 'Xypn9x', 'dupreeh', 'device', 'Kjaerbye'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    envyus: {
        rank: 10,
        power: 260,
        players: ['kennyS', 'NBK', 'apEX', 'Happy', 'DEVIL'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    immortals: {
        rank: 11,
        power: 203,
        players: ['zews', 'hen1', 'lucas', 'boltz', 'felps'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    cloud9: {
        rank: 12,
        power: 195,
        players: ['n0thing', 'Skadoodle', 'shroud', 'Slemmy', 'Stewie2K'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    flipsid3: {
        rank: 13,
        power: 188,
        players: ['markeloff', 'B1ad3', 'Shara', 'WorldEdit', 'wayLander'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    tsm: {
        rank: 14,
        power: 183,
        players: ['SEMPHIS', 'FNS', 'autimatic', 'SicK', 'Twistzz'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    gambit: {
        rank: 15,
        power: 165,
        players: ['AdreN', 'hooch', 'Dosia', 'mou', 'spaze'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    faze: {
        rank: 16,
        power: 160,
        players: ['allu', 'kioShiMa', 'aizy', 'rain', 'jkaem'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    dignitas: {
        rank: 17,
        power: 113,
        players: ['RUBINO', 'cajunb', 'MSL', 'Magiskb0Y', 'k0nfig'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    optic: {
        rank: 18,
        power: 98,
        players: ['RUSH', 'mixwell', 'stanislaw', 'NAF', 'daps'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    'team x': {
        rank: 19,
        power: 91,
        players: ['Friis', 'MODDII', 'Snappi', 'gla1ve', 'valde'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    },
    epsilon: {
        rank: 20,
        power: 89,
        players: ['xelos', 'draken', 'disco doplan', 'freddieb', 'REZ'],
        totalMatchs: 0,
        totalWins: 0,
        totalLoses: 0
    }
};

function getRandomInt(min, max) {
    output = Math.floor(Math.random() * (max - min + 1) + min);
    return output;
};

window.setInterval(function(){

}, 1000);

for (var team in teams) {
	$('#teams-table').append('<tr>' + '<th>#' + teams[team].rank + '</th>' + '<th>' + team + '</th>' + '<th>' + teams[team].power + '</th>' +'</tr>');
};

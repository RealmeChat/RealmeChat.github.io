if(window.ICONS === undefined){
	ICONS = {};
	ICONS.sets = {};
	ICONS.byId = [
		"tree",   							//0
		"mens_restroom",
		"womens_restroom",
		"mens_and_womens_restroom",
		"angry_emoji",
		"flirty_emoji",						//5
		"goofy_emoji",
		"sad_emoji",
		"shark",
		"donkey",
		"pig",								//10
		"bench",
		"message_in_a_bottle",
		"duck",
		"sound_system",
		"anonymous_mask",					//15
		"book_place",
		"zen",
		"smoking_area",
		"live_music",
		"money",							//20
		"rock_tower",
		"tech_spot",
		"coffee_spot",
		"booze_spot",
		"controlled_fire",					//25
		"car"
	];

	ICONS.createDefaultIconAppendix = function(extension) {
		extension = extension || "png";
		extension = "."+extension;

		var out = {};
		for (var id in ICONS.byId) {
			var name = ICONS.byId[id];
			out[id] = name+extension;
		}

		return out;
	}

	ICONS.getFrom = function(id, setName) {
		if(ICONS.sets[setName]) {
			var iconName = ICONS.byId[id];
			return ICONS.sets[setName].appendix[iconName];
		}
	}
}




var set = ICONS.sets["testing"];
if(set === undefined) {
	set = ICONS.sets["testing"] = {};
	set.appendix = ICONS.createDefaultIconAppendix();

	var special_cases = {
		"tree" : "pixel_tree.png",							
		"mens_restroom" : "mens_room.png",
		"womens_restroom" : "mens_room.png",
		"mens_and_womens_restroom" : "mens_or_womens_room.jpg",
		"zen" : "meditation_space.jpg",
		"smoking_area" : "smoking.png",							
		"rock_tower" : "nature_spot.jpg",
		"tech_spot" : "tech.png",
		"coffee_spot" : "coffee.png",
		"booze_spot" : "booze.png"
	}

	for (var sp in special_cases) {
		set.appendix[sp] = special_cases[sp];
	}
}
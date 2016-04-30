

PINE("[ellipsize]", PINE.ops.POLISH, function(initMe) {
	var justText = initMe.innerHTML.replace(/<.*?>/g, '');

	var noElipses = true;
	var count = 0;
	while(noElipses && justText.length && initMe.offsetHeight < initMe.scrollHeight) {
		justText = justText.replace(/\s+[^\s]+?$/, '');

		initMe.innerHTML = justText;

		if(initMe.offsetHeight >= initMe.scrollHeight) {
			noElipses = false;
			justText += "...";
			initMe.innerHTML = justText;
		}
		// console.log(justText);

		count++;
		if(count > 100) break;
	}
});
var predatorsInZoo = [];
var lion = {
	name: 'lion',
	hungryVoice:'rrrrrrrrr',
	fullVoice: 'uruuururu'
};
predatorsInZoo[0] = lion;
var cat = {
	name: 'cat',
	hungryVoice:'ffffffff',
	fullVoice: 'meow'
};
predatorsInZoo[1] = cat;
var dog = {
	name: 'dog',
	hungryVoice:'auuuu',
	fullVoice: 'wof-wof'
};
predatorsInZoo[2] = dog;
var fox = {
	name: 'fox',
	hungryVoice:'yow',
	fullVoice: 'yow-wow-wow'
};
predatorsInZoo[3] = fox;
var herbivoresInZoo = [];
var cock = {
	name: 'cock',
	hungryVoice:'kukareku',
	fullVoice: 'kokokokokoko'
};
herbivoresInZoo[0] = cock;
var cow = {
	name: 'cow',
	hungryVoice: 'rrrrrrrrrruuuuumummuuuu',
	fullVoice: 'muuuu'
};
herbivoresInZoo[1] = cow;
var horse = {
	name: 'horse',
	hungryVoice: 'frrrr',
	fullVoice: 'igogogo',
};
herbivoresInZoo[2] = horse;

userChoiseToFeedPredators = confirm('We have several animals in our Zoo. do you want to feed predators?');
if (userChoiseToFeedPredators === true) {
	userChoiceToSpeakFull = confirm('Do you want to talk to them?');
	if (userChoiceToSpeakFull === true) {
		predatorsInZoo.forEach(function(item, i, predatorsInZoo) {
  			alert(item.fullVoice);
		});
	}
	else alert('so sad!');
}
else predatorsInZoo.forEach(function(item, i, predatorsInZoo) {
  		alert(item.hungryVoice);
	});


userChoiseToFeedHerbivores = confirm('We have several animals in our Zoo. do you want to feed herbivores?');
if (userChoiseToFeedHerbivores === true) {
	userChoiceToSpeak = confirm('Do you want to talk to them?');
	if (userChoiceToSpeak === true) {
		herbivoresInZoo.forEach(function(item, i, herbivoresInZoo) {
  			alert(item.fullVoice);
		});
	}
	else alert('so sad!');
}
else herbivoresInZoo.forEach(function(item, i, herbivoresInZoo) {
  		alert(item.hungryVoice);
	});


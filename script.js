const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



//will trigger based on event listener
//return a list called results, will filter fruit list based on user input in search box
//if string in user input appears anywhere in fruit name, it should be added to the list
//it should be case insensitive
function search(str) {
	let results = [];
	let lowerCase = str.toLowerCase();
	// TODO
	//will return array with fruits that contain str anywhere in the whole name
	results = fruit.filter(string => string.toLowerCase().includes(lowerCase));

	return results;
}

//will display the result list when "keyup" event is triggered
function searchHandler(e) {
	// TODO
	let str = e.target.value;
	console.log(str);

}

//take list created in search() to make drop down list in search bar
function showSuggestions(results, inputVal) {
    //let resultsList = search(inputVal);

	// TODO
}

//
function useSuggestion(e) {
	// TODO
}

//Event listener for key strokes
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
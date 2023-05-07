const searchContainer = document.querySelector('.search-container');
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
	//will initialize key that is pressed by user to str, then use search function to return a suggestion result list
	let str = e.target.value;
	let results = search(str);

	//will check if user input is true "containing any string" and will add show class to display results
	if(input.value){
		searchContainer.classList.add('show');
	showSuggestions(results);
	} else {//else if no user input "empty" will hide results from displaying
		searchContainer.classList.remove('show');
	}
	
	
 }

//take list created in search() to make drop down list in search bar
function showSuggestions(results) {
    // TODO
	//creating new arry with map method and making a html list element with the results
	let suggestionItems = results.map(item => `<li>${item}</li>`).join("");
	suggestions.innerHTML = suggestionItems;

	//adding class of show to display results
	searchContainer.classList.add('show');
}

//populate search bar with the suggestion
function useSuggestion(e) {
	// TODO
	//clicking a list item will trigger event listener, the clicked item will be initialized to str, then added to input as the value. 
	//after input.value is updated with clicked fruit, removing show class to hide drop down list
	let str = e.target.innerHTML;
	input.value = str;
	searchContainer.classList.remove('show');
}

//Event listener for key strokes
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
	

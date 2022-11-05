const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
 

const Listner = (e) =>{
    e.preventDefault();
    const value = e.target.value;
    try {
      if ( (!+value)) {
        throw new ReferenceError('is not number')
      }
      if (value < 5) {
        throw new SyntaxError('value is lower then 5')
      }
      if (value > 10) {
        throw new SyntaxError('value is higher then 10')
      }  
    }
    catch (err) {
      if (err.name=="SyntaxError"){
        console.log(err.message);
        resultsContainer.innerHTML = `<div class="response-container"> ${err.message} </div>`
      }
      else{
        throw err;}
    }
};

try {
  searchInput.addEventListener('click', Listner);
  }
catch(e) {
  if (e.name=="ReferenceError"){
    console.log(e.message);
    resultsContainer.innerHTML = `<div class="response-container"> ${e.message} </div>`
  }
}

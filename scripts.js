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
        throw new ReferenceError('is not number')}
    }
};

const wrapperListener = (e) => {
  try {
    Listner(e)
  }
  catch (err){
    if (err.name=="ReferenceError"){
      resultsContainer.innerHTML = `<div class="response-container"> ${err.message} </div>`
    }
  }
}


searchInput.addEventListener('click', wrapperListener);
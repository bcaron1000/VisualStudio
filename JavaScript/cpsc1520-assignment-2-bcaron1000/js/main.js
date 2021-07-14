let formInput = document.getElementById("filter");
//let tags = document.querySelectorAll(".tags");;
let images = document.querySelectorAll(".thumb-display")
let thumbArray = Array.from(images);
let resetButton = document.querySelector('.reset');

const imageFilter = function(){
  for(i = 0;i < thumbArray.length; i++){
    let image = thumbArray[i];
    const tags = image.children[1].innerHTML;
    if (!tags.includes(formInput.value)) {
      image.classList.add('hidden');
    }
    else {
      image.classList.remove('hidden');
    }
  };
  if(formInput.value == "") {
    resetButton.classList.add('hidden');
  }
  else {
    resetButton.classList.remove('hidden');
  };
};

const resetClicked = function() {
  formInput.value = "";
  for(i = 0;i < thumbArray.length; i++){
    let image = thumbArray[i];
    image.classList.remove('hidden');
  };
  resetButton.classList.add('hidden');
};

formInput.addEventListener("input", imageFilter);
resetButton.addEventListener("click", resetClicked);

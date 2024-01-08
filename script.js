const questionTitleEl = document.querySelectorAll(".question-title");

  questionTitleEl.forEach((title)=> {
	  title.addEventListener("click", ()=>{
		  questionTitleEl.forEach((el)=> {
			  if(el !== title) {
				el.classList.remove("active");
				el.nextElementSibling.classList.remove("active");
				el.querySelector(".plus-icon").classList.remove("hidden");
				el.querySelector(".minus-icon").classList.add("hidden");
			  }
		  })
		  title.classList.toggle("active");
		title.nextElementSibling.classList.toggle("active");
		title.querySelector(".plus-icon").classList.toggle("hidden");
				title.querySelector(".minus-icon").classList.toggle("hidden");
	  })
  })



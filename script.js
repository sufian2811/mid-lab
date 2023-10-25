var faqButtons = document.querySelectorAll('.faq-toggle');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    var faq = button.parentElement;
    faq.classList.toggle('active');

    var closeIcon = button.querySelector('.fa-times');
    var downIcon = button.querySelector('.fa-chevron-down');

    closeIcon.addEventListener('click', ()=> {
        faq.style.display = 'none';
    })
    closeIcon.classList.toggle('hidden');
    downIcon.classList.toggle('hidden');
  });
});

var addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', () => {
    var questionInput = document.getElementById('question');
    var answerInput = document.getElementById('answer');

    var question = questionInput.value;
    var answer = answerInput.value;

  if (question && answer) {
    const newFaq = document.createElement('div');
    newFaq.classList.add('faq', 'active');

    newFaq.innerHTML = `
      <h3 class="faq-title">${question}</h3>
      <p class="faq-text">${answer}</p>
      <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
      </button>
    `;

    var faqContainer = document.querySelector('.faq-container');
    faqContainer.appendChild(newFaq);

    questionInput.value = '';
    answerInput.value = '';
  }
});

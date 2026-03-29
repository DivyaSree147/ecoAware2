// Quiz Functionality
const quizForm = document.getElementById("eco-quiz");
const resultText = document.getElementById("quiz-result");

if (quizForm && resultText) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 2;

    const answerOne = quizForm.elements.q1.value;
    const answerTwo = quizForm.elements.q2.value;

    if (answerOne === "correct") score += 1;
    if (answerTwo === "correct") score += 1;

    // Personalized message based on score
    let message = "";
    if (score === totalQuestions) {
      message = `🌟 Perfect Score! ${score} out of ${totalQuestions}. You're an eco-champion! Keep spreading awareness.`;
    } else if (score === 1) {
      message = `✅ Good effort! ${score} out of ${totalQuestions}. Learn more and try again!`;
    } else {
      message = `📚 Great start! ${score} out of ${totalQuestions}. Check our resources to learn more about eco-friendly living.`;
    }

    resultText.textContent = message;
    resultText.style.animation = "slideIn 0.5s ease-out";
    alert(message);
  });
}

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add animation classes on page load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.topic-card, .gallery-card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
  });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add ripple effect */
  .link-btn::after,
  .cta-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
`;
document.head.appendChild(style);

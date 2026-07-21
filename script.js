// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    faqItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});

// Hero Button Animation
document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });

});

// Reveal Animation
const revealElements = document.querySelectorAll(
".card,.token-box,.step,.faq-item"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

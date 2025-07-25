const darkToggle = document.getElementById("darkModeToggle");
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Form submission
        /*document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const successMessage = document.getElementById('form-success');
            successMessage.classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        });*/

        // Scroll animation
        function checkScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        // Check on initial load
        document.addEventListener('DOMContentLoaded', checkScroll);
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);

        // Animate skill bars on about section visibility
        function animateSkillBars() {
            const aboutSection = document.getElementById('about');
            const aboutSectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (aboutSectionTop < windowHeight - 100) {
                document.querySelectorAll('.skill-progress').forEach(bar => {
                    // This will trigger the CSS transition
                    bar.style.width = bar.style.width;
                });
                
                // Remove the event listener after animation
                window.removeEventListener('scroll', animateSkillBars);
            }
        }

        // Check on initial load
        document.addEventListener('DOMContentLoaded', animateSkillBars);
        
        // Check on scroll
        window.addEventListener('scroll', animateSkillBars);
    
 

 
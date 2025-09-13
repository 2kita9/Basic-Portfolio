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
         
        document.getElementById('contact-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            try {
                // 1️⃣ Send to Web3Forms manually
                const web3Response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({
                    access_key: "930bd91d-f060-4e70-82b0-cf4bc96d9e5d", 
                    name,
                    email,
                    subject,
                    message
                })
                });

                const web3Result = await web3Response.json();
                if (!web3Result.success) {
                console.error("❌ Web3Forms error:", web3Result.message);
                alert("Failed to send email!");
                return;
                }

                // 2️⃣ Post to Firebase Realtime Database
                const res = await fetch(
                "https://portfolio-api-4dcd7-default-rtdb.firebaseio.com/data.json",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                    createdAt: new Date().toISOString()
                    })
                }
                );

                if (res.ok) {
                document.getElementById("form-success").classList.remove("hidden");
                document.getElementById("contact-form").reset();
                } else {
                alert("Failed to save data to Firebase");
                }

            } catch (err) {
                console.error("Error occurred:", err);
                alert("Something went wrong. Please try again.");
            }





            
            
            // Simulate form submission
            const successMessage = document.getElementById('form-success');
            successMessage.classList.remove('hidden');
            
            // Reset form
            //this.reset();
            
            // Hide success message after 3 seconds
            //setTimeout(() => {
              //  successMessage.classList.add('hidden');
            //}, 3000);
        });

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
    
 

 

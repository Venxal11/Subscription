document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");

    // Smooth scrolling for links (if there are any internal anchor links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // Subscription button logic for each item
    const subscriptionButtons = document.querySelectorAll(".subscription-options button");

    subscriptionButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove the "active" class from all buttons within the same subscription-options group
            const siblingButtons = button.parentElement.querySelectorAll("button");
            siblingButtons.forEach(btn => btn.classList.remove("active"));

            // Add the "active" class to the clicked button
            button.classList.add("active");

            // Extract the frequency and item details
            const frequency = button.dataset.frequency;
            const itemName = button.closest(".item-card").querySelector("h4").textContent;

            // Display the selected subscription option in the console
            console.log(`Selected ${frequency} subscription for ${itemName}`);
        });
    });

    // Contact Form Handling (with dynamic feedback)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simulating success or error response
            const success = true; // Replace this with actual server-side response handling

            const feedback = document.getElementById("form-feedback");
            if (feedback) {
                if (success) {
                    feedback.textContent = "Bedankt voor je bericht! We nemen spoedig contact met je op.";
                    feedback.className = "success";
                } else {
                    feedback.textContent = "Oeps! Er ging iets mis. Probeer het opnieuw.";
                    feedback.className = "error";
                }

                // Show feedback and hide after 5 seconds
                feedback.style.display = "block";
                setTimeout(() => {
                    feedback.style.display = "none";
                }, 5000);
            }

            // Reset form if successful
            if (success) {
                contactForm.reset();
            }
        });
    }

    console.log("JavaScript setup complete.");
});

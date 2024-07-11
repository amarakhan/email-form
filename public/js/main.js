document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const icon = document.getElementById("sendIcon");

    submitBtn.addEventListener("mouseover", function () {
        icon.classList.add("shake-effect");
    });

    submitBtn.addEventListener("mouseout", function () {
        icon.classList.remove("shake-effect");
    });

    document
        .getElementById("emailForm")
        .addEventListener("submit", handleFormSubmit);
});

async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    showLoading();

    try {
        // Call the API to send the email
        // const response = await fetch("/api/send-email", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });

        // hideLoading();

        // if (response.ok) {
            showSuccessMessage();
        // } else {
        //     showErrorMessage();
        // }
    } catch (error) {
        console.error("Error:", error);
        showErrorMessage();
    } finally {
        // reset form
        document.getElementById("emailForm").reset();
    }
}

function showSuccessMessage() {
    const successDiv = document.getElementById("success");
    successDiv.classList.add("visible");
    successDiv.classList.remove("hidden");
    setTimeout(() => {
        successDiv.classList.add("hidden");
        successDiv.classList.remove("visible");
    }, 4000);
}

function showErrorMessage() {
    const errorDiv = document.getElementById("error");
    errorDiv.classList.add("visible");
    errorDiv.classList.remove("hidden");
    setTimeout(() => {
        errorDiv.classList.add("hidden");
        errorDiv.classList.remove("visible");
    }, 4000);
}

function showLoading() {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.classList.remove("hidden");
    loadingDiv.classList.add("visible");
}

function hideLoading() {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.classList.remove("visible");
    loadingDiv.classList.add("hidden");
}

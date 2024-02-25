const Checkout = (() => {
  const nameInput = document.querySelector(".name-input");
  const emailInput = document.querySelector(".email-input");
  const phoneInput = document.querySelector(".phone-input");
  const cylceInput = document.querySelector(".cycle-input");

  const nextStepButton = document.getElementById("next-step-button");
  const goBackButton = document.getElementById("go-back-button");

  const stepContents = document.querySelectorAll(".step-content");

  const planDisplays = document.querySelectorAll(".plan-text");

  const planInputs = document.querySelectorAll(".plan-input");
  const addOnInputs = document.querySelectorAll(".add-on-input");
  const addOnDisplay = document.querySelectorAll(".add-on-text");

  let name;
  let email;
  let phone;
  let annual;

  let plans = [
    {
      index: 0,
      id: "arcade-display",
      price: 9,
    },
    {
      index: 1,
      id: "advanced-display",
      price: 12,
    },
    {
      index: 2,
      id: "pro-display",
      price: 15,
    },
  ];

  let plan;

  let addOns = {
    onlineService: {
      id: "online-service-display",
      price: 2,
    },
    largerStorage: {
      id: "larger-storage-display",
      price: 2,
    },
    customProfile: {
      id: "custom-profile-display",
      price: 2,
    },
  };

  let step = 1;

  const handleNextStep = () => {
    //form validation
    name = nameInput.value;
    email = emailInput.value;
    phone = phoneInput.value;

    clearDisplay();
    step++;
    loadDisplay(step);
    logResults();
    console.log(logResults());
  };

  const handleGoBack = () => {
    name = nameInput.value;
    email = emailInput.value;
    phone = phoneInput.value;

    clearDisplay();
    step--;
    loadDisplay(step);
  };

  const clearDisplay = () => {
    stepContents.forEach((stepContent) => {
      stepContent.style.display = "none";
    });
  };

  const preventMultiSelect = (arr, target) => {
    arr.forEach((item) => {
      if (item.checked == true) {
        item.checked = false;
        target.checked = true;
      }
    });
  };

  planInputs.forEach((planInput) => {
    planInput.addEventListener("click", (e) => {
      preventMultiSelect(planInputs, e.target);
    });
  });

  const loadDisplay = (int) => {
    if (int == 1) {
      stepContents[0].style.display = "block";
      goBackButton.style.display = "none";
    } else if (int == 2) {
      stepContents[1].style.display = "block";
      goBackButton.style.display = "block";
    } else if (int == 3) {
      stepContents[2].style.display = "block";
    } else if (int == 4) {
      stepContents[3].style.display = "block";
      planDisplays[logResults().planIndex].style.display = "block";
      for (i in logResults().addOnIndex) {
        addOnDisplay[i].style.display = "block";
      }
    } else if (int == 5) {
      stepContents[4].style.display = "block";
      nextStepButton.style.display = "none";
      goBackButton.style.display = "none";
    }
  };

  const logResults = () => {
    name = nameInput.value;
    email = emailInput.value;
    phone = phoneInput.value;
    let planIndex;
    let addOnIndex = [];

    for (let i = 0; i < planInputs.length; i++) {
      planInputs[i].checked ? (planIndex = i) : null;
    }

    for (let i = 0; i < addOnInputs.length; i++) {
      addOnInputs[i].checked ? addOnIndex.push(i) : null;
    }

    cylceInput.checked ? (annual = true) : (annual = false);
    return {
      name,
      email,
      phone,
      planIndex,
      annual,
      addOnIndex,
    };
  };

  nextStepButton.addEventListener("click", (e) => {
    handleNextStep();
  });

  goBackButton.addEventListener("click", (e) => {
    handleGoBack();
  });

  loadDisplay(step);

  return {
    name: "michael",
    email: "mnyland@gmail.com",
    phone: "917-617-9668",
  };
})();

const Customer = (name, email, phone, addOns, plan) => {
  name;
  email;
  phone;
  addOns;
  plan;
};

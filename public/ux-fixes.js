(() => {
  const STORAGE_KEY = "ir-guided-review";

  const readChecked = (root, name) =>
    root.querySelector(`input[name='${name}']:checked`)?.value || "";

  const readCheckedMany = (root, name) =>
    Array.from(root.querySelectorAll(`input[name='${name}']:checked`)).map(
      (input) => input.value,
    );

  const homeForm = document.querySelector("[data-intake-form]");
  const guidedLink = document.querySelector("[data-guided-review-link]");

  if (homeForm && guidedLink) {
    guidedLink.addEventListener("click", () => {
      const payload = {
        goal: readChecked(homeForm, "goal"),
        situation: readChecked(homeForm, "situation"),
        count: readChecked(homeForm, "count"),
        bureaus: readCheckedMany(homeForm, "bureau"),
        reports: readChecked(homeForm, "reports"),
      };

      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {}
    });
  }

  if (window.location.pathname !== "/free-inquiry-review/") return;

  let guided = null;
  try {
    guided = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    guided = null;
  }
  if (!guided) return;

  const form = document.querySelector("[data-review-form]");
  if (!form) return;

  const map = {
    goal: {
      "Apply for a home": "A home loan",
      "Apply for a vehicle": "A vehicle loan",
      "Qualify for business funding": "Business financing",
      "Apply for credit cards": "Credit cards or other personal credit",
      "Address identity theft": "Addressing possible identity theft",
      "Clean up my credit profile": "Improving my overall credit profile",
    },
    situation: {
      "A dealership sent my credit to multiple lenders":
        "A dealership sent my application to multiple lenders",
      "I did not authorize the inquiry": "I did not authorize the inquiry",
      "I was told it would be a soft pull": "I was told it would be a soft pull",
      "I do not recognize the company": "I do not recognize the company",
      "The inquiry is duplicated": "The inquiry appears to be a duplicate",
      "The inquiry came from identity theft": "I may be dealing with identity theft",
      "The inquiry belongs to someone else": "The inquiry belongs to someone else",
      "I authorized it but want it removed": "I authorized it but want it reviewed",
    },
    count: {
      "1 to 10": "1–10",
      "11 to 30": "11–30",
      "31 or more": "31 or more",
      "I am not sure": "I am not sure",
    },
    reports: {
      Yes: "Yes",
      No: "No",
      "I need help getting them": "I need help obtaining them",
    },
  };

  const selectValue = (name, value) => {
    if (!value) return false;
    const field = Array.from(form.querySelectorAll(`input[name='${name}']`)).find(
      (input) => input.value === value,
    );
    if (!field) return false;
    field.checked = true;
    return true;
  };

  const goalSet = selectValue("entry.1481812974", map.goal[guided.goal]);
  const situationSet = selectValue(
    "entry.1677473071",
    map.situation[guided.situation],
  );
  const countSet = selectValue("entry.1354254818", map.count[guided.count]);
  const reportsSet = selectValue(
    "entry.1594186053",
    map.reports[guided.reports],
  );

  let bureauSet = false;
  if (Array.isArray(guided.bureaus)) {
    guided.bureaus.forEach((bureau) => {
      bureauSet = selectValue("entry.766411755", bureau) || bureauSet;
    });
  }

  const guidedComplete =
    goalSet && situationSet && countSet && bureauSet && reportsSet;
  if (!guidedComplete) return;

  document.documentElement.classList.add("guided-review-prefilled");

  const next = form.querySelector("[data-review-next]");
  const back = form.querySelector("[data-review-back]");
  const progress = form.querySelector("[data-review-progress]");
  const stage = form.querySelector("[data-review-stage]");

  const activeStep = () =>
    Array.from(form.querySelectorAll("[data-review-step]")).findIndex(
      (step) => !step.hidden,
    );

  const rewriteProgress = () => {
    const step = activeStep();
    if (step === 0) {
      if (progress) progress.textContent = "Step 1 of 2";
      if (stage) stage.textContent = "Contact";
    } else if (step === 3) {
      if (progress) progress.textContent = "Step 2 of 2";
      if (stage) stage.textContent = "Final details";
    }
  };

  const observer = new MutationObserver(rewriteProgress);
  form.querySelectorAll("[data-review-step]").forEach((step) =>
    observer.observe(step, { attributes: true, attributeFilter: ["hidden"] }),
  );
  rewriteProgress();

  next?.addEventListener(
    "click",
    () => {
      if (activeStep() !== 0) return;
      window.setTimeout(() => {
        if (activeStep() === 1) next.click();
        window.setTimeout(() => {
          if (activeStep() === 2) next.click();
        }, 0);
      }, 0);
    },
    true,
  );

  back?.addEventListener(
    "click",
    () => {
      if (activeStep() !== 3) return;
      window.setTimeout(() => {
        if (activeStep() === 2) back.click();
        window.setTimeout(() => {
          if (activeStep() === 1) back.click();
        }, 0);
      }, 0);
    },
    true,
  );
})();

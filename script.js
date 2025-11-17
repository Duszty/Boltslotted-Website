// Helper: read query param
function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

/* Checkout page behavior */
document.addEventListener("DOMContentLoaded", ()=>{
  // If on checkout page, display selected plan
  const plan = getParam("plan");
  const planEl = document.getElementById("selected-plan");
  if(planEl){
    let text="Plan: ";
    if(plan==="1day") text+="1 Day — $9.99";
    else if(plan==="3day") text+="3 Days — $14.99";
    else if(plan==="month") text+="1 Month — $24.99";
    else text+="(choose on preview)";
    planEl.innerHTML = "Plan: <strong>"+text+"</strong>";
  }
});

// Demo purchase: generate a fake key, show result
function onDemoPurchase(e){
  e.preventDefault();
  const email = document.getElementById("buyer-email").value || "demo@example.com";
  const fakeKey = "BS-" + Math.random().toString(36).substring(2,10).toUpperCase();
  document.getElementById("demo-checkout-form").style.display="none";
  document.getElementById("purchase-result").style.display="block";
  document.getElementById("fake-key").innerText = fakeKey + " (demo)";
  // In production: send order to backend + payment provider
  return false;
}

// Demo sign-in
function demoSignIn(e){
  e.preventDefault();
  document.getElementById("login-form").style.display="none";
  document.getElementById("login-result").style.display="block";
  return false;
}

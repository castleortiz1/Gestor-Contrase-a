/*
async function savePassword() {
  const appName = document.getElementById("saveAppName").value;
  const email = document.getElementById("saveEmail").value;
  const password = document.getElementById("savePassword").value;
  const pin = document.getElementById("savePin").value;

  const response = await fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, password, pin }),
  });

  const result = await response.json();
  alert(result.message);
}

async function getPassword() {
  const appName = document.getElementById("getAppName").value;
  const email = document.getElementById("getEmail").value;
  const pin = document.getElementById("getPin").value;

  const response = await fetch("/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, pin }),
  });

  const result = await response.json();
  if (result.success) {
    document.getElementById(
      "retrievedPassword"
    ).textContent = `Contraseña: ${result.password}`;
  } else {
    alert(result.message);
  }
}
*/

/*
async function savePassword() {
  const appName = document.getElementById("saveAppName").value;
  const email = document.getElementById("saveEmail").value;
  const password = document.getElementById("savePasswordInput").value;
  const pin = document.getElementById("savePin").value;

  const response = await fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, password, pin }),
  });

  const result = await response.json();
  alert(result.message);
}

async function getPassword() {
  const appName = document.getElementById("getAppName").value;
  const email = document.getElementById("getEmail").value;
  const pin = document.getElementById("getPin").value;

  const response = await fetch("/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, pin }),
  });

  const result = await response.json();
  if (result.success) {
    document.getElementById(
      "retrievedPassword"
    ).textContent = `Contraseña: ${result.password}`;
  } else {
    alert(result.message);
  }
}
*/

async function savePassword() {
  const appName = document.getElementById("saveAppName").value;
  const email = document.getElementById("saveEmail").value;
  const password = document.getElementById("savePasswordInput").value;
  const pin = document.getElementById("savePin").value;

  const response = await fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, password, pin }),
  });

  const result = await response.json();
  alert(result.message);

  // Limpiar los campos
  document.getElementById("saveAppName").value = "";
  document.getElementById("saveEmail").value = "";
  document.getElementById("savePasswordInput").value = "";
  document.getElementById("savePin").value = "";
}

async function getPassword() {
  const appName = document.getElementById("getAppName").value;
  const email = document.getElementById("getEmail").value;
  const pin = document.getElementById("getPin").value;

  const response = await fetch("/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appName, email, pin }),
  });

  const result = await response.json();
  if (result.success) {
    document.getElementById(
      "retrievedPassword"
    ).textContent = `Contraseña: ${result.password}`;
  } else {
    alert(result.message);
  }

  // Limpiar los campos
  document.getElementById("getAppName").value = "";
  document.getElementById("getEmail").value = "";
  document.getElementById("getPin").value = "";
}

function handleEnter(event, nextElementId) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById(nextElementId).focus();
  }
}

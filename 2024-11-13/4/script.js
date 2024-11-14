async function displayUserName(userId) {
  const userInfoDiv = document.getElementById("user-info");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("User not found");
      } else {
        throw new Error("An error occurred while fetching the data");
      }
    }

    const userData = await response.json();
    userInfoDiv.textContent = `User Name: ${userData.name}`;
  } catch (error) {
    userInfoDiv.textContent = `Error: ${error.message}`;
  }
}

displayUserName(5);

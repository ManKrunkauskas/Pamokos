async function fetchUserData(userId) {
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
    console.log("User Name:", userData.name);
  } catch (error) {
    if (error.message === "User not found") {
      console.error("User not found");
    } else {
      console.error("Network error occurred");
    }
  }
}

fetchUserData(2);
fetchUserData(4);

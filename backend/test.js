const bcrypt = require("bcryptjs");

(async () => {
  const hashFromDb = "$2b$12$HVWpvIBeFgonH6dXNVV9VuWf0qKEkEaD0P1gyyDKuJP8Tovz.oLFq";

  console.log(
    await bcrypt.compare("Test@123", hashFromDb)
  );
})();

/*
<!DOCTYPE html>
<html>
<head>
  <style>
    .red-color { color: red; }
    .underline { text-decoration: underline; }
  </style>
</head>
<body>

  <div id="container">
    <div id="username">Original Name</div>
  </div>

  <script>
    const el = document.getElementById('username');

    console.log(el.id);  // Logs: "username"

    // Add custom attribute ---------------------------------------------
    el.setAttribute("aria", "123");

    // Modify text ----------------------------------------------------------
    el.innerText = 'John Doe';

    // Add multiple classes ----------------------------------------------------------
    el.classList.add("red-color", "underline");
    console.log(el.classList);  // Logs DOMTokenList

    // Remove a class -----------------------------------------------------------------------
    el.classList.remove("red-color");

    // Style directly -----------------------------------------------------------------------------
    el.style.textDecoration = "underline";
    el.style.color = "tomato";

    // Access and style parent ------------------------------------------------------------------------------
    console.log(el.parentElement);
    el.parentElement.style.background = "grey";

    // ❗ Now, if you want to remove the element: ----------------------------------------------------------------
    // Do it at the very end AFTER all changes
    el.remove();
  </script>

</body>
</html>

*/
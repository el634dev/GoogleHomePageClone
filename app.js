const searchInput = document.querySelector("#search.input");

search.addEventListener("keydown", function (event) {
  if (event.code === "Enter") search();
});

function search() {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q" +
    input +
    "&source=hp&ei=8ThOYc3HIrqi5NoP_8KuoAg&iflsig=ALs-wAMAAAAAYU5HAYo76bN2NeMM_MNneksr7qH3wGiw&oq" +
    input +
    "&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEMcBENEDEJMCMggILhCABBCxAzIOCC4QgAQQsQMQxwEQ0QMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCAgAEIAEELEDOhEILhCABBCxAxDHARCjAhCTAjoLCAAQgAQQsQMQgwE6CAguELEDEIMBOg4ILhCABBCxAxDHARCjAjoLCC4QgAQQxwEQrwE6EQguEIAEELEDEMcBEK8BEJMCOgsILhCxAxDHARCjAjoFCC4QgAQ6DgguEIAEELEDEMcBEK8BUM8GWMkeYIcjaABwAHgAgAG5AYgBhQSSAQM0LjGYAQCgAQE&sclient=gws-wiz&ved=0ahUKEwiNhJCjvZjzAhU6EVkFHX-hC4QQ4dUDCAk&uact=5";
}

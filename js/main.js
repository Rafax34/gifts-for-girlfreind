
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HERE A FEW LITTLE GIFTS FOR YOU, I hope they bring a little smile to your face. Keep learning, keep growing, and always remember how amazing you are. I LOVE YOU SO MUCH ❤️').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
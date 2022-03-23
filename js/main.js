$('document').ready( function () {
  $('.home-slider').slick({
    infinite: true,
    dots: true,
    arrows: false
  });
  $('.filter-block, .close-panel').click (function () {
    $('.slide-out-panel-right').toggleClass('show');
  });
  const file = document.querySelector('#file');
  file.addEventListener('change', (e) => {
    // Get the selected file
    const [file] = e.target.files;
    // Get the file name and size
    const { name: fileName, size } = file;
    // Convert size in bytes to kilo bytes
    const fileSize = (size / 1000).toFixed(2);
    // Set the text content
    const fileNameAndSize = `${fileName} - ${fileSize}KB`;
    const element = document.querySelector(".file-name");
    element.classList.add("file-active");
    element.textContent = fileNameAndSize;
  });
});
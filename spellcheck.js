$(() => {
  let dictionary;
  $.getJSON('dictionary.json', function(json) {
    dictionary = json.commonWords;
  });

  $('#check').click(() => {
    var t = $('#txt');
    const w = t.val().split(' ');
    const words = [];
    for (let x of w) {
      if (dictionary.indexOf(x.toLowerCase()) == -1) {
        words.push(`<span class="error"> ${x}</span> `);
      } else {
        words.push(x + ' ');
      }
    }
    //console.log(words);
    $('#para').html(words.join(' '));
  });

  $('#add-word').click(() => {
    dictionary.push($("#dict").val());
  });
});

function bookList() {
  var library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      readingStatus: true
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
    },
    {
      title: 'Mockingjay: The Final Book of the Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
    }];

  for (var i = 0; i < library.length; i++)
  {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";

    if (library[i].readingStatus) {
      document.write("Already read " + book + "<br> <br>");
    } else {
      document.write("You still need to read " + book + "<br> <br>");
    }
  }
}
bookList()

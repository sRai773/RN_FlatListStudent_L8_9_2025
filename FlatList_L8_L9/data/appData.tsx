type dataType = {
    id: string; // refer to the unique identifier
    title: string; //Text we will show in list 
  }

  //Using all caps because data array will not change during use
  const DATA: dataType[] = [
    {id: "1", title: "First item"},
    {id: "2", title: "Second item"},
    {id: "3", title: "Third item"},
    {id: "4", title: "Fourth item"},
  ];

  // when exporting more than one item
  // Dont use Default and use {} and put
  // all items you are exporting in {}
  export { DATA, dataType };


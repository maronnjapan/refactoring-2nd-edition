let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

// 使用側
spaceship.owner = defaultOwner;
defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };

const onwer = defaultOwner();
const owner2 = defaultOwner();
owner2.lastName = "Parsons";

let reqiredData = [
  {
    id: 1,
    name: "Radha",
    createdAt: "12345",
  },
  {
    id: 2,
    name: "Sudha",
    createdAt: "1122334455",
  },
];
// copy the console data
let oldobj = [
  {
    id: 2,
    attributes: {
      name: "SUNIL",
      createdAt: "2023-12-25T05:56:15.110Z",
      updatedAt: "2023-12-25T05:56:17.293Z",
      publishedAt: "2023-12-25T05:56:17.290Z",
    },
  },
  {
    id: 3,
    attributes: {
      name: "Rakesh",
      createdAt: "2023-12-25T06:16:03.891Z",
      updatedAt: "2023-12-25T06:16:03.891Z",
      publishedAt: "2023-12-25T06:16:03.888Z",
    },
  },
  {
    id: 4,
    attributes: {
      name: "Vishnu",
      createdAt: "2023-12-25T06:21:10.090Z",
      updatedAt: "2023-12-25T06:21:10.090Z",
      publishedAt: "2023-12-25T06:21:10.087Z",
    },
  },
  {
    id: 8,
    attributes: {
      name: "Goutam",
      createdAt: "2023-12-25T09:30:41.538Z",
      updatedAt: "2023-12-25T09:30:41.538Z",
      publishedAt: "2023-12-25T09:30:41.531Z",
    },
  },
  {
    id: 9,
    attributes: {
      name: "Goutam",
      createdAt: "2023-12-25T09:44:15.134Z",
      updatedAt: "2023-12-25T09:44:15.134Z",
      publishedAt: "2023-12-25T09:44:15.128Z",
    },
  },
  {
    id: 10,
    attributes: {
      name: "Tom",
      createdAt: "2023-12-25T10:26:19.104Z",
      updatedAt: "2023-12-25T10:26:21.161Z",
      publishedAt: "2023-12-25T10:26:21.155Z",
    },
  },
];
console.log("before the map function =>", oldobj);
let newObj = oldobj.map((cv, idx, arr) => {
  return {
    id: cv.id,
    name: cv.attributes.name,
    createdAt: cv.attributes.createdAt,
  };
});
console.log("after =>", newObj);

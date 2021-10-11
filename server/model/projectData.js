const products = [
  {
    name: "Page 1",
    id: "1",
    payload: [
      {
        name: "Component 1",
        data: [
          {
            id: "11",
            componentType: "input",
            value: "Current App 11"
          },
          {
            id: "12",
            componentType: "input",
            value: "Video 1"
          },
          {
            id: "13",
            componentType: "input",
            value: "Profile 1"
          }
        ]
      },
      {
        name: "Component 2",
        data: [
          {
            id: "141",
            componentType: "input",
            value: "Current App 2"
          },
          {
            id: "15",
            componentType: "input",
            value: "Video 2"
          },
          {
            id: "16",
            componentType: "input",
            value: "Profile 2"
          }
        ]
      }
    ]
  },
  {
    name: "Page 2",
    id: "2",
    payload: [
      {
        name: "Component 2:1",
        data: [
          {
            id: "21",
            componentType: "input",
            value: "Current App 2:2"
          },
          {
            id: "22",
            componentType: "input",
            value: "Video 2"
          },
          {
            id: "23",
            componentType: "input",
            value: "Profile 2"
          }
        ]
      },
      {
        name: "Component 2:2",
        data: [
          {
            id: "24",
            componentType: "input",
            value: "Current App"
          },
          {
            id: "25",
            componentType: "input",
            value: "Video"
          },
          {
            id: "26",
            componentType: "input",
            value: "Profile"
          }
        ]
      }
    ]
  }
];
const projectTemplate = {
  name: "New Component 1",
  data: [
    {
      id: "1",
      componentType: "input",
      value: "New Current App"
    },
    {
      id: "2",
      componentType: "input",
      value: "New Video"
    },
    {
      id: "3",
      componentType: "input",
      value: "New Profile"
    }
  ]
};

module.exports = { products, projectTemplate };

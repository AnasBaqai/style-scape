

function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Women",
    },
    {
      id: 5,
      title: "Mens",
    }
  ]
  return (
    <div className="categories-container">
      {
        categories.map((category) => {
          return (
            <div className="category-container">
            <div className="background-image"/>
              <div className="category-body-container">
                <h1>{category.title}</h1>
                <p>shop Now</p>
              </div>
            </div>

          )
        })
      }


    </div>
  );
}

export default App;

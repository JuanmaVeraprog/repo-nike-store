import "./MainFlyer.css";

const MainFlyer = () => {
  return (
    <main>
      <div>
        <img
          src="https://wwd.com/wp-content/uploads/2022/05/Nike-Women-Nike-Spark.jpg?w=1024"
          id="MainImg"
          alt="Nike Spark Flyer"
        />
      </div>
      <div className="containerShoeMain">
        <h2 className="titleMain">Nike Spark</h2>
        <img
          src="https://static.nike.com/a/images/t_default/93401e82-db12-4261-a372-4c47c25cbd59/spark-shoes-6g2K9m.png"
          id="MainShoeImg"
          alt="Nike Spark"
        />
        <div className="containerButtonPrice">
          <span id="priceMain">189,9 €</span>
          <button id="buttonPrice">View More</button>  
        </div>
      </div>
    </main>
  );
};

export default MainFlyer;

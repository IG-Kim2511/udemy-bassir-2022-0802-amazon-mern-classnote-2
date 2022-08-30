function Rating(props) {
    const { rating, numReviews } = props;
    return (
      <div className="rating">
      <h3>/components/Rating.js</h3>
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'    //1 star
                : rating >= 0.5
                ? 'fas fa-star-half-alt'         //0.5 star
                : 'far fa-star'           //empty star
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? 'fas fa-star'
                : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? 'fas fa-star' 
                : rating >= 2.5
                ? 'fas fa-star-half-alt' 
                : 'far fa-star'     
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? 'fas fa-star'
                : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? 'fas fa-star'
                : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span> {numReviews} reviews</span>
      </div>
    );
  }
  export default Rating;
  
import { Star } from '../Star/Star';

export const Stars = ({count}) => {
  if (count > 0 && count < 5) {
    return (
      <>
        <ul class="card-body-stars u-clearfix">      
          {Array.from({length: count}).map((_) => <Star />)}
        </ul>
      </>
    )
  }
}

Stars.defaultProps = {
  count : 0
}
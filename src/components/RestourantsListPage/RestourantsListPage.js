import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRestourants } from '../../store/actions';
import { selectRestourantsList, selectRestourantsListError, selectIsLoading } from '../../store/selectors';
import PropTypes from 'prop-types';
import './RestourantsListpage.scss';
import { RestourantCard } from '../RestourantCard/RestourantCard';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

class RestourantsListpage extends Component {
  componentDidMount() {
    const { loadRestourants } = this.props;
    loadRestourants()
  }

  render() {
    const { restourantsData, error, isLoading } = this.props;

    if (isLoading) {
      return <Loader />
    }

    if (error) {
      return <Error message={error}/>
    }

    return(
      <div className="restourant-list">
        {restourantsData.map(restourant => {
          const { uuid, title, heroImageUrl, categories, etaRange } = restourant;
          return (
            <RestourantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageURL={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          );
        })}
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    restourantsData: selectRestourantsList(state),
    error: selectRestourantsListError(state),
    isLoading: selectIsLoading(state),
  }
}

const mapDispatch2Props = {
  loadRestourants,
}

const Enhanced = connect(mapState2Props, mapDispatch2Props)(RestourantsListpage);

RestourantsListpage.propTypes = {
  restourantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestourants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
}

RestourantsListpage.defaultProps = {
  restourantsData: [],
  error: null,
  isLoading: false,
}

export { Enhanced as RestourantsListpage };

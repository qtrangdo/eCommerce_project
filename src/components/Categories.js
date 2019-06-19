import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { getCategories, getActiveCategoryId } from './helpers/selectors';

const Categories = ({ categories, activeCategoryId }) => {
  console.log(activeCategoryId)
  const renderCategory = (category, index) => (
    <Link 
      to={`/categories/${category.id}`}
      className="list-group-item"
      key={index}
    >{category.name}</Link>
  );
  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
})

Categories.propTypes = {
  categories: PropTypes.arrayOf(String).isRequired,
  activeCategoryId: PropTypes.string.isRequired
}

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories)

// export default connect(mapStateToProps, null)(Categories);
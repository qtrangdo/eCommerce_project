import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import R from 'ramda';
import classNames from 'classnames';
import { getCategories, getActiveCategoryId } from './helpers/selectors';

const Categories = ({ categories, activeCategoryId }) => {
  const renderCategory = (category, index) => {
    const getActiveState = R.propEq('id', activeCategoryId);
    const linkClass = classNames({
      "list-group-item": true,
      "active": getActiveState(category)
    })
    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >{category.name}</Link>
    );
  }

  const renderAllCategories = () => {
    const linkClass = classNames({
      "list-group-item": true,
      "active": R.isNil(activeCategoryId)
    });
    return (
      <Link to ='/' className={linkClass}>All</Link>
    )
  }

  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategories()}
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
  activeCategoryId: PropTypes.string
}

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories)

// export default connect(mapStateToProps, null)(Categories);
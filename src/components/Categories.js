import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from './helpers/selectors';

const Categories = ({ categories }) => {
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

const mapStateToProps = state => ({
  categories: getCategories(state)
})

Categories.propTypes = {
  categories: PropTypes.arrayOf(String).isRequired,
}

export default connect(mapStateToProps, null)(Categories);
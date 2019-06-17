import R from 'ramda';

const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
  console.log(state.phonesPage)
  const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
  console.log( "here", phones)
  return phones;
}
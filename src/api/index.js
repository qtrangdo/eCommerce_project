import R from 'ramda';
import phones from './mockPhones';
import categories from './mockCategories';

export const fetchPhonesApi = async () => {
  // return new Promise(resolve => {
  //   resolve(phones)
  // })
  const fetchResponse = await fetch('https://www.mocky.io/v2/5998a6120f00008d0106f0b4');
  let body = await fetchResponse.json();
  return body.phones;
}

export const loadMorePhonesApi = async ({offset}) => {
  return new Promise(resolve => {
    resolve(phones)
  })
}

export const fetchPhoneByIdApi = async (id) => {
  return new Promise((resolve, reject)=> {
    const phone = R.find(R.propEq("id", id), phones)
    resolve(phone)
  })
}

export const fetchCategoriesApi = async () => {
  return new Promise(resolve => {
    resolve(categories)
  })
}
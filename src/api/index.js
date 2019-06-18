import phones from './mockPhones'

export const fetchPhoneApi = async () => {
  return new Promise(resolve => {
    resolve(phones)
  })
}

export const loadMorePhonesApi = async ({offset}) => {
  return new Promise(resolve => {
    resolve(phones)
  })
}
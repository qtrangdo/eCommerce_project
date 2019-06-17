import phones from './mockPhones'

const fetchPhoneApi = async () => {
  return new Promise(resolve => {
    resolve(phones)
  })
}

export default  fetchPhoneApi;
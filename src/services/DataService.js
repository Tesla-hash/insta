import http from "../config/http-common";

//const qs = require('qs');

class DataService {
  get_user_orders(){
    return http.get('/allorders/BIP-USDT')
  }
  check_user(data) {
    return http.post('/login',JSON.stringify(data))
  }

}

export default new DataService();

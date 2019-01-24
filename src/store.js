import Vue from 'vue';
import Vuex from 'vuex';

// Vuexを有効化
Vue.use(Vuex);

export default new Vuex.Store({
  // state - データを保存するところ(読み取り専用)
  // store.state.キー名で呼び出せる
  state: {
    // この場合呼び出すときは、
    // this.$store.state.message;
    purchase: null
  },
  // mutation - stateを変更できる唯一の方法
  // イベントのようなもの
  // store.commit(関数名, ...)で実行する
  mutations: {
    // 第1引数はstateを参照、
    // 第2引数以降は呼び出し元で渡すことができる
    // この場合呼び出すときは、
    // this.$store.commit('sendMessage', message);
    sendData(state, purchase_info) {
      state.purchase = purchase_info.purchase
    }
  }
});
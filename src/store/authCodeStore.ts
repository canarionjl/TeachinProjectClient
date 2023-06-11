

import { defineStore } from 'pinia';
import { ref, Ref } from 'vue'

export const useAuthStore = defineStore('authCode', () => {

  const authCode: Ref = ref("0000")

  function setAuthCode(code: string) {

    if (code != "1111" && code != "2222" && code != "3333") {
      authCode.value = "0000"
    } else {
      authCode.value = code
    }
  }

  return { authCode, setAuthCode }

})




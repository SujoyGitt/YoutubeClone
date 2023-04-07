import axios from "axios"
export const request = axios.create({
  baseURL:" https://youtube.googleapis.com/youtube/v3/",
  params:{
    key:'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U'
    // key:'AIzaSyAIMxDr7u2dXWKXNzAyMFrt_BeGcTr_Jbg',
  }
})

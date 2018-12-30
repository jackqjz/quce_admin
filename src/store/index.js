import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import avaterImg from "@/assets/image/self.png"
import logoImg from "@/assets/image/logo.png"
import anlian1 from "@/assets/image/en/anlian/1.png"
import anlian2 from "@/assets/image/en/anlian/2.png"
import anlian3 from "@/assets/image/en/anlian/3.png"
import anlian4 from "@/assets/image/en/anlian/4.png"
import anlian5 from "@/assets/image/en/anlian/5.png"
import anlian6 from "@/assets/image/en/anlian/6.png"
import anlian7 from "@/assets/image/en/anlian/7.png"
import anlian8 from "@/assets/image/en/anlian/8.png"
import anlian9 from "@/assets/image/en/anlian/9.png"
import anlian10 from "@/assets/image/en/anlian/10.png"
import anlian11 from "@/assets/image/en/anlian/11.png"
import anlian12 from "@/assets/image/en/anlian/12.png"
import anlian13 from "@/assets/image/en/anlian/13.png"
import anlian14 from "@/assets/image/en/anlian/14.png"
import anlian15 from "@/assets/image/en/anlian/15.png"
import anlian16 from "@/assets/image/en/anlian/16.png"
import anlian17 from "@/assets/image/en/anlian/17.png"
import anlian18 from "@/assets/image/en/anlian/18.png"
import anlian19 from "@/assets/image/en/anlian/19.png"
import anlian20 from "@/assets/image/en/anlian/20.png"
import anlian21 from "@/assets/image/en/anlian/21.png"
import anlian22 from "@/assets/image/en/anlian/22.png"
import anlian23 from "@/assets/image/en/anlian/23.png"

import zynao1 from "@/assets/image/en/left_right_brain/1.png"
import zynao2 from "@/assets/image/en/left_right_brain/2.png"
import zynao3 from "@/assets/image/en/left_right_brain/3.png"
import zynao4 from "@/assets/image/en/left_right_brain/4.png"
import zynao5 from "@/assets/image/en/left_right_brain/5.png"
import zynao6 from "@/assets/image/en/left_right_brain/6.png"
import zynao7 from "@/assets/image/en/left_right_brain/7.png"
import zynao8 from "@/assets/image/en/left_right_brain/8.png"
import zynao9 from "@/assets/image/en/left_right_brain/9.png"
import zynao10 from "@/assets/image/en/left_right_brain/10.png"
import zynao11 from "@/assets/image/en/left_right_brain/11.png"
import zynao12 from "@/assets/image/en/left_right_brain/12.png"

import NewYear1 from "@/assets/image/en/2019/1.png"
import NewYear2 from "@/assets/image/en/2019/2.png"
import NewYear3 from "@/assets/image/en/2019/3.png"
import NewYear4 from "@/assets/image/en/2019/4.png"
import NewYear5 from "@/assets/image/en/2019/5.png"
import NewYear6 from "@/assets/image/en/2019/6.png"
import NewYear7 from "@/assets/image/en/2019/7.png"
import NewYear8 from "@/assets/image/en/2019/8.png"
import NewYear9 from "@/assets/image/en/2019/9.png"
import NewYear10 from "@/assets/image/en/2019/10.png"
import NewYear11 from "@/assets/image/en/2019/11.png"
import NewYear12 from "@/assets/image/en/2019/12.png"

import Soul1 from "@/assets/image/en/soul/1.png"
import Soul2 from "@/assets/image/en/soul/2.png"
import Soul3 from "@/assets/image/en/soul/3.png"
import Soul4 from "@/assets/image/en/soul/4.png"
import Soul5 from "@/assets/image/en/soul/5.png"
import Soul6 from "@/assets/image/en/soul/6.png"
import Soul7 from "@/assets/image/en/soul/7.png"
import Soul8 from "@/assets/image/en/soul/8.png"
import Soul9 from "@/assets/image/en/soul/9.png"
import Soul10 from "@/assets/image/en/soul/10.png"
import Soul11 from "@/assets/image/en/soul/11.png"
import Soul12 from "@/assets/image/en/soul/12.png"


import Fr1 from "@/assets/image/en/fr/1.png"
import Fr2 from "@/assets/image/en/fr/2.png"
import Fr3 from "@/assets/image/en/fr/3.png"
import Fr4 from "@/assets/image/en/fr/4.png"
import Fr5 from "@/assets/image/en/fr/5.png"
import Fr6 from "@/assets/image/en/fr/6.png"
import Fr7 from "@/assets/image/en/fr/7.png"
import Fr8 from "@/assets/image/en/fr/8.png"
import Fr9 from "@/assets/image/en/fr/9.png"
import Fr10 from "@/assets/image/en/fr/10.png"
import Fr11 from "@/assets/image/en/fr/11.png"
import Fr12 from "@/assets/image/en/fr/12.png"
import Fr13 from "@/assets/image/en/fr/13.png"
import Fr14 from "@/assets/image/en/fr/14.png"

import Cat1 from "@/assets/image/en/cat/1.png"
import Cat2 from "@/assets/image/en/cat/2.png"
import Cat3 from "@/assets/image/en/cat/3.png"
import Cat4 from "@/assets/image/en/cat/4.png"
import Cat5 from "@/assets/image/en/cat/5.png"
import Cat6 from "@/assets/image/en/cat/6.png"
import Cat7 from "@/assets/image/en/cat/7.png"
import Cat8 from "@/assets/image/en/cat/8.png"
import Cat9 from "@/assets/image/en/cat/9.png"
import Cat10 from "@/assets/image/en/cat/10.png"
import Cat11 from "@/assets/image/en/cat/11.png"
import Cat12 from "@/assets/image/en/cat/12.png"
import Cat13 from "@/assets/image/en/cat/13.png"
import Cat14 from "@/assets/image/en/cat/14.png"
import Cat15 from "@/assets/image/en/cat/15.png"
import Cat16 from "@/assets/image/en/cat/16.png"

const en = {
   "anlian": {
       DrawType:"anlian",
       Desc: "Secret love means love that has not been said. When you feel that no one cares, no one loves, maybe someone is secretly love you behind your back! How many people are crushing you recently? Come and test it~",
       Tip: "Please enter your name",
       Title: "How many people secretly in love with you?",
       Result: [
          anlian1,anlian2,anlian3,anlian4,anlian5,anlian6,anlian7,anlian8,anlian9,anlian10,
          anlian11,anlian12,anlian13,anlian14,anlian15,anlian16,anlian17,anlian18,anlian19,anlian20,
          anlian21,anlian22,anlian23
       ]
    },
    "left_right_brain":{
       DrawType:"left_right_brain",
       Desc:"The human brain is divided into the left brain and right brain, and different brain regions perform different duties. Do you Want to know you are a left-brainer or a right-brainer, or a person with a balanced left and right brain? Just test it~",
       Tip:"Please enter your name", 
       Title:"A report on your left and right brain",
       Result:[zynao1,zynao2,zynao3,zynao4,zynao5,zynao6,zynao7,zynao8,zynao9,zynao10,zynao11,zynao12]
    },
    "2019":{
       DrawType:"2019",
       Desc:"New year is comming. Do you want to konw What will happen in your 2019? Just test it~",
       Tip:"Please enter your name", 
       Title:"What will happen to you 2019 ?",
       Result:[NewYear1,NewYear2,NewYear3,NewYear4,NewYear5,NewYear6,NewYear7,NewYear8,NewYear9,NewYear10,NewYear11,NewYear12,]
    },
    "soul":{
       DrawType:"soul",
       Desc:"A good skin bag is all alike, and an interesting soul is one in a thousand. The soul is a hidden force, and the interesting soul components are equally interesting and diverse. What element is your soul made up of? Hurry up to test it~",
       Tip:"Please enter your name", 
       Title:"Your soul composition",
       Result:[Soul1,Soul2,Soul3,Soul4,Soul5,Soul6,Soul7,Soul8,Soul9,Soul10,Soul11,Soul12,]
    },
    "fr":{
       DrawType:"fr",
       Desc:"Do you well know your friends feature. Come and test your facebook friends feature analysis chat~",
       Tip:"Please enter your name",
       Title:"How much do you known about your facebook of friends",
       Result:[Fr1,Fr2,Fr3,Fr4,Fr5,Fr6,Fr7,Fr8,Fr9,Fr10,Fr11,Fr12,Fr13,Fr14]
    },
    "cat":{
       DrawType:"cat",
       Desc:"Welcome to your own hidden and personality world. Come and test what kind of cat are you? Try to see the world via a cat's perspective, maybe you will find a different you",
       Tip:"Please enter your name", 
       Title:"what's your personality of cat",
       Result:[Cat1,Cat2,Cat3,Cat4,Cat5,Cat6,Cat7,Cat8,Cat9,Cat10,Cat11,Cat12,Cat13,Cat14,Cat15,Cat16]
    },
 }
 

const store = new Vuex.Store({
   state: {
      desc: "混蛋的你",
      lang: en,
      User: {
         avater: avaterImg,
         logo:logoImg,
         playerName:"system",
      },
      CurrentShareDom:null,             //  用于保存当前分享的dom
   },
   mutations: {
      changePlayerName(state,newPlayerName) {
           state.User.playerName = newPlayerName
      }, 
      changeShareDom(state,newShareDom){
         state.CurrentShareDom = newShareDom
      },
      changeUserAvater(state,newUserAvater){
         state.User.avater = newUserAvater
      },
      setLang(state, langType) {
         // 变更状态
         switch (langType) {
            case "zh":
               state.lang = zh
               break;
            case "en":
               state.lang = en
               break;
         }

      }
   }
})
export default store


